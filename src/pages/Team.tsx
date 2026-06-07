import { motion } from "framer-motion";
import { Code, Users, Scale, Compass, BookOpen, Camera, ArrowRight } from "lucide-react";
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

    <main className="bg-[#000000] text-[#F9F9F6] selection:bg-[#FF6B00] selection:text-black">
      <section className="py-24 md:py-36 px-6 md:px-16 bg-gradient-warm border-b-[0.5px] border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading 
            label="Our People" 
            title="The Team Behind Ayodhya Serenity" 
            subtitle="A diverse team united by passion for Ayodhya's heritage." 
          />
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {teams.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                  className="space-y-4 group"
                >
                  <div className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-black transition-colors duration-300">
                    <Icon size={20} strokeWidth={1} />
                  </div>
                  <h3 className="font-['Clash_Display'] text-2xl font-bold tracking-tight text-[#F9F9F6]">{t.title}</h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/70 leading-relaxed">{t.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center pt-12 border-t-[0.5px] border-white/10 font-['Plus_Jakarta_Sans']">
            <p className="text-[#F9F9F6]/60 mb-4 text-sm">
              Interested in joining Ayodhya Serenity? 
            </p>
            <Link to="/contact" className="text-xs uppercase font-bold tracking-widest text-[#FF6B00] hover:text-[#F9F9F6] transition-colors inline-flex items-center gap-2 group">
              Contact us to explore opportunities
              <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Team;
