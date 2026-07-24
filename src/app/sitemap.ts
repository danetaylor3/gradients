import type { MetadataRoute } from "next";

const baseUrl = "https://github.com/danetaylor3/gradients";

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date().toISOString();

	return [
		{
			url: baseUrl,
			lastModified,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/docs`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/changelog`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.6,
		},
	];
}
