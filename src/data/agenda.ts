import type { LocalizedText } from './types';

export interface ResearchAgendaPillar {
  number: string;
  label: LocalizedText;
  title: LocalizedText;
  detail: LocalizedText;
}

export interface ResearchAgendaRegime {
  title: LocalizedText;
  detail: LocalizedText;
  core?: boolean;
}

export interface ResearchAgenda {
  thesis: {
    label: LocalizedText;
    statement: LocalizedText;
  };
  pillars: ResearchAgendaPillar[];
  foundation: {
    title: LocalizedText;
    detail: LocalizedText;
  };
  regimes: {
    closed: ResearchAgendaRegime;
    open: ResearchAgendaRegime;
  };
  validation: {
    title: LocalizedText;
    detail: LocalizedText;
  };
}

export const researchAgenda: ResearchAgenda = {
  thesis: {
    label: {
      en: 'ARCHITECTURE–POST-TRAINING CO-DESIGN',
      zh: '面向自主智能的架构与后训练协同创新',
    },
    statement: {
      en: 'Shifting complex reasoning &amp; decision-making from <strong class="font-semibold text-ink">External Scaffolding</strong> ⟶ <strong class="font-semibold text-ink">Model-Intrinsic Capabilities</strong> for native understanding, representation, long-horizon planning, active exploration, and continual self-improvement.',
      zh: '推动复杂决策与推理能力从<strong class="font-semibold text-ink">推理期外部编排</strong> ⟶ <strong class="font-semibold text-ink">模型内生能力</strong>演进，使基础模型在复杂动态环境中具备原生的理解、表征、长程规划、自主探索与持续自进化能力。',
    },
  },
  pillars: [
    {
      number: '01',
      label: { en: 'Pillar I', zh: '支柱一' },
      title: {
        en: 'Agentic Post-Training & Exploration Policies',
        zh: '后训练新范式',
      },
      detail: {
        en: 'Moving beyond static datasets and sparse outcome-reward RLVR toward <span class="blueprint-keyword" data-regime="open">exploration-aware policy optimization</span> in multi-turn interactive environments, <span class="blueprint-keyword" data-regime="closed">long-horizon credit assignment</span>, <span class="blueprint-keyword" data-regime="closed">learnable test-time search</span>, and <span class="blueprint-keyword" data-regime="open">auditable verification &amp; feedback mechanisms</span>.',
        zh: '突破静态数据与稀疏结果奖励的常规 RLVR 局限，研究多轮交互环境下的<span class="blueprint-keyword" data-regime="open">探索感知策略优化</span>、<span class="blueprint-keyword" data-regime="closed">长程信用分配</span>、<span class="blueprint-keyword" data-regime="closed">可学习测试时搜索</span>，以及面向长程任务的<span class="blueprint-keyword" data-regime="open">可审计验证与反馈机制</span>。',
      },
    },
    {
      number: '02',
      label: { en: 'Pillar II', zh: '支柱二' },
      title: {
        en: 'Intrinsic Reasoning & Memory Architectures',
        zh: '内生架构创新',
      },
      detail: {
        en: 'Overcoming efficiency and expressivity bottlenecks of purely explicit autoregressive rollout via <span class="blueprint-keyword" data-regime="closed">latent-space reasoning</span>, <span class="blueprint-keyword" data-regime="closed">recurrent depth computation</span>, <span class="blueprint-keyword" data-regime="open">non-embodied world modeling</span>, and <span class="blueprint-keyword" data-regime="open">multi-timescale continual memory</span> architectures.',
        zh: '突破纯显式自回归展开的效率与表达瓶颈，探索<span class="blueprint-keyword" data-regime="closed">隐空间推理</span>、<span class="blueprint-keyword" data-regime="closed">循环深度计算</span>、<span class="blueprint-keyword" data-regime="open">非具身世界模型</span>及<span class="blueprint-keyword" data-regime="open">多时间尺度记忆架构</span>，将搜索、规划与持续适应机制内化至模型结构中。',
      },
    },
  ],
  foundation: {
    title: {
      en: 'Theoretical Grounding & Interpretability',
      zh: '方法论交叉与机制审计',
    },
    detail: {
      en: 'Integrating representation learning, continual learning, and statistical decision theory / uncertainty calibration (conformal prediction, active exploration, optimal stopping) with mechanistic and representational interpretability to diagnose and reliably constrain internal reasoning trajectories.',
      zh: '融合表征学习、持续学习与统计决策/不确定性校准（共形推断、主动探索与最优停止）等经典理论，并结合机制与表征可解释性，对模型内部推理轨迹与探索行为进行诊断与可信约束。',
    },
  },
  regimes: {
    closed: {
      title: { en: 'Closed Verifiable Regimes', zh: '封闭 / 可验证问题' },
      detail: {
        en: 'Compute- &amp; sample-efficiency optimization, latent-space compression, and calibrated stopping.',
        zh: '聚焦样本与计算效率优化、隐空间压缩及校准停止。',
      },
    },
    open: {
      title: { en: 'Open-Ended Dynamic Environments', zh: '开放 / 动态环境' },
      detail: {
        en: 'Auditable joint evaluation, exploration breadth–depth trade-offs, novel solution discovery, and cross-task continual self-improvement.',
        zh: '聚焦可审计的联合评测构建、探索广度与深度权衡、更优解发现及跨任务持续自进化。',
      },
      core: true,
    },
  },
  validation: {
    title: { en: 'Dual-Track Validation', zh: '双轨验证' },
    detail: {
      en: 'Domain-general benchmarks (long-horizon reasoning, deep information retrieval, code exploration) paired with <strong class="font-medium text-ink">AI for Science</strong> (autonomous scientific discovery) as a high-value open-ended testbed.',
      zh: '保持方法论的领域无关性，以通用长程推理、深度信息检索与代码探索为基准，同时将 <strong class="font-medium text-ink">AI for Science（自主科学发现）</strong> 作为高价值开放测试场。',
    },
  },
};
