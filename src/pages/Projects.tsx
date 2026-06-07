import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, LayoutGrid, Flame, Landmark, Waves, Store, Wrench, MapPin, StoreIcon } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { useState } from "react";
import { tools, markets, landmarks, ghats, temples, businesses } from "@/data/projects";

const categories = [
  { id: "all", label: "All Projects", icon: LayoutGrid },
  { id: "businesses", label: "Businesses", icon: StoreIcon },
  { id: "temples", label: "Temples", icon: Flame },
  { id: "landmarks", label: "Landmarks", icon: Landmark },
  { id: "ghats", label: "Ghats", icon: Waves },
  { id: "markets", label: "Markets", icon: Store },
  { id: "tools", label: "Tools", icon: Wrench },
];

type ProjectItem = {
  name: string;
  category: string;
  img: string;
  desc: string;
  link: string;
  verified: boolean;
  alt: string;
  location?: string;
};

const allProjects: ProjectItem[] = [
  ...temples.map(p => ({ ...p, category: "temples" })),
  ...landmarks.map(p => ({ ...p, category: "landmarks" })),
  ...ghats.map(p => ({ ...p, category: "ghats" })),
  ...markets.map(p => ({ ...p, category: "markets" })),
  ...businesses.map(p => ({ ...p, category: "businesses" })),
  ...tools.map(p => ({ ...p, category: "tools" })),
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? allProjects
    : allProjects.filter(p => p.category === activeTab);

  return (
    <>
      <SEOHead
        title="Ayodhya Serenity Projects | Sacred Views of Ayodhya"
        description="Explore all verified temple and landmark websites created by Ayodhya Serenity. Discover sacred views and spiritual destinations across Ayodhya."
        canonical="https://ayodhyaserenity.vercel.app/projects"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
          { name: "Projects", url: "https://ayodhyaserenity.vercel.app/projects" },
        ]}
      />

      <main className="bg-[#000000] text-[#F9F9F6] pt-16 pb-12 min-h-screen flex flex-col selection:bg-[#FF6B00] selection:text-black">
        {/* Header Section */}
        <section className="py-24 md:py-36 px-6 md:px-16 bg-gradient-warm pb-8 md:pb-12 shrink-0 border-b-[0.5px] border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="Our Work"
              title="Ayodhya Serenity - Verified Digital Projects"
              subtitle="Every digital platform we've built for Ayodhya's landmarks - verified, authentic, and trusted."
            />

            {/* Map Navigation Link */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
              className="mt-8 flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group border border-white/20 text-[#F9F9F6] font-['Plus_Jakarta_Sans'] font-semibold px-6 py-3.5 rounded-none uppercase text-[10px] tracking-widest transition-all duration-300 hover:bg-white/5"
              >
                <Link to="maps" className="flex items-center gap-2">
                  <MapPin size={12} strokeWidth={1.5} className="text-[#FF6B00]" />
                  View Projects on Map
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Sticky Filter Pills Container */}
        <section className="sticky top-16 z-40 bg-[#000000]/80 backdrop-blur-xl border-y border-white/5 py-4 shadow-sm shrink-0 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-center justify-start md:justify-center gap-3 w-max mx-auto md:w-auto">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-none text-xs font-semibold uppercase tracking-widest font-['Plus_Jakarta_Sans'] transition-all duration-300 ${
                      activeTab === cat.id
                        ? "bg-[#FF6B00] text-black shadow-md"
                        : "bg-white/5 text-[#F9F9F6]/60 hover:text-[#F9F9F6] hover:bg-white/10"
                    }`}
                    aria-label={`Filter by ${cat.label}`}
                    aria-pressed={activeTab === cat.id}
                  >
                    <Icon size={12} strokeWidth={1.5} className={activeTab === cat.id ? "animate-pulse" : ""} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="px-6 md:px-16 py-16 md:py-24 bg-[#000000] flex-grow">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 lg:gap-16">
              {filteredProjects.map((p) => (
                <article
                  key={p.name}
                  className="flex flex-col space-y-6 group"
                >
                  {/* Visual block - cinematic scaling */}
                  <div className="relative overflow-hidden bg-[#0a0a0a] aspect-[16/10]">
                    <img
                      src={p.img}
                      alt={p.alt}
                      title={`${p.name} – verified by Ayodhya Serenity`}
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                  </div>

                  <div className="flex flex-col flex-grow space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-['Clash_Display'] text-2xl font-bold tracking-tight text-[#F9F9F6]">{p.name}</h3>
                      {p.verified && (
                        <div className="shrink-0 pt-1" title="Verified by Ayodhya Serenity">
                          <ShieldCheck size={18} className="text-[#FF6B00]" strokeWidth={1.5} aria-label="Verified by Ayodhya Serenity" />
                        </div>
                      )}
                    </div>

                    {p.location && (
                      <div className="flex items-center gap-1.5 text-xs text-[#9AAB9B] font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">
                        <MapPin size={12} strokeWidth={1.5} className="text-[#FF6B00]" />
                        <span className="truncate">{p.location}</span>
                      </div>
                    )}

                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/75 leading-relaxed flex-grow min-h-[60px]">
                      {p.desc}
                    </p>

                    <div className="pt-2 mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/btn w-full bg-[#FF6B00] text-black font-['Plus_Jakarta_Sans'] font-semibold px-6 py-3.5 rounded-none uppercase text-[10px] tracking-widest transition-all duration-300"
                      >
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2" aria-label={`Visit ${p.name} website`}>
                          Visit Website
                          <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-24 space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-none bg-white/5 text-[#9AAB9B] mb-2">
                  <LayoutGrid size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-['Clash_Display'] font-bold">No projects found</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#9AAB9B]">Currently there are no projects in this category.</p>
              </div>
            )}

            {/* Bottom Links */}
            <div className="text-center mt-20 pt-12 border-t border-white/5 font-['Plus_Jakarta_Sans']">
              <p className="text-[#F9F9F6]/60 text-sm leading-relaxed">
                Want to be part of the Ayodhya Serenity network? <br className="md:hidden" />
                {/* <Link to="/trust-badge" className="text-[#FF6B00] font-semibold hover:underline inline-flex items-center gap-1.5 mt-2 md:mt-0 md:ml-1">
                  Apply for the Trust Badge <ArrowRight size={12} strokeWidth={1.5} />
                </Link>
                <span className="hidden md:inline mx-3 text-white/10">•</span> */}
                <Link to="/contact" className="text-[#FF6B00] font-semibold hover:underline inline-flex items-center gap-1.5 mt-2 md:mt-0">
                  Contact our team <ArrowRight size={12} strokeWidth={1.5} />
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;