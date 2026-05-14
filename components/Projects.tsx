"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Everybe Beauty & Health",
        description:
            "Everybe Beauty & Health is a E-commerce platform for beauty and health products.",
        tags: ["React + Vite", "Express.js", "Tailwind", "Prisma", "Docker", "PostgreSQL"],
        image: "everybe.png",
        github: "https://github.com/Mhmdashief",
        demo: "https://everybe.id/",
        featured: true,
    },
    {
        title: "CMS Website Project",
        description:
            "CMS Website Project is a Content Management System for managing website content.",
        tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
        image: "cms.png",
        github: "https://github.com/Mhmdashief",
        featured: true,
    },
    {
        title: "Egg Quality Monitoring System",
        description:
            "Egg Quality Monitoring System is a system for monitoring egg quality based on image analysis from the shell of the egg.",
        tags: ["React + Vite", "Tailwind", "Express.js", "MySQL"],
        image: "eggspire.png",
        github: "https://github.com/Mhmdashief/update-olivia",
        demo: "https://drive.google.com/drive/folders/1Ix-cdyhtRYo45vf5LwLucM20HdjDKEnZ?usp=sharing",
        featured: true,
    },

    {
        title: "Baheera Hijab E-Commerce",
        description:
            "Baheera Hijab E-Commerce is an e-commerce platform for hijab products.",
        tags: ["Next JS", "Tailwind", "Prisma", "PostgreSQL"],
        image: "baheera.png",
        github: "https://github.com/Mhmdashief/baheera-hijab-e-commerce",
        demo: "https://baheera-hijab-e-commerce.vercel.app/",
        featured: true,
    },

    {
        title: "Marketplace UB Merch",
        description:
            "Marketplace UB Merch is an e-commerce platform for selling Universitas Brawijaya Official Merchendise.",
        tags: ["Next JS", "Tailwind", "Prisma", "PostgreSQL"],
        image: "ub merch.png",
        github: "https://github.com/Mhmdashief/marketplace-ub-merch",
        featured: true,
    },

];

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = cardsRef.current?.querySelectorAll(".project-card");

        if (cards) {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="py-16 md:py-24 bg-[#0a0a0f] relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 sm:px-4 py-1.5 sm:py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm text-xs sm:text-sm font-mono text-cyan-400">
                        <Folder className="w-3 sm:w-4 h-3 sm:h-4" />
                        Featured Work
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        My Projects
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-4">
                        Here are some of the projects I&apos;ve worked on. Each one was a unique
                        challenge that helped me grow as a developer.
                    </p>
                </div>

                <div
                    ref={cardsRef}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card group relative bg-gray-900/30 border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-500 flex flex-col ${project.featured ? "md:col-span-1 lg:row-span-1" : ""
                                }`}
                        >
                            {/* Project Image */}
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                    unoptimized
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-110"
                                            title="View Code"
                                        >
                                            <Github className="w-4 sm:w-5 h-4 sm:h-5" />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                                            title="View Live"
                                        >
                                            <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
                                        </a>
                                    )}
                                </div>
                                {/* End of Overlay */}
                            </div>
                            {/* End of Project Image Section */}

                            {/* Content */}
                            <div className="p-4 sm:p-6 flex-1 flex flex-col">
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 mb-4 flex-1 text-xs sm:text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-gray-800 text-gray-400 border border-gray-700 font-mono"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

