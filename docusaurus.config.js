// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Terraform TH',
  tagline: 'คู่มือ Terraform สำหรับคนไทย',
  url: 'https://terraform-th.thadaw.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mildronize', // Usually your GitHub org/user name.
  projectName: 'terraform-th', // Usually your repo name.


  // https://www.flaticon.com/packs/kitty-avatars-3
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en'],
  },

  plugins: [
    // [
    //   '@docusaurus/plugin-google-gtag',
    //   {
    //     trackingID: 'G-HWER9WPFZM',
    //     anonymizeIP: true,
    //   },
    // ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mildronize/terraform-th/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mildronize/terraform-th/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
        
      
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Terraform TH',
        logo: {
          alt: 'Terraform Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Book',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://thadaw.com/about/',
            label: 'Author',
            position: 'right',
          },
          {
            href: 'https://github.com/mildronize/terraform-th',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Book',
                to: '/docs/about-the-book',
              },
              {
                label: 'Author\'s Site',
                to: 'https://thadaw.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '.NET Thailand Facebook Group',
                href: 'https://www.facebook.com/groups/1046502542102269',
              },
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mildronize/terraform-th',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Terraform TH, Inc. Built with Docusaurus, <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),
};

module.exports = config;
