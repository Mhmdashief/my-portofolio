"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Mail, Calendar, Briefcase, Linkedin } from "lucide-react";
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
            className="py-16 sm:py-20 md:py-32 bg-[#0d0d12] relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute top-1/2 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500/5 rounded-full blur-[100px] md:blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-cyan-500/5 rounded-full blur-[80px] md:blur-[100px]" />

            <div className="container px-4 sm:px-6 mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm text-xs sm:text-sm font-mono text-cyan-400">
                        <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-400" />
                        About Me
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
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

                            {/* Image Container */}
                            <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                                <Image
                                    src="/foto.jpg"
                                    alt="Profile Photo"
                                    width={400}
                                    height={533}
                                    className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badge - Positioned inside on mobile */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-auto sm:left-auto sm:-bottom-4 sm:-right-4 sm:translate-x-0 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900/95 border border-cyan-500/50 rounded-lg shadow-lg backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm">
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-400 animate-pulse" />
                                    Available for work
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div ref={contentRef} className="order-2 lg:order-2 text-center lg:text-left">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                            Hi, I&apos;m{" "}
                            <span className="text-cyan-400 block sm:inline mt-1 sm:mt-0">
                                Mochamad Iftichor Al Ashief
                            </span>
                        </h3>
                        <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            I&apos;m a passionate Full-Stack Developer based in Indonesia with a love for
                            creating beautiful, functional, and user-friendly applications. I specialize
                            in building modern web applications using cutting-edge technologies.
                        </p>
                        <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                            With a strong foundation in both frontend and backend development, I enjoy
                            turning complex problems into simple, elegant solutions. When I&apos;m not coding,
                            you can find me exploring new technologies, contributing to open-source projects,
                            or learning something new.
                        </p>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                            {/* Location Card */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/30 transition-colors text-center sm:text-left">
                                <div className="p-2 sm:p-2 bg-cyan-500/10 rounded-lg flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] sm:text-xs">Location</p>
                                    <p className="text-white text-xs sm:text-sm font-medium">Indonesia</p>
                                </div>
                            </div>

                            {/* Email Card - Clickable */}
                            <a
                                href="mailto:mhmdashef@gmail.com"
                                className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/30 transition-colors group text-center sm:text-left"
                            >
                                <div className="p-2 sm:p-2 bg-purple-500/10 rounded-lg flex-shrink-0">
                                    <Mail className="w-5 h-5 text-purple-400" />
                                </div>
                                <div className="min-w-0 w-full">
                                    <p className="text-gray-500 text-[10px] sm:text-xs">Email</p>
                                    <p className="text-white text-[10px] sm:text-sm font-medium group-hover:text-purple-400 transition-colors break-all sm:break-normal">mhmdashef@gmail.com</p>
                                </div>
                            </a>

                            {/* LinkedIn Card */}
                            <a
                                href="https://www.linkedin.com/in/mochamad-iftichor-al-ashief-81636b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/30 transition-colors group text-center sm:text-left"
                            >
                                <div className="p-2 sm:p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
                                    <Linkedin className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] sm:text-xs">LinkedIn</p>
                                    <p className="text-white text-xs sm:text-sm font-medium group-hover:text-blue-400 transition-colors">Connect</p>
                                </div>
                            </a>

                            {/* Experience Card */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-indigo-500/30 transition-colors text-center sm:text-left">
                                <div className="p-2 sm:p-2 bg-indigo-500/10 rounded-lg flex-shrink-0">
                                    <Briefcase className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] sm:text-xs">Experience</p>
                                    <p className="text-white text-xs sm:text-sm font-medium">2+ Years</p>
                                </div>
                            </div>

                            {/* Availability Card - Full Width on Mobile */}
                            <div className="col-span-2 flex flex-row items-center justify-center gap-3 p-3 sm:p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-500/30 transition-colors">
                                <div className="p-2 sm:p-2 bg-green-500/10 rounded-lg flex-shrink-0">
                                    <Calendar className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] sm:text-xs">Availability</p>
                                    <p className="text-white text-xs sm:text-sm font-medium">Full-time / Freelance</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                            <a
                                href="https://drive.google.com/file/d/16SxPadF1NutQoIPJzuqL8mGBJryHaJ_o/view?usp=sharing"
                                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-center text-sm sm:text-base"
                            >
                                Download CV
                            </a>
                            <a
                                href="https://wa.me/6287875810413"
                                className="px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 font-medium rounded-lg text-center text-white text-sm sm:text-base"
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

