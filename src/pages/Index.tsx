import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, Users, Code, ShieldCheck, Camera, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "/images/hero-ayodhya.avif";
import featuredPlaces from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
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

const faq = [
  { question: "What is Ayodhya Serenity?", answer: "Ayodhya Serenity is the trusted digital gateway to Ayodhya, providing verified information about temples, landmarks, and spiritual destinations for pilgrims and travelers." },
  { question: "Where is Ayodhya Serenity located?", answer: "Ayodhya Serenity is based in Ayodhya, Uttar Pradesh, India - the ancient holy city and birthplace of Lord Rama." },
  { question: "Why visit Ayodhya Serenity?", answer: "Ayodhya Serenity provides the most comprehensive, verified, and authentic digital guide to Ayodhya's temples, sacred sites, travel routes, and cultural heritage." },
  { question: "How can I plan my visit to Ayodhya?", answer: "Use Ayodhya Serenity's travel guide section for best visiting times, transport options, temple etiquette, and nearby landmarks to plan a meaningful pilgrimage." },
];

const Index = () => (
  <>
    <SEOHead
      title="Ayodhya Serenity - Peaceful Spiritual Retreat in Ayodhya"
      description="Experience divine peace at Ayodhya Serenity. Discover spiritual calm, sacred surroundings, and a peaceful retreat in the holy city of Ayodhya."
      schema={schema}
      canonical="https://ayodhyaserenity.vercel.app"
      breadcrumbs={[{ name: "Home", url: "https://ayodhyaserenity.vercel.app" }]}
      faq={faq}
    />

    {/* Hero */}
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden gap-y-20">
      <img src={heroImg} alt="Ayodhya Serenity - temples at golden sunset along the Sarayu river in Ayodhya" title="Ayodhya Serenity spiritual retreat view" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Ayodhya Serenity
        </motion.h1>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground italic leading-tight mb-6" >Divine Echoes, Timeless Peace</h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          The Trusted Digital Gateway to Ayodhya - delivering verified information, travel guidance, and authentic digital experiences for temples, spiritual landmarks, and cultural sites.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-gradient-saffron hover:opacity-90 text-primary-foreground font-semibold px-8">
            <Link to="/projects">Explore Ayodhya</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary/10 hover:bg-primary-foreground/30 font-semibold px-8">
            <a href="#plan-visit">Plan Your Visit</a>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Intro – Why Visit Ayodhya Serenity */}
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          label="About Us"
          title="Why Visit Ayodhya Serenity"
          subtitle="Ayodhya Serenity is dedicated to documenting, preserving, and guiding visitors through the sacred and historical landmarks of Ayodhya."
        />
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Our platform serves as the central hub for verified information about Ayodhya's temples, pilgrimage routes, and spiritual tourism opportunities. Whether you're planning your first visit or seeking deeper knowledge about Ayodhya's rich heritage, Ayodhya Serenity provides authentic, well-researched content that respects the cultural significance of every sacred site. From historic temples and ancient ghats to travel guides and visitor resources, we are building the most comprehensive and trusted digital guide to Ayodhya. <Link to="/about" className="text-primary hover:underline">Learn more about Ayodhya Serenity</Link>.
        </p>
      </div>
    </section>

    {/* Featured Places – Sacred Environment in Ayodhya */}
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Our Projects"
          title="Sacred Environment in Ayodhya"
          subtitle="Explore the verified digital platforms we've built for Ayodhya's most iconic landmarks."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPlaces.slice(0, 3).map((place, i) => (
            <motion.article
              key={place.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={place.img}
                  alt={place.alt}
                  title={`${place.name} - Ayodhya Serenity verified landmark`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{place.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{place.desc}</p>
                <Button asChild size="sm" className="bg-gradient-saffron text-primary-foreground hover:opacity-90">
                  <a href={place.link} aria-label={`Visit ${place.name} website by Ayodhya Serenity`}>Visit Website <ArrowRight size={14} className="ml-1" /></a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300">
            <Link to="/projects">View All Ayodhya Serenity Projects <ArrowRight size={16} className="ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Plan Your Visit */}
    <section id="plan-visit" className="section-padding bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Travel Guide"
          title="Plan Your Visit to Ayodhya"
          subtitle="Everything you need to know for a meaningful and comfortable pilgrimage experience with Ayodhya Serenity."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Calendar, title: "Best Time to Visit", desc: "October to March offers pleasant weather. Major festivals like Ram Navami and Diwali attract millions of devotees." },
            { icon: MapPin, title: "Getting There", desc: "Ayodhya is well connected by rail (Ayodhya Junction), road (NH-27), and the new Maharishi Valmiki International Airport." },
            { icon: Star, title: "Temple Etiquette", desc: "Dress modestly, remove footwear before entering temples, maintain silence in prayer halls, and follow local customs." },
            { icon: Users, title: "Nearby Landmarks", desc: "Explore Ayodhya, Lucknow (130km), and other pilgrimage sites like Naimisharanya and Chitrakoot." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:border-primary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust & Reviews */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Pilgrims & Travelers"
          subtitle="What visitors say about their experience using Ayodhya Serenity."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl p-6 shadow-sm border hover:border-primary transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-temple-gold text-temple-gold" aria-hidden="true" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
              <p className="font-semibold text-sm">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Collaboration */}
    <section className="section-padding bg-gradient-warm">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          label="Partner With Us"
          title="Collaborate with Ayodhya Serenity"
          subtitle="We welcome partnerships with temple trusts, tourism organizations, historians, photographers, and cultural preservationists."
        />
        <p className="text-muted-foreground leading-relaxed mb-8">
          Whether you represent a temple trust seeking digital presence, a tourism board looking to promote Ayodhya, or a historian passionate about preserving sacred heritage – we'd love to work together to build something meaningful. <Link to="/contact" className="text-primary hover:underline">Reach out to Ayodhya Serenity today</Link>.
        </p>
        <Button asChild size="lg" className="bg-gradient-saffron text-primary-foreground hover:opacity-90 font-semibold px-8">
          <Link to="/contact">Collaborate With Us <ArrowRight size={16} className="ml-2" /></Link>
        </Button>
      </div>
    </section>

    {/* Hire Developers */}
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          label="Development Services"
          title="Hire Our Developers"
          subtitle="Our team builds beautiful, purpose-driven websites for temples, travel portals, digital archives, and tourism platforms."
        />
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {["Temple Websites", "Travel Portals", "Digital Archives", "Tourism Platforms", "Others"].map((s, i) => (
            <motion.div
              key={s}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-lg p-4 shadow-sm"
            >
              <Code size={20} className="text-primary mb-2 mx-auto" aria-hidden="true" />
              <p className="text-sm font-medium">{s}</p>
            </motion.div>
          ))}
        </div>
        <Button asChild size="lg" className="bg-gradient-saffron text-primary-foreground hover:opacity-90 font-semibold px-4 md:px-8 w-full md:w-auto">
          <Link to="/contact" className="flex items-center justify-center">
            <span className="md:hidden">Hire Developers</span>
            <span className="hidden md:inline">Build Your Website With Our Team</span>
            <ArrowRight size={16} className="ml-2 flex-shrink-0" />
          </Link>
        </Button>
      </div>
    </section>

    {/* Badge Program */}
    <section className="section-padding bg-gradient-warm">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          label="Trust Program"
          title="Ayodhya Serenity Trust Badge"
          subtitle="Get verified and join the trusted network of authentic Ayodhya information websites."
        />
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {[
            { icon: ShieldCheck, title: "Verified Badge", desc: "Display the 'Verified by Ayodhya Serenity' badge on your website." },
            { icon: Users, title: "Network Access", desc: "Join our growing network of trusted Ayodhya information providers." },
            { icon: Camera, title: "Increased Trust", desc: "Gain credibility with visitors who rely on verified sources." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-background rounded-xl p-6 shadow-sm"
            >
              <item.icon size={28} className="text-primary mb-3 mx-auto" aria-hidden="true" />
              <h3 className="font-display font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <Button asChild size="lg" className="bg-gradient-saffron text-primary-foreground hover:opacity-90 font-semibold px-8">
          <Link to="/trust-badge">Apply for Trust Badge <ArrowRight size={16} className="ml-2" /></Link>
        </Button>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Common questions about Ayodhya Serenity and visiting the holy city."
        />
        <div className="space-y-6">
          {faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <h3 className="font-display font-bold text-lg mb-2">{item.question}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Index;
