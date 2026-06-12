import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import {
  ArrowRight,
  Eye,
  Compass,
  Landmark,
  Archive,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const principles = [
  {
    title: "Our Vision",
    icon: Eye,
    description:
      "To become the definitive digital authority for Ayodhya's temples, landmarks, and spiritual destinations - where authenticity meets technology to serve millions of pilgrims worldwide.",
  },
  {
    title: "Our Mission",
    icon: Compass,
    description:
      "We document, verify, and present accurate information about every sacred site in Ayodhya, creating trusted digital experiences that guide visitors with confidence.",
  },
  {
    title: "Cultural Responsibility",
    icon: Landmark,
    description:
      "Every partnership, design decision, and piece of content reflects our commitment to preserving the heritage, values, and traditions that make Ayodhya sacred.",
  },
  {
    title: "Digital Preservation",
    icon: Archive,
    description:
      "Beyond tourism, we serve as a living archive - preserving stories, architecture, rituals, and traditions for future generations through modern technology.",
  },
  {
    title: "Commitment to Authenticity",
    icon: ShieldCheck,
    description:
      "Every website in our ecosystem undergoes rigorous verification, ensuring visitors always receive trustworthy and reliable information.",
  },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Ayodhya Serenity | Spiritual Retreat Experience"
        description="Discover the vision and mission behind Ayodhya Serenity. Learn how we preserve Ayodhya's sacred temples and spiritual heritage digitally."
        canonical="https://ayodhyaserenity.vercel.app/about"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
          {
            name: "About Ayodhya Serenity",
            url: "https://ayodhyaserenity.vercel.app/about",
          },
        ]}
      />

      <main className="bg-black text-[#F9F9F6] overflow-hidden">

        {/* Header */}
        <section className="py-24 md:py-36 px-6 md:px-16 bg-gradient-warm border-b-[0.5px] border-white/5 shrink-0">
          <div className="max-w-4xl mx-auto text-center">
            <span className="block text-xs uppercase tracking-[0.3em] text-[#9AAB9B] font-medium mb-4">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-['Clash_Display'] font-bold tracking-tighter leading-[1.0] text-wrap-balance mb-6 text-[#F9F9F6]">
              About,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#F9F9F6]">
                Ayodhya Serenity
              </span>
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#F9F9F6]/80 leading-relaxed max-w-2xl mx-auto">
              Building the most trusted digital ecosystem for Ayodhya's sacred heritage.
            </p>
          </div>
        </section>

        {/* TIMELINE / PRINCIPLES */}
        <section className="relative py-24 md:py-36 px-6 md:px-16">

          <div className="max-w-6xl mx-auto relative">

            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B00]/40 via-[#9AAB9B]/20 to-transparent -translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">

              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex ${index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                      }`}
                  >
                    {/* Node */}
                    <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 h-5 w-5 rounded-full bg-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.7)] z-20" />

                    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d0d] w-full md:w-[46%]">

                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#FF6B00]/10 blur-3xl" />
                        <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#9AAB9B]/10 blur-3xl" />
                      </div>

                      <div className="relative z-10 p-8">

                        <div className="flex items-center gap-4">

                          <div className="h-14 w-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                            <Icon
                              size={24}
                              className="text-[#FF6B00]"
                            />
                          </div>

                          <h2 className="font-['Clash_Display'] text-3xl font-bold">
                            {item.title}
                          </h2>
                        </div>

                        <div className="mt-6 h-px bg-gradient-to-r from-[#FF6B00]/40 via-[#9AAB9B]/20 to-transparent" />

                        <p className="mt-6 text-sm leading-relaxed text-white/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED MANIFESTO */}
        <section className="px-6 md:px-16 pb-24 md:pb-36">

          <div className="max-w-6xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[40px] border border-[#FF6B00]/20 bg-[#0d0d0d]"
            >

              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#9AAB9B]/10 blur-3xl" />
              </div>

              <div className="relative z-10 p-10 md:p-16">

                <div className="text-[11px] uppercase tracking-[0.35em] text-[#9AAB9B]">
                  Our Promise
                </div>

                <h2 className="mt-6 font-['Clash_Display'] text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Preserving Ayodhya's
                  <span className="block text-[#FF6B00]">
                    Digital Legacy
                  </span>
                </h2>

                <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75">
                  Every temple documented. Every story preserved.
                  Every visitor guided by information they can trust.
                  We believe technology should serve culture, not replace it.
                  Through careful documentation, verification, and design,
                  we are building a digital foundation for future generations.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8 container border-white/10 font-['Plus_Jakarta_Sans'] text-sm flex flex-wrap gap-4 items-center justify-between"
          >
            <p className="text-[#F9F9F6]/60">
              Explore the peaceful environment of Ayodhya Serenity in our projects gallery, or get in touch.
            </p>
            <div className="flex gap-6">
              <Link to="/projects" className="text-[#FF6B00] hover:text-[#F9F9F6] font-semibold transition-colors flex items-center gap-1.5 uppercase tracking-widest text-[10px]">
                Projects Gallery <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5" />
              </Link>
              <Link to="/contact" className="text-[#FF6B00] hover:text-[#F9F9F6] font-semibold transition-colors flex items-center gap-1.5 uppercase tracking-widest text-[10px]">
                Get In Touch <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
    </>

  );
};

export default About;
