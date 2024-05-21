import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

import { gitPlugin } from "@vuepress/plugin-git";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { noticePlugin } from "@vuepress/plugin-notice";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { watermarkPlugin } from "@vuepress/plugin-watermark";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  lang: "en-gb",
  title: "Handbook96",
  description: "Because even managers get it wrong sometimes.",
  head: [["link", { rel: "icon", href: "/logo96.png" }]],

  theme: defaultTheme({
    hostname: "https://handbook.area96.digital",
    colorMode: "dark",
    colorModeSwitch: true,
    externalLinkIcon: true,
    home: "/",
    navbar: ["/", "/introduction"],
    logo: "/logo96.png",
    logoDark: "/logo96.png",
    logoAlt: "Area96 Digital logo",
    repo: "https://github.com/zuedev/area96.digital/tree/main/sites/handbook.area96.digital",
    sidebar: "auto",
    sidebarDepth: 2,
    editLink: true,
    docsRepo: "https://github.com/zuedev/area96.digital",
    docsBranch: "main",
    docsDir: "sites/handbook.area96.digital",
    editLinkPattern: ":repo/edit/:branch/:path",
    lastUpdated: true,
    contributors: true,
  }),

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  plugins: [
    gitPlugin({}),
    backToTopPlugin(),
    copyCodePlugin({}),
    mediumZoomPlugin({}),
    noticePlugin({}),
    nprogressPlugin(),
    watermarkPlugin({
      enabled: false,
      watermarkOptions: {
        contentType: "image",
        image: "/logo96.png",
        imageWidth: 64,
        imageHeight: 64,
        globalAlpha: 0.05,
      },
    }),
    searchPlugin({}),
  ],
});
