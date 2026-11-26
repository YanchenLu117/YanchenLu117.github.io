# Academic Homepage

一个现代、简洁、数据驱动的个人学术主页，融合 Jon Barron / Tri Dao / Distill / Lilian Weng 等学术主页的版式与交互基因，使用 **Astro + Tailwind CSS + TypeScript** 构建，纯静态输出，可直接部署到 GitHub Pages。

- 单栏居中版式（最大宽度 880px），Newsreader + Noto Serif SC + Inter + JetBrains Mono
- 纸墨质感配色：象牙纸、墨色正文、牛津深红强调；深色模式为暖调黑曜石
- Hero 左侧为简介与联系方式，右侧为原生 Canvas 隐空间搜索轨迹徽记（无第三方图形库）
- Research Agenda 排印蓝图：核心命题 + 双支柱协同 + 方法论基座 + 双轨验证，桌面双栏、移动端堆叠
- `Print / PDF CV` 一键调用浏览器打印，输出 2 页 LaTeX 风格学术简介与研究陈述
- 浅色 / 深色模式，跟随系统并记忆手动选择
- 中英双语切换（EN / 中），无刷新、持久化，与暗黑模式状态相互独立
- 联系方式直接展示邮箱与电话文字链接，邮箱右侧一键复制，并显示 `Copied` / `已复制`
- 所有内容与视图分离，日常维护只改 `src/data/` 下的数据文件
- Publications 支持 `Selected / All`、Topic 筛选、Year 下拉过滤，以及平滑的空状态提示；列表为空时整个区块与导航入口会自动隐藏
- Teaser 固定 16:10，悬停切换对比图，点击可放大；统一 `border-hairline` 0.5px 细边框
- Abstract 与 BibTeX 采用**原地手风琴抽屉**，不遮挡页面；BibTeX 复制后使用强调色对勾反馈
- 作者名自动加粗本人，支持 `*` 共同一作与 `†` 通讯作者；奖项使用纯文字强调
- Notes 数字花园：MDX + KaTeX + Shiki，支持 Tufte 边栏旁注与 Seedling / Budding / Evergreen 生长阶段
- 学术 SEO：`citation_*`、OpenGraph、Twitter Card、Schema.org Person JSON-LD
- 打印样式：`Cmd/Ctrl + P` 输出干净的纯白学术简历与完整论文清单
- GitHub Actions 自动构建并部署到 GitHub Pages

> ℹ️ 论文列表当前为空（ICLR 2027 / WWW 2027 双盲审稿期），首页与导航中的 Publications 会自动隐藏；论文录用或挂出 arXiv 后，往 `publications.ts` 加入对象即可恢复。`public/avatar.jpg` 仅用于社交预览 / Apple touch icon，首页不显示头像，Hero 右侧改为隐空间搜索轨迹 Canvas 徽记。

---

## 快速开始

需要 Node.js 22.23 或更高版本（推荐 24 LTS）。

```bash
npm install
npm run dev       # 本地开发：http://localhost:4321
npm run build     # 类型检查 + 生产构建，输出到 dist/
npm run preview   # 本地预览构建结果
```

`npm run build` 会先运行 `astro check`，任何 TypeScript 类型错误都会阻止构建。

---

## 中英双语与联系方式

右上角的 `EN / 中` 分段开关位于暗黑模式按钮左侧。切换时会：

- 在 `<html>` 上写入 `data-lang="en" | "zh"`，并把选择持久化到 `localStorage.getItem('lang')`
- 在首次绘制前由 `Layout.astro` 的内联脚本恢复语言，避免中英文闪烁
- 通过 CSS 的 `.lang-en` / `.lang-zh` 显隐，实现零刷新、零路由变化的瞬时切换
- 保持当前滚动位置、暗黑模式状态与页面路径不变
- 同步更新 `<html lang>`，中文模式为 `zh-CN`

双语数据集中在：

- `src/data/types.ts`：`LocalizedText = { en, zh }`
- `src/data/profile.ts`：身份、简介、研究方向、经历、联系方式
- `src/data/agenda.ts`：Research Agenda 的核心命题、双支柱、方法论基座与双轨验证
- `src/data/news.ts`：学术动态
- `src/data/i18n.ts`：导航、区块标题、Notes 与 Publications 界面标签
- `src/components/Bilingual.astro`：简单文案的双语渲染

邮箱与电话均使用显式展示的纯文字链接（无胶囊外框）：

```ts
links: [
  {
    label: { en: 'Email', zh: '邮箱' },
    href: 'mailto:yanchen_lu117@163.com',
    icon: 'mail',
    value: 'yanchen_lu117@163.com', // 链接中直接显示的文本
  },
  {
    label: { en: 'Phone', zh: '电话' },
    href: 'tel:+8618969363999',
    icon: 'phone',
    value: '+86 189 6936 3999',
  },
],
```

邮箱右侧的复制按钮会写入剪贴板，并短暂显示 `Copied` / `已复制`；失败时会回退到 `document.execCommand('copy')`。联系方式行最右侧的 `Print / PDF CV`（中文：`导出 PDF 简历`）会调用 `window.print()`；打印时邮箱与电话会以纯文本显示在姓名下方。

> 明文邮箱便于潜在导师直接复制，但可能被基础爬虫抓取。若后续垃圾邮件明显增多，可以把 `value` 拆成前后两段，在浏览器端用简单 JS 拼接后渲染，视觉不变但可挡掉多数静态爬虫。

---

## 替换你的信息

### 1. 个人资料 — `src/data/profile.ts`

| 字段 | 说明 |
| --- | --- |
| `name` / `nameZh` | 英文名、中文名 |
| `role` | 当前身份，双语 `{ en, zh }` |
| `affiliation` / `affiliationUrl` | 学校或机构（双语）及主页链接；URL 留空时机构以纯文本显示 |
| `subtitle` | Hero 区身份副标题，双语 |
| `email` / `phone` / `location` | 邮箱、电话、所在城市（`location` 为双语） |
| `avatar` | 社交预览 / Apple touch 图标路径；首页不显示此图片，Hero 右侧为 Canvas 徽记 |
| `bio` | 简介段落数组，每段为 `{ en, zh }`，支持简单内联 HTML（链接请使用 `class="bio-link"`） |
| `researchInterests` | 研究方向标签，每项为 `{ en, zh }` |
| `links` | 社交链接，`label` 为双语，`icon` 可选 `mail` / `phone` / `scholar` / `github` / `twitter` / `cv`；`value` 用于显式展示邮箱、电话等文本 |
| `experience` | 教育与经历；`period` / `role` / `organization` / `detail` 均为双语，`kind` 为 `education` 或 `experience`，`monogram` 为左侧缩写方块 |

### 2. 学术动态 — `src/data/news.ts`

按时间倒序排列，`date` 会原样显示（例如 `2026.10`），`content` 为双语对象并支持简单内联 HTML：

```ts
{
  date: '2026.10',
  content: {
    en: 'Submitted a manuscript to <strong>WWW 2027</strong>.',
    zh: '向 <strong>WWW 2027</strong> 投稿论文一篇。',
  },
}
```

### 3. 研究主线 — `src/data/agenda.ts`

`researchAgenda` 由五部分组成：`thesis`（核心命题）、`pillars`（双支柱）、`foundation`（方法论基座）、`regimes`（封闭 / 开放问题范式）与 `validation`（双轨验证）。`statement`、`detail` 支持简单内联 HTML；在关键词外包裹 `<span class="blueprint-keyword" data-regime="closed|open">` 即可接入悬停联动：

```ts
export const researchAgenda = {
  thesis: {
    label: { en: 'ARCHITECTURE–POST-TRAINING CO-DESIGN', zh: '面向自主智能的架构与后训练协同创新' },
    statement: { en: '...', zh: '...' },
  },
  pillars: [
    {
      number: '01',
      label: { en: 'Pillar I', zh: '支柱一' },
      title: { en: 'Agentic Post-Training & Exploration Policies', zh: '后训练新范式' },
      detail: {
        en: '... <span class="blueprint-keyword" data-regime="open">exploration-aware policy optimization</span> ...',
        zh: '...',
      },
    },
  ],
  foundation: { title: { en: '...', zh: '...' }, detail: { en: '...', zh: '...' } },
  regimes: {
    closed: { title: { en: '...', zh: '...' }, detail: { en: '...', zh: '...' } },
    open: { title: { en: '...', zh: '...' }, detail: { en: '...', zh: '...' }, core: true },
  },
  validation: { title: { en: '...', zh: '...' }, detail: { en: '...', zh: '...' } },
};
```

### 4. 论文 — `src/data/publications.ts`

每篇论文是一个对象，追加即可，无需修改页面代码。当前 `publications` 为空数组，因此首页不会渲染 Publications 区块，顶部导航也会自动省略该入口；加入第一篇文章后会自动恢复：

```ts
{
  id: 'paper-id',
  title: 'Paper Title',
  authors: ['Yanchen Lu*', 'Coauthor Name†'], // * 共一，† 通讯
  venue: 'Conference 2027',
  year: 2027,
  highlight: 'Oral',        // 可选，显示为会议名旁的 (Oral)
  selected: true,           // 是否出现在默认的 Selected 列表
  tldr: '一句话核心贡献',
  abstract: '点击 Abstract 后原地展开的摘要段落。',
  tags: ['Agentic AI', 'Representation Learning'], // 自动生成 Topic 筛选
  teaser: '/papers/paper.svg',
  teaserHover: '/papers/paper-hover.svg', // 可选，悬停时淡入
  links: { pdf: '...', code: '...', project: '...', demo: '...' },
  bibtex: `@inproceedings{...}`
}
```

- 本人姓名会与 `profile.name` 精确匹配并自动加粗。
- 作者字符串末尾的 `*` / `†` 会渲染为上标，并自动生成脚注。
- `tags` 自动去重生成主题筛选；`year` 自动生成年份下拉，无需维护额外配置。
- `Selected / All`、Topic、Year 三个维度可以组合过滤；无结果时会显示空状态与 “Reset filters”。
- `links` 中所有字段都是可选的，缺省按钮不会显示。
- `highlight` 是纯文字强调，不再使用奖杯图标或彩色底块。
- BibTeX 使用模板字符串；如果内容里出现反引号，请先转义。

### 5. 图片与 Favicon

直接替换 `public/` 下的同名文件即可：

| 文件 | 建议规格 |
| --- | --- |
| `public/avatar.jpg` | 400 × 400；用于 OpenGraph / Apple touch 预览。首页不显示头像，Hero 右侧为 Canvas 徽记 |
| `public/papers/*.svg` | 固定 16:10，推荐 720 × 450；也支持 `.jpg` / `.png`，改一下数据里的路径即可 |
| `public/favicon.svg` | 站点图标，可替换为自己的 monogram |

Teaser 在桌面端显示为 180 × 112.5，移动端为整列宽度；容器统一使用 `border-hairline` 0.5px 细边框，不使用圆角与重阴影。建议同时提供静态图与悬停图；没有 `teaserHover` 时悬停不会切换。

### 6. 配色与字体

- 颜色、字体和通用样式集中在 `src/styles/global.css` 的 CSS 变量、`@theme inline` 与 `@layer components` 中。
- 浅色模式：纸色 `#FAF9F5`、次级底色 `#F2F0E8`、墨色 `#1C1B18`、次要文字 `#5C5A52`、强调色 `#8B2635`。
- 深色模式：暖调黑曜石 `#121210`、正文 `#E6E4DD`、强调色 `#D47A84`。
- 字体通过 `src/layouts/Layout.astro` 里的 Google Fonts 链接加载：Newsreader（英文标题 / 引言）、Noto Serif SC（中文标题 / 长文）、Inter（界面与正文）、JetBrains Mono（日期 / BibTeX / 代码）。中文正文会回退到 PingFang SC / Hiragino Sans GB / Microsoft YaHei。
- 深色模式基于 `.dark` class，语言模式基于 `html[data-lang]`，两者分别由 `src/components/Header.astro` 中的脚本写入 `localStorage`。
- 区块分隔线为 0.5px；英文小标使用 `font-variant-caps: small-caps`，不使用胶囊标签或彩色底块。

---

## Notes 技术笔记

项目已内置 **MDX + KaTeX + Shiki**，无需额外配置即可发布公式推导、论文解读或开源复现笔记。

- 笔记目录：`src/content/notes/`
- 列表页：`/notes/`
- 内容结构定义：`src/content.config.ts`

仓库内置一篇示例设计笔记 `src/content/notes/on-marginalia.mdx`，用于演示 Tufte 边栏旁注与生长阶段。新增一篇笔记，只需创建一个 `.md` / `.mdx` 文件：

```mdx
---
title: 'Your Note Title'
description: 'One-sentence summary shown in the notes index.'
date: 2026-10-12
tags: ['Efficiency', 'Multimodal']
stage: 'Budding' # Seedling | Budding | Evergreen
---

Inline math works: $x_t = \sqrt{\bar{\alpha}_t} x_0 + \sqrt{1-\bar{\alpha}_t}\epsilon$.

$$
\mathcal{L}(\theta) = \mathbb{E}_{t,x_0,\epsilon}\left[\|\epsilon-\epsilon_\theta(x_t,t)\|_2^2\right]
$$
```

路由与列表会自动更新。行内公式用 `$...$`，独立公式用 `$$...$$`，代码块使用普通 Markdown 围栏语法即可。KaTeX CSS 只在笔记详情页加载，不会增加首页负担。

### Tufte 边栏旁注

在 MDX 正文中以 `<Sidenote>...</Sidenote>` 插入旁注。组件已在笔记详情页注册，无需额外 import；桌面端会浮动到右侧 190px 的边栏，`< 1024px` 时自动回到正文并显示细线。CSS 计数器会自动生成上标编号与旁注编号。

### 生长阶段

每条笔记的 frontmatter 支持 `stage`：`Seedling`（空心圆）、`Budding`（半填充圆）、`Evergreen`（实心强调色圆点）。列表页与详情页会显示对应的 small-caps 标记。

---

## 打印 / 导出 PDF

点击 Hero 联系方式行右侧的 `Print / PDF CV`，或在浏览器中按 `Cmd/Ctrl + P`，即可获得一份 2 页、高对比度、纯白底的学术简介与研究陈述：

- 自动隐藏顶部导航、主题切换、语言切换、筛选控件、Teaser、Canvas 徽记、操作按钮、未展开抽屉和页脚
- 自动隐藏邮箱 / 电话文字链接，改为在姓名下方显示加粗的纯文本邮箱、电话、城市与机构
- 打印沿用当前 `EN` / `中` 语言，只输出当前语言文案
- **无论当前屏幕选择的是 `Selected` 还是 `All`，打印时都会输出完整论文列表**
- 强制浅色打印，即使网页当前处于深色模式
- 使用 A4 页边距；Research Agenda 蓝图保持完整不跨页
- 打印专用 News 副本放在首页简介之后，Experience 的研究经历使用紧凑双栏，确保总页数为 2 页
- Notes 详情页同样支持干净的打印输出

打印规则位于 `src/styles/global.css` 的 `@media print` 块。如果想在打印时保留 Teaser，只需从隐藏列表里移除 `.pub-teaser`。

---

## 部署到 GitHub Pages

### 1. 创建仓库

```bash
git init
git add .
git commit -m "Initial academic homepage"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

把项目推送到 GitHub。仓库名有两种情况：

| 仓库名 | 访问地址 | 配置 |
| --- | --- | --- |
| `<username>.github.io` | `https://<username>.github.io/` | `base` 保持注释 |
| 其他名称，如 `academic-homepage` | `https://<username>.github.io/academic-homepage/` | 取消注释并设置 `base: '/academic-homepage'` |

### 2. 修改 `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://<username>.github.io',
  // 仓库不是 <username>.github.io 时，取消下一行注释：
  // base: '/academic-homepage',
  output: 'static',
  integrations: [mdx()],
  // 保留已有 markdown / vite 配置
});
```

`site` 用于 canonical URL、OpenGraph 和结构化数据，务必替换。所有本地静态资源都通过 `src/utils/base.ts` 的 `withBase()` 拼接 `import.meta.env.BASE_URL`，因此部署到子路径时头像与 Teaser 不会 404；Notes 内部链接同样经过 `withBase()`。

### 3. 开启 GitHub Actions 部署

推送到 `main` 分支后：

1. 打开仓库 **Settings → Pages**
2. **Build and deployment → Source** 选择 **GitHub Actions**
3. 等待 `.github/workflows/deploy.yml` 第一次运行完成

之后每次 `git push` 到 `main` 都会自动构建并上线，通常 30 秒左右完成。也可以手动在 **Actions → Deploy to GitHub Pages → Run workflow** 触发。

工作流使用 Node 24、`npm ci`、`actions/upload-pages-artifact@v3` 与 `actions/deploy-pages@v4`。

---

## 目录结构

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
├── public/
│   ├── avatar.jpg                 # OG / Apple touch 预览（首页不显示）
│   ├── favicon.svg                # 站点图标
│   └── papers/                    # 论文 Teaser（16:10）
├── src/
│   ├── components/
│   │   ├── Bilingual.astro        # 双语文案渲染（.lang-en / .lang-zh）
│   │   ├── Experience.astro       # 教育与经历
│   │   ├── Footer.astro           # 页脚（首页与 Notes 共用）
│   │   ├── Header.astro           # 导航 + 语言/主题切换（无论文时隐藏 Publications）
│   │   ├── Hero.astro             # 简介、邮箱/电话与 Print / PDF CV
│   │   ├── Icon.astro             # 内联 SVG 图标
│   │   ├── LatentSearchCanvas.astro # 隐空间搜索轨迹 Canvas
│   │   ├── NewsList.astro         # 学术动态（含打印专用副本）
│   │   ├── PubCard.astro          # 论文卡片 + Abstract/BibTeX 抽屉
│   │   ├── ResearchAgenda.astro   # 研究主线：协同设计排印蓝图
│   │   └── Sidenote.astro         # Tufte 边栏旁注
│   ├── content/
│   │   └── notes/
│   │       └── on-marginalia.mdx  # 数字花园示例笔记
│   ├── content.config.ts          # Notes collection schema
│   ├── data/
│   │   ├── agenda.ts              # 【内容】研究主线：命题、支柱、基座与验证
│   │   ├── i18n.ts                # 导航 / 区块 / Notes 界面文案
│   │   ├── types.ts               # LocalizedText 类型
│   │   ├── profile.ts             # 【内容】个人资料
│   │   ├── news.ts                # 【内容】学术动态
│   │   └── publications.ts        # 【内容】论文列表
│   ├── layouts/Layout.astro       # <head>、SEO、全局布局
│   ├── pages/
│   │   ├── index.astro            # 首页 + 筛选/抽屉/灯箱脚本
│   │   └── notes/
│   │       ├── index.astro        # Notes 列表
│   │       └── [...slug].astro    # Notes 详情（KaTeX）
│   ├── styles/global.css          # 主题、组件、prose、打印样式
│   └── utils/
│       ├── base.ts                # BASE_URL 路径拼接
│       └── notes.ts               # 笔记 slug 处理
├── astro.config.mjs               # MDX + KaTeX + Shiki 配置
├── package.json
└── tsconfig.json
```

---

## 学术 SEO

`src/layouts/Layout.astro` 中已经包含：

- `citation_title`、`citation_author`、`citation_publication_date`、`citation_conference_title`、`citation_pdf_url`
- OpenGraph 与 Twitter Card
- Schema.org `Person` JSON-LD
- Notes 详情页自动切换为 `og:type=article` 并输出 `article:published_time`，同时关闭论文 citation meta，避免误标

`citation_*` 只会在 `publications` 非空时输出，并取第一篇 `selected: true` 的论文；当前列表为空，因此不会产生任何论文元数据，避免双盲审稿期误标。如果你希望突出另一篇，调整 `publications` 的顺序或该字段即可。

---

## 常见问题

**部署后图片 404？**
检查 `astro.config.mjs` 的 `base` 是否与仓库名一致，并确认资源路径以 `/` 开头（组件会自动套用 `withBase()`）。

**Publications 区块和导航入口不见了？**
这是预期行为。`src/data/publications.ts` 当前为空数组，首页与 Header 会自动隐藏 Publications；加入第一篇论文后自动恢复，无需改页面代码。

**如何新增、删除或修改笔记？**
在 `src/content/notes/` 下创建或删除 `.md` / `.mdx` 文件，重新运行 `npm run build` 即可。示例笔记为 `on-marginalia.mdx`，可直接删除或替换。

**如何新增或修改双语内容？**
导航与界面标签改 `src/data/i18n.ts`；个人资料、经历、动态改对应的 `{ en, zh }` 字段。默认语言由 `Layout.astro` 的 `data-lang="en"` 决定，用户选择会写入 `localStorage` 的 `lang`。

**邮箱复制按钮没有反馈？**
复制优先使用 `navigator.clipboard.writeText`，失败时回退到 `execCommand('copy')`。部分浏览器在非 HTTPS 页面会禁用剪贴板 API；部署到 GitHub Pages 后为 HTTPS，可正常复制。

**打印时论文没有全部出现？**
打印样式会强制显示所有 `.pub-item`，包括屏幕上被 `Selected` 隐藏的论文。如果仍缺失，检查 `src/styles/global.css` 中 `@media print` 的 `.pub-item[hidden]` 规则是否被删除。

**修改颜色后没有生效？**
Tailwind 4 使用 CSS-first 配置，请改 `src/styles/global.css` 的 `@theme`，而不是寻找 `tailwind.config.js`（本项目没有该文件）。

**想改筛选逻辑？**
筛选与抽屉脚本位于 `src/pages/index.astro` 底部，全部为原生 JS；筛选状态使用 `data-pub-item`、`data-tags`、`data-year` 与 `aria-pressed` 驱动，没有引入前端框架。
