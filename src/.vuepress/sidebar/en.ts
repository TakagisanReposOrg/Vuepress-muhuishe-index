import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "Home",
      icon: "home",
      link: "/en/",
    },
    {
      text: "Info",
      prefix: "about/",
      icon: "book",
      link: "about/",
      children: [
        "intro",
   ],
  },
  {
    text: "Contact",
    icon: "rss",
    link: "/en/about/contact/",
  },
],
});
