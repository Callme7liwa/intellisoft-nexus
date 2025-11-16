import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {ChevronLeft, ChevronRight, ExternalLink, Github, Smartphone, X} from "lucide-react";
import {useState} from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const PortfolioCarousel = ({projects}) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'unset';
    };

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

    return (
        <>
            <div className="relative group px-12">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet !bg-gray-400',
                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
                    }}
                    autoplay={{delay: 4000, disableOnInteraction: false}}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {slidesPerView: 1},
                        768: {slidesPerView: 2},
                        1024: {slidesPerView: 3},
                    }}
                    className="!pb-12"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} className="h-auto">
                            <div
                                onClick={() => openModal(project)}
                                className="h-full flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg mb-2 line-clamp-2">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span
                                                className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary dark:bg-gray-800 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700">
                    <ChevronLeft className="w-5 h-5"/>
                </button>
                <button
                    className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary dark:bg-gray-800 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700">
                    <ChevronRight className="w-5 h-5"/>
                </button>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={closeModal}
                >
                    <div
                        className="bg-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                            {/* Image Section */}
                            <div className="md:w-1/2 relative bg-black">
                                <img
                                    src={selectedProject.images[currentImageIndex]}
                                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-64 md:h-full object-contain"
                                />

                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
                                        >
                                            <ChevronLeft className="w-5 h-5"/>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
                                        >
                                            <ChevronRight className="w-5 h-5"/>
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {selectedProject.images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`w-2 h-2 rounded-full transition-all ${
                                                        idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="md:w-1/2 overflow-y-auto">
                                <div className="p-6 md:p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span
                                                className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3 capitalize">
                                                {selectedProject.category}
                                            </span>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h2>
                                        </div>
                                        <button
                                            onClick={closeModal}
                                            className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                                        >
                                            <X className="w-5 h-5"/>
                                        </button>
                                    </div>

                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {selectedProject.longDescription}
                                    </p>

                                    <div className="mb-6">
                                        <h3 className="font-semibold text-lg mb-3">Technologies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-lg"
                                                >
                                                  {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {(selectedProject.liveUrl || selectedProject.githubUrl || selectedProject.appStoreUrl || selectedProject.playStoreUrl) && (
                                        <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
                                            {selectedProject.liveUrl && (
                                                <a
                                                    href={selectedProject.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                                                >
                                                    <ExternalLink className="w-4 h-4"/>
                                                    Live Demo
                                                </a>
                                            )}
                                            {selectedProject.githubUrl && (
                                                <a
                                                    href={selectedProject.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                                                >
                                                    <Github className="w-4 h-4"/>
                                                    GitHub
                                                </a>
                                            )}
                                            {selectedProject.appStoreUrl && (
                                                <a
                                                    href={selectedProject.appStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                                                >
                                                    <Smartphone className="w-4 h-4"/>
                                                    App Store
                                                </a>
                                            )}
                                            {selectedProject.playStoreUrl && (
                                                <a
                                                    href={selectedProject.playStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                                                >
                                                    <Smartphone className="w-4 h-4"/>
                                                    Play Store
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PortfolioCarousel;