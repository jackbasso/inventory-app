export function generateSlug(title: string): string {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const cleanedSlug = slug.replace(/[^\w\-]/g, "");

  return cleanedSlug;
}
