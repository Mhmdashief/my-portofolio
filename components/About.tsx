"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Mail, Calendar, Briefcase } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        tl.fromTo(
            imageRef.current,
            { opacity: 0, x: -50, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out" }
        ).fromTo(
            contentRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
            "-=0.5"
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-20 md:py-32 bg-[#0d0d12] relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm text-sm font-mono text-cyan-400">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        About Me
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Get to Know Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Profile Image */}
                    <div ref={imageRef} className="flex justify-center lg:justify-end order-1 lg:order-1">
                        <div className="relative group">
                            {/* Decorative elements */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-75" />

                            {/* Image Container - Portrait aspect ratio */}
                            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[4/5] rounded-2xl overflow-hidden bg-gray-900">
                                {/* Your photo */}
                                <Image
                                    src="/foto.jpg"
                                    alt="Profile Photo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gray-900 border border-cyan-500/50 rounded-lg shadow-lg">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    Available for work
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div ref={contentRef} className="order-2 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Hi, I&apos;m <span className="text-cyan-400">[Mochamad Iftichor Al Ashief]</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                            I&apos;m a passionate Full-Stack Developer based in Indonesia with a love for
                            creating beautiful, functional, and user-friendly applications. I specialize
                            in building modern web applications using cutting-edge technologies.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
                            With a strong foundation in both frontend and backend development, I enjoy
                            turning complex problems into simple, elegant solutions. When I&apos;m not coding,
                            you can find me exploring new technologies, contributing to open-source projects,
                            or learning something new.
                        </p>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/30 transition-colors">
                                <div className="p-2 bg-cyan-500/10 rounded-lg">
                                    <MapPin className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Location</p>
                                    <p className="text-white text-sm font-medium">Indonesia</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/30 transition-colors">
                                <div className="p-2 bg-purple-500/10 rounded-lg">
                                    <Mail className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Email</p>
                                    <p className="text-white text-sm font-medium">your@email.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-indigo-500/30 transition-colors">
                                <div className="p-2 bg-indigo-500/10 rounded-lg">
                                    <Briefcase className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Experience</p>
                                    <p className="text-white text-sm font-medium">2+ Years</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-500/30 transition-colors">
                                <div className="p-2 bg-green-500/10 rounded-lg">
                                    <Calendar className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Availability</p>
                                    <p className="text-white text-sm font-medium">Full-time / Freelance</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <a
                                href="#"
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-center"
                            >
                                Download CV
                            </a>
                            <a
                                href="#"
                                className="px-6 py-3 border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 font-medium rounded-lg text-center text-white"
                            >
                                Let&apos;s Talk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
