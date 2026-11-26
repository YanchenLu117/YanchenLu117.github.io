import type { LocalizedText } from './types';

export type IconName = 'mail' | 'phone' | 'scholar' | 'github' | 'twitter' | 'cv';

export interface SocialLink {
  label: LocalizedText;
  href: string;
  icon: IconName;
  /** Optional explicit value shown in the pill, e.g. an email address. */
  value?: string;
}

export interface ExperienceItem {
  period: LocalizedText;
  role: LocalizedText;
  organization: LocalizedText;
  organizationUrl?: string;
  detail?: LocalizedText;
  kind: 'education' | 'experience';
  monogram: string;
}

export interface Profile {
  name: string;
  nameZh: string;
  role: LocalizedText;
  affiliation: LocalizedText;
  /** Empty when the affiliation should not be linked. */
  affiliationUrl: string;
  subtitle: LocalizedText;
  email: string;
  phone: string;
  location: LocalizedText;
  avatar: string;
  /** Each entry is a paragraph and may contain simple inline HTML. */
  bio: LocalizedText[];
  researchInterests: LocalizedText[];
  links: SocialLink[];
  experience: ExperienceItem[];
}

export const profile: Profile = {
  name: 'Yanchen Lu',
  nameZh: '卢彦辰',
  role: { en: 'Undergraduate Student', zh: '本科生' },
  affiliation: { en: 'SWUFE & UESTC', zh: '西南财经大学 & 电子科技大学' },
  affiliationUrl: '',
  subtitle: {
    en: 'Undergraduate Student · SWUFE & UESTC',
    zh: '西南财经大学 & 电子科技大学 联合学士学位在读',
  },
  email: 'yanchen_lu117@163.com',
  phone: '+86 189 6936 3999',
  location: { en: 'Chengdu / Hangzhou, China', zh: '中国 成都 / 杭州' },
  avatar: '/avatar.jpg',
  bio: [
    {
      en: 'I am an undergraduate student pursuing a joint bachelor\'s degree in Finance and Computer Science & Technology at <a class="bio-link" href="https://www.swufe.edu.cn" target="_blank" rel="noopener noreferrer">Southwestern University of Finance and Economics (SWUFE)</a> and the <a class="bio-link" href="https://www.uestc.edu.cn" target="_blank" rel="noopener noreferrer">University of Electronic Science and Technology of China (UESTC)</a>, and currently a research intern at the <a class="bio-link" href="https://www.westlake.edu.cn" target="_blank" rel="noopener noreferrer">AI Research and Innovation Laboratory (CAIRI), Westlake University</a>, working with Prof. Stan Z. Li and Dr. Zelin Zang (Tsientang Institute for Advanced Study). My research centers on <strong class="font-semibold">Autonomous Intelligence</strong> and <strong class="font-semibold">Foundation Models</strong>, advancing model-intrinsic capabilities for understanding, long-horizon planning, active exploration, and continual self-improvement.',
      zh: '我是<a class="bio-link" href="https://www.swufe.edu.cn" target="_blank" rel="noopener noreferrer">西南财经大学</a>与<a class="bio-link" href="https://www.uestc.edu.cn" target="_blank" rel="noopener noreferrer">电子科技大学</a>联合培养的本科生，主修金融学与计算机科学与技术双学位项目，目前在<a class="bio-link" href="https://www.westlake.edu.cn" target="_blank" rel="noopener noreferrer">西湖大学人工智能研究与创新实验室（CAIRI）</a>担任科研实习生，师从李子青（Stan Z. Li）教授与钱塘高等研究院臧泽林（Zelin Zang）博士。我的研究主线聚焦于<strong class="font-semibold">面向自主智能的基础模型架构与后训练协同创新</strong>，致力于推动复杂决策与推理能力从外部编排向模型内生能力演进。',
    },
    {
      en: 'Moving beyond inference-time scaffolding, I investigate the co-design of next-generation agentic post-training paradigms—including exploration-aware policy optimization, learnable test-time search, and auditable verification—and intrinsic model architectures such as latent-space reasoning, non-embodied world modeling, and continual memory. Grounded in representation learning, continual learning, and statistical decision theory, and complemented by mechanistic interpretability, my work aims to achieve compute- and sample-efficient problem solving in closed verifiable regimes while enabling auditable, self-improving discovery in open-ended environments, evaluated across general long-horizon tasks and <strong class="font-semibold">AI for Science</strong>. I welcome research collaborations and academic discussions—feel free to reach out via email.',
      zh: '具体而言，我协同探索新一代智能体后训练范式（探索感知策略优化、长程信用分配、可学习测试时搜索与可审计验证）与内生模型架构（隐空间推理、循环深度计算、非具身世界模型与多时间尺度记忆），并以表征学习、持续学习、统计决策理论及机制可解释性作为方法论底座，面向通用长程任务与 <strong class="font-semibold">AI for Science</strong>（自主科学发现）开展研究。非常期待与各界同仁开展学术交流与科研合作，欢迎随时通过邮件联系。',
    },
  ],
  researchInterests: [
    { en: 'Autonomous Intelligence', zh: '自主智能' },
    { en: 'Architecture–Post-Training Co-Design', zh: '架构与后训练协同创新' },
    { en: 'Agentic RL & Search', zh: '智能体后训练与搜索' },
    { en: 'Latent Reasoning', zh: '隐空间推理' },
    { en: 'AI for Science', zh: 'AI for Science' },
  ],
  links: [
    {
      label: { en: 'Email', zh: '邮箱' },
      href: 'mailto:yanchen_lu117@163.com',
      icon: 'mail',
      value: 'yanchen_lu117@163.com',
    },
    {
      label: { en: 'Phone', zh: '电话' },
      href: 'tel:+8618969363999',
      icon: 'phone',
      value: '+86 189 6936 3999',
    },
  ],
  experience: [
    {
      period: { en: '2025 – 2029 (Expected)', zh: '2025 – 2029（预计）' },
      role: {
        en: "Joint Bachelor's Degree in Finance and Computer Science & Technology",
        zh: '金融学与计算机科学与技术 联合学士学位',
      },
      organization: {
        en: 'Southwestern University of Finance and Economics (SWUFE) & University of Electronic Science and Technology of China (UESTC)',
        zh: '西南财经大学 & 电子科技大学',
      },
      detail: {
        en: 'Interdisciplinary honors curriculum integrating quantitative finance, algorithms, and artificial intelligence.',
        zh: '跨学科荣誉培养项目，融合量化金融、算法理论与人工智能核心课程。',
      },
      kind: 'education',
      monogram: 'SU',
    },
    {
      period: { en: '2026.07 – Present', zh: '2026.07 – 至今' },
      role: { en: 'Research Intern', zh: '科研实习生' },
      organization: {
        en: 'Westlake University (CAIRI) & Tsientang Institute for Advanced Study (TIAS)',
        zh: '西湖大学（CAIRI）& 钱塘高等研究院（TIAS）',
      },
      organizationUrl: 'https://www.westlake.edu.cn',
      detail: {
        en: 'Working with Prof. Stan Z. Li and Dr. Zelin Zang on architecture–post-training co-design for autonomous intelligence, representation learning, and AI for Science.',
        zh: '在李子青教授与臧泽林博士指导下，开展面向自主智能的模型架构与后训练协同创新、表征学习及 AI for Science 方向的研究。',
      },
      kind: 'experience',
      monogram: 'WL',
    },
    {
      period: { en: '2026.02 – 2026.09', zh: '2026.02 – 2026.09' },
      role: { en: 'Research Intern', zh: '科研实习生' },
      organization: {
        en: 'Southwestern University of Finance and Economics (SWUFE)',
        zh: '西南财经大学',
      },
      organizationUrl: 'https://www.swufe.edu.cn',
      detail: {
        en: 'Advised by Prof. Xiao Hu, conducting research on quantum computing and quantum machine learning in collaboration with the Center for Quantum Software, Tsinghua University.',
        zh: '在胡晓教授指导下，与清华大学量子软件研究中心合作开展量子计算与量子机器学习方向的研究。',
      },
      kind: 'experience',
      monogram: 'SW',
    },
    {
      period: { en: '2026.02 – 2026.06', zh: '2026.02 – 2026.06' },
      role: { en: 'Research Intern', zh: '科研实习生' },
      organization: {
        en: 'Algorithms and Logic Group, UESTC',
        zh: '电子科技大学 算法与逻辑团队',
      },
      organizationUrl: 'https://www.uestc.edu.cn',
      detail: {
        en: 'Conducted foundational research on algorithmic theory, formal logic, and computational complexity.',
        zh: '参与算法理论、形式逻辑与计算复杂性相关的基础研究。',
      },
      kind: 'experience',
      monogram: 'UE',
    },
  ],
};
