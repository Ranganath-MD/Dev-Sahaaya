import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

// Get the source directory, 
// Here it is resources folder
const resourceDir = join(process.cwd(), "resources");

export function getResourcesSlug() {
  return fs.readdirSync(resourceDir);
}

// Get the resource by slug
export function getResourcesBySlug(fileSlug: string) {
  const slug = fileSlug.replace(/\.mdx$/, "");
  const fullPath = join(resourceDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const item: any = { data, content };
  return item;
}

// Read all resources from the resource folder
export function getAllResources() {
  const slugs = getResourcesSlug();
  const resources = slugs
    .map((slug) => getResourcesBySlug(slug)).sort((a, b) => a.data.key - b.data.key)
  return resources;
}
