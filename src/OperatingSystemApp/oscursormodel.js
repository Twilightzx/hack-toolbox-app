/*
 * Copyright © 2020 Endless OS Foundation LLC.
 *
 * This file is part of hack-toolbox-app
 * (see https://github.com/endlessm/hack-toolbox-app).
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
/* exported OSCursorModel, VALID_CURSORS */

const {Gio, GLib, GObject} = imports.gi;
const {OSModel} = imports.OperatingSystemApp.osmodel;

const _propFlags = GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT;

var VALID_CURSORS = [
    'cursor-default',
    'cursor-hack',
    'cursor-cheese',
    'cursor-ice-cream',
    'cursor-poop',
    'cursor-magic-wand',
    'cursor-disco',
    'cursor-rainbow-unicorn',
    'cursor-glitchy',
    'cursor-daemon',
];

function double_equals(a, b) {
    return Math.abs(a - b) < 1e-90;
}

var OSCursorModel = GObject.registerClass({
    Properties: {
        theme: GObject.ParamSpec.string(
            'theme', 'Cursor Theme', 'cursor-default',
            _propFlags, null),
        size: GObject.ParamSpec.int(
            'size', 'Cursor Size', 'Supported sizes are 16 24 32 48 64 96 128 192 256',
            _propFlags, 16, 256, 24),
        speed: GObject.ParamSpec.double(
            'speed', 'Cursor Speed', '',
            _propFlags, -1.0, 1.0, 0.0),
    },
}, class OSCursorModel extends OSModel {
    _init() {
        this._theme = null;

        super._init();

        this._copiedCursors = ['cursor-hack'];

        this.bindHackProp('CursorSize', 'size', 'i');
        this.bindHackProp('CursorTheme', 'theme');
        this.bindHackProp('MouseSpeed', 'speed');
    }

    reset() {
        super.reset();

        /* The default cursor goes up to 96px and we need to support sizes to
         * up to 256px
         */
        this.theme = 'cursor-default';
        this.size = 24;
        this.speed = 0;
    }

    get theme() {
        return this._theme;
    }

    set theme(cursor_theme) {
        if (!cursor_theme || this._theme === cursor_theme)
            return;

        this._theme = VALID_CURSORS.indexOf(cursor_theme) < 0 ? 'cursor-default' : cursor_theme;

        /* Do not copy the cursor if it was alredy copied once */
        if (this._copiedCursors.indexOf(this._theme) >= 0) {
            this.notify('theme');
            return;
        }

        /* Build cursor resource path */
        var cursor = Gio.File.new_for_uri(
            `resource:///com/hack_computer/HackToolbox/OperatingSystemApp/cursors/${
                this._theme}.xmc`);

        /* Build user custom cursors directory path
         *
         * FIXME: libXcursor does not follow icont theme specs as it only
         * searches for user cursors in $HOME/.icons
         */
        var theme_dir = Gio.File.new_for_path(GLib.build_filenamev(
            [GLib.get_home_dir(), '.icons', this._theme]));
        var cursors_dir = theme_dir.get_child('cursors');
        var cursor_file = cursors_dir.get_child('left_ptr');

        /* Ensure cursor theme directory exists */
        try {
            cursors_dir.make_directory_with_parents(null);
        } catch (e) {
            if (!e.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.EXISTS))
                logError(e);
        }

        /* Copy cursor to ~/.icons/${cursor_theme}/cursors/left_ptr */
        cursor.copy_async(cursor_file,
            Gio.FileCopyFlags.OVERWRITE | Gio.FileCopyFlags.TARGET_DEFAULT_PERMS,
            GLib.PRIORITY_DEFAULT,
            null,
            null,
            (source, res) => {
                try {
                    source.copy_finish(res);
                    this._copiedCursors.push(this._theme);
                    this.notify('theme');
                } catch (e) {
                    logError(e);
                }
            });

        /* Install an index.theme file specifying we inherit from Adwaita,
         * the default theme.
         */
        var keyfile = new GLib.KeyFile();
        keyfile.set_string('Icon Theme', 'Inherits', 'Adwaita');
        try {
            keyfile.save_to_file(theme_dir.get_child('index.theme').get_path());
        } catch (e) {
            logError(e, 'Failed to save index.theme');
        }
    }
});
