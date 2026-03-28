import { motion } from "framer-motion";
import { Code, Users, Scale, Compass, BookOpen, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const teams = [
  { icon: Code, title: "Developers", desc: "Frontend and backend engineers building beautiful, fast, and accessible digital platforms for Ayodhya's heritage." },
  { icon: Users, title: "Core Team", desc: "The visionaries behind Ayodhya Serenity's platform strategy, partnerships, and growth." },
  { icon: Scale, title: "Legal Team", desc: "Ensuring compliance, authenticity verification, and intellectual property protection." },
  { icon: Compass, title: "Travel Experts", desc: "Providing verified travel guidance, route planning, and visitor experience optimization." },
  { icon: BookOpen, title: "Information Collectors", desc: "Researchers and historians gathering temple history, rituals, and cultural facts." },
  { icon: Camera, title: "Photographers", desc: "Visual documentation specialists capturing Ayodhya's beauty and sacred atmosphere." },
];

const Team = () => (
  <>
    <SEOHead
      title="Ayodhya Serenity Team | People Behind the Vision"
      description="Meet the dedicated team of developers, researchers, photographers, and travel experts powering Ayodhya Serenity's digital heritage mission."
      canonical="https://ayodhyaserenity.vercel.app/team"
      breadcrumbs={[
        { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
        { name: "Our Team", url: "https://ayodhyaserenity.vercel.app/team" },
      ]}
    />

    <main className="pt-16">
      <section className="section-padding bg-gradient-warm">
        <SectionHeading label="Our People" title="The Team Behind Ayodhya Serenity" subtitle="A diverse team united by passion for Ayodhya's heritage." />
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:border-primary border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <t.icon size={24} className="text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">
          Interested in joining Ayodhya Serenity? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> to explore opportunities.
        </p>
      </section>
    </main>
  </>
);

export default Team;
