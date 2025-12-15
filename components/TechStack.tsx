"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPostgresql,
    SiFigma,
    SiPrisma,
    SiSupabase,
    SiGithub,
    SiLaravel,
    SiBootstrap,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiMysql,
    SiExpress
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const stacks = [
    { name: "React", icon: SiReact, color: "#61DAFB", gradient: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", gradient: "from-gray-400 to-white" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", gradient: "from-blue-400 to-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", gradient: "from-teal-400 to-cyan-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", gradient: "from-green-400 to-green-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", gradient: "from-blue-400 to-indigo-500" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748", gradient: "from-gray-500 to-gray-700" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", gradient: "from-emerald-400 to-green-500" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", gradient: "from-pink-400 to-orange-500" },
    { name: "Github", icon: SiGithub, color: "#ffffff", gradient: "from-gray-300 to-white" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", gradient: "from-purple-400 to-purple-600" },
    { name: "Laravel", icon: SiLaravel, color: "#FF4A55", gradient: "from-red-400 to-red-600" },
    { name: "HTML", icon: SiHtml5, color: "#E44D26", gradient: "from-orange-400 to-orange-600" },
    { name: "CSS", icon: SiCss3, color: "#1572B6", gradient: "from-blue-400 to-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", gradient: "from-yellow-400 to-yellow-600" },
    { name: "MySQL", icon: SiMysql, color: "#007EC6", gradient: "from-blue-400 to-blue-600" },
    { name: "Express.js", icon: SiExpress, color: "#339933", gradient: "from-green-400 to-green-600" },
];

function TechCard({ tech, isPaused }: { tech: (typeof stacks)[0]; isPaused: boolean }) {
    const IconComponent = tech.icon;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex-shrink-0 mx-2 sm:mx-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Card Container with overflow visible for glow */}
            <div
                className={`
                    relative bg-gradient-to-br from-gray-900/80 to-gray-950/90 
                    border border-gray-700/50 rounded-2xl p-5 sm:p-6
                    backdrop-blur-xl cursor-pointer
                    transition-all duration-500 ease-out
                    ${isHovered ? 'border-opacity-100 -translate-y-2' : 'border-opacity-50'}
                `}
                style={{
                    borderColor: isHovered ? `${tech.color}60` : undefined,
                    boxShadow: isHovered
                        ? `0 20px 40px -15px ${tech.color}30, 0 0 30px -10px ${tech.color}20, inset 0 1px 1px rgba(255,255,255,0.1)`
                        : '0 4px 20px -5px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.05)',
                }}
            >
                {/* Animated background gradient */}
                <div
                    className={`
                        absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                        bg-gradient-to-br ${tech.gradient}
                    `}
                    style={{
                        opacity: isHovered ? 0.08 : 0,
                    }}
                />

                {/* Shine effect */}
                <div
                    className={`
                        absolute inset-0 rounded-2xl overflow-hidden
                        transition-opacity duration-500
                    `}
                    style={{ opacity: isHovered ? 1 : 0 }}
                >
                    <div
                        className="absolute -top-1/2 -left-1/2 w-full h-full"
                        style={{
                            background: `linear-gradient(45deg, transparent 40%, ${tech.color}15 50%, transparent 60%)`,
                            transform: 'rotate(45deg) translate(0, 0)',
                            animation: isHovered ? 'shine 1.5s ease-in-out infinite' : 'none',
                        }}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 min-w-[70px] sm:min-w-[90px]">
                    {/* Icon with pulse animation on hover */}
                    <div className="relative">
                        <IconComponent
                            className={`
                                w-10 sm:w-12 h-10 sm:h-12 transition-all duration-500
                                ${isHovered ? 'drop-shadow-[0_0_15px_currentColor]' : ''}
                            `}
                            style={{
                                color: tech.color,
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            }}
                        />
                        {/* Glow ring on hover */}
                        <div
                            className="absolute inset-0 rounded-full transition-all duration-500"
                            style={{
                                boxShadow: isHovered ? `0 0 25px 5px ${tech.color}30` : 'none',
                            }}
                        />
                    </div>

                    {/* Text with gradient on hover */}
                    <span
                        className={`
                            text-xs sm:text-sm font-semibold text-center whitespace-nowrap
                            transition-all duration-500
                            ${isHovered ? 'text-white' : 'text-gray-400'}
                        `}
                    >
                        {tech.name}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function TechStack() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

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
                        <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-purple-400 animate-pulse" />
                        &lt;TechStack /&gt;
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Technologies I Use
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base px-4">
                        The tools and technologies I leverage to build modern web applications
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div
                className="relative group/marquee"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Gradient Overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0d0d12] via-[#0d0d12]/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0d0d12] via-[#0d0d12]/80 to-transparent z-20 pointer-events-none" />

                {/* First Row */}
                <div className="flex overflow-hidden py-2">
                    <div
                        className={`flex animate-marquee-smooth ${isPaused ? 'paused' : ''}`}
                    >
                        {stacks.map((tech, index) => (
                            <TechCard key={`first-${index}`} tech={tech} isPaused={isPaused} />
                        ))}
                        {stacks.map((tech, index) => (
                            <TechCard key={`second-${index}`} tech={tech} isPaused={isPaused} />
                        ))}
                    </div>
                </div>

                {/* Second Row - Reverse Direction */}
                <div className="flex overflow-hidden mt-4 sm:mt-6 py-2">
                    <div
                        className={`flex animate-marquee-smooth-reverse ${isPaused ? 'paused' : ''}`}
                    >
                        {[...stacks].reverse().map((tech, index) => (
                            <TechCard key={`third-${index}`} tech={tech} isPaused={isPaused} />
                        ))}
                        {[...stacks].reverse().map((tech, index) => (
                            <TechCard key={`fourth-${index}`} tech={tech} isPaused={isPaused} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

