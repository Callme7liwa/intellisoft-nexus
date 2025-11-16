"use client";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  category: "website" | "mobile" | "computer-vision";
  featured?: boolean;
}

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    image: string;
    imageCount: number;
    imagePrefix: string;
    liveUrl?: string;
    githubUrl?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
    category: "website" | "mobile" | "ai & data";
    featured?: boolean;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "website" | "mobile" | "computer-vision">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 11, // Assuming this is your next project after Zinooo
      title: "VerseLink - Music Culture & Collaboration Hub",
      description: "An interactive web app connecting music fans and artists, featuring lyrics, community engagement, and a unique artist collaboration engine.",
      longDescription: "Developed VerseLink, a comprehensive web application designed to be the central hub for music culture. The platform offers a rich, interactive experience for fans, allowing them to create and share custom 'Lyrics Cards' from diverse templates, discover new artists, explore discographies, and vote for monthly 'Artist/Song/Album of the Month'. For artists, VerseLink provides a powerful professional toolkit to manage their profiles, upload music, and utilize a unique collaboration engine to send, receive, and manage joint project requests from both fans and other artists. This platform aims to foster community engagement and facilitate real-world artistic partnerships, addressing the needs for both fan interaction and professional networking within the music industry.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary", "JWT", "REST API", "Styled Components"],
      image: `/images/verselink/verselink_1.png`, // Placeholder for a main hero image
      images: Array.from({length: 8}, (_, i) => `/images/verselink/verselink_${i + 1}.png`), // Placeholder for a gallery of images
      githubUrl: "https://github.com/yourusername/verselink", // Placeholder
      liveUrl: "https://verselink.com", // Placeholder
      category: "website",
      featured: false // Or false, depending on your preference
    },
    {
      id: 2,
      title: "Zinooo - Moroccan E-Commerce Platform",
      description: "Localized e-commerce solution tailored for Moroccan market with GraphQL architecture",
      longDescription: "Developed Zinooo, a comprehensive e-commerce web application specifically designed for Moroccan customers and market needs. Built with modern technologies including Spring Boot for robust backend services, Angular for dynamic frontend experiences, and GraphQL for efficient data querying. The platform incorporates Moroccan-specific features such as local payment methods, Arabic/French language support, regional shipping options, and culturally relevant product categories. The application addresses unique challenges of the Moroccan e-commerce market including mobile-first design for prevalent smartphone usage, integration with local banking systems, and support for traditional commerce practices alongside digital innovation.",
      technologies: ["Spring Boot", "Angular", "GraphQL", "Java", "TypeScript", "PostgreSQL", "JWT", "Payment Gateways"],
      image: `/images/zinoo/zinoo_1.png`,
      images: Array.from({length: 6}, (_, i) => `/images/zinoo/zinoo_${i + 1}.png`),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false
    },
    {
      id: 2,
      title: "Moroccan Cultural Heritage Platform",
      description: "Interactive web platform for cultural preservation and tourism",
      longDescription: "Developed an interactive web platform dedicated to preserving and promoting Morocco's cultural treasures. Collaborated closely with cultural heritage experts to create an educational experience for global visitors, featuring historical sites, museums, and cultural events through immersive photos, videos, and detailed descriptions. The platform included practical travel planning tools to enhance visitor experiences and contributed to cultural preservation efforts while promoting Moroccan cultural tourism worldwide.",
      technologies: ["Laravel", "Javascript", "Mysql"],
  image: `/images/patrimoin/patri_1.png`,
  images: Array.from({length: 16}, (_, i) => `/images/patrimoin/patri_${i + 1}.png`),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false
    },
    {
      id: 3,
      title: "Microservices Task Management System",
      description: "Full-stack task management application with .NET microservices and 3D interface",
      longDescription: "Developed a comprehensive task management application to explore .NET microservices architecture and advanced frontend technologies. The project features a distributed backend built with .NET Core microservices, demonstrating scalable service communication, data persistence, and API gateway patterns. The frontend showcases innovative 3D user interface elements using Three.js, creating an engaging and interactive user experience for task visualization and management. This project served as a technical exploration of modern development practices, combining enterprise-grade backend architecture with cutting-edge frontend animation techniques.",
      technologies: [".NET Core", "C#", "Three.js", "React", "Docker", "PostgreSQL"],
  image: `/images/tasks/1.jpg`,
  images: Array.from({length: 6}, (_, i) => `/images/tasks/${i + 1}.jpg`),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false
    },
    {
      id: 4,
      title: "Advanced Audio Streaming Platform",
      description: "Full-stack streaming platform with integrated marketing analytics and targeted advertising",
      longDescription: "Developed an enhanced iteration of an audio streaming platform, incorporating advanced marketing capabilities and data analytics. The platform features comprehensive user analytics, customizable branding options, and sophisticated targeted advertising systems. Built with a modern tech stack including React.js for dynamic frontend experiences, Spring Boot for robust backend services, and MongoDB for scalable data management. The project demonstrates continuous learning and adaptation to emerging web technologies, integrating complex features such as real-time user behavior tracking, personalized content recommendations, and revenue optimization through strategic ad placement. This ongoing development project showcases commitment to staying current with industry trends while delivering enterprise-grade streaming solutions.",
      technologies: ["React.js", "Spring Boot", "MongoDB"],
  image: `/images/rap/rap_6.jpeg`,
  images: Array.from({length: 11}, (_, i) => `/images/rap/rap_${i + 1}.jpeg`),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false
    },
    {
      id: 5,
      title: "Enterprise Project Management Platform",
      description: "Comprehensive web-based solution for project planning and team collaboration",
      longDescription: "Designed and developed a comprehensive web-based project management application for an enterprise client, delivering a centralized solution for project planning, team collaboration, and progress tracking. The platform streamlined project workflows, enhanced cross-functional communication, and provided real-time visibility into project status and deliverables. Conducted stakeholder interviews and requirements gathering to understand specific business needs, resulting in an intuitive user interface optimized for diverse user roles and measurable improvements in team productivity.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Socket.io", "JWT", "Docker", "Redis"],
  image: `/images/projects/project_1.png`,
  images: Array.from({length: 8}, (_, i) => `/images/projects/project_${i + 1}.png`),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false
    },
    {
      id: 6,
      title: "School Management Information System",
      description: "Comprehensive web-based platform for academic administration and student tracking",
      longDescription: "Designed and developed a comprehensive school management system that centralizes student data, teacher information, grade management, and attendance tracking. The platform streamlined academic processes, enhanced communication between students and educators, and provided real-time insights into student progress and performance. Collaborated extensively with school administrators to conduct requirements analysis and ensure the solution addressed specific institutional needs. The system features role-based access control, automated reporting capabilities, parent-student portals, and integrated communication tools. This solution significantly improved administrative efficiency while providing educators with better tools for student monitoring and engagement.",
      technologies: ["React js", "Spring Boot", "Express.js", "MySQL", "JWT", "PDF Generation", "Email Integration"],
      image: `/images/school/image_3.png`,
      images: Array.from({length: 8}, (_, i) => `/images/school/image_${i + 1}.png`),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false
    },
    {
      id: 7,
      title: "Peer-to-Peer Package Delivery Platform",
      description: "Mobile marketplace connecting package senders with travelers for cost-effective delivery",
      longDescription: "Developed an innovative mobile application that creates a peer-to-peer marketplace for package delivery services. The platform connects individuals who need to send packages with travelers heading to the same destinations, enabling cost-effective and efficient delivery solutions. The application features secure user verification, real-time tracking, integrated payment processing, and comprehensive safety protocols. Built with a focus on trust and security, the platform includes user ratings, identity verification, and insurance integration to ensure safe transactions. This solution addresses the growing demand for flexible, community-driven logistics while providing travelers with opportunities to monetize their journeys.",
      technologies: ["Flutter", "Spring Boot", "MySQL", "Stripe", "Google Maps API", "JWT", "Socket.io"],
  image: `/images/deliver/1.jpg`,
  images: Array.from({length: 10}, (_, i) => `/images/deliver/${i + 1}.jpg`),
      githubUrl: "",
      appStoreUrl: "",
      playStoreUrl: "",
      category: "mobile",
      featured: false
    },
    {
      id: 8,
      title: "Smart Baby Monitoring System",
      description: "IoT-enabled infant monitoring platform with machine learning behavioral analysis",
      longDescription: "Currently developing an advanced baby monitoring system that integrates Android mobile development, machine learning algorithms, and Internet of Things technologies. The system utilizes motion and temperature sensors to continuously monitor infant behavior patterns and environmental conditions, providing real-time alerts to parents through a dedicated mobile application. The project incorporates machine learning models for behavioral pattern recognition, enabling the system to distinguish between normal sleep movements and potential concerns. This comprehensive solution combines hardware sensor integration, cloud-based data processing, and intuitive mobile interfaces to enhance infant safety and provide parents with peace of mind through intelligent monitoring capabilities.",
      technologies: ["Android Studio", "Java", "TensorFlow Lite", "IoT Sensors", "Firebase", "Machine Learning", "Bluetooth", "Real-time Analytics"],
  image: `/images/baby/baby_1.png`,
  images: Array.from({length: 6}, (_, i) => `/images/baby/baby_${i + 1}.png`),
      githubUrl: "",
      category: "mobile",
      featured: false
    },
    {
      id: 9,
      title: "Street Football Community Platform",
      description: "Mobile marketplace connecting street football teams and individual players",
      longDescription: "Engineered an advanced, intelligent baby monitoring system by integrating Android mobile development, machine learning algorithms, and Internet of Things (IoT) technologies. The system leveraged motion and temperature sensors to continuously monitor infant behavior and environmental conditions, delivering real-time alerts via a dedicated mobile application. Machine learning models were implemented for behavioral pattern recognition, enabling the system to accurately distinguish between normal sleep movements and potential concerns. This comprehensive solution successfully combined hardware sensor integration, cloud-based data processing, and an intuitive mobile interface to enhance infant safety.",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Push Notifications", "Geolocation", "Real-time Chat", "User Authentication"],
  image: `/images/foot/foot_1.jpeg`,
  images: Array.from({length: 2}, (_, i) => `/images/foot/foot_${i + 1}.jpeg`),
      githubUrl: "",
      appStoreUrl: "",
      playStoreUrl: "",
      category: "mobile",
      featured: false
    },
    {
      id: 12,
      title: "Tervela – AI-Powered Data Cleaning Assistant",
      description: "Web app that lets users clean and explore CSV/Excel data through a conversational AI agent",
      longDescription:
        "Tervela is a web-based data assistant that allows non-technical and technical users to clean, transform, and explore CSV/Excel data simply by chatting with an AI agent. The React frontend provides a chat interface where users can upload a dataset and describe what they want in natural language (e.g., remove duplicates, filter rows, create new columns, fix missing values, group and aggregate). Behind the scenes, a Python backend powered by LangGraph converts these instructions into safe, executable Pandas code, applies the transformations step by step, and returns both the updated data preview and a clear explanation of what changed. The system keeps a history of actions, supports iterative refinements, and can generate basic visualizations so users can quickly understand the impact of their transformations. Tervela is designed as a practical GenAI data tool: instead of writing complex scripts, users talk to the agent and let it handle the cleaning logic while still keeping full control over their data.",
      technologies: [
        "React",
        "TypeScript",
        "FastAPI",
        "Python",
        "Pandas",
        "LangGraph",
        "LLM Integration",
        "REST API"
      ],
      image: `/images/TervelA/image_1.png`,
      images: Array.from({ length: 6 }, (_, i) => `/images/TervelA/image_${i + 1}.png`),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false
    },
    {
      id: 2,
      title: "AI-Powered Person Tracking & Identification in Video",
      description: "End-to-end system to stabilize videos, track multiple people and recognize known faces in real time",
      longDescription:
        "This project is an end-to-end computer vision pipeline for tracking people in video and identifying known individuals. The system first stabilizes and enhances the input video frame by frame to reduce shaking and improve visual quality. Then, a YOLO-based detector is used to detect people in each frame, and DeepSORT is applied to assign consistent IDs over time, allowing each person to be tracked across the entire sequence. On top of that, a dedicated face analysis module runs on detected face regions to recognize known individuals and associate their identities with the corresponding tracks. The codebase is modular, with separate components for detection, tracking and face analytics, making it easy to extend or adapt to different cameras or environments. This solution is suitable for security monitoring, people flow analysis, event analytics or any use case where you need to know who appears in a video and how they move over time.",
      technologies: [
        "Python",
        "OpenCV",
        "YOLO",
        "DeepSORT",
        "Face Recognition / FaceAnalysis",
        "NumPy"
      ],
      image: `/images/person-tracking/image_1.png`,
      images: Array.from({ length: 2 }, (_, i) => `/images/person-tracking/image_${i + 1}.png`),
      githubUrl: "",
      liveUrl: "",
      category: "computer-vision",
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }

    return (
        <section id="portfolio" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-gradient">Work</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Real projects. Real results. See how we've helped businesses transform.
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {[
                        {key: "all", label: "All Projects", icon: <Globe size={16}/>},
                        {key: "website", label: "Web Apps", icon: <Globe size={16}/>},
                        {key: "mobile", label: "Mobile Apps", icon: <Smartphone size={16}/>},
                        {key: "ai & data", label: "AI & Data", icon: <Stars size={16}/>},
                    ].map((category) => (
                        <button
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key as any)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                                selectedCategory === category.key
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                            }`}
                        >
                            {category.icon}
                            {category.label}
                        </button>
                    ))}
                </div>

                <PortfolioCaroussel projects={filteredProjects}/>
            </div>
        </section>
    );
};

export default Portfolio;