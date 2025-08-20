export interface Experience {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tech?: string[];
  images?: { src: string; alt: string; caption?: string }[];
}

export interface Research {
  title: string;
  summary: string;
  dates?: string;
  tech?: string[];
  images?: { src: string; alt: string; caption?: string }[];
}

export interface Project {
  title: string;
  oneLiner: string;
  details: string[];
  tech: string[];
  featured?: boolean;
  links?: { demo?: string; repo?: string };
  images: { src: string; alt: string; caption?: string }[];
}

export const portfolio = {
  hero: {
    name: "Namrata Nyamagoudar",
    tagline: "AI/ML engineer turning complex ideas into reliable, measurable systems—RAG/agents, computer vision, and Snowflake-native data platforms.",
    ctas: [
      { label: "View Projects", href: "#projects", style: "primary" },
      { label: "Get in Touch", href: "#contact", style: "ghost" },
      { label: "Download Résumé", href: "/resume/Namrata_Nyamagoudar_Resume.pdf", style: "outline" }
    ]
  },
  about: "I work across AI/ML, computer vision, and data platforms—designing retrieval/agentic systems end-to-end, from models and retrieval to Snowflake-centric backends and APIs. I value simple interfaces, measurable quality, and maintainable code.",
  experience: [
    {
      company: "Hivekind.ai",
      role: "Founding Engineer",
      location: "San Francisco, USA",
      start: "Jun 2025",
      end: "Present",
      bullets: [
        "Multi-tenant Snowflake (OpenFlow, RBAC, automated onboarding) → ~80% faster customer setup",
        "Snowpark ETL → fact/dimension star schema; lead scoring with feature engineering + AutoML",
        "LangChain + LangGraph (MCP) for multi-agent workflows; structured + vector queries",
        "RAG with Cortex + Bedrock; personalized emails with RLHF → ~70% SDR effort reduction",
        "Dockerized TS/React + FastAPI; ECR → ECS Fargate/EC2/Lambda; CI/CD (Dev/Test/Main)"
      ],
      tech: ["Snowflake", "LangChain", "AWS", "Docker", "TypeScript", "Python"]
    },
    {
      company: "Deloitte Consulting",
      role: "Cloud Consultant",
      location: "Bengaluru, India",
      start: "Sep 2021",
      end: "Jul 2023",
      bullets: [
        "Azure DevOps CI/CD (PowerShell/YAML) for COTS decision engine flow",
        "ASP.NET/C# ETL parsing hierarchical XML; App Service + Azure SQL migration",
        "Backup efficiency +70% (MS SQL + Az-Disk Snapshots), enforced RBAC",
        "20+ microservices (Angular/JS); MTTR −35% via telemetry/Application Insights"
      ],
      tech: ["Azure", "DevOps", "C#", "Angular", "SQL Server"]
    },
    {
      company: "Spookfish Innovations",
      role: "Computer Vision (Industry Project/Intern)",
      start: "Industry Project",
      end: "",
      bullets: [
        "YOLOv4 + DeepSORT pipeline to track tablets/capsules on packaging trays; Kalman + Hungarian",
        "Target near real-time; observed ~9–20 FPS in tests; ~95% detection with YOLOv4"
      ],
      tech: ["YOLOv4", "DeepSORT", "OpenCV", "Python"],
      images: [
        { src: "/images/spookfish/tracking.png", alt: "Tablet tracking with stable IDs", caption: "Tracking with stable IDs after buffer frames" },
        { src: "/images/spookfish/capsules.png", alt: "Capsule tracking", caption: "Capsule trays and detection bounding boxes" },
        { src: "/images/spookfish/performance.png", alt: "Performance chart", caption: "Observed FPS across scenes" }
      ]
    }
  ],
  research: [
    {
      title: "UC Irvine — ML Research Assistant (Audio)",
      summary: "Estimated auditory filter bandwidths from psychoacoustic data (MATLAB); fine-tuned Audio Spectrogram Transformer (AST) in PyTorch for time-frequency classification.",
      dates: "Jun 2024–Jun 2025",
      tech: ["PyTorch", "MATLAB", "torchaudio", "AST"],
      images: [
        { src: "/images/research/audio-spectrogram.png", alt: "AST spectrogram input", caption: "Spectrogram input to Audio Spectrogram Transformer" }
      ]
    },
    {
      title: "Vision-based Evaluation of Micro-suturing",
      summary: "Automated scoring of micro-suturing (inter-suture distance, angulation, size/position). Experiments with HOG-SVM, Haar Cascade, Hough/contour methods.",
      tech: ["OpenCV", "HOG-SVM", "Haar Cascade", "Image Processing"],
      images: [
        { src: "/images/research/microsuture.png", alt: "Suture detection overlay", caption: "HOG-SVM detection and scoring overlay" }
      ]
    }
  ],
  projects: [
    {
      title: "Humma.AI — LLM Fine-tuning for Conversation Quality",
      featured: true,
      oneLiner: "PEFT-tuned LLaMA 3.1 (8B) with persona prompting; EQ60 uplift from 45 to 53.",
      details: [
        "Fine-tuned LLaMA 3.1 (8B) with PEFT (LoRA, FSDP), persona prompts; achieved EQ60 = 53 vs 45 baseline",
        "Dockerized React app on AWS EC2, S3-backed artifacts; custom evaluation (VADER, emotion analysis)"
      ],
      tech: ["LLaMA 3.1 (8B)", "PEFT (LoRA, FSDP)", "AWS EC2/S3", "Docker", "React"],
      links: { demo: "", repo: "" },
      images: [
        { src: "/images/humma/eq-comparison.png", alt: "EQ60 improvement chart", caption: "EQ60 improvement: 53 vs 45 baseline (+17.8%)" },
        { src: "/images/humma/vader-sentiment.png", alt: "VADER sentiment analysis", caption: "VADER sentiment analysis showing positive response patterns" },
        { src: "/images/humma/architecture.png", alt: "Model architecture diagram", caption: "PEFT fine-tuning with LoRA and AWS deployment architecture" }
      ]
    },
    {
      title: "Heritage Image Inpainting",
      featured: true,
      oneLiner: "Mask R-CNN occlusion removal + GAN inpainting with contextual attention.",
      details: [
        "Occlusion removal with Mask R-CNN; inpainting via contextual attention + GAN",
        "PSNR: 34.63 (DCGAN) vs 31.56 (WGAN-GP); test time optimization: 27.279s → 7.273s"
      ],
      tech: ["Mask R-CNN", "DCGAN", "WGAN-GP", "Contextual Attention", "PyTorch"],
      links: { repo: "" },
      images: [
        { src: "/images/inpaint/before-after.png", alt: "Before and after inpainting", caption: "Input with occlusion mask → DCGAN inpainted result" },
        { src: "/images/inpaint/metrics.png", alt: "Performance metrics", caption: "PSNR comparison: DCGAN (34.63) vs WGAN-GP (31.56)" },
        { src: "/images/inpaint/architecture.png", alt: "Inpainting pipeline", caption: "Mask R-CNN detection + contextual attention GAN pipeline" }
      ]
    },
    {
      title: "Mini DynamoDB — Distributed KV Store",
      featured: false,
      oneLiner: "Consistent hashing, LSM-trees, gossip-based eventual consistency.",
      details: [
        "Distributed key-value store with consistent hashing for dynamic sharding/replication",
        "gRPC for inter-node RPC; ZooKeeper for leader election/fault tolerance; LSM-trees for throughput"
      ],
      tech: ["C++", "gRPC", "ZooKeeper", "LSM-trees", "Distributed Systems"],
      links: { repo: "" },
      images: [
        { src: "/images/kv/architecture.png", alt: "DynamoDB architecture", caption: "Distributed architecture with consistent hashing and replication" },
        { src: "/images/kv/performance.png", alt: "Performance benchmarks", caption: "Read/write throughput with LSM-tree optimization" }
      ]
    },
    {
      title: "US Stock Movement Prediction",
      featured: false,
      oneLiner: "Neural network vs LightGBM on residual return signs.",
      details: [
        "Compared Neural Net, LightGBM, RF on ~745k train / ~320k test dataset with 74 features",
        "Best NN accuracy ≈ 0.5238 vs LightGBM ≈ 0.5208 on challenge data"
      ],
      tech: ["Neural Networks", "LightGBM", "Random Forest", "Python", "Pandas"],
      links: { repo: "" },
      images: [
        { src: "/images/stocks/preprocessing.png", alt: "Data preprocessing pipeline", caption: "Feature engineering and missing value handling pipeline" },
        { src: "/images/stocks/comparison.png", alt: "Model comparison", caption: "Neural Network (52.38%) vs LightGBM (52.08%) accuracy comparison" }
      ]
    }
  ],
  contact: {
    email: "namratanyams98@gmail.com",
    github: "https://github.com/NamrataNyam",
    linkedin: "https://www.linkedin.com/in/namrata-nyamagoudar-07a694176"
  }
};
