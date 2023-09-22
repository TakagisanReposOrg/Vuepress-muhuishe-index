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

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
