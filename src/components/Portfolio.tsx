"use client";

import {useEffect, useState} from "react";
import {Globe, Smartphone, Stars} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PortfolioCaroussel from "@/components/PortfolioCaroussel.tsx";

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
    const [selectedCategory, setSelectedCategory] = useState<"all" | "website" | "mobile" | "ai & data">("all");
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => {
                // Generate images array for each project
                const projectsWithImages = data.map((project: Project) => ({
                    ...project,
                    images: Array.from(
                        {length: project.imageCount},
                        (_, i) => `${project.imagePrefix}${i + 1}.png`
                    )
                }));
                setProjects(projectsWithImages);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading projects:', error);
                setLoading(false);
            });
    }, []);

    const filteredProjects =
        selectedCategory === "all"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    if (loading) {
        return (
            <section id="portfolio" className="py-24 bg-muted/30">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-muted-foreground">Loading projects...</p>
                </div>
            </section>
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