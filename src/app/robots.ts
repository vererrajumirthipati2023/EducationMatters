import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/assessment/"],
      },
    ],
    sitemap: "https://theeducationmatters.in/sitemap.xml",
  };
}