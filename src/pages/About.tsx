import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const About = () => (
  <>
    <SEOHead
      title="About Ayodhya Serenity | Spiritual Retreat Experience"
      description="Discover the vision and mission behind Ayodhya Serenity. Learn how we preserve Ayodhya's sacred temples and spiritual heritage digitally."
      canonical="https://ayodhyaserenity.vercel.app/about"
      breadcrumbs={[
        { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
        { name: "About Ayodhya Serenity", url: "https://ayodhyaserenity.vercel.app/about" },
      ]}
    />

    <main className="bg-[#000000] text-[#F9F9F6] selection:bg-[#FF6B00] selection:text-black">
      {/* Header section with warm dark gradient */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-gradient-warm border-b-[0.5px] border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            label="Our Story"
            title="About Ayodhya Serenity"
            subtitle="Building the most trusted digital ecosystem for Ayodhya's sacred heritage."
          />
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-3xl mx-auto space-y-16">
          {[
            { title: "Our Vision", text: "To become the definitive digital authority for Ayodhya's temples, landmarks, and spiritual destinations - a platform where authenticity meets technology to serve millions of pilgrims and travelers worldwide." },
            { title: "Our Mission", text: "Ayodhya Serenity is committed to documenting, verifying, and presenting accurate information about every sacred site in Ayodhya. We build dedicated websites for temples and landmarks, ensuring visitors receive trustworthy guidance for their spiritual journey." },
            { title: "Cultural Responsibility", text: "We understand the immense cultural and spiritual significance of Ayodhya. Every piece of content, every design choice, and every partnership reflects our deep respect for the heritage we represent. We work closely with local communities, temple trusts, and historians to ensure authenticity." },
            { title: "Digital Preservation", text: "Beyond tourism, Ayodhya Serenity serves as a digital archive - preserving the stories, architecture, rituals, and traditions of Ayodhya for future generations. Our photographers, researchers, and writers work tirelessly to create a comprehensive digital record of this sacred city." },
            { title: "Commitment to Authenticity", text: "In an era of misinformation, Ayodhya Serenity stands as a beacon of verified, reliable information. Every website in our network undergoes rigorous fact-checking and review. Our Trust Badge program extends this commitment to partner websites across the ecosystem." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
              className="space-y-4"
            >
              <h2 className="font-['Clash_Display'] text-2xl font-bold text-[#F9F9F6]">{item.title}</h2>
              <p className="font-['Plus_Jakarta_Sans'] text-base text-[#F9F9F6]/80 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8 border-t-[0.5px] border-white/10 font-['Plus_Jakarta_Sans'] text-sm flex flex-wrap gap-4 items-center justify-between"
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
        </div>
      </section>
    </main>
  </>
);

export default About;
