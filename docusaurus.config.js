// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CORTEST",
  tagline: "An application for testing epileptic seizures",
  favicon: "img/logo_cortest.webp",

  // Set the production url of your site here
  url: "https://NolanBeaujault.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/cortest-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NolanBeaujault", // Usually your GitHub org/user name.
  projectName: "cortest-docs", // Usually your repo name.

  onBrokenLinks: "warn",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "CORTEST",
        logo: {
          alt: "My Site Logo",
          src: "img/logo_cortest.webp",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "theAppSidebar",
            position: "left",
            label: "The App",
          },
          {
            type: "docSidebar",
            sidebarId: "technicalSidebar",
            position: "left",
            label: "Technical Doc",
          },
          { to: "/team", label: "Our Team", position: "left" },
          {
            href: "https://gitlab.com/a.baudry/cortest",
            position: "right",
            className: "gitlab-icon",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Documentation",
            items: [
              { label: "Getting Started", to: "/docs/intro" },
              { label: "Frontend", to: "/docs/frontend/overview" },
              { label: "Backend", to: "/docs/backend/intro" },
            ],
          },
          {
            title: "Project Links",
            items: [
              {
                label: "GitHub - cortest-api",
                href: "https://github.com/NolanBeaujault/cortest-api",
              },
              {
                label: "GitHub - cortest-docs",
                href: "https://github.com/NolanBeaujault/cortest-docs",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "About the Project",
                href: "https://gitlab.com/a.baudry/cortest",
              },
              {
                label: "Contact",
                to: "/contact",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Cortest · Built by the CORTEST team.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
