import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Globe,
  Download,
  Github,
  Stars,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  category: "website" | "mobile" | "ai & data";
  featured?: boolean;
}

interface TechLogo {
  name: string;
  icon: string;
  color: string;
}

const techLogos: TechLogo[] = [
  { name: "React", icon: "⚛️", color: "text-blue-500" },
  { name: "React Native", icon: "📱", color: "text-blue-600" },
  { name: "Vue.js", icon: "🟢", color: "text-green-500" },
  { name: "Angular", icon: "🅰️", color: "text-red-500" },
  { name: "Node.js", icon: "🟢", color: "text-green-600" },
  { name: "Python", icon: "🐍", color: "text-yellow-500" },
  { name: "TypeScript", icon: "🔷", color: "text-blue-600" },
  { name: "JavaScript", icon: "🟡", color: "text-yellow-500" },
  { name: "Swift", icon: "🍎", color: "text-orange-500" },
  { name: "Kotlin", icon: "🤖", color: "text-purple-500" },
  { name: "Flutter", icon: "🦋", color: "text-blue-400" },
  { name: "Firebase", icon: "🔥", color: "text-orange-500" },
  { name: "MongoDB", icon: "🍃", color: "text-green-600" },
  { name: "PostgreSQL", icon: "🐘", color: "text-blue-700" },
  { name: "Google Maps API", icon: "🗺️", color: "text-green-500" },
  { name: "Cloudinary", icon: "☁️", color: "text-blue-500" },
  { name: "Express.js", icon: "🚀", color: "text-gray-600" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "website" | "mobile"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 11, // Assuming this is your next project after Zinooo
      title: "VerseLink - Music Culture & Collaboration Hub",
      description:
        "An interactive web app connecting music fans and artists, featuring lyrics, community engagement, and a unique artist collaboration engine.",
      longDescription:
        "Developed VerseLink, a comprehensive web application designed to be the central hub for music culture. The platform offers a rich, interactive experience for fans, allowing them to create and share custom 'Lyrics Cards' from diverse templates, discover new artists, explore discographies, and vote for monthly 'Artist/Song/Album of the Month'. For artists, VerseLink provides a powerful professional toolkit to manage their profiles, upload music, and utilize a unique collaboration engine to send, receive, and manage joint project requests from both fans and other artists. This platform aims to foster community engagement and facilitate real-world artistic partnerships, addressing the needs for both fan interaction and professional networking within the music industry.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Cloudinary",
        "JWT",
        "REST API",
        "Styled Components",
      ],
      image: `/images/verselink/verselink_1.png`, // Placeholder for a main hero image
      images: Array.from(
        { length: 8 },
        (_, i) => `/images/verselink/verselink_${i + 1}.png`
      ), // Placeholder for a gallery of images
      githubUrl: "https://github.com/yourusername/verselink", // Placeholder
      liveUrl: "https://verselink.com", // Placeholder
      category: "website",
      featured: false, // Or false, depending on your preference
    },
    {
      id: 2,
      title: "Zinooo - Moroccan E-Commerce Platform",
      description:
        "Localized e-commerce solution tailored for Moroccan market with GraphQL architecture",
      longDescription:
        "Developed Zinooo, a comprehensive e-commerce web application specifically designed for Moroccan customers and market needs. Built with modern technologies including Spring Boot for robust backend services, Angular for dynamic frontend experiences, and GraphQL for efficient data querying. The platform incorporates Moroccan-specific features such as local payment methods, Arabic/French language support, regional shipping options, and culturally relevant product categories. The application addresses unique challenges of the Moroccan e-commerce market including mobile-first design for prevalent smartphone usage, integration with local banking systems, and support for traditional commerce practices alongside digital innovation.",
      technologies: [
        "Spring Boot",
        "Angular",
        "GraphQL",
        "Java",
        "TypeScript",
        "PostgreSQL",
        "JWT",
        "Payment Gateways",
      ],
      image: `/images/zinoo/zinoo_1.png`,
      images: Array.from(
        { length: 6 },
        (_, i) => `/images/zinoo/zinoo_${i + 1}.png`
      ),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false,
    },
    {
      id: 2,
      title: "Moroccan Cultural Heritage Platform",
      description:
        "Interactive web platform for cultural preservation and tourism",
      longDescription:
        "Developed an interactive web platform dedicated to preserving and promoting Morocco's cultural treasures. Collaborated closely with cultural heritage experts to create an educational experience for global visitors, featuring historical sites, museums, and cultural events through immersive photos, videos, and detailed descriptions. The platform included practical travel planning tools to enhance visitor experiences and contributed to cultural preservation efforts while promoting Moroccan cultural tourism worldwide.",
      technologies: ["Laravel", "Javascript", "Mysql"],
      image: `/images/patrimoin/patri_1.png`,
      images: Array.from(
        { length: 16 },
        (_, i) => `/images/patrimoin/patri_${i + 1}.png`
      ),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false,
    },
    {
      id: 3,
      title: "Microservices Task Management System",
      description:
        "Full-stack task management application with .NET microservices and 3D interface",
      longDescription:
        "Developed a comprehensive task management application to explore .NET microservices architecture and advanced frontend technologies. The project features a distributed backend built with .NET Core microservices, demonstrating scalable service communication, data persistence, and API gateway patterns. The frontend showcases innovative 3D user interface elements using Three.js, creating an engaging and interactive user experience for task visualization and management. This project served as a technical exploration of modern development practices, combining enterprise-grade backend architecture with cutting-edge frontend animation techniques.",
      technologies: [
        ".NET Core",
        "C#",
        "Three.js",
        "React",
        "Docker",
        "PostgreSQL",
      ],
      image: `/images/tasks/1.jpg`,
      images: Array.from({ length: 6 }, (_, i) => `/images/tasks/${i + 1}.jpg`),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false,
    },
    {
      id: 4,
      title: "Advanced Audio Streaming Platform",
      description:
        "Full-stack streaming platform with integrated marketing analytics and targeted advertising",
      longDescription:
        "Developed an enhanced iteration of an audio streaming platform, incorporating advanced marketing capabilities and data analytics. The platform features comprehensive user analytics, customizable branding options, and sophisticated targeted advertising systems. Built with a modern tech stack including React.js for dynamic frontend experiences, Spring Boot for robust backend services, and MongoDB for scalable data management. The project demonstrates continuous learning and adaptation to emerging web technologies, integrating complex features such as real-time user behavior tracking, personalized content recommendations, and revenue optimization through strategic ad placement. This ongoing development project showcases commitment to staying current with industry trends while delivering enterprise-grade streaming solutions.",
      technologies: ["React.js", "Spring Boot", "MongoDB"],
      image: `/images/rap/rap_6.jpeg`,
      images: Array.from(
        { length: 11 },
        (_, i) => `/images/rap/rap_${i + 1}.jpeg`
      ),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false,
    },
    {
      id: 5,
      title: "Enterprise Project Management Platform",
      description:
        "Comprehensive web-based solution for project planning and team collaboration",
      longDescription:
        "Designed and developed a comprehensive web-based project management application for an enterprise client, delivering a centralized solution for project planning, team collaboration, and progress tracking. The platform streamlined project workflows, enhanced cross-functional communication, and provided real-time visibility into project status and deliverables. Conducted stakeholder interviews and requirements gathering to understand specific business needs, resulting in an intuitive user interface optimized for diverse user roles and measurable improvements in team productivity.",
      technologies: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "Socket.io",
        "JWT",
        "Docker",
        "Redis",
      ],
      image: `/images/projects/project_1.png`,
      images: Array.from(
        { length: 8 },
        (_, i) => `/images/projects/project_${i + 1}.png`
      ),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false,
    },
    {
      id: 6,
      title: "School Management Information System",
      description:
        "Comprehensive web-based platform for academic administration and student tracking",
      longDescription:
        "Designed and developed a comprehensive school management system that centralizes student data, teacher information, grade management, and attendance tracking. The platform streamlined academic processes, enhanced communication between students and educators, and provided real-time insights into student progress and performance. Collaborated extensively with school administrators to conduct requirements analysis and ensure the solution addressed specific institutional needs. The system features role-based access control, automated reporting capabilities, parent-student portals, and integrated communication tools. This solution significantly improved administrative efficiency while providing educators with better tools for student monitoring and engagement.",
      technologies: [
        "React js",
        "Spring Boot",
        "Express.js",
        "MySQL",
        "JWT",
        "PDF Generation",
        "Email Integration",
      ],
      image: `/images/school/image_3.png`,
      images: Array.from(
        { length: 8 },
        (_, i) => `/images/school/image_${i + 1}.png`
      ),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false,
    },
    {
      id: 7,
      title: "Peer-to-Peer Package Delivery Platform",
      description:
        "Mobile marketplace connecting package senders with travelers for cost-effective delivery",
      longDescription:
        "Developed an innovative mobile application that creates a peer-to-peer marketplace for package delivery services. The platform connects individuals who need to send packages with travelers heading to the same destinations, enabling cost-effective and efficient delivery solutions. The application features secure user verification, real-time tracking, integrated payment processing, and comprehensive safety protocols. Built with a focus on trust and security, the platform includes user ratings, identity verification, and insurance integration to ensure safe transactions. This solution addresses the growing demand for flexible, community-driven logistics while providing travelers with opportunities to monetize their journeys.",
      technologies: [
        "Flutter",
        "Spring Boot",
        "MySQL",
        "Stripe",
        "Google Maps API",
        "JWT",
        "Socket.io",
      ],
      image: `/images/deliver/1.jpg`,
      images: Array.from(
        { length: 10 },
        (_, i) => `/images/deliver/${i + 1}.jpg`
      ),
      githubUrl: "",
      appStoreUrl: "",
      playStoreUrl: "",
      category: "mobile",
      featured: false,
    },
    {
      id: 8,
      title: "Smart Baby Monitoring System",
      description:
        "IoT-enabled infant monitoring platform with machine learning behavioral analysis",
      longDescription:
        "Currently developing an advanced baby monitoring system that integrates Android mobile development, machine learning algorithms, and Internet of Things technologies. The system utilizes motion and temperature sensors to continuously monitor infant behavior patterns and environmental conditions, providing real-time alerts to parents through a dedicated mobile application. The project incorporates machine learning models for behavioral pattern recognition, enabling the system to distinguish between normal sleep movements and potential concerns. This comprehensive solution combines hardware sensor integration, cloud-based data processing, and intuitive mobile interfaces to enhance infant safety and provide parents with peace of mind through intelligent monitoring capabilities.",
      technologies: [
        "Android Studio",
        "Java",
        "TensorFlow Lite",
        "IoT Sensors",
        "Firebase",
        "Machine Learning",
        "Bluetooth",
        "Real-time Analytics",
      ],
      image: `/images/baby/baby_1.png`,
      images: Array.from(
        { length: 6 },
        (_, i) => `/images/baby/baby_${i + 1}.png`
      ),
      githubUrl: "",
      category: "mobile",
      featured: false,
    },
    {
      id: 9,
      title: "Street Football Community Platform",
      description:
        "Mobile marketplace connecting street football teams and individual players",
      longDescription:
        "Engineered an advanced, intelligent baby monitoring system by integrating Android mobile development, machine learning algorithms, and Internet of Things (IoT) technologies. The system leveraged motion and temperature sensors to continuously monitor infant behavior and environmental conditions, delivering real-time alerts via a dedicated mobile application. Machine learning models were implemented for behavioral pattern recognition, enabling the system to accurately distinguish between normal sleep movements and potential concerns. This comprehensive solution successfully combined hardware sensor integration, cloud-based data processing, and an intuitive mobile interface to enhance infant safety.",
      technologies: [
        "Flutter",
        "Firebase",
        "Google Maps API",
        "Push Notifications",
        "Geolocation",
        "Real-time Chat",
        "User Authentication",
      ],
      image: `/images/foot/foot_1.jpeg`,
      images: Array.from(
        { length: 2 },
        (_, i) => `/images/foot/foot_${i + 1}.jpeg`
      ),
      githubUrl: "",
      appStoreUrl: "",
      playStoreUrl: "",
      category: "mobile",
      featured: false,
    },
    {
      id: 12,
      title: "Tervela – AI-Powered Data Cleaning Assistant",
      description:
        "Web app that lets users clean and explore CSV/Excel data through a conversational AI agent",
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
        "REST API",
      ],
      image: `/images/TervelA/image_1.png`,
      images: Array.from(
        { length: 6 },
        (_, i) => `/images/TervelA/image_${i + 1}.png`
      ),
      githubUrl: "",
      liveUrl: "",
      category: "website",
      featured: false,
    },
    {
      id: 10,
      title: "Premier League Winner Predictor",
      description:
        "AI model predicting English Premier League winners using historical data analysis",
      longDescription:
        "Developed an AI-driven predictive model to forecast the winners of the English Premier League (EPL) by analyzing historical match data, player statistics, team performance metrics, and other relevant factors. The project involved collecting and preprocessing extensive datasets from past EPL seasons, including match outcomes, player injuries, transfers, and tactical formations. Leveraging machine learning algorithms such as Random Forests, Gradient Boosting, and Neural Networks, the model was trained to identify patterns and key indicators that influence match results. We also experimented with multiple algorithms including K-Nearest Neighbors (KNN), Support Vector Machines (SVM), and ensemble techniques to compare performance. Feature engineering and cross-validation were used to improve robustness and predictive accuracy.",
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Matplotlib"],
      image: `/images/epl/1.png`,
      images: Array.from(
        { length: 3 },
        (_, i) => `/images/epl/${i + 1}.png`
      ),
      githubUrl: "",
      liveUrl: "",
      category: "ai & data",
      featured: false
    }
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

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
  };

  const getTechLogo = (techName: string) => {
    return (
      techLogos.find((logo) => logo.name === techName) || {
        name: techName,
        icon: "⚡",
        color: "text-primary",
      }
    );
  };

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects. Real results. See how we've helped businesses
            transform through intelligent software.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: "all", label: "All Projects", icon: <Globe size={16} /> },
            { key: "website", label: "Web Apps", icon: <Globe size={16} /> },
            {
              key: "mobile",
              label: "Mobile Apps",
              icon: <Smartphone size={16} />,
            },
            { key: "ai & data", label: "AI & Data", icon: <Stars size={16} /> },
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

        {/* Featured Projects */}
        {selectedCategory === "all" && featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              🌟 Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <Card
                      className="bg-card border-border overflow-hidden hover-lift hover-glow cursor-pointer group relative"
                      onClick={() => {
                        setSelectedProject(project);
                        setCurrentImageIndex(0);
                      }}
                    >
                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>

                      {/* Project Image */}
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const fallback =
                              target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        <div
                          className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground"
                          style={{ display: "none" }}
                        >
                          {project.category === "mobile" ? (
                            <Smartphone size={48} />
                          ) : (
                            <Globe size={48} />
                          )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          {project.category === "mobile" ? (
                            <Smartphone size={16} className="text-primary" />
                          ) : (
                            <Globe size={16} className="text-primary" />
                          )}
                          <span className="text-xs font-medium text-primary uppercase tracking-wide">
                            {project.category === "mobile"
                              ? "Mobile App"
                              : "Web Application"}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 4)
                            .map((tech, index) => {
                              const techLogo = getTechLogo(tech);
                              return (
                                <span
                                  key={index}
                                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full flex items-center gap-1"
                                >
                                  <span>{techLogo.icon}</span>
                                  {tech}
                                </span>
                              );
                            })}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                </Dialog>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects
            .filter((p) => selectedCategory !== "all" || !p.featured)
            .map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card
                    className="bg-card border-border overflow-hidden hover-lift hover-glow cursor-pointer group"
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                  >
                    {/* Project Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const fallback =
                            target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div
                        className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground"
                        style={{ display: "none" }}
                      >
                        {project.category === "mobile" ? (
                          <Smartphone size={32} />
                        ) : (
                          <Globe size={32} />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {project.category === "mobile" ? (
                          <Smartphone size={14} className="text-primary" />
                        ) : (
                          <Globe size={14} className="text-primary" />
                        )}
                        <span className="text-xs font-medium text-primary uppercase tracking-wide">
                          {project.category === "mobile"
                            ? "Mobile App"
                            : "Web App"}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, index) => {
                          const techLogo = getTechLogo(tech);
                          return (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full flex items-center gap-1"
                            >
                              <span className="text-xs">{techLogo.icon}</span>
                              {tech}
                            </span>
                          );
                        })}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>

                {/* Project Modal */}
                <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                  {selectedProject?.id === project.id && (
                    <div className="space-y-6">
                      <DialogTitle className="sr-only">
                        {selectedProject.title}
                      </DialogTitle>

                      {/* Image Gallery */}
                      <div className="relative">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                          <img
                            src={selectedProject.images[currentImageIndex]}
                            alt={`${selectedProject.title} - Image ${
                              currentImageIndex + 1
                            }`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = "none";
                              const fallback =
                                target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                          <div
                            className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center text-muted-foreground"
                            style={{ display: "none" }}
                          >
                            {selectedProject.category === "mobile" ? (
                              <Smartphone size={64} />
                            ) : (
                              <Globe size={64} />
                            )}
                          </div>

                          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
                            Screenshot {currentImageIndex + 1}
                          </div>

                          {selectedProject.images.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full transition-smooth"
                              >
                                <ChevronLeft size={20} />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full transition-smooth"
                              >
                                <ChevronRight size={20} />
                              </button>
                            </>
                          )}
                        </div>

                        {/* Image Indicators */}
                        {selectedProject.images.length > 1 && (
                          <div className="flex justify-center gap-2 mt-4">
                            {selectedProject.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  index === currentImageIndex
                                    ? "bg-primary"
                                    : "bg-muted"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Project Details */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          {selectedProject.category === "mobile" ? (
                            <Smartphone size={24} className="text-primary" />
                          ) : (
                            <Globe size={24} className="text-primary" />
                          )}
                          <h3 className="text-3xl font-bold">
                            {selectedProject.title}
                          </h3>
                        </div>

                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {selectedProject.longDescription}
                        </p>

                        {/* Technologies Used */}
                        <div>
                          <h4 className="font-semibold mb-4 text-lg">
                            🛠️ Technologies Used
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {selectedProject.technologies.map((tech, index) => {
                              const techLogo = getTechLogo(tech);
                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-2 p-3 bg-muted rounded-lg border border-border hover:shadow-md transition-all"
                                >
                                  <span className="text-lg">
                                    {techLogo.icon}
                                  </span>
                                  <span className="font-medium text-sm">
                                    {tech}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                          {selectedProject.liveUrl && (
                            <Button
                              onClick={() =>
                                window.open(selectedProject.liveUrl, "_blank")
                              }
                              className="flex items-center gap-2"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </Button>
                          )}

                          {selectedProject.githubUrl && (
                            <Button
                              onClick={() =>
                                window.open(selectedProject.githubUrl, "_blank")
                              }
                              variant="secondary"
                              className="flex items-center gap-2"
                            >
                              <Github size={16} />
                              View Code
                            </Button>
                          )}

                          {selectedProject.appStoreUrl && (
                            <Button
                              onClick={() =>
                                window.open(
                                  selectedProject.appStoreUrl,
                                  "_blank"
                                )
                              }
                              variant="secondary"
                              className="flex items-center gap-2"
                            >
                              <Download size={16} />
                              App Store
                            </Button>
                          )}

                          {selectedProject.playStoreUrl && (
                            <Button
                              onClick={() =>
                                window.open(
                                  selectedProject.playStoreUrl,
                                  "_blank"
                                )
                              }
                              variant="secondary"
                              className="flex items-center gap-2"
                            >
                              <Download size={16} />
                              Google Play
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
