"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiFigma,
    SiVercel,
    SiPrisma,
    SiSupabase,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const stacks = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

function TechCard({ tech }: { tech: (typeof stacks)[0] }) {
    const IconComponent = tech.icon;
    return (
        <div className="group relative flex-shrink-0 bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer mx-2 sm:mx-3">
            {/* Glow effect on hover */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: `${tech.color}10` }}
            />
            <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3 min-w-[60px] sm:min-w-[80px]">
                <IconComponent
                    className="w-8 sm:w-10 h-8 sm:h-10 transition-all duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                />
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors font-medium text-center whitespace-nowrap">
                    {tech.name}
                </span>
            </div>
        </div>
    );
}

export default function TechStack() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-24 bg-[#0d0d12] relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="absolute top-1/2 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-cyan-500/5 rounded-full blur-[80px] md:blur-[100px]" />
            <div className="absolute top-1/2 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-purple-500/5 rounded-full blur-[80px] md:blur-[100px]" />

            <div className="container px-4 mx-auto relative z-10 mb-10 md:mb-12">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 sm:px-4 py-1.5 sm:py-2 border border-purple-500/30 rounded-full bg-purple-500/5 backdrop-blur-sm text-xs sm:text-sm font-mono text-purple-400">
                        <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-purple-400" />
                        &lt;TechStack /&gt;
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Technologies I Use
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base px-4">
                        The tools and technologies I leverage to build modern web applications
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative">
                {/* Gradient Overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0d0d12] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0d0d12] to-transparent z-10 pointer-events-none" />

                {/* Marquee Track */}
                <div ref={marqueeRef} className="flex overflow-hidden">
                    <div className="flex animate-marquee">
                        {stacks.map((tech, index) => (
                            <TechCard key={`first-${index}`} tech={tech} />
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex animate-marquee">
                        {stacks.map((tech, index) => (
                            <TechCard key={`second-${index}`} tech={tech} />
                        ))}
                    </div>
                </div>

                {/* Second Row - Reverse Direction */}
                <div className="flex overflow-hidden mt-4 sm:mt-6">
                    <div className="flex animate-marquee-reverse">
                        {[...stacks].reverse().map((tech, index) => (
                            <TechCard key={`third-${index}`} tech={tech} />
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex animate-marquee-reverse">
                        {[...stacks].reverse().map((tech, index) => (
                            <TechCard key={`fourth-${index}`} tech={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
