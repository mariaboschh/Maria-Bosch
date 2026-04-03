// @ts-check
const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MARIABOSCH',
  tagline: 'Maria Bosch Portfolio',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Desactivamos docs
        blog: false, // Desactivamos blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    
    navbar: {
      title: 'MARIABOSCH',
      hideOnScroll: false,
      items: [
        { label: 'FOTO', to: '/foto', position: 'left' },
        { label: 'VIDEO', to: '/video', position: 'right' },
      ],
    },

footer: {
  style: 'light',
  links: [
    {
      title: 'Contacte',
      items: [
        {
          label: 'Correu: mbalsius@gmail.com',
          href: 'mailto:mbalsius@gmail.com',
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/mariaboschh/',
          target: '_blank',
        },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Maria Bosch`,
},
  }, // <-- Cierre de themeConfig
}; // <-- Cierre de config

module.exports = config; // <-- Debe ir fuera del objeto config