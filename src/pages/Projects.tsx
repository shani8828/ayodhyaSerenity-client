import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, LayoutGrid, Flame, Landmark, Waves, Store, Wrench, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { useState } from "react";
import { tools, markets, landmarks, ghats, temples } from "@/data/projects";

const categories = [
  { id: "all", label: "All Projects", icon: LayoutGrid },
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
  ...tools.map(p => ({ ...p, category: "tools" })),
];

const Projects = () => {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
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

      <main className="pt-16 pb-12 min-h-screen flex flex-col">
        <section className="section-padding bg-gradient-warm pb-6 md:pb-10 shrink-0">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="Our Work"
              title="Ayodhya Serenity - Verified Digital Projects"
              subtitle="Every digital platform we've built for Ayodhya's landmarks - verified, authentic, and trusted."
            />
          </div>
        </section>

        {/* Sticky Filter Pills Container */}
        <section className="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-y border-border/40 py-3 md:py-4 shadow-sm shrink-0">
          <div className="max-w-6xl mx-auto px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex items-center justify-start md:justify-center gap-3 w-max mx-auto md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === cat.id
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  aria-label={`Filter by ${cat.label}`}
                  aria-pressed={activeTab === cat.id}
                >
                  <cat.icon size={16} className={activeTab === cat.id ? "animate-pulse" : ""} />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:py-12 bg-background flex-grow">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              layout 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p, i) => (
                  <motion.article
                    layout
                    key={p.name}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                    className="group bg-card rounded-xl border border-border/40 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col h-full"
                  >
                    <div className="relative overflow-hidden h-[200px] shrink-0 bg-muted">
                      {!loaded[p.name] && (
                        <div className="absolute inset-0 animate-pulse bg-neutral-200 dark:bg-neutral-800" />
                      )}
                      <img
                        src={p.img}
                        alt={p.alt}
                        title={`${p.name} – verified by Ayodhya Serenity`}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => setLoaded(prev => ({ ...prev, [p.name]: true }))}
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded[p.name] ? "opacity-100" : "opacity-0"}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-5 md:p-6 flex flex-col flex-grow">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display text-lg font-bold leading-tight line-clamp-2">{p.name}</h3>
                        {p.verified && (
                          <div className="shrink-0 pt-1" title="Verified by Ayodhya Serenity">
                            <ShieldCheck size={20} className="text-primary" aria-label="Verified by Ayodhya Serenity" />
                          </div>
                        )}
                      </div>
                      
                      {p.location && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3 font-medium">
                          <MapPin size={14} className="text-primary/70 shrink-0" />
                          <span className="truncate">{p.location}</span>
                        </div>
                      )}
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {p.desc}
                      </p>
                      
                      <div className="mt-auto">
                        <Button 
                          asChild 
                          className="w-full bg-gradient-saffron text-primary-foreground hover:shadow-md transition-all duration-300 group/btn"
                        >
                          <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name} website`}>
                            Visit Website 
                            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 text-muted-foreground">
                  <LayoutGrid size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">No projects found</h3>
                <p className="text-muted-foreground">Currently there are no projects in this category.</p>
              </motion.div>
            )}

            <div className="text-center mt-12 md:mt-16 pt-8 border-t border-border/40">
              <p className="text-muted-foreground">
                Want to be part of the Ayodhya Serenity network? <br className="md:hidden" />
                <Link to="/trust-badge" className="text-primary font-medium hover:underline inline-flex items-center gap-1 mt-2 md:mt-0 md:ml-1">
                  Apply for the Trust Badge <ArrowRight size={14} />
                </Link> 
                <span className="hidden md:inline mx-2 text-border">•</span>
                <Link to="/contact" className="text-primary font-medium hover:underline inline-flex items-center gap-1 mt-2 md:mt-0">
                  Contact our team <ArrowRight size={14} />
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