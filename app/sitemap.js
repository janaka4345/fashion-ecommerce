import { MetadataRoute } from "next";

export default function sitemap() {
  return [
    {
      url: "https://fassion-ecommerce.janakakariyawasam.xyz",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
