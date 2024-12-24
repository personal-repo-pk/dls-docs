// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { generateDocusaurusOpenAPIConfig } from "./scripts/generate-docusaurus-openapi-config";

const config: Config = {
  title: "ComproDLS | Documentation",
  url: "https://personal-repo-pk.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-dls.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "personal-repo-pk", // Usually your GitHub org/user name.
  projectName: "dls-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.ts"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/compro_technologies_logo.avif",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            label: "APIs",
            position: "left",
            to: "/apis/intro",
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Compro Technologies. Built with Docusaurus.`,
      },
      prism: {
        prism: {
          additionalLanguages: [
            "ruby",
            "csharp",
            "php",
            "java",
            "powershell",
            "json",
            "bash",
          ],
        },
        languageTabs: [
          {
            highlight: "python",
            language: "python",
            logoClass: "python",
          },
          {
            highlight: "bash",
            language: "curl",
            logoClass: "bash",
          },
          {
            highlight: "csharp",
            language: "csharp",
            logoClass: "csharp",
          },
          {
            highlight: "go",
            language: "go",
            logoClass: "go",
          },
          {
            highlight: "javascript",
            language: "nodejs",
            logoClass: "nodejs",
          },
          {
            highlight: "ruby",
            language: "ruby",
            logoClass: "ruby",
          },
          {
            highlight: "php",
            language: "php",
            logoClass: "php",
          },
          {
            highlight: "java",
            language: "java",
            logoClass: "java",
            variant: "unirest",
          },
          {
            highlight: "powershell",
            language: "powershell",
            logoClass: "powershell",
          },
        ],
      },
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: generateDocusaurusOpenAPIConfig(),
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}
