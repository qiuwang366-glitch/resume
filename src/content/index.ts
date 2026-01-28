export type Language = 'en' | 'zh';

export interface Content {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    blog: string;
  };
  hero: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    resumeFile: string;
  };
  about: {
    title: string;
    highlights: {
      label: string;
      value: string;
    }[];
    description: string[];
  };
  experience: {
    title: string;
    timeline: {
      company: string;
      companyShort?: string;
      role: string;
      location: string;
      period: string;
      highlights: string[];
      metrics?: {
        label: string;
        value: string;
      }[];
      tags?: string[];
    }[];
  };
  skills: {
    title: string;
    categories: {
      title: string;
      icon: string;
      items: {
        name: string;
        description?: string;
      }[];
    }[];
  };
  projects: {
    title: string;
    items: {
      title: string;
      organization: string;
      description: string;
      achievements: string[];
      tags: string[];
      link?: string;
      linkLabel?: string;
      featured?: boolean;
    }[];
  };
  achievements: {
    title: string;
    items: {
      title: string;
      year: string;
      description: string;
      icon: string;
    }[];
  };
  education: {
    title: string;
    items: {
      school: string;
      degree: string;
      period: string;
      location: string;
      gpa?: string;
      highlights?: string[];
    }[];
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    cta: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
}

export const content: Record<Language, Content> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      blog: 'Market Analysis',
    },
    hero: {
      name: 'Lu Liu',
      title: 'Senior Fixed Income Portfolio Manager',
      subtitle: 'A Quantitative Macro PM who codes. Merging Macro Strategy with Quantitative Rigor.',
      description: '8 years of proprietary trading and portfolio management across global markets. Currently directing $50B+ multi-asset fixed income portfolios with consistent alpha generation across all market cycles.',
      cta: 'Download Resume',
      resumeFile: '/resume-en.pdf',
    },
    about: {
      title: 'About',
      highlights: [
        { label: 'AUM', value: '$50B+' },
        { label: 'Experience', value: '8 Years' },
        { label: 'Sharpe Ratio', value: '> 2.0' },
        { label: 'Alpha (Consecutive)', value: '50bps+ × 6Q' },
      ],
      description: [
        'Seasoned Fixed Income Portfolio Manager with 8 years of proprietary trading experience across global banking and capital markets, specializing in sophisticated rates and credit strategies across developed and emerging markets.',
        'Expert at bridging China\'s onshore liquidity dynamics with global macro trends. Combines deep macro-fundamental analysis with proprietary quantitative frameworks to drive investment decisions, achieving six consecutive quarters of risk-adjusted benchmark outperformance.',
        'Recognized for precise identification of cross-border relative value opportunities during policy transitions and market dislocations while maintaining disciplined risk management.',
      ],
    },
    experience: {
      title: 'Experience',
      timeline: [
        {
          company: 'Bank of China',
          companyShort: 'BOC',
          role: 'Investment Manager, Hong Kong Branch',
          location: 'Beijing / Hong Kong',
          period: 'Oct. 2023 - Present',
          highlights: [
            'Led team managing $50B foreign currency fixed income portfolio achieving 50bps excess returns over benchmark for six consecutive quarters',
            'Developed diverse investment strategies including strategic allocation, cross-currency relative value, curve trading, and derivative enhancement approaches',
            'Coordinated fixed income investment systems across 30 overseas institutions; established cross-team collaboration mechanisms',
            'Built comprehensive performance attribution framework decomposing alpha sources precisely',
          ],
          metrics: [
            { label: 'Portfolio Size', value: '$50B' },
            { label: 'Govt/SSA', value: '40%' },
            { label: 'MBS', value: '30%' },
            { label: 'IG Credit', value: '30%' },
          ],
          tags: ['Portfolio Management', 'Multi-Factor Models', 'Risk Management', 'Team Leadership'],
        },
        {
          company: 'Bank of China',
          companyShort: 'BOC',
          role: 'Trader, Global Markets Dept.',
          location: 'Beijing',
          period: 'Sep. 2019 - Sep. 2023',
          highlights: [
            'Managed interest rate and derivatives trading books covering RMB and USD cash bonds, IRS, futures/options, currency swaps and CDS',
            'Ranked first in profit contribution for two consecutive years through active risk exposure adjustments',
            'RMB FX quote quality rated #1 globally in 2021; developed systematic trading strategies',
            'Led macro research team coordinating FICC strategy analysis across global markets',
          ],
          metrics: [
            { label: 'Profit Rank', value: '#1' },
            { label: 'FX Quote Rank', value: '#1 Global' },
          ],
          tags: ['Derivatives Trading', 'Market Making', 'Quantitative Strategies', 'Macro Research'],
        },
        {
          company: 'Bank of China',
          companyShort: 'BOC',
          role: 'Assistant Portfolio Manager, Treasury Dept.',
          location: 'Beijing',
          period: 'Aug. 2017 - Aug. 2019',
          highlights: [
            'Managed RMB 20B liquid investment portfolio with multi-tier liquidity buffer framework',
            'Increased average portfolio yield by 15bps through term structure optimization',
            'Led design and successful issuance of Asia\'s first SOFR note',
            'Developed Nelson-Siegel based interest rate term structure analysis tools',
          ],
          metrics: [
            { label: 'Portfolio Size', value: 'RMB 20B' },
            { label: 'Yield Improvement', value: '+15bps' },
          ],
          tags: ['Liquidity Management', 'ALM', 'SOFR', 'Quantitative Analysis'],
        },
        {
          company: 'China Asset Management',
          companyShort: 'ChinaAMC',
          role: 'Intern, Asset Allocation Dept.',
          location: 'Beijing',
          period: 'Jan. 2017 - Apr. 2017',
          highlights: [
            'Participated in designing China\'s first third-pillar pension product',
            'Developed diversified asset allocation framework integrating risk parity and Black-Litterman models',
          ],
          tags: ['Pension Funds', 'Asset Allocation', 'Risk Parity', 'Black-Litterman'],
        },
        {
          company: 'CICC',
          role: 'Intern, Asset Management Dept.',
          location: 'Beijing',
          period: 'Jun. 2016 - Sep. 2016',
          highlights: [
            'Assisted in managing institutional outsourced investment portfolios focusing on fixed income',
            'Produced daily market reports and weekly investment strategy analyses',
          ],
          tags: ['Fixed Income', 'Market Analysis', 'Client Relations'],
        },
      ],
    },
    skills: {
      title: 'The Quant Stack',
      categories: [
        {
          title: 'Quantitative Finance',
          icon: 'chart',
          items: [
            { name: 'Multi-Factor Models', description: 'Portfolio optimization & alpha generation' },
            { name: 'Derivatives Pricing', description: 'Options, swaps, structured products' },
            { name: 'Risk Measurement', description: 'VaR, stress testing, scenario analysis' },
            { name: 'Yield Curve Modeling', description: 'Nelson-Siegel, term structure analytics' },
          ],
        },
        {
          title: 'Programming',
          icon: 'code',
          items: [
            { name: 'Python', description: 'NumPy, Pandas, SciPy, ML frameworks' },
            { name: 'C++', description: 'High-performance computing' },
            { name: 'SQL', description: 'Database design & optimization' },
          ],
        },
        {
          title: 'Market Data & Analytics',
          icon: 'database',
          items: [
            { name: 'Bloomberg Terminal', description: 'API integration & automation' },
            { name: 'Refinitiv', description: 'Real-time data feeds' },
            { name: 'YieldBook', description: 'Fixed income analytics' },
            { name: 'Wind', description: 'China market data' },
          ],
        },
        {
          title: 'AI & Machine Learning',
          icon: 'brain',
          items: [
            { name: 'LLM Applications', description: 'Investment research automation' },
            { name: 'Deep Learning', description: 'TensorFlow, neural networks' },
            { name: 'Time Series', description: 'RNN, volatility forecasting' },
          ],
        },
        {
          title: 'Asset Classes',
          icon: 'layers',
          items: [
            { name: 'Government Bonds', description: 'DM & EM sovereigns, SSA' },
            { name: 'MBS/ABS', description: 'Structured products' },
            { name: 'Investment Grade Credit', description: 'Corporate bonds' },
            { name: 'Interest Rate Derivatives', description: 'IRS, futures, options' },
            { name: 'FX', description: 'G10 & RMB strategies' },
          ],
        },
        {
          title: 'Certifications',
          icon: 'award',
          items: [
            { name: 'HKSI Type 9', description: 'Responsible Officer' },
            { name: 'CFETS', description: 'Interbank currency trader' },
            { name: 'Coursera', description: 'LLM, Deep Learning, TensorFlow' },
          ],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          title: 'AI Credit Analyst (MVP)',
          organization: 'Personal Project',
          description: 'An interactive AI agent that automates credit memo generation using RAG. Built with Streamlit and LangChain.',
          achievements: [
            'Automated credit memo generation',
            'RAG-powered document analysis',
            'Interactive web interface',
          ],
          tags: ['LangChain', 'Streamlit', 'RAG', 'AI Agent'],
          link: 'https://credit-len.streamlit.app',
          linkLabel: 'Live Demo',
          featured: true,
        },
        {
          title: 'Bloomberg Quantitative Competition',
          organization: 'Bloomberg',
          description: 'Led development of "Bond Index Fund Alpha Strategy" - the only pure fixed income portfolio to receive recognition among predominantly multi-asset entries.',
          achievements: [
            '3rd Place in 2022 Competition',
            'Only pure FI portfolio recognized',
            'Systematic alpha generation framework',
          ],
          tags: ['Bond Index', 'Alpha Strategy', 'Quantitative Research'],
        },
        {
          title: 'Asia\'s First SOFR Note',
          organization: 'Bank of China',
          description: 'Led design and successful issuance of Asia\'s first SOFR-linked note, developing the complete pricing framework and risk hedging solutions ahead of global benchmark rate reforms.',
          achievements: [
            'First-to-market in Asia',
            'Full pricing framework development',
            'Risk hedging solution design',
            'Senior management recognition',
          ],
          tags: ['SOFR', 'Innovation', 'Fixed Income', 'Benchmark Reform'],
        },
        {
          title: 'AI Investment Research Assistant',
          organization: 'Bank of China, Hong Kong Branch',
          description: 'Architected an internal AI investment assistant using RAG. Reduced credit research time by 40% via automated earnings call analysis and sentiment scoring.',
          achievements: [
            '40% reduction in research time',
            'Automated earnings call analysis',
            'Real-time sentiment scoring',
          ],
          tags: ['LLM', 'RAG', 'NLP', 'Investment Research'],
        },
      ],
    },
    achievements: {
      title: 'Recognition',
      items: [
        {
          title: 'FX Markets Asia Award',
          year: '2021',
          description: 'Core technology lead for "Best RMB Market Maker"',
          icon: 'trophy',
        },
        {
          title: 'Bloomberg Quant Competition',
          year: '2022',
          description: '3rd Place - Only pure FI portfolio recognized',
          icon: 'medal',
        },
        {
          title: 'BOC AI Competition Champion',
          year: '2021',
          description: 'Team Lead - Financial Data AI Modeling',
          icon: 'brain',
        },
        {
          title: 'Youth Think Tank First Prize',
          year: '2021',
          description: 'Macro quantitative model design',
          icon: 'lightbulb',
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          school: 'Peking University',
          degree: 'Master of Science in Financial Mathematics',
          period: 'Sep. 2015 - Jul. 2017',
          location: 'Beijing, China',
          gpa: '3.80/4.00 | Top 5%',
          highlights: [
            'Outstanding Thesis: "50ETF Option Volatility Prediction Using RNNs and Time Series Models"',
          ],
        },
        {
          school: 'Renmin University of China',
          degree: 'Bachelor of Science in Mathematics',
          period: 'Sep. 2011 - Jul. 2015',
          location: 'Beijing, China',
          gpa: '3.67/4.00 | Top 10%',
          highlights: [
            'Meritorious Winner in Mathematical Contest in Modeling',
            'Outstanding Academic Scholarship',
          ],
        },
        {
          school: 'The University of Hong Kong',
          degree: 'Exchange Program in Faculty of Science',
          period: 'Sep. 2013 - Jan. 2014',
          location: 'Hong Kong, China',
          gpa: '4.30/4.30',
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      email: 'liulu-pku@foxmail.com',
      phone: '(+86)-188-0010-3021',
      cta: 'Send Email',
    },
    footer: {
      copyright: '© 2024 Lu Liu. All rights reserved.',
      builtWith: 'Built with Next.js & Tailwind CSS',
    },
  },
  zh: {
    nav: {
      about: '关于',
      experience: '经历',
      skills: '技能',
      projects: '项目',
      contact: '联系',
      blog: '市场观察',
    },
    hero: {
      name: '刘璐',
      title: '资深固定收益投资组合经理',
      subtitle: '会写代码的量化宏观PM。宏观策略与量化方法的融合。',
      description: '8年自营交易和投资组合管理经验，现主导管理超500亿美元全球多资产固定收益组合，具备跨市场和跨周期投资经验，连续多个季度超越基准表现。',
      cta: '下载简历',
      resumeFile: '/resume-zh.pdf',
    },
    about: {
      title: '关于',
      highlights: [
        { label: '管理规模', value: '500亿+' },
        { label: '从业经验', value: '8年' },
        { label: '夏普比率', value: '> 2.0' },
        { label: '超额收益(连续)', value: '50bp+ × 6Q' },
      ],
      description: [
        '资深固定收益投资组合经理，拥有8年自营交易经验，专注于利率与信用策略，具备跨发达市场和新兴市场的投资能力。',
        '擅长将中国境内流动性动态与全球宏观趋势相结合。通过系统化研究和独立思考驱动投资决策，开发多元量化策略持续实现风险调整后的超额回报。',
        '擅长在跨境市场的宏观政策转变和市场波动中精准识别相对价值机会，保持严格的风险管理纪律。',
      ],
    },
    experience: {
      title: '工作经历',
      timeline: [
        {
          company: '中国银行',
          companyShort: '中行',
          role: '投资经理，香港分行',
          location: '北京 / 香港',
          period: '2023.10 - 至今',
          highlights: [
            '领导团队管理500亿美元外币固定收益自营投资组合，连续6个季度实现超越基准50bp的超额回报',
            '主导开发多元投资策略，包括战略配置、跨币种相对价值、曲线交易和衍生品增强策略',
            '统筹集团近30家境外机构的固定收益投资体系建设，建立跨团队协作和知识共享机制',
            '构建绩效归因分析框架，精确分解alpha来源',
          ],
          metrics: [
            { label: '组合规模', value: '500亿美元' },
            { label: '政府债/SSA', value: '40%' },
            { label: 'MBS', value: '30%' },
            { label: '高等级信用债', value: '30%' },
          ],
          tags: ['组合管理', '多因子模型', '风险管理', '团队领导'],
        },
        {
          company: '中国银行',
          companyShort: '中行',
          role: '交易员，全球市场部',
          location: '北京',
          period: '2019.09 - 2023.09',
          highlights: [
            '管理银行利率和衍生品交易账簿，负责人民币和美元现券、IRS、利率期货和期权、货币掉期和CDS等',
            '组合利润贡献连续两年在全行交易账簿中排名第一',
            '人民币外汇报价质量2021年全球第一；开发多个系统化交易策略',
            '担任全球金融市场研究中心宏观组负责人，负责FICC交易策略的研究分析',
          ],
          metrics: [
            { label: '利润排名', value: '第1名' },
            { label: '外汇报价排名', value: '全球第1' },
          ],
          tags: ['衍生品交易', '做市', '量化策略', '宏观研究'],
        },
        {
          company: '中国银行',
          companyShort: '中行',
          role: '助理投资经理，司库',
          location: '北京',
          period: '2017.08 - 2019.08',
          highlights: [
            '管理总行司库200亿人民币流动性投资组合，构建多层次流动性缓冲体系',
            '通过优化期限结构与配置，将组合平均收益率提升15个基点',
            '主导设计并成功发行亚洲地区首笔SOFR票据',
            '开发基于Nelson-Siegel模型的利率期限结构分析工具',
          ],
          metrics: [
            { label: '组合规模', value: '200亿人民币' },
            { label: '收益提升', value: '+15基点' },
          ],
          tags: ['流动性管理', '资产负债管理', 'SOFR', '量化分析'],
        },
        {
          company: '华夏基金',
          companyShort: '华夏',
          role: '实习生，资产配置部',
          location: '北京',
          period: '2017.01 - 2017.04',
          highlights: [
            '参与设计国内首批第三支柱养老金产品',
            '开发整合风险平价模型和Black-Litterman模型的多元化资产配置框架',
          ],
          tags: ['养老金', '资产配置', '风险平价', 'Black-Litterman'],
        },
        {
          company: '中金公司',
          companyShort: 'CICC',
          role: '实习生，资产管理部',
          location: '北京',
          period: '2016.06 - 2016.09',
          highlights: [
            '协助管理机构委外投资组合，重点参与固定收益投资策略制定',
            '撰写市场日报与周度投资策略报告',
          ],
          tags: ['固定收益', '市场分析', '客户关系'],
        },
      ],
    },
    skills: {
      title: '量化技术栈',
      categories: [
        {
          title: '量化金融',
          icon: 'chart',
          items: [
            { name: '多因子模型', description: '组合优化与alpha生成' },
            { name: '衍生品定价', description: '期权、掉期、结构化产品' },
            { name: '风险计量', description: 'VaR、压力测试、情景分析' },
            { name: '收益率曲线建模', description: 'Nelson-Siegel、期限结构分析' },
          ],
        },
        {
          title: '编程语言',
          icon: 'code',
          items: [
            { name: 'Python', description: 'NumPy, Pandas, SciPy, ML框架' },
            { name: 'C++', description: '高性能计算' },
            { name: 'SQL', description: '数据库设计与优化' },
          ],
        },
        {
          title: '市场数据与分析',
          icon: 'database',
          items: [
            { name: 'Bloomberg终端', description: 'API集成与自动化' },
            { name: 'Refinitiv', description: '实时数据流' },
            { name: 'YieldBook', description: '固收分析' },
            { name: 'Wind', description: '中国市场数据' },
          ],
        },
        {
          title: 'AI与机器学习',
          icon: 'brain',
          items: [
            { name: 'LLM应用', description: '投资研究自动化' },
            { name: '深度学习', description: 'TensorFlow、神经网络' },
            { name: '时间序列', description: 'RNN、波动率预测' },
          ],
        },
        {
          title: '资产类别',
          icon: 'layers',
          items: [
            { name: '政府债券', description: '发达与新兴市场主权债、SSA' },
            { name: 'MBS/ABS', description: '结构化产品' },
            { name: '高等级信用债', description: '公司债券' },
            { name: '利率衍生品', description: 'IRS、期货、期权' },
            { name: '外汇', description: 'G10与人民币策略' },
          ],
        },
        {
          title: '专业资质',
          icon: 'award',
          items: [
            { name: '香港证监会9号牌', description: '负责人员资格' },
            { name: 'CFETS', description: '银行间本外币交易员' },
            { name: 'Coursera认证', description: 'LLM、深度学习、TensorFlow' },
          ],
        },
      ],
    },
    projects: {
      title: '重点项目',
      items: [
        {
          title: 'AI信用分析师 (MVP)',
          organization: '个人项目',
          description: '基于RAG技术的交互式AI代理，自动化生成信用分析报告。使用Streamlit和LangChain构建。',
          achievements: [
            '自动化信用报告生成',
            'RAG驱动文档分析',
            '交互式Web界面',
          ],
          tags: ['LangChain', 'Streamlit', 'RAG', 'AI Agent'],
          link: 'https://credit-len.streamlit.app',
          linkLabel: '在线演示',
          featured: true,
        },
        {
          title: '彭博量化大赛',
          organization: '彭博',
          description: '主导设计"债券指数基金Alpha策略"，为唯一获奖的纯债投资组合。',
          achievements: [
            '2022年大赛季军',
            '唯一获奖纯债组合',
            '系统化alpha生成框架',
          ],
          tags: ['债券指数', 'Alpha策略', '量化研究'],
        },
        {
          title: '亚洲首笔SOFR票据',
          organization: '中国银行',
          description: '主导设计并成功发行亚洲地区首笔SOFR票据，负责全套创新产品定价框架开发、风险对冲方案设计。',
          achievements: [
            '亚洲首发',
            '定价框架开发',
            '风险对冲方案设计',
            '高级管理层表彰',
          ],
          tags: ['SOFR', '创新产品', '固定收益', '基准利率改革'],
        },
        {
          title: 'AI投资研究助手',
          organization: '中国银行香港分行',
          description: '架构设计基于RAG的内部AI投资助手，通过自动化财报电话会议分析和情绪评分，将信用研究时间缩短40%。',
          achievements: [
            '研究时间缩短40%',
            '自动化财报分析',
            '实时情绪评分',
          ],
          tags: ['LLM', 'RAG', 'NLP', '投资研究'],
        },
      ],
    },
    achievements: {
      title: '荣誉奖项',
      items: [
        {
          title: 'FX Markets亚洲外汇大奖',
          year: '2021',
          description: '"最佳人民币做市商"核心技术负责人',
          icon: 'trophy',
        },
        {
          title: '彭博量化大赛',
          year: '2022',
          description: '季军 - 唯一获奖纯债组合',
          icon: 'medal',
        },
        {
          title: '中国银行AI建模大赛冠军',
          year: '2021',
          description: '团队负责人 - 金融数据AI建模',
          icon: 'brain',
        },
        {
          title: '青年智库一等奖',
          year: '2021',
          description: '宏观量化模型设计',
          icon: 'lightbulb',
        },
      ],
    },
    education: {
      title: '教育背景',
      items: [
        {
          school: '北京大学',
          degree: '金融数学 硕士研究生',
          period: '2015.09 - 2017.07',
          location: '北京',
          gpa: 'GPA: 3.80/4.00 | 专业前5%',
          highlights: [
            '优秀论文：《基于循环神经网络与时间序列模型的50ETF期权波动率预测研究》',
          ],
        },
        {
          school: '中国人民大学',
          degree: '数学与应用数学 本科',
          period: '2011.09 - 2015.07',
          location: '北京',
          gpa: 'GPA: 3.67/4.00 | 专业前10%',
          highlights: [
            '美国大学生数学建模竞赛一等奖',
            '萨师煊精英基金奖学金、学习优秀奖学金',
          ],
        },
        {
          school: '香港大学',
          degree: '理学院交换生',
          period: '2013.09 - 2014.01',
          location: '香港',
          gpa: 'GPA: 4.16/4.30',
        },
      ],
    },
    contact: {
      title: '联系方式',
      email: 'liulu-pku@foxmail.com',
      phone: '(+86)-188-0010-3021',
      cta: '发送邮件',
    },
    footer: {
      copyright: '© 2024 刘璐. 保留所有权利。',
      builtWith: '使用 Next.js & Tailwind CSS 构建',
    },
  },
};

export default content;
