 // @ts-check
const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MARIABOSCH',
  tagline: 'Maria Bosch Portfolio',
  favicon: 'img/favicon.ico',

  trailingSlash: true,

  future: {
    v4: true,
  },

  url: 'https://mariaboschh.github.io',
  baseUrl: '/Maria-Bosch/',

  organizationName: 'mariaboschh',
  projectName: 'Maria-Bosch',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
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
  },
};

module.exports = config;