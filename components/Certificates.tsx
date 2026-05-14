"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ExternalLink, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
    {
        title: "SERTIFIKAT BNSP",
        issuer: "Badan Nasional Sertifikasi Profesi",
        date: "22 November 2022",
        description: "Sertifikasi resmi yang memvalidasi keahlian teknis dalam bidang Teknologi Informasi dan Komunikasi, khususnya pada kualifikasi kualifikasi II bidang Teknik Komputer dan Jaringan. Menunjukkan kompetensi dalam instalasi, konfigurasi, dan pemeliharaan infrastruktur jaringan komputer sesuai standar industri nasional.",
        icon: <Award className="w-6 h-6 text-cyan-400" />,
        color: "from-cyan-500/20 to-blue-500/20",
        border: "group-hover:border-cyan-500/50",
        image: '/sertifikat/BNSP JARINGAN.jpeg'
    },
    {
        title: "SERTIFIKAT BNSP",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Teknologi Digital",
        date: "20 Januari 2026",
        description: "Sertifikasi profesional untuk skema Pengembang Web Pratama (Junior Web Developer). Menandakan penguasaan standar kompetensi kerja nasional dalam pengembangan aplikasi web, mencakup pemahaman struktur kode yang efisien, fungsionalitas situs, dan implementasi teknologi web modern.",
        icon: <Award className="w-6 h-6 text-cyan-400" />,
        color: "from-cyan-500/20 to-blue-500/20",
        border: "group-hover:border-cyan-500/50",
        image: '/sertifikat/BNSP WEB.jpeg'
    },
    {
        title: "Sertifikat Penghargaan - Jaminan Mutu HMPSTI",
        issuer: "Himpunan Mahasiswa Program Studi D-III Teknologi Informasi, Universitas Brawijaya",
        date: "2025",
        description: "Penghargaan atas kontribusi aktif sebagai bagian dari divisi Jaminan Mutu dalam organisasi kemahasiswaan. Peran ini melibatkan pengawasan kualitas program kerja, koordinasi tim, dan memastikan standar organisasi terpenuhi untuk mendukung lingkungan akademik yang lebih baik di Fakultas Vokasi.",
        icon: <Award className="w-6 h-6 text-amber-400" />,
        color: "from-amber-500/20 to-orange-500/20",
        border: "group-hover:border-amber-500/50",
        image: "/sertifikat/Seritifikat HMPSTI.jpg"
    },
    {
        title: "Juara 3 Smart Systems (IoT) - OLIVIA X 2025",
        issuer: "Forum Pendidikan Tinggi Vokasi Indonesia (FPTVI)",
        date: "1 Agustus 2025",
        description: "Pencapaian prestasi sebagai Juara 3 dalam kategori Smart Systems (IoT) pada ajang Olimpiade Vokasi Indonesia (OLIVIA) X 2025. Kompetisi berskala nasional ini diselenggarakan oleh FPTVI bekerja sama dengan Ditjen Dikti Kemdiktisaintek RI untuk menguji inovasi dan implementasi teknologi berbasis internet of things (IoT).",
        icon: <Award className="w-6 h-6 text-amber-400" />,
        color: "from-amber-500/20 to-orange-500/20",
        border: "group-hover:border-amber-500/50",
        image: "/sertifikat/Smart Systems.jpg"
    },
    {
        title: "Piagam Penghargaan EM UB",
        issuer: "Rektor Universitas Brawijaya",
        date: "14 Februari 2024",
        description: "Penghargaan dari Rektor Universitas Brawijaya atas dedikasi sebagai Staf Ahli Kajian Pencerdasan Isu di tingkat kementerian mahasiswa (Eksekutif Mahasiswa). Peran ini melibatkan analisis kritis terhadap isu-isu strategis serta pengembangan narasi edukatif untuk lingkungan kampus dan masyarakat luas.",
        icon: <Award className="w-6 h-6 text-amber-400" />,
        color: "from-amber-500/20 to-orange-500/20",
        border: "group-hover:border-amber-500/50",
        image: "/sertifikat/Sertifikat KPI.jpg"
    },
    {
        title: "Sertifikat Staf Pendamping Yuwaraja",
        issuer: "Fakultas Vokasi Universitas Brawijaya & BEM Fakultas Vokasi",
        date: "Tahun Akademik 2024/2025",
        description: "Bertugas sebagai Staf Pendamping dalam rangkaian acara Yuwaraja (Pengenalan Kehidupan Kampus Mahasiswa Baru dan Krida Mahasiswa). Bertanggung jawab dalam membimbing mahasiswa baru, memfasilitasi adaptasi lingkungan akademik, serta menanamkan nilai-nilai vokasi kepada angkatan baru.",
        icon: <Award className="w-6 h-6 text-amber-400" />,
        color: "from-amber-500/20 to-orange-500/20",
        border: "group-hover:border-amber-500/50",
        image: "/sertifikat/Sertifikat Yuwaraja.jpg"
    },
    {
        title: "Staff Ahli Departemen Perhubungan - HMPSTI UB",
        issuer: "Himpunan Mahasiswa Program Studi D-III Teknologi Informasi, Universitas Brawijaya",
        date: "Periode: 2023/2024",
        description: "Penghargaan atas partisipasi aktif sebagai Staff Ahli di Departemen Perhubungan HMPSTI. Fokus utama peran ini adalah mengelola komunikasi internal dan eksternal organisasi serta membangun jaringan kolaboratif antar elemen mahasiswa di lingkup Teknologi Informasi.",
        icon: <Award className="w-6 h-6 text-amber-400" />,
        color: "from-amber-500/20 to-orange-500/20",
        border: "group-hover:border-amber-500/50",
        image: "/sertifikat/Sertifikat HMPSTI STAFF.png"
    }


];

export default function Certificates() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = containerRef.current?.querySelectorAll(".cert-card");

        if (cards) {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} id="certificates" className="py-20 md:py-32 bg-[#0a0a0f] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 backdrop-blur-sm text-sm font-mono text-amber-400">
                        <Award className="w-4 h-4" />
                        Recognitions
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                        Certificates & Achievements
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A collection of certifications and honors that validate my technical skills and professional growth in the field of technology.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className={`cert-card group relative p-6 sm:p-8 bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-2xl hover:bg-gray-800/60 transition-all duration-500 flex flex-col h-full ${cert.border} hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]`}
                        >
                            {/* Decorative Corner Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-gray-800/80 rounded-xl border border-gray-700 group-hover:border-transparent transition-all duration-500 group-hover:scale-110">
                                        {cert.icon}
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] sm:text-xs">
                                        <Calendar className="w-3 h-3 text-cyan-500" />
                                        {cert.date}
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center gap-2 text-cyan-400/80 mb-4 text-xs sm:text-sm font-medium">
                                    <MapPin className="w-3 h-3" />
                                    {cert.issuer}
                                </div>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                                    {cert.description}
                                </p>
                            </div>

                            <div className="mt-auto relative z-10 pt-6 border-t border-gray-800 group-hover:border-gray-700 transition-colors">
                                {cert.image ? (
                                    <a
                                        href={cert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group/btn hover:text-cyan-400 transition-colors"
                                    >
                                        View Certificate
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </a>
                                ) : (
                                    <span className="text-xs sm:text-sm font-medium text-gray-500 italic">
                                        Certificate pending
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
