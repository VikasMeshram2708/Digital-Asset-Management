import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/contact", "/privacy", "/about"],
      disallow: ["/assets", "/api/:path*", "/api/auth/:path*"],
    },
    sitemap: "https://dam-ruby.vercel.app/sitemap.xml",
  };
}
