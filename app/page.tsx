import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] selection:bg-cyan-500/20 selection:text-cyan-400">
      <Hero />
      <About />
      <TechStack />
      <Projects />

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-[#0d0d12] border-t border-gray-800">
        <div className="container px-4 mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-gray-500 font-mono text-xs sm:text-sm">
            <span className="text-cyan-400">&lt;</span>
            Built with passion
            <span className="text-cyan-400">/&gt;</span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">
            © {new Date().getFullYear()} My Portfolio. Powered by Next.js &
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
