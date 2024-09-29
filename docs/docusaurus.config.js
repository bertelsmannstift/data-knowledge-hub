const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Data Knowledge Hub for Monitoring Online Discourse',
  tagline: "The Data Knowledge Hub for Monitoring Online Discourse (Data Knowledge Hub) is an initiative that aims to provide a central resource for researchers, social scientists, data scientists, journalists, practitioners, and policy makers interested in monitoring social media and online discourse more broadly.",
  url: 'https://www.data-knowledge-hub.com',
  baseUrl: '/data-knowledge-hub/',
  customFields: {
    staticDirectories: ['static'], 
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dkh_logo.png',
  organizationName: 'data-knowledge-hub', // Usually your GitHub org/user name.
  projectName: 'data-knowledge-hub', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Data Knowledge Hub',
        logo: {
          alt: 'Data Knowledge Hub Logo',
          src: 'img/dkh_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'background-rationale',
            to: '/docs/background-rationale',
            position: 'left',
            label: 'Explore',
          },
          {to: '/docs/contribute/06_01_how-to-contribute', label: 'Contribute', position: 'left'},
          {
            href: 'https://upgradedemocracy.de/en/',
            label: 'About the project',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Hub',
            items: [
              {
                label: 'Knowledge',
                to: '/docs/background-rationale',
              },
              {
                label: 'Contribute',
                to: '/docs/contribute/06_01_how-to-contribute',
              },
              { label: 'Imprint', href: 'https://upgradedemocracy.de/en/imprint/' },
            ],
          },
          {
            title: 'Upgrade Democracy',
            items: [
              {
                label: 'Website',
                href: 'https://upgradedemocracy.de/en/',
              },
              {
                label: 'Mastodon',
                href: 'https://mastodon.social/@TeamUpDem',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/upgrade-democracy/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contributors',
                to: '/docs/contribute/06_02_community',
              },
            ],
          },
        ],
        copyright: `Data Knowledge Hub for Monitoring Online Discourse  © ${new Date().getFullYear()} - The project is supported by the Bertelsmann Stiftung`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['r', 'python', 'bash', 'json']
      },
    }),
});