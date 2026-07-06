import relativeLinks from "./_config/relative-links.js";
import { HtmlBasePlugin } from "@11ty/eleventy";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
	eleventyConfig.setTemplateFormats(["html", "liquid"]);
	eleventyConfig.setInputDirectory("src");
	eleventyConfig.addPassthroughCopy({"static": "."});
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPlugin(relativeLinks);
};