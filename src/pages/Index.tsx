import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, Users, Code, ArrowRight, ArrowUpRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { temples, landmarks, ghats } from "@/data/projects";
import FAQs from "@/components/FAQs";

const displayProjects = [temples[0], landmarks[0], ghats[0]].filter(Boolean);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, type: "spring", stiffness: 100, damping: 20 },
  }),
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ayodhya Serenity",
  url: "https://ayodhyaserenity.vercel.app",
  description: "The trusted digital gateway to Ayodhya's temples, landmarks, and spiritual destinations.",
  address: { "@type": "PostalAddress", addressLocality: "Ayodhya", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  sameAs: [],
};

const reviews = [
  { name: "Priya Sharma", text: "Ayodhya Serenity made my pilgrimage so much easier. Verified information I could trust completely.", rating: 5 },
  { name: "Rajesh Gupta", text: "The best digital resource for anyone planning to visit Ayodhya. Comprehensive and authentic.", rating: 5 },
  { name: "Ananya Patel", text: "As a travel blogger, I rely on Ayodhya Serenity for accurate temple information. Highly recommended.", rating: 5 },
];

const Index = () => (
  <>
    <SEOHead
      title="Ayodhya Serenity - Peaceful Spiritual Retreat in Ayodhya"
      description="Experience divine peace at Ayodhya Serenity. Discover spiritual calm, sacred surroundings, and a peaceful retreat in the holy city of Ayodhya."
      schema={schema}
      canonical="https://ayodhyaserenity.vercel.app"
      breadcrumbs={[{ name: "Home", url: "https://ayodhyaserenity.vercel.app" }]}
    />

    {/* Hero Section - Overhauled based on Blueprint Reference */}
    <section className="relative min-h-screen w-full bg-[#000000] text-[#F9F9F6] overflow-hidden flex flex-col justify-between pt-36 pb-16 px-6 md:px-16 selection:bg-[#FF6B00] selection:text-black">
      {/* Dynamic Background Text (Ultra-lightweight replacement for heavy sunset image) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-5">
        <motion.h1 
          initial={{ y: 0 }}
          animate={{ y: -50 }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="text-[22vw] font-['Clash_Display'] font-bold tracking-tighter text-white whitespace-nowrap"
        >
          AYODHYA SERENITY
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end z-10 my-auto">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#9AAB9B] font-medium block mb-4">
              Divine Echoes, Timeless Peace
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Clash_Display'] font-bold tracking-tighter leading-[0.9] text-wrap-balance text-[#F9F9F6]">
              Timeless Spirit.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#F9F9F6]">
                Cinematic Luxury.
              </span>
            </h1>
          </motion.div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
            className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#F9F9F6]/80 leading-relaxed"
          >
            Experience the trusted digital gateway to Ayodhya. We deliver verified information, travel guidance, and authentic digital experiences for temples, spiritual landmarks, and cultural sites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-4 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 bg-[#FF6B00] text-black font-['Plus_Jakarta_Sans'] font-semibold px-8 py-4 rounded-none uppercase text-xs tracking-widest transition-all duration-300"
            >
              <Link to="/projects" className="flex items-center gap-3">
                Explore Ayodhya
                <ArrowUpRight className="w-4 h-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 border border-white/20 text-[#F9F9F6] font-['Plus_Jakarta_Sans'] font-semibold px-8 py-4 rounded-none uppercase text-xs tracking-widest transition-all duration-300 hover:bg-white/5 hover:border-white/40"
            >
              <Link to="/contact">Connect With Us</Link>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="w-full border-t-[0.5px] border-[#F9F9F6]/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs tracking-widest text-[#9AAB9B] uppercase font-['Plus_Jakarta_Sans'] z-10 gap-4">
        <div>© {new Date().getFullYear()} Ayodhya Serenity Project</div>
        <div className="flex gap-8">
          <a href="#about" className="hover:text-[#FF6B00] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#FF6B00] transition-colors">Projects</a>
          <a href="#plan-visit" className="hover:text-[#FF6B00] transition-colors">Guide</a>
        </div>
      </div>
    </section>

    {/* Intro Section */}
    <section id="about" className="section-padding bg-[#000000] border-t-[0.5px] border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <SectionHeading
          label="Our Purpose"
          title="Why Visit Ayodhya Serenity"
          subtitle="Ayodhya Serenity is dedicated to documenting, preserving, and guiding visitors through the sacred and historical landmarks of Ayodhya."
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-base md:text-lg text-[#F9F9F6]/80 leading-relaxed font-['Plus_Jakarta_Sans'] max-w-3xl mx-auto"
        >
          Our platform serves as the central hub for verified information about Ayodhya's temples, pilgrimage routes, and spiritual tourism opportunities. Whether you're planning your first visit or seeking deeper knowledge about Ayodhya's rich heritage, Ayodhya Serenity provides authentic, well-researched content that respects the cultural significance of every sacred site.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-6"
        >
          <Link to="/about" className="text-xs font-semibold uppercase tracking-widest text-[#FF6B00] hover:text-[#F9F9F6] transition-colors inline-flex items-center gap-2 group">
            Learn more about Ayodhya Serenity
            <ArrowRight strokeWidth={1} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Featured Places */}
    <section id="projects" className="section-padding bg-[#000000] border-t-[0.5px] border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Projects"
          title="Sacred Environment in Ayodhya"
          subtitle="Explore the verified digital platforms we've built for Ayodhya's most iconic landmarks."
        />
        
        {/* Zero-Clutter borderless grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {displayProjects.map((place, i) => (
            <motion.article
              key={place.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col space-y-6"
            >
              <div className="overflow-hidden bg-[#000000]">
                <img
                  src={place.img}
                  alt={place.alt}
                  title={`${place.name} - Ayodhya Serenity verified landmark`}
                  className="w-full aspect-[4/3] object-cover transition-all duration-700 ease-out hover:scale-103"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-['Clash_Display'] text-2xl font-bold tracking-tight text-[#F9F9F6]">{place.name}</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/70 leading-relaxed min-h-[60px]">{place.desc}</p>
                <div className="pt-2">
                  <a 
                    href={place.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs uppercase font-bold tracking-widest text-[#FF6B00] hover:text-[#F9F9F6] transition-colors inline-flex items-center gap-1.5 group"
                    aria-label={`Visit ${place.name} website by Ayodhya Serenity`}
                  >
                    Visit Website 
                    <ArrowRight strokeWidth={1} className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link 
            to="/projects" 
            className="text-xs uppercase font-bold tracking-widest text-[#FF6B00] hover:text-[#F9F9F6] transition-colors inline-flex items-center gap-2 group p-4 border border-[#FF6B00]/20 hover:border-[#FF6B00]"
          >
            View All Ayodhya Serenity Projects 
            <ArrowRight strokeWidth={1} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>

    {/* Plan Your Visit */}
    <section id="plan-visit" className="section-padding bg-[#000000] border-t-[0.5px] border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Travel Guide"
          title="Plan Your Visit to Ayodhya"
          subtitle="Everything you need to know for a meaningful and comfortable pilgrimage experience with Ayodhya Serenity."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Calendar, title: "Best Time to Visit", desc: "October to March offers pleasant weather. Major festivals like Ram Navami and Diwali attract millions of devotees." },
            { icon: MapPin, title: "Getting There", desc: "Ayodhya is well connected by rail (Ayodhya Junction), road (NH-27), and the new Maharishi Valmiki International Airport." },
            { icon: Star, title: "Temple Etiquette", desc: "Dress modestly, remove footwear before entering temples, maintain silence in prayer halls, and follow local customs." },
            { icon: Users, title: "Nearby Landmarks", desc: "Explore Ayodhya, Lucknow (130km), and other pilgrimage sites like Naimisharanya and Chitrakoot." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="space-y-4"
              >
                <div className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center text-[#FF6B00]">
                  <Icon size={20} strokeWidth={1} />
                </div>
                <h3 className="font-['Clash_Display'] text-xl font-bold tracking-tight text-[#F9F9F6]">{item.title}</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-[#000000] border-t-[0.5px] border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Pilgrims & Travelers"
          subtitle="What visitors say about their experience using Ayodhya Serenity."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="space-y-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-[#FF6B00] text-[#FF6B00]" strokeWidth={1} aria-hidden="true" />
                ))}
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/80 leading-relaxed italic">
                "{r.text}"
              </p>
              <p className="font-['Clash_Display'] text-xs font-semibold uppercase tracking-widest text-[#9AAB9B]">
                {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Collaboration */}
    <section className="section-padding bg-[#000000] border-t-[0.5px] border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <SectionHeading
          label="Partner With Us"
          title="Collaborate with Ayodhya Serenity"
          subtitle="We welcome partnerships with temple trusts, tourism organizations, historians, photographers, and cultural preservationists."
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base text-[#F9F9F6]/75 leading-relaxed font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto"
        >
          Whether you represent a temple trust seeking digital presence, a tourism board looking to promote Ayodhya, or a historian passionate about preserving sacred heritage – we'd love to work together to build something meaningful.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-[#FF6B00] text-black font-['Plus_Jakarta_Sans'] font-semibold px-8 py-4 rounded-none uppercase text-xs tracking-widest transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center gap-3">
              Collaborate With Us
              <ArrowRight strokeWidth={1.5} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>

    {/* Development Services */}
    <section className="section-padding bg-[#000000] border-t-[0.5px] border-white/5">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <SectionHeading
          label="Development Services"
          title="Hire Our Developers"
          subtitle="Our team builds beautiful, purpose-driven websites for temples, travel portals, digital archives, and tourism platforms."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {["Temple Websites", "Travel Portals", "Digital Archives", "Tourism Platforms", "Others"].map((s, i) => (
            <motion.div
              key={s}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="py-8 px-4 border border-white/5 bg-white/5 flex flex-col items-center justify-center space-y-3"
            >
              <Code size={18} strokeWidth={1} className="text-[#FF6B00]" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-widest font-['Plus_Jakarta_Sans'] text-[#F9F9F6]">{s}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-6"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-[#FF6B00] text-black font-['Plus_Jakarta_Sans'] font-semibold px-8 py-4 rounded-none uppercase text-xs tracking-widest transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center gap-3">
              Build Your Website With Our Team
              <ArrowRight strokeWidth={1.5} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>

    {/* FAQ Section */}
    <FAQs />
  </>
);

export default Index;
