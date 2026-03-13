import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import hanumanGarhi from "/images/Hanuman_Garhi_Temple,_a_major_religious_site_in_Ayodhya_utter_pradesh.avif";
import lataChowk from "/images/lata-mangeshkar-chowk.avif";
import shravanMandir from "/images/shravan-kumar-mandir.avif";
import { Link } from "react-router-dom";
import { useState } from "react";

const projects = [
  { name: "Hanuman Garhi", location: "Ayodhya, Uttar Pradesh", img: hanumanGarhi, desc: "One of the most important temples in Ayodhya, dedicated to Lord Hanuman. The temple sits atop a hill and is reached by climbing 76 steps.", link: "https://hanumangarhi.vercel.app", verified: true, alt: "Ayodhya Serenity – Hanuman Garhi Temple hilltop view in Ayodhya" },
  { name: "Lata Mangeshkar Chowk", location: "Ayodhya, Uttar Pradesh", img: lataChowk, desc: "A beautifully designed landmark chowk in the heart of Ayodhya, honoring India's legendary singer Lata Mangeshkar.", link: "https://latamangeshkarchowk.vercel.app/", verified: true, alt: "Ayodhya Serenity – Lata Mangeshkar Chowk modern landmark in Ayodhya" },
  { name: "Shravan Kumar Mandir", location: "Ayodhya, Uttar Pradesh", img: shravanMandir, desc: "A sacred shrine commemorating the story of Shravan Kumar, known for his unparalleled devotion to his parents.", link: "https://shravankumarmandir.vercel.app/", verified: true, alt: "Ayodhya Serenity – Shravan Kumar Mandir sacred shrine in Ayodhya" },
];

const Projects = () => {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  return (
    <>
      <SEOHead
        title="Ayodhya Serenity Projects | Sacred Views of Ayodhya"
        description="Explore all verified temple and landmark websites created by Ayodhya Serenity. Discover sacred views and spiritual destinations across Ayodhya."
        canonical="https://ayodhyaserenity.com/projects"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.com" },
          { name: "Projects", url: "https://ayodhyaserenity.com/projects" },
        ]}
      />

      <main className="pt-16">
        <section className="section-padding bg-gradient-warm">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="Our Work"
              title="Ayodhya Serenity – Verified Digital Projects"
              subtitle="Every digital platform we've built for Ayodhya's landmarks – verified, authentic, and trusted."
            />
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden h-48 bg-muted">
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
                    className={`w-full h-full object-cover transition-opacity duration-500 ${loaded[p.name] ? "opacity-100" : "opacity-0"}`}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-bold">{p.name}</h3>
                    {p.verified && <ShieldCheck size={18} className="text-primary" aria-label="Verified by Ayodhya Serenity" />}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{p.location}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                  <Button asChild size="sm" className="bg-gradient-saffron text-primary-foreground hover:translate-x-2 transition-all duration-300">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name} website`}>Visit Website <ArrowRight size={14} className="ml-1" /></a>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Want to be part of the Ayodhya Serenity network? <Link to="/trust-badge" className="text-primary hover:underline">Apply for the Trust Badge</Link> or <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.
          </p>
        </section>
      </main>
    </>
  );
};

export default Projects;
