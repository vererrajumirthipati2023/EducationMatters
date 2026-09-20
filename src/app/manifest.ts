import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Education Matters",
    short_name: "Education Matters",
    description: "Free interactive cognitive and aptitude assessment simulations.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F7FB",
    theme_color: "#0F2B5C",
    icons: [
      {
        src: "/education-matters-logo.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
