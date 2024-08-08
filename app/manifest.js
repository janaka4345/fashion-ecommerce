
export default function manifest() {
  return {
    name: "Fashion Bug ",
    short_name: "Fashion Bug App",
    description: "Online clothing store ",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
