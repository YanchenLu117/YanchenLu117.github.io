/** Prefix a public asset path with Astro's BASE_URL, so sub-path deployments don't 404. */
export function withBase(path: string): string {
  if (!path || /^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('//') || path.startsWith('#')) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
