export const siteConfig = {
  shortName: "Cheng Na",
  role: "M.Eng. Student in Software Engineering",
  affiliation: "Huazhong University of Science and Technology (HUST)",
  location: "Wuhan, China",
  tagline:
    "Generative AI · Multimodal Learning · Medical AI · AI for Scientific Discovery",
  intro:
    "I am a master's student in Software Engineering at Huazhong University of Science and Technology. My research interests focus on generative models and multimodal learning, with an emphasis on their applications to scientific and medical domains.",
  email: "chengnamerge@163.com",
  github: "https://github.com/dashboard",
  scholar: "https://scholar.google.com/",
  cv: "/CV.pdf",
  avatar: "/picture.jpg"
};

export const researchAreas = [
  {
    title: "Generative AI",
    text: "Diffusion models, GANs, conditional generation, and physics-guided generative modeling for inverse design."
  },
  {
    title: "Multimodal & Medical AI",
    text: "Vision-language models, LLM agents, and multimodal reasoning for medical and scientific applications."
  },
  {
    title: "AI for Scientific Discovery",
    text: "Learning-based modeling and generation for structured scientific data, including materials and geometric design."
  }
];

export const publications = [
  {
    year: "2026",
    title:
      "A CVAE-enhanced generative adversarial network for end-to-end designs of auxetic metamaterials using NURBS control-point density representations",
    authors: "Na Cheng, et al.",
    venue: "Composite Structures",
    status: "Accepted / In publication",
    description:
      "A generative framework for end-to-end inverse design of auxetic metamaterials using NURBS control-point density representations, combining CVAE-based data augmentation, property prediction, and conditional adversarial generation.",
    links: [
      { label: "Paper", url: "#" }
    ]
  },
  {
    year: "2026",
    title:
      "Physics-Guided Transfer Diffusion for Data-Efficient Inverse Design of Auxetic Metamaterials",
    authors: "Na Cheng, et al.",
    venue: "Manuscript in preparation",
    status: "In preparation",
    description:
      "A physics-guided diffusion framework exploring transfer learning, universal guidance, and physical-property objectives for data-efficient inverse design.",
    links: []
  }
];

export const projects = [
  {
    title: "Physics-Guided Transfer Diffusion",
    category: "Generative AI · Scientific Discovery",
    period: "2026 — Present",
    text:
      "Exploring transfer diffusion and physics-guided sampling for data-efficient inverse design of auxetic metamaterials.",
    tags: ["Diffusion", "PyTorch", "Physics Guidance"]
  },
  {
    title: "Generative Inverse Design of Auxetic Metamaterials",
    category: "Generative Models",
    period: "2025 — 2026",
    text:
      "Developed a CVAE-augmented conditional GAN pipeline for generating metamaterial structures represented by NURBS control-point density matrices.",
    tags: ["CVAE", "CWGAN-GP", "NURBS", "ResNet"]
  },
  {
    title: "LLM-based Text-to-CAD Generation",
    category: "LLM · CAD",
    period: "2025 — Present",
    text:
      "Investigating large-language-model-based workflows that translate natural-language design requirements into CAD modeling procedures and reconstructed 3D geometry.",
    tags: ["LLM", "Transformer", "Text-to-CAD", "CAD"]
  },
  {
    title: "Multi-Agent Multi-Task-Oriented Communication System",
    category: "LLM Agents",
    period: "2025 — Present",
    text:
      "Exploring tool-augmented LLM agents, resource-aware scheduling, retrieval, and multi-agent workflows for complex task execution.",
    tags: ["LangGraph", "RAG", "Agents", "Tool Calling"]
  }
];

export const skills = [
  "Transformer",
  "VLM",
  "Diffusion Models",
  "Agent",
  "RAG",
  "LangGraph",
  "PyTorch",
  "Java",
  "C/C++"
];
