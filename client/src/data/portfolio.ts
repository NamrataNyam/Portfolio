export interface Experience {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tech?: string[];
  images?: { src: string; alt: string; caption?: string }[];
  logo?: string;
}

export interface Research {
  title: string;
  summary: string;
  dates?: string;
  tech?: string[];
  details?: string[];
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

export interface OpenSourceContribution {
  title: string;
  description: string;
  platform: string;
  type: "dataset" | "code" | "model" | "paper";
  stats: {
    downloads?: number;
    views?: number;
    upvotes?: number;
    forks?: number;
    stars?: number;
    citations?: number;
  };
  tech: string[];
  link: string;
  highlights: string[];
  datePublished: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  link?: string;
  description: string;
  level: "Professional" | "Associate" | "Expert" | "Specialist" | "Course";
  badge?: string;
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
  about: "I am a Machine Learning Engineer and Data Scientist with a Master’s in Data Science from UC Irvine and a B.E. in Computer Science from KLE Technological University. My experience spans from building decision-engine pipelines at Deloitte to leading AI innovation as a Founding Engineer at Hivekind.ai, where I developed scalable Snowflake platforms, RAG pipelines with Cortex AI and AWS Bedrock, and agentic AI systems that streamlined onboarding and sales workflows. Skilled in Python, SQL, cloud platforms (AWS, Azure), and ML frameworks (PyTorch, TensorFlow, HuggingFace), I specialize in Generative AI, data engineering, and deploying cloud-native solutions that drive measurable business impact.",
  experience: [
    {
      company: "Hivekind.ai",
      role: "Data Science Analyst (Founding Engineer)",
      location: "San Francisco, USA",
      start: "Jun 2025",
      end: "Mar 2026",
      bullets: [
        "Architected a multi-tenant Snowflake platform with dynamic database/schema provisioning, Snowflake OpenFlow, RBAC, and automated onboarding workflows — reducing customer setup time by 80%.",
        "Developed Python Snowpark ETL pipelines to normalize CRM data into fact/dimension star schema, implemented lead scoring models with feature engineering and AutoML to prioritize high-value opportunities.",
        "Built a modular LangChain + LangGraph agentic ecosystem leveraging MCP with n8n to orchestrate multi-agent workflows and invoke the Snowflake tool for both structured and vector queries.",
        "Implemented context management, smart caching, k-shot learning, and optimized prompt engineering to reduce redundant LLM calls and lower token usage.",
        "Designed and deployed a RAG pipeline using Snowflake Cortex AI embeddings + AWS Bedrock models,to vectorize communication transcripts and generate personalized automated emails with RLHF, reducing SDR effort by 70%.",
        "Deployed TypeScript + React (Vite) frontends and Node.js + Python FastAPI services as Docker containers, stored in AWS ECR and orchestrated via ECS Fargate, EC2, and AWS Lambda.",
        "Implemented caching, UI streaming for reasoning traces, and set up GitHub-integrated CI/CD pipelines with Dev/Test/Main branch workflows for automated builds and zero-downtime deployments."
      ],
      tech: ["Snowflake", "LangChain", "AWS", "Docker", "TypeScript", "Python", "React", "Node.js", "FastAPI", "n8n", "MCP", "RLHF", "Cortex AI", "AWS Bedrock", "Snowpark", "AutoML", "Feature Engineering"],
      logo: "/images/company logos/hivekind.jpeg"
    },
    {
      company: "Deloitte Consulting",
      role: "Analyst",
      location: "Bengaluru, India",
      start: "Sep 2021",
      end: "Jul 2023",
      bullets: [
        "Worked as Cloud Consultant to build Azure DevOps CI/CD pipelines using Powershell and YAML to build andrelease features to higher environments for Commercial off the shelf(COTS) decision engine flow.",
        "Performed application and data migration from on-prem to Azure, deploying the web app to Azure App Service and transferring MS SQL database to Azure SQL.",
        "Integrated web application with risk analytics decision engine via REST APIs and Azure Service Bus Queues, containerized the application using Docker and Azure Kubernetes Services.",
        "Collaborated with the .NET team to build a custom ETL pipeline using ASP.NET and C#.NET to extract and parse hierarchical XML data from the web application.",
        "Utilized Azure Function Apps to normalize hierarchical XML data with in-memory caching and load structured data to Azure SQL, improved data backup efficiency by 70% with Az-Disk Snapshots.",
        "Developed 20+ microservices for approval, decline, and withdrawal workflows in a vehicle financing system in Angular and Javascript.",
        "Contributed to configuring Azure AD Authentication to enable controlled access for making web app changes, with SSO and token-based access; enforced RBAC for secure data access.",
        "Simulated and validated failure recovery across Kubernetes pods and validated auto-restart, scaling, and health checks.",
        "Investigated performance bottlenecks and SQL query inefficiencies using Azure Application Insights; implemented telemetry alerts and log-based troubleshooting to reduce MTTR by 35%."
      ],
      tech: ["Azure", "DevOps", "Angular", "SQL Server", "Docker", "Kubernetes", "Powershell", "YAML"],
      logo: "/images/company logos/deloitte.png"
    },
    {
      company: "Spookfish Innovations",
      role: "SDE Intern",
      location: "Bengaluru, India",
      start: "Mar 2021",
      end: "June 2021",
      bullets: [
        "Built a real-time object detection and tracking model using YOLOV4 using Darknet framework and DeepSORT to detect and track anomalies and foreign objects for tablet packaging machine in a Linux environment(Ubuntu).",
        "Developed framework for multi-object detection and tracking, employing Cosine metric learning and Kalman filters to track identical tablets/capsules and foreign objects, used Attention Maps improving detection accuracy by 30%.",
        "Achieved an inference rate of 0.28 seconds per frame, facilitating real-time detection at 20 frames per second.",
        "Built a React.js dashboard with WebSockets for real-time video streaming and anomaly alerts, integrating FastAPI and MongoDB for logging."
      ],
      tech: ["YOLOv4", "DeepSORT", "OpenCV", "Python", "Computer Vision"],
      logo: "/images/company logos/spookfish-logo-b.png",
      images: [
        { src: "/images/spookfish/spook1.png", alt: "Spookfish project overview", caption: "Computer vision pipeline overview and architecture" },
        { src: "/images/spookfish/spook2.png", alt: "Object detection results", caption: "YOLOv4 detection results and tracking visualization" },
        { src: "/images/spookfish/spook3.png", alt: "Performance metrics", caption: "Real-time detection performance and FPS analysis" },
        { src: "/images/spookfish/spook4.png", alt: "Dashboard interface", caption: "Real-time video streaming" }
      ]
    }
  ],
  research: [
    {
      title: "UC Irvine — Psychoacoustics ML Research",
      summary: "Worked as a Research Assistant in the Psychoacoustics Lab (Dr. Virginia Richards, UC Irvine) to model human auditory perception using machine learning and signal processing. Designed methods to estimate auditory filter bandwidths from psychoacoustic experiments and applied ML models for auditory classification.",
      dates: "Jun 2024–Jun 2025",
      tech: ["MATLAB", "torchaudio", "PyTorch", "SincNet-CNN", "Audio Spectrogram Transformer (AST)", "Lasso-Lars Regression"],
      details: [
        "Preprocessed tonal stimuli with amplitude and frequency modulation normalization using MATLAB.",
        "Applied Lasso-Lars regression for feature selection and baseline signal-vs-noise classification.",
        "Implemented a PyTorch-based SincNet-CNN trained with NLLLoss to capture fine-grained time-domain features.",
        "Fine-tuned an Audio Spectrogram Transformer (AST) on spectrogram representations for time-frequency modeling.",
        "Lasso-Lars regression baseline: ~60% signal-vs-noise classification accuracy.",
        "SincNet-CNN: Improved classification by +20% accuracy over baseline.",
        "AST model: Demonstrated strong generalization for auditory time-frequency classification tasks."
      ],

    },
    {
      title: "AIIMS–IIT Delhi Research: Vision-Based Micro-Suturing Assessment",
      summary: "Collaborated with AIIMS–IIT Delhi on a research project to develop a vision-based evaluation system for micro-suturing performed by trainee neurosurgeons. Traditional apprenticeship training is limited by time, cost, and patient safety concerns. This project introduced an automated, objective assessment framework using image processing and machine learning.",
      details: [
        "The system detects sutures from training images and evaluates their effectiveness based on surgical parameters such as inter-suture distance, angulation, size, and placement accuracy.",
        "Explored multiple computer vision approaches: Probabilistic Hough Transform, Adaptive Thresholding, Contour-based detection, Haar Cascade, and HOG-SVM.",
        "Built a HOG-SVM classifier to robustly detect sutures with minimal tuning requirements.",
        "Generated evaluation scores for surgical quality based on uniformity of inter-suture distance, accuracy of suture positioning, consistency in size, and symmetry and angulation.",
        "Classical methods (Hough, contours, Haar Cascade) showed limited generalization. HOG-SVM achieved the highest accuracy, with a Mean Average Precision (mAP) of 67.34% at IoU = 0.3.",
        "Provided interpretable evaluation metrics suitable for integration into training protocols."
      ],
      tech: ["OpenCV", "HOG-SVM", "Haar Cascade", "Image Processing", "Feature Engineering", "Computer Vision"],
      images: [
        { src: "/images/research/hog-svm/hog_1.png", alt: "HOG-SVM suture detection", caption: "HOG-SVM detection and scoring overlay for micro-suturing assessment" },
        { src: "/images/research/hog-svm/hog2.png", alt: "Micro-suturing evaluation results", caption: "Suture detection at different magnification levels with bounding boxes" }
      ]
    }
  ],
  projects: [
    {
      title: "Humma.AI — Conversational Empathy Enhancement",
      featured: true,
      oneLiner: "Fine-Tuning LLMs for Improved Emotional Intelligence",
      details: [
        "Built an empathetic AI chatbot by fine-tuning LLaMA 3.1 (8B) with PEFT techniques (LoRA, FSDP) and persona-based prompt engineering",
        "Designed a custom empathy evaluation metric (EQ60) using VADER sentiment analysis and an Emotion Analyzer, enabling measurable improvements in emotional response quality",
        "The fine-tuned model significantly outperformed baseline LLMs on empathy scores, demonstrating the impact of targeted fine-tuning and reinforcement learning in conversational AI"
      ],
      tech: ["LLaMA 3.1 (8B)", "LoRA", "FSDP", "PEFT", "VADER", "Emotion Analyzer", "AWS SageMaker", "Docker", "ReactJS", "AWS EC2"],
      links: { demo: "https://humma.ai/empathetic-ai.html", repo: "" },
      images: [
        { src: "/images/humma/r1_h.png", alt: "Empathetic AI chatbot interface", caption: "Real-time empathetic AI chatbot interface for customer support and coaching" },
        { src: "/images/humma/r2_h.png", alt: "EQ60 evaluation results", caption: "EQ60 improvement: 53 vs 45 baseline (+18% improvement)" },
        { src: "/images/humma/r3_h.png", alt: "VADER sentiment analysis", caption: "VADER sentiment analysis showing improved emotional response patterns" },
        { src: "/images/humma/r4_h.png", alt: "Model architecture and deployment", caption: "PEFT fine-tuning pipeline with LoRA, FSDP and AWS deployment architecture" }
      ]
    },
    {
      title: "Occlusion Removal & Inpainting for 3D Heritage Reconstruction",
      featured: true,
      oneLiner: "Deep Learning for Digital Preservation of Heritage Sites",
      details: [
        "Developed a framework to remove occlusions and inpaint missing regions in crowd-sourced images of Indian heritage sites",
        "Used Mask R-CNN for instance segmentation and occlusion localization, followed by a GAN-based inpainting module with contextual attention",
        "The cleaned and inpainted images enable realistic 3D reconstruction of monuments, aiding digital preservation"
      ],
      tech: ["Python", "Mask R-CNN", "DCGAN", "WGAN-GP", "Contextual Attention GANs"],
      links: { repo: "" },
      images: [
        { src: "/images/inpaint/Screenshot 2025-08-19 231701.png", alt: "Heritage site inpainting results", caption: "Before and after inpainting of heritage site with occlusion removal" },
        { src: "/images/inpaint/r1.png", alt: "Inpainting reconstruction results", caption: "GAN-based inpainting with contextual attention reconstruction" },
        { src: "/images/inpaint/archi.png", alt: "Model architecture diagram", caption: "Mask R-CNN + Contextual Attention GAN pipeline architecture" }
      ]
    },
    {
      title: "Mini DynamoDB — Decentralized Key-Value Store",
      featured: true,
      oneLiner: "Distributed Systems with C++, gRPC, and ZooKeeper",
      details: [
        "Developed a distributed key-value store inspired by Amazon DynamoDB, implementing consistent hashing for dynamic sharding and replication. Integrated gRPC for high-performance inter-node communication and ZooKeeper for leader election, metadata management, and fault tolerance.",
        "The system ensures scalability, availability, and resilience through decentralized coordination, gossip-based consistency, and optimized LSM-tree storage.",
        "Achieved low-latency key-value operations under replication. System maintained availability under node failures due to ZooKeeper-based recovery. Storage engine optimizations reduced query time while handling high write loads.",
        "The project successfully demonstrated how core distributed systems concepts—consistent hashing, leader election, gossip protocols, and LSM-trees—can be combined to build a scalable, resilient, and performant key-value store."
      ],
      tech: ["C++", "gRPC", "ZooKeeper", "LSM-trees", "Gossip Protocol", "Distributed Systems"],
      links: { repo: "" },
      images: [
        { src: "/images/kv/Screenshot 2025-08-20 104604.png", alt: "ZooKeeper distributed architecture", caption: "ZooKeeper service with leader election, server communication, and client connections" }
      ]
    },
    {
      title: "Stock Market Movement Prediction — Data Mining & Neural Networks for Financial Forecasting",
      featured: true,
      oneLiner: "Developed a deep learning-based system to predict daily stock movements on the U.S. market using a dataset of over 1 million records (700 stocks × 700 days).",
      details: [
        "Applied data preprocessing, interpolation for missing values, and feature grouping, followed by model experimentation with Polynomial Regression, Random Forest, LightGBM, and Neural Networks",
        "The 9-layer Neural Network achieved the best performance, improving accuracy over baseline models with 52.38% accuracy vs LightGBM's 52.08%",
        "Handled missing values with linear interpolation, dropped anonymized date attributes, and grouped equities for optimal feature engineering"
      ],
      tech: ["Python", "Neural Networks", "LightGBM", "Random Forest", "Data Preprocessing", "Linear Interpolation"],
      links: { repo: "" },
      images: [
        { src: "/images/stocks/stock1.png", alt: "Predicted Market Direction vs Close Price", caption: "Neural Network predictions showing market direction accuracy over time" }
      ]
    }
  ],
  openSource: [
    {
      title: "Wealth Segmentation of U.S. Zip Codes",
      description: "This dataset provides a wealth-tier classification of U.S. ZIP codes for high income brackets using IRS income data.",
      platform: "Kaggle",
      type: "dataset" as const,
      stats: {
        downloads: 1200,
        views: 8500,
        upvotes: 45
      },
      tech: ["Demographics", "Economic Data", "GIS", "Census Data", "Data Analytics"],
      link: "https://www.kaggle.com/datasets/namratanyam/wealth-segmentation-of-u-s-zip-codes",
      highlights: [
        "33,000+ U.S. zip code records with demographic and economic indicators",
        "Wealth segmentation features including median income, property values, education levels",
        "Segmenting markets for B2B/B2C outreach and CRM lead enrichment",
        "Territory planning and resource allocation",
        "Enables research in urban planning, market analysis, and socioeconomic studies"
      ],
      datePublished: "2024"
    }
  ],
  certifications: [
    {
      title: "AZ-204: Developing Solutions for Microsoft Azure",
      issuer: "Microsoft",
      date: "2020",
      credentialId: "AZ-204",
      skills: ["Azure Development", "Cloud Solutions", "Microsoft Azure"],
      link: "https://learn.microsoft.com/en-us/certifications/exams/az-204/",
      description: "Microsoft Certified Azure Developer Associate certification for developing cloud solutions.",
      level: "Associate" as const,
      badge: "/images/cert/featured-image.png"
    },
    {
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      issuer: "DeepLearning.AI",
      date: "2020",
      credentialId: "Coursera-042d1f566d63c41f631b83f359406c42",
      skills: ["Deep Learning", "Neural Networks", "Hyperparameter Tuning", "Optimization"],
      link: "https://coursera.org/share/042d1f566d63c41f631b83f359406c42",
      description: "Course certificate for deep neural network optimization and regularization techniques.",
      level: "Course" as const
    },
    {
      title: "AWS Fundamentals: Going Cloud-Native",
      issuer: "Amazon Web Services",
      date: "2020",
      credentialId: "Coursera-f8c4fd32d2f049800202d92d42213eae",
      skills: ["AWS", "Cloud Computing", "Cloud-Native Architecture"],
      link: "https://coursera.org/share/f8c4fd32d2f049800202d92d42213eae",
      description: "Course certificate for AWS cloud-native fundamentals and architecture.",
      level: "Course" as const,
      badge: "/images/cert/aws.png"
    },
    {
      title: "TCP/IP and Advanced Topics",
      issuer: "University of Colorado System",
      date: "2020",
      credentialId: "Coursera-dedb7f604923952da84103170f283dd3",
      skills: ["TCP/IP", "Networking", "Network Protocols", "OSI Models"],
      link: "https://coursera.org/share/dedb7f604923952da84103170f283dd3",
      description: "Course certificate for TCP/IP networking and advanced network topics.",
      level: "Course" as const
    },
    {
      title: "Advanced Deployment Scenarios with TensorFlow",
      issuer: "DeepLearning.AI",
      date: "2020",
      credentialId: "Coursera-39f8bcb9942d1a07ea96faa981667041",
      skills: ["Deep Learning", "TensorFlow", "MLOps", "Model Deployment"],
      link: "https://coursera.org/share/39f8bcb9942d1a07ea96faa981667041",
      description: "Course certificate for advanced TensorFlow deployment and MLOps.",
      level: "Course" as const
    },
    {
      title: "Deep Learning in Computer Vision",
      issuer: "DeepLearning.AI",
      date: "2020",
      credentialId: "Coursera-0f6a885ffd96db301ff76e082c39de47",
      skills: ["Computer Vision", "Deep Learning", "Neural Networks"],
      link: "https://coursera.org/share/0f6a885ffd96db301ff76e082c39de47",
      description: "Course certificate for deep learning applications in computer vision.",
      level: "Course" as const
    },
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      issuer: "The Hong Kong University of Science and Technology",
      date: "2020",
      credentialId: "Coursera-6477869aaf9e775650bb65c49eb4b7e6",
      skills: ["Node.js", "Express.js", "MongoDB", "Backend Development"],
      link: "https://coursera.org/share/6477869aaf9e775650bb65c49eb4b7e6",
      description: "Course certificate for server-side development with Node.js ecosystem.",
      level: "Course" as const
    },
    {
      title: "Peer-to-Peer Protocols and Local Area Networks",
      issuer: "University of Colorado System",
      date: "2020",
      credentialId: "Coursera-0a4b4fd2646f193dd86532a20cd54f69",
      skills: ["P2P Protocols", "LAN", "Networking", "Network Architecture"],
      link: "https://coursera.org/share/0a4b4fd2646f193dd86532a20cd54f69",
      description: "Course certificate for peer-to-peer protocols and local area networks.",
      level: "Course" as const
    }
  ],
  contact: {
    email: "namratanyams98@gmail.com",
    github: "https://github.com/NamrataNyam",
    linkedin: "https://www.linkedin.com/in/namrata-nyamagoudar-07a694176"
  }
};
