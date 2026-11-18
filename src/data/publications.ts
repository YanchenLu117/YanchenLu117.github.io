export interface PublicationLinks {
  pdf?: string;
  code?: string;
  project?: string;
  demo?: string;
}

export interface Publication {
  id: string;
  title: string;
  /** Author names may end with `*` (equal contribution) and/or `†` (corresponding author). */
  authors: string[];
  venue: string;
  year: number;
  highlight?: string;
  selected: boolean;
  tldr: string;
  abstract: string;
  tags: string[];
  teaser: string;
  teaserHover?: string;
  links?: PublicationLinks;
  bibtex: string;
}

export const publications: Publication[] = [];
