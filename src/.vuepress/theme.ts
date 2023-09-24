import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, jaNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar, jaSidebar } from "./sidebar/index.js";
import { componentsPlugin } from "vuepress-plugin-components";

export default hopeTheme({
  hostname: "https://anime-team.takagi3.top",

  author: {
    name: "木绘社",
    url: "https://anime-team.takagi3.top",
  },

  favicon: "https://pic.mufeng086.com/i/2023/09/22/125oyrg.png",

  iconAssets: "fontawesome-with-brands",

  logo: "https://pic.mufeng086.com/i/2023/09/22/125oyrg.png",

  docsDir: "src",

  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "<a href=\"https://vuepress.vuejs.org/\"><img src=\"https://img.shields.io/badge/VuePress-2.0.0-brightgreen?style=flat&logo=vue.js\" alt=\"VuePress\"></a> <a href=\"https://github.com/vuepress-theme-hope/vuepress-theme-hope\"><img src=\"https://img.shields.io/badge/Theme-Hope-3eaf7c?style=flat\" alt=\"Theme\"></a> <a href=\"https://vercel.com/\"><img src=\"https://img.shields.io/badge/Vercel-gray?style=flat&logo=vercel\" alt=\"Vercel\"></a>",

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

      footer: "<a href=\"https://vuepress.vuejs.org/\"><img src=\"https://img.shields.io/badge/VuePress-2.0.0-brightgreen?style=flat&logo=vue.js\" alt=\"VuePress\"></a> <a href=\"https://github.com/vuepress-theme-hope/vuepress-theme-hope\"><img src=\"https://img.shields.io/badge/Theme-Hope-3eaf7c?style=flat\" alt=\"Theme\"></a> <a href=\"https://vercel.com/\"><img src=\"https://img.shields.io/badge/Vercel-gray?style=flat&logo=vercel\" alt=\"Vercel\"></a>",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/ja/": {
      // navbar
      navbar: jaNavbar,

      // sidebar
      sidebar: jaSidebar,

      footer: "<a href=\"https://vuepress.vuejs.org/\"><img src=\"https://img.shields.io/badge/VuePress-2.0.0-brightgreen?style=flat&logo=vue.js\" alt=\"VuePress\"></a> <a href=\"https://github.com/vuepress-theme-hope/vuepress-theme-hope\"><img src=\"https://img.shields.io/badge/Theme-Hope-3eaf7c?style=flat\" alt=\"Theme\"></a> <a href=\"https://vercel.com/\"><img src=\"https://img.shields.io/badge/Vercel-gray?style=flat&logo=vercel\" alt=\"Vercel\"></a>",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "GitHubでこのページを編集する",
      },
    },
  },

  plugins: {
    

    components: {
      // 你想使用的组件
      components: [
        "YouTube",
        "BiliBili",
      ],

      rootComponents: {
      notice: [
        {
          path: "/",
          title: "Trilingual | 三言語サポート",
          content: "switch ↓↑ スイッチ",
          actions: [
            {
              text: "English",
              link: "/en/",
              type: "primary",
            },
            {
              text: "日本語",
              link: "/ja/",
              type: "primary",
            },
          ],
          fullscreen: false,
          showOnce: true
        },

      ],
    },
  },

    comment: {
      provider: "Waline",
      comment: false,
      serverURL: "https://comment2.takagi3.top",
      dark: "auto",
      meta: ["nick","mail"],
      emoji: [
        '//unpkg.com/@waline/emojis@1.2.0/bmoji',
        '//unpkg.com/@waline/emojis@1.2.0/qq',
        '//unpkg.com/@waline/emojis@1.2.0/bilibili',
      ],
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,
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
     pwa: {
       favicon: "/favicon.ico",
       cacheHTML: true,
       cachePic: true,
       appendBase: true,
       apple: {
         icon: "/assets/icon/apple-icon-152.png",
         statusBarColor: "black",
       },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
       manifest: {
         icons: [
           {
             src: "/assets/icon/chrome-mask-512.png",
             sizes: "512x512",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-mask-192.png",
             sizes: "192x192",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-512.png",
             sizes: "512x512",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-192.png",
             sizes: "192x192",
             type: "image/png",
           },
         ],
       },
     },
  },
});
