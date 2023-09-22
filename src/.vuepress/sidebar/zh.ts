import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "商品展示",
      icon: "box",
      prefix: "show/",
      link: "show/",
      children: [
        "abba-1",
        "abba-2",
        "abba-3",
        "abba-4",
        "abba-5",
        "Manga-End-commemoration-Cards",
      ],
    },
    {
      text: "关于/联络",
      icon: "info",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
  ],
});
