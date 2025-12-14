"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, Terminal, Code2, Cpu } from "lucide-react";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate grid lines
        gsap.fromTo(
            ".grid-line",
            { opacity: 0 },
            { opacity: 0.1, duration: 2, stagger: 0.1, ease: "power2.inOut" }
        );

        // Animate floating icons
        gsap.to(".float-icon", {
            y: -15,
            duration: 2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.3,
        });

        tl.fromTo(
            ".hero-badge",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(
                textRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=0.3"
            )
            .fromTo(
                subRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=0.5"
            )
            .fromTo(
                ".hero-btn",
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.1 },
                "-=0.5"
            );
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] text-white px-4 pt-16"
        >
            {/* Animated Grid Background */}
            <div ref={gridRef} className="absolute inset-0 overflow-hidden">
                {/* Horizontal lines */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="grid-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                        style={{ top: `${(i + 1) * 5}%` }}
                    />
                ))}
                {/* Vertical lines */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="grid-line absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
                        style={{ left: `${(i + 1) * 5}%` }}
                    />
                ))}
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-cyan-500/20 rounded-full blur-[100px] sm:blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[175px] sm:w-[250px] md:w-[350px] h-[175px] sm:h-[250px] md:h-[350px] bg-purple-600/20 rounded-full blur-[80px] sm:blur-[130px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[120px] sm:blur-[180px]" />

            {/* Floating Tech Icons - Hidden on mobile for cleaner look */}
            <div className="hidden md:block absolute top-20 left-20 float-icon text-cyan-500/30">
                <Terminal className="w-8 md:w-12 h-8 md:h-12" />
            </div>
            <div className="hidden md:block absolute top-32 right-32 float-icon text-purple-500/30">
                <Code2 className="w-12 md:w-16 h-12 md:h-16" />
            </div>
            <div className="hidden md:block absolute bottom-32 left-1/4 float-icon text-indigo-500/30">
                <Cpu className="w-8 md:w-10 h-8 md:h-10" />
            </div>

            <div className="container mx-auto text-center z-10 max-w-4xl">
                <div className="hero-badge inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm text-xs sm:text-sm font-mono text-cyan-400">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>&gt;_ Available for hire</span>
                </div>

                <h1
                    ref={textRef}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mb-4 sm:mb-6"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
                        Building Digital
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 animate-gradient-x">
                        Experiences
                    </span>
                </h1>

                <p
                    ref={subRef}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 font-light px-4"
                >
                    I&apos;m a passionate developer crafting beautiful, functional, and scalable
                    web applications with cutting-edge technologies.
                </p>

                <div className="flex gap-3 sm:gap-4 justify-center items-center flex-col sm:flex-row px-4">
                    <button className="hero-btn w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <Code2 className="w-4 sm:w-5 h-4 sm:h-5" />
                            View Projects
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    <button className="hero-btn w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 font-medium backdrop-blur-sm flex items-center justify-center gap-2">
                        <Terminal className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                        Contact Me
                    </button>
                </div>
            </div>

            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="text-gray-500 w-5 sm:w-6 h-5 sm:h-6" />
            </div>

            {/* Scan Line Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[2px] animate-scan" />
            </div>
        </section>
    );
}
