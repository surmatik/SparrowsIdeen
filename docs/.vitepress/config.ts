import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sparrows",
  description: "Tweet & Shark",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/sparrows.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/sparrows.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/sparrows.png"}],
  ],
  themeConfig: {
    logo: '/assets/cevi.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Spiel Ideen', link: '/spiel-ideen/Allgemein' },
      { text: 'Programm Ideen', link: '/Programm-Ideen/Allgemein' },
      { text: 'Theorie', link: '/Theorie' }
    ],

    sidebar: [
      {
        text: 'Spiel Ideen',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Allgemein', link: '/Spiel-Ideen/Allgemein.md' },
          { text: 'Fangis', link: '/Spiel-Ideen/Fangis.md' },
          { text: 'Fussball', link: '/Spiel-Ideen/Fussball.md' },
          { text: 'Games IRL', link: '/Spiel-Ideen/Games-IRL.md' },
          { text: 'Hosensackspiele', link: '/Spiel-Ideen/Hosensackspiele.md' },
          { text: 'Rätsel', link: '/Spiel-Ideen/Raetsel.md' },
          { text: 'Stafetten', link: '/Spiel-Ideen/Stafetten.md' },
          { text: 'Völks', link: '/Spiel-Ideen/Voelks.md' }
        ]
      },
      {
        text: 'Programm Ideen',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Allgemein', link: '/Programm-Ideen/Allgemein.md' },
          { text: 'Basteln', link: '/Programm-Ideen/Basteln.md' },
          { text: 'Bauen', link: '/Programm-Ideen/Bauen.md' },
          { text: 'Kochen und Backen', link: '/Programm-Ideen/Kochen-und-Backen.md' },
          { text: 'Lernen', link: '/Programm-Ideen/Lernen.md' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/surmatik/SparrowsIdeen/docs/:path',
      text: 'bearbeiten'
    },

    footer: {
      copyright: 'Copyright © 2023 Tweet & Shark'
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/cevi.wetzikon/' }
    ]
  }
})
