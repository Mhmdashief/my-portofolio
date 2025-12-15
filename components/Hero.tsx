"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { Terminal, Code2, Cpu, Zap, Layers } from "lucide-react";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Smooth mouse position with lerp
    const mouseRef = useRef({ x: 0, y: 0 });
    const smoothMouseRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>(0);

    const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });

    // Lerp function for smooth interpolation
    const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
    };

    // Update smooth mouse position with requestAnimationFrame
    const updateSmoothMouse = useCallback(() => {
        // Lerp factor - lower = smoother but slower, higher = faster but less smooth
        const lerpFactor = 0.08;

        smoothMouseRef.current.x = lerp(smoothMouseRef.current.x, mouseRef.current.x, lerpFactor);
        smoothMouseRef.current.y = lerp(smoothMouseRef.current.y, mouseRef.current.y, lerpFactor);

        setSmoothMouse({
            x: smoothMouseRef.current.x,
            y: smoothMouseRef.current.y
        });

        rafRef.current = requestAnimationFrame(updateSmoothMouse);
    }, []);

    // Track raw mouse position
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseRef.current = { x, y };
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        rafRef.current = requestAnimationFrame(updateSmoothMouse);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [handleMouseMove, updateSmoothMouse]);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate floating icons with smoother motion
        gsap.to(".float-icon", {
            y: -15,
            duration: 4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.7,
        });

        // Animate orbs with smoother pulse
        gsap.to(".glow-orb", {
            scale: 1.08,
            duration: 5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.8,
        });

        tl.fromTo(
            ".hero-badge",
            { opacity: 0, y: -30, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
        )
            .fromTo(
                ".title-line-1",
                { opacity: 0, y: 60, rotationX: -30 },
                { opacity: 1, y: 0, rotationX: 0, duration: 1, ease: "power4.out" },
                "-=0.3"
            )
            .fromTo(
                ".title-line-2",
                { opacity: 0, y: 60, rotationX: -30 },
                { opacity: 1, y: 0, rotationX: 0, duration: 1, ease: "power4.out" },
                "-=0.7"
            )
            .fromTo(
                subRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=0.5"
            )
            .fromTo(
                ".hero-btn",
                { opacity: 0, y: 20, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(2)", stagger: 0.15 },
                "-=0.5"
            )
            .fromTo(
                ".float-icon",
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)", stagger: 0.1 },
                "-=0.8"
            );
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] text-white px-4 pt-16"
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />

            {/* Animated Mesh Grid */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                        transform: `perspective(500px) rotateX(60deg) translateY(-50%)`,
                        transformOrigin: 'center center',
                    }}
                />
            </div>

            {/* Glowing Orbs with Smooth Parallax */}
            <div
                className="glow-orb absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[120px] sm:blur-[150px] will-change-transform"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
                    transform: `translate3d(${smoothMouse.x * 40}px, ${smoothMouse.y * 40}px, 0)`,
                }}
            />
            <div
                className="glow-orb absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] rounded-full blur-[100px] sm:blur-[130px] will-change-transform"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
                    transform: `translate3d(${smoothMouse.x * -35}px, ${smoothMouse.y * -35}px, 0)`,
                }}
            />
            <div
                className="glow-orb absolute top-1/2 left-1/2 w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] rounded-full blur-[150px] sm:blur-[200px] will-change-transform"
                style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                    transform: `translate3d(calc(-50% + ${smoothMouse.x * 20}px), calc(-50% + ${smoothMouse.y * 20}px), 0)`,
                }}
            />

            {/* Floating Tech Icons with Smooth 3D effect */}
            <div
                className="hidden md:flex absolute top-24 left-16 float-icon items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 backdrop-blur-sm shadow-lg shadow-cyan-500/10 will-change-transform"
                style={{
                    transform: `translate3d(${smoothMouse.x * -25}px, ${smoothMouse.y * -25}px, 0) rotateX(${smoothMouse.y * 8}deg) rotateY(${smoothMouse.x * -8}deg)`,
                }}
            >
                <Terminal className="w-8 h-8 text-cyan-400" />
            </div>
            <div
                className="hidden md:flex absolute top-32 right-24 float-icon items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 backdrop-blur-sm shadow-lg shadow-purple-500/10 will-change-transform"
                style={{
                    transform: `translate3d(${smoothMouse.x * 30}px, ${smoothMouse.y * 30}px, 0) rotateX(${smoothMouse.y * -8}deg) rotateY(${smoothMouse.x * 8}deg)`,
                }}
            >
                <Code2 className="w-10 h-10 text-purple-400" />
            </div>
            <div
                className="hidden md:flex absolute bottom-40 left-1/4 float-icon items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 border border-indigo-500/30 backdrop-blur-sm shadow-lg shadow-indigo-500/10 will-change-transform"
                style={{
                    transform: `translate3d(${smoothMouse.x * -20}px, ${smoothMouse.y * 20}px, 0) rotateX(${smoothMouse.y * 6}deg) rotateY(${smoothMouse.x * -6}deg)`,
                }}
            >
                <Cpu className="w-7 h-7 text-indigo-400" />
            </div>
            <div
                className="hidden lg:flex absolute bottom-48 right-1/4 float-icon items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 backdrop-blur-sm shadow-lg shadow-emerald-500/10 will-change-transform"
                style={{
                    transform: `translate3d(${smoothMouse.x * 25}px, ${smoothMouse.y * -25}px, 0)`,
                }}
            >
                <Layers className="w-6 h-6 text-emerald-400" />
            </div>
            <div
                className="hidden lg:flex absolute top-1/2 left-12 float-icon items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/30 backdrop-blur-sm will-change-transform"
                style={{
                    transform: `translate3d(${smoothMouse.x * -15}px, ${smoothMouse.y * 15}px, 0)`,
                }}
            >
                <Zap className="w-5 h-5 text-pink-400" />
            </div>

            {/* Main Content with Smooth 3D Tilt */}
            <div
                ref={containerRef}
                className="container mx-auto text-center z-10 max-w-5xl will-change-transform"
                style={{
                    transform: `perspective(1000px) rotateX(${smoothMouse.y * 3}deg) rotateY(${smoothMouse.x * 3}deg)`,
                }}
            >
                {/* Badge */}
                <div className="hero-badge inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-5 py-2 sm:py-2.5 border border-cyan-500/40 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md text-xs sm:text-sm font-mono text-cyan-400 shadow-lg shadow-cyan-500/10">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                    </span>
                    <span>&gt;_ Available for hire</span>
                </div>

                {/* Title with 3D text effect */}
                <h1
                    ref={textRef}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 sm:mb-8"
                    style={{ perspective: '1000px' }}
                >
                    <span className="title-line-1 block mb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            Building Digital
                        </span>
                    </span>
                    <span className="title-line-2 block relative">
                        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 animate-gradient-x">
                            Experiences
                        </span>
                        {/* Glow behind text */}
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 blur-[40px] opacity-30 animate-gradient-x" aria-hidden="true">
                            Experiences
                        </span>
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    ref={subRef}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12 font-light px-4 leading-relaxed"
                >
                    I&apos;m a passionate developer crafting beautiful, functional, and scalable
                    web applications with cutting-edge technologies.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 sm:gap-5 justify-center items-center flex-col sm:flex-row px-4">
                    {/* Primary Button */}
                    <a
                        href="#projects"
                        className="hero-btn group relative w-full sm:w-auto"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold flex items-center justify-center gap-3 overflow-hidden">
                            <Code2 className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">View Projects</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </div>
                    </a>

                    {/* Secondary Button */}
                    <a
                        href="mailto:mhmdashief@gmail.com"
                        className="hero-btn group relative w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl border border-gray-700/80 bg-gray-900/50 hover:bg-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 font-medium backdrop-blur-md flex items-center justify-center gap-3 overflow-hidden"
                    >
                        <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                        <span className="group-hover:text-white transition-colors">Contact Me</span>
                        {/* Border glow on hover */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(6,182,212,0.2)]" />
                    </a>
                </div>
            </div>

            {/* Scan Line Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-scan"
                />
            </div>

            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </section>
    );
}
