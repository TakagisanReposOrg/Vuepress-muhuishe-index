import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "木绘社",
      description: "由高木同学粉丝组成的同人动画制作团队",
    },
    "/en/": {
      lang: "en-US",
      title: "Muhuishe (木绘社)",
      description: "A doujin animation production team composed of fans of Takagi-san.",
    },
    "/ja/": {
      lang: "ja",
      title: "木絵社",
      description: "高木さんのファンで構成される同人アニメ制作チーム",
    },
  },

  head: [
    // ...
    ['meta', { name: 'baidu-site-verification', content: 'codeva-yDSciMGKcU' }],
    
    ['script', { async: true, src: 'https://analytics.takagi3.top/script.js', 'data-website-id': '366d5294-3da6-4867-b7c4-64876330ffe7' }],
      
    // 导入相应链接
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],


  theme,

  // Enable it with pwa
   shouldPrefetch: false,
});
