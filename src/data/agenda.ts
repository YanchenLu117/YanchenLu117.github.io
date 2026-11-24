import type { LocalizedText } from './types';

export interface ResearchAgendaItem {
  number: string;
  title: LocalizedText;
  detail: LocalizedText;
}

export interface ResearchAgenda {
  coreQuestion: LocalizedText;
  items: ResearchAgendaItem[];
}

export const researchAgenda: ResearchAgenda = {
  coreQuestion: {
    en: 'How can we build foundation models and autonomous systems that learn, reason, plan, act, and continually self-improve through environmental feedback?',
    zh: '如何构建能够学习、推理、规划、行动，并通过环境反馈持续提升自身能力的智能系统与基础模型？',
  },
  items: [
    {
      number: '01',
      title: { en: 'Capability Layer', zh: '核心能力层' },
      detail: {
        en: 'Moving beyond superficial agent workflows toward core model capabilities: post-training, reinforcement learning, long-horizon reasoning, environment/world modeling, search, and self-improvement, grounded in representation and generative modeling.',
        zh: '从智能体应用层深入至模型能力层：聚焦后训练、强化学习、长程推理、环境/世界建模、搜索与自我改进，并继承表征学习与生成式模型的方法论基础。',
      },
    },
    {
      number: '02',
      title: { en: 'Validation Domain', zh: '高价值验证场景' },
      detail: {
        en: 'Leveraging <strong class="font-medium text-ink">AI for Science</strong>—specifically AI Scientists, autonomous scientific discovery, and closed-loop research automation—as a rigorous testbed for general autonomous intelligence.',
        zh: '以 <strong class="font-medium text-ink">AI for Science</strong>（AI Scientist、自主科学发现与闭环科研自动化）作为高价值应用场景与验证试金石，反哺通用自主智能研究。',
      },
    },
  ],
};
