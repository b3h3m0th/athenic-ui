const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: " ",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#a50f00" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/AthenicAustria/athenic-ui",
    editLinks: false,
    docsDir: "/docs",
    editLinkText: "",
    lastUpdated: false,
    logo:
      "https://raw.githubusercontent.com/b3h3m0th/athenic-ui/main/artwork/logo/logo.png",
    searchPlaceholder: "Search for sth very important...",
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Documentation",
        link: "/documentation/"
      },
      {
        text: "Guide",
        link: "/guide/"
      }
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "using-vue"]
        }
      ],
      "/documentation/": [
        {
          title: "Documentation",
          collapsable: false,
          children: ["", "introduction", "installation"]
        }
      ]
    },
    displayAllHeaders: false
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
};
