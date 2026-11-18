import type { LocalizedText } from './types';

export interface NewsItem {
  /** Displayed verbatim, e.g. "2026.10". Keep items sorted newest-first. */
  date: string;
  content: LocalizedText;
}

export const news: NewsItem[] = [
  {
    date: '2026.10',
    content: {
      en: 'Submitted a manuscript to <strong>WWW 2027</strong>.',
      zh: '向 <strong>WWW 2027</strong> 投稿论文一篇。',
    },
  },
  {
    date: '2026.09',
    content: {
      en: 'Submitted a manuscript to <strong>ICLR 2027</strong>.',
      zh: '向 <strong>ICLR 2027</strong> 投稿论文一篇。',
    },
  },
  {
    date: '2026.07',
    content: {
      en: "Joined <strong>Prof. Stan Z. Li</strong>'s lab (CAIRI) at <strong>Westlake University</strong> and <strong>Dr. Zelin Zang</strong>'s group as a research intern.",
      zh: '加入<strong>西湖大学</strong>李子青教授团队（CAIRI）及<strong>钱塘高等研究院</strong>臧泽林博士课题组担任科研实习生。',
    },
  },
  {
    date: '2026.02',
    content: {
      en: 'Joined the <strong>Algorithms and Logic Group</strong> at <strong>UESTC</strong> as a research intern.',
      zh: '加入<strong>电子科技大学</strong>算法与逻辑团队担任科研实习生。',
    },
  },
];
