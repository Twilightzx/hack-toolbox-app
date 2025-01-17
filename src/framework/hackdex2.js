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
/* exported LIGHTBOX_OVERRIDES */
/* eslint indent: ["error", 2] */

// Sadly, we have to duplicate a large part of the app.yaml in here.
var LIGHTBOX_OVERRIDES = {
  2: {
    type: 'Layout.LightboxDev',
    styles: ['Layout-LightboxDev-Stonehenge'],
    properties: {
      expand: true,
      'margin-left': 60,
      'margin-top': 28,
      'back-button-text': 'Stonehenge diagrams',
    },
    slots: {
      content: {
        type: 'Layout.Overlay',
        styles: ['Content-Stonehenge'],
        slots: {
          content: {
            type: 'Layout.Box',
            properties: {
              halign: 'fill',
              valign: 'fill',
            },
            styles: ['Content-Background'],
          },
          overlays: [
            {
              type: 'Decoration.ThemeableImage',
              properties: {
                'image-uri': 'resource:///app/assets/images/stonehengeDiagrams.png',
                valign: 'start',
                halign: 'start',
                'margin-left': 78,
                'margin-top': 230,
              },
            },
            {
              type: 'Decoration.ThemeableImage',
              properties: {
                'image-uri': 'resource:///app/assets/images/stonehengeNotebook.png',
                valign: 'start',
                halign: 'start',
                'margin-left': 815,
                'margin-top': 204,
              },
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                'margin-left': 523,
                'margin-top': 322,
                valign: 'start',
                label: `\
The outer ring was made up of
30 stones to represent an
average of 30 days in a month`,
              },
              styles: ['Content-text', 'Content-text-ring'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                'margin-left': 520,
                'margin-top': 820,
                valign: 'start',
                label: 'Stonehenge may have been\nused as a compass',
              },
              styles: ['Content-text', 'Content-text-compass'],
            },
            {
              type: 'ContentGroup.HackdexText',
              properties: {
                'margin-left': 1096,
                'margin-top': 351,
                valign: 'start',
                text: `\
- hmm, looks like Leviathan had a thing for Stonehenge.
Sometimes he used symbols related to Stonehenge
in his legendary hacks. Another coincidence with Saniel!

- Saniel talks about Stonehenge so frequently, it's
as if he thinks of Stonehenge as his own
personal watch!

- I've noticed that sometimes Saniel arranges the
items on his desk in the same pattern of concentric
circles as the stones in this diagram. Knowing him,
he probably really can tell time that way!
`,
              },
              styles: [
                'Content-text',
                'Content-text-paragraph',
                'Content-Stonehenge-paragraph-first',
              ],
            },
          ],
        },
      },
    },
  },
  3: {
    type: 'Layout.LightboxDev',
    styles: ['Layout-LightboxDev-Whale'],
    properties: {
      expand: true,
      'margin-left': 586,
      'margin-top': 34,
      'back-button-text': 'Clipping of a whale song',
    },
    slots: {
      content: {
        type: 'Layout.Overlay',
        styles: ['Content-Whale'],
        slots: {
          content: {
            type: 'Layout.Box',
            properties: {
              halign: 'fill',
              valign: 'fill',
            },
            styles: ['Content-Background'],
          },
          overlays: [
            {
              type: 'Decoration.ThemeableImage',
              properties: {
                'image-uri': 'resource:///app/assets/images/whaleSongSession.png',
                valign: 'start',
                halign: 'start',
                'margin-left': 920,
                'margin-top': 185,
              },
            },
            {
              type: 'Decoration.ThemeableImage',
              properties: {
                'image-uri': 'resource:///app/assets/images/whaleDoodle.png',
                valign: 'start',
                halign: 'start',
                'margin-left': 1298,
                'margin-top': 590,
              },
            },
            {
              type: 'Decoration.ThemeableImage',
              properties: {
                'image-uri': 'resource:///app/assets/images/whaleNotebook.png',
                valign: 'start',
                halign: 'start',
                'margin-top': 208,
              },
              styles: ['Notebook-Whale'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                'margin-left': 981,
                'margin-top': 583,
                valign: 'start',
                label: 'Each of these ticks is a unit\nwhich is equivalent to a note',
              },
              styles: ['Content-text', 'Content-text-ticks'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                'margin-left': 1078,
                'margin-top': 778,
                valign: 'start',
                label: `\
Whales kind of sing for
the same reason humans do!
They want to show their
friends how they sing and
to share their song`,
              },
              styles: ['Content-text', 'Content-text-friends'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                'margin-left': 1590,
                'margin-top': 653,
                valign: 'start',
                label: "Units make up a phrase\nwhich are repeated to\nmake a whale's song",
              },
              styles: ['Content-text', 'Content-text-phrase'],
            },
            {
              type: 'ContentGroup.HackdexText',
              properties: {
                'margin-left': 234,
                'margin-top': 310,
                valign: 'start',
                text: `\
- Leviathan: the great whale. The whale is a very
important symbol for Saniel.

- We've all heard about Saniel's keen interest in whales,
especially in regard to his famous sleeping habits.

- When Saniel is deep in concentration, I swear I can
faintly hear whale songs. I don't know how he does that
on land! I know that when he's in that zone, he always
comes up with new solutions!

- Saniel also often delivers random whale facts: the
other day, he told me that whales learn a new song
every few years by hearing the songs of other
populations. So interesting.
`,
              },
              styles: [
                'Content-text',
                'Content-text-paragraph',
                'Content-Whale-paragraph-first',
              ],
            },
          ],
        },
      },
    },
  },
  4: {
    type: 'Layout.LightboxDev',
    styles: ['Layout-LightboxDev-Franklin'],
    properties: {
      expand: true,
      'margin-left': 1249,
      'margin-top': 174,
      'back-button-text': 'Benjamin Franklin\'s daily schedule',
    },
    slots: {
      content: {
        type: 'Layout.Overlay',
        styles: ['Content-Franklin'],
        slots: {
          content: {
            type: 'Layout.Box',
            properties: {
              halign: 'fill',
              valign: 'fill',
            },
            styles: ['Content-Background'],
          },
          overlays: [
            {
              type: 'Decoration.ThemeableImage',
              properties: {
                'image-uri': 'resource:///app/assets/images/benjaminFranklinDoodle.png',
                valign: 'start',
                halign: 'start',
                'margin-left': 973,
                'margin-top': 353,
              },
            },
            {
              type: 'Decoration.ThemeableImage',
              properties: {
                'image-uri': 'resource:///app/assets/images/benjaminFranklinNotebook.png',
                valign: 'start',
                halign: 'start',
                'margin-top': 172,
              },
              styles: ['Notebook-Franklin'],
            },
            {
              type: 'Decoration.ThemeableImage',
              properties: {
                'image-uri': 'resource:///app/assets/images/benjaminFranklinSchedule.png',
                valign: 'start',
                halign: 'start',
                'margin-left': 1220,
                'margin-top': 150,
              },
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                valign: 'start',
                label: 'Wake up at 5am!!!',
              },
              styles: ['Content-text', 'Content-text-wake'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                valign: 'start',
                label: `\
Ben Franklin was known to say
that he wasn't perfect and often
broke his strict schedule for leisure!`,
              },
              styles: ['Content-text', 'Content-text-perfect'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                valign: 'start',
                label: "Rise, wash, contrive day's\nbusiness; and breakfast",
              },
              styles: ['Content-text', 'Content-text-rise'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                valign: 'start',
                label: 'Work',
              },
              styles: ['Content-text', 'Content-text-work'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                valign: 'start',
                label: 'Read and dine',
              },
              styles: ['Content-text', 'Content-text-read'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                valign: 'start',
                label: 'work',
              },
              styles: ['Content-text', 'Content-text-work-last'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                valign: 'start',
                label: 'Put things in their\nplace; examine the day',
              },
              styles: ['Content-text', 'Content-text-examine'],
            },
            {
              type: 'ContentGroup.EncryptText',
              properties: {
                valign: 'start',
                label: 'sleep',
              },
              styles: ['Content-text', 'Content-text-sleep'],
            },
            {
              type: 'ContentGroup.HackdexText',
              properties: {
                'margin-left': 266,
                'margin-top': 283,
                valign: 'start',
                text: `\
- Leviathan? this scrap from the original Leviathan
file matches the handwritten scrap on the wall
above Saniel's Desk.

- I asked him what the numbers meant and he said it
was Ben Franklin's daily schedule! I'm not surprised
because Saniel is fascinated with perfecting
how he uses his time.

- He said he's inspired by Franklin's methodical approach,
but he keeps his own schedule very open. "Data never
sleeps," he always says.

- Franklin began his day with this question, "what good
shall i do this day?" I have heard Saniel say those exact
words so many times.
`,
              },
              styles: [
                'Content-text',
                'Content-text-paragraph',
                'Content-Franklin-paragraph-first',
              ],
            },
          ],
        },
      },
    },
  },
};
