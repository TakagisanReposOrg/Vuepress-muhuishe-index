import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "Info",
      prefix: "about/",
      link: "about/",
      children: [
        "intro",
   ],
  },
],
});
