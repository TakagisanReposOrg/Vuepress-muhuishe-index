import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://anime-team.takagi3.top",

  author: {
    name: "木绘社",
    url: "https://anime-team.takagi3.top",
  },

  favicon: "https://pic.mufeng086.com/i/2023/09/22/inc70i.webp",

  iconAssets: "fontawesome-with-brands",

  logo: "https://pic.mufeng086.com/i/2023/09/22/inc70i.webp",

  repo: "https://github.com/MuFeng086/Vuepress-muhuishe-index",

  docsDir: "src",

  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "<a href=\"https://vuepress.vuejs.org/\"><img src=\"https://img.shields.io/badge/VuePress-2.0.0-brightgreen?style=flat&logo=vue.js\" alt=\"VuePress\"></a> <a href=\"https://github.com/vuepress-theme-hope/vuepress-theme-hope\"><img src=\"https://img.shields.io/badge/Theme-Hope-3eaf7c?style=flat\" alt=\"Theme\"></a> <a href=\"https://vercel.com/\"><img src=\"https://img.shields.io/badge/Vercel-gray?style=flat&logo=vercel\" alt=\"Vercel\"></a><br><b>Site Maker: <a href=\"https://twitter.com/MuFeng086\">MuFeng086</a></b>",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "<a href=\"https://vuepress.vuejs.org/\"><img src=\"https://img.shields.io/badge/VuePress-2.0.0-brightgreen?style=flat&logo=vue.js\" alt=\"VuePress\"></a> <a href=\"https://github.com/vuepress-theme-hope/vuepress-theme-hope\"><img src=\"https://img.shields.io/badge/Theme-Hope-3eaf7c?style=flat\" alt=\"Theme\"></a> <a href=\"https://vercel.com/\"><img src=\"https://img.shields.io/badge/Vercel-gray?style=flat&logo=vercel\" alt=\"Vercel\"></a><br><b>ウェブサイト製作者: <a href=\"https://twitter.com/MuFeng086\">MuFeng086</a></b>",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/ja/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "<a href=\"https://vuepress.vuejs.org/\"><img src=\"https://img.shields.io/badge/VuePress-2.0.0-brightgreen?style=flat&logo=vue.js\" alt=\"VuePress\"></a> <a href=\"https://github.com/vuepress-theme-hope/vuepress-theme-hope\"><img src=\"https://img.shields.io/badge/Theme-Hope-3eaf7c?style=flat\" alt=\"Theme\"></a> <a href=\"https://vercel.com/\"><img src=\"https://img.shields.io/badge/Vercel-gray?style=flat&logo=vercel\" alt=\"Vercel\"></a><br><b>网页图标: ©S.Y.S/TKG 2022</b>",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "GitHubでこのページを編集する",
      },
    },
  },

  plugins: {
    // You should generate and use your own comment service

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
