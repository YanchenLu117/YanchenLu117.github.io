import type { LocalizedText } from './types';

export const ui = {
  nav: {
    about: { en: 'About', zh: '关于' },
    news: { en: 'News', zh: '动态' },
    publications: { en: 'Publications', zh: '论文' },
    notes: { en: 'Notes', zh: '笔记' },
    experience: { en: 'Experience', zh: '经历' },
  },
  sections: {
    research: { en: 'Research', zh: '研究方向' },
    agenda: { en: 'Research Agenda', zh: '研究主线' },
    news: { en: 'News', zh: '动态' },
    recentUpdates: { en: 'Recent updates', zh: '近期更新' },
    publications: { en: 'Publications', zh: '论文' },
    experience: { en: 'Experience', zh: '经历' },
    education: { en: 'Education', zh: '教育背景' },
    researchIndustry: { en: 'Research & industry', zh: '科研经历' },
  },
  agenda: {
    coreQuestion: { en: 'Core question', zh: '核心问题' },
  },
  publications: {
    selected: { en: 'Selected', zh: '精选' },
    all: { en: 'All', zh: '全部' },
    topics: { en: 'Topics', zh: '主题' },
    year: { en: 'Year', zh: '年份' },
    noResults: { en: 'No publications match these filters.', zh: '没有符合筛选条件的论文。' },
    resetFilters: { en: 'Reset filters', zh: '重置筛选' },
  },
  notes: {
    writing: { en: 'Writing', zh: '写作' },
    title: { en: 'Notes', zh: '笔记' },
    intro: {
      en: 'Occasional essays on representation learning, generative models, and AI for Science — written to be useful, not exhaustive.',
      zh: '偶尔记录关于表征学习、生成式模型与 AI for Science 的研究笔记——力求有用，不求完备。',
    },
    comingSoon: {
      en: 'Notes are coming soon. Research notes and essays will appear here.',
      zh: '笔记即将上线，研究随笔与技术笔记会陆续发布在这里。',
    },
    allNotes: { en: 'All notes', zh: '全部笔记' },
    backAllNotes: { en: 'Back to all notes', zh: '返回全部笔记' },
  },
} satisfies Record<string, Record<string, LocalizedText>>;
