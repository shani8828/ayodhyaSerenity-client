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
  { name: "Hanuman Garhi", location: "Ayodhya, Uttar Pradesh", img: hanumanGarhi, desc: "One of the most important temples in Ayodhya, dedicated to Lord Hanuman. The temple sits atop a hill and is reached by climbing 76 steps.", link: "https://hanumangarhi.vercel.app", verified: true },
  { name: "Lata Mangeshkar Chowk", location: "Ayodhya, Uttar Pradesh", img: lataChowk, desc: "A beautifully designed landmark chowk in the heart of Ayodhya, honoring India's legendary singer Lata Mangeshkar.", link: "https://latamangeshkarchowk.vercel.app/", verified: true },
  { name: "Shravan Kumar Mandir", location: "Ayodhya, Uttar Pradesh", img: shravanMandir, desc: "A sacred shrine commemorating the story of Shravan Kumar, known for his unparalleled devotion to his parents.", link: "https://shravankumarmandir.vercel.app/", verified: true },
  // { name: "Kanak Bhawan", location: "Ayodhya, Uttar Pradesh", img: hanumanGarhi, desc: "A stunning temple dedicated to Lord Rama and Sita, known for its golden idols and beautiful architecture.", link: "#", verified: true },
  // { name: "Ram Ki Paidi", location: "Ayodhya, Uttar Pradesh", img: lataChowk, desc: "A series of ghats on the banks of the Sarayu river, popular for ritual bathing and evening aarti ceremonies.", link: "#", verified: true },
  // { name: "Nageshwarnath Temple", location: "Ayodhya, Uttar Pradesh", img: shravanMandir, desc: "An ancient temple dedicated to Lord Shiva, believed to have been established by Kush, the son of Lord Rama.", link: "#", verified: true },
];

const Projects = () => {
  const [loaded, setLoaded] = useState({});
  return (
    <>
      <SEOHead
        title="Our Projects - Verified Ayodhya Serenity Websites"
        description="Explore all websites and digital platforms created by Ayodhya Serenity for Ayodhya's temples, landmarks, and sacred destinations."
        canonical="https://ayodhyaserenity.vercel.app/projects"
      />

      <main className="pt-16">
        <section className="section-padding bg-gradient-warm">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="Our Work"
              title="All Projects by Ayodhya Serenity"
              subtitle="Every digital platform we've built for Ayodhya's landmarks - verified, authentic, and trusted."
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
                viewport={{ once: true, margin: "-100px"  }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden h-48 bg-muted">
                  {/* Skeleton Placeholder */}
                  {!loaded[p.name] && (
                    <div className="absolute inset-0 animate-pulse bg-neutral-200 dark:bg-neutral-800" />
                  )}

                  <img
                    src={p.img}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setLoaded(prev => ({ ...prev, [p.name]: true }))}
                    className={`w-full h-full object-cover transition-opacity duration-500
  ${loaded[p.name] ? "opacity-100" : "opacity-0"}`}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-bold">{p.name}</h3>
                    {p.verified && <ShieldCheck size={18} className="text-primary" />}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{p.location}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                  <Button asChild size="sm" className="bg-gradient-saffron text-primary-foreground hover:translate-x-2  transition-all duration-300">
                    <Link to={p.link} target="_blank">Visit Website <ArrowRight size={14} className="ml-1" /></Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
