/** Convert a content entry id (which may include an extension) to a URL slug. */
export function noteSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/i, '');
}
