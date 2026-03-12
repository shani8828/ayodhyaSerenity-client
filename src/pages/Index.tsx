import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, Users, Code, ShieldCheck, Camera, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-ayodhya.jpg";
import dailyPhoto from "@/assets/daily-photo.jpg";
import hanumanGarhi from "@/assets/hanuman-garhi.jpg";
import lataChowk from "@/assets/lata-mangeshkar-chowk.jpg";
import shravanMandir from "@/assets/shravan-kumar-mandir.jpg";

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
  sameAs: [],
};

const featuredPlaces = [
  { name: "Hanuman Garhi", img: hanumanGarhi, desc: "One of the most visited temples in Ayodhya, dedicated to Lord Hanuman, perched atop a hill with 76 steps.", link: "#" },
  { name: "Lata Mangeshkar Chowk", img: lataChowk, desc: "A beautifully designed landmark chowk honoring the legendary singer, blending modern architecture with tradition.", link: "#" },
  { name: "Shravan Kumar Mandir", img: shravanMandir, desc: "A sacred shrine commemorating the story of Shravan Kumar, a symbol of devotion and filial love.", link: "#" },
];

const reviews = [
  { name: "Priya Sharma", text: "Ayodhya Serenity made my pilgrimage so much easier. Verified information I could trust completely.", rating: 5 },
  { name: "Rajesh Gupta", text: "The best digital resource for anyone planning to visit Ayodhya. Comprehensive and authentic.", rating: 5 },
  { name: "Ananya Patel", text: "As a travel blogger, I rely on Ayodhya Serenity for accurate temple information. Highly recommended.", rating: 5 },
];

const Index = () => (
  <>
    <SEOHead
      title="Ayodhya Temples, Travel Guide & Spiritual Tourism"
      description="Ayodhya Serenity is the trusted digital gateway to Ayodhya's temples, landmarks, and sacred destinations. Plan your pilgrimage with verified travel guidance."
      schema={schema}
    />

    {/* Hero */}
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Ayodhya temples at sunset along the Sarayu river" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
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

    {/* Intro */}
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          label="About Us"
          title="A Growing Digital Ecosystem for Ayodhya"
          subtitle="Ayodhya Serenity is dedicated to documenting, preserving, and guiding visitors through the sacred and historical landmarks of Ayodhya."
        />
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Our platform serves as the central hub for verified information about Ayodhya's temples, pilgrimage routes, and spiritual tourism opportunities. Whether you're planning your first visit or seeking deeper knowledge about Ayodhya's rich heritage, Ayodhya Serenity provides authentic, well-researched content that respects the cultural significance of every sacred site. From historic temples and ancient ghats to travel guides and visitor resources, we are building the most comprehensive and trusted digital guide to Ayodhya.
        </p>
      </div>
    </section>

    {/* Daily Best Photo */}
    <section className="section-padding bg-gradient-warm">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Photo of the Day"
          title="Best Photo of the Day"
          subtitle="Capturing the divine beauty of Ayodhya through the lenses of our community photographers."
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto"
        >
          <img src={dailyPhoto} alt="Award-winning photo of Ayodhya temple at sunrise" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-primary-foreground">Golden Dawn at the Sarayu</h3>
                <p className="text-primary-foreground/80 text-sm">by Arvind Mehta · Sarayu Ghat, Ayodhya</p>
              </div>
              <button className="flex items-center gap-1 text-primary-foreground/80 hover:text-saffron-light transition-colors">
                <Heart size={20} />
                <span className="text-sm">247</span>
              </button>
            </div>
          </div>
        </motion.div>
        <div className="text-center mt-6">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link to="/photo-competition">Submit Your Photo <ArrowRight size={16} className="ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Featured Places */}
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Our Projects"
          title="Featured Destinations by Ayodhya Serenity"
          subtitle="Explore the verified digital platforms we've built for Ayodhya's most iconic landmarks."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPlaces.map((place, i) => (
            <motion.div
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
                  alt={`${place.name} - Ayodhya landmark`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{place.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{place.desc}</p>
                <Button asChild size="sm" className="bg-gradient-saffron text-primary-foreground hover:opacity-90">
                  <a href={place.link}>Visit Website <ArrowRight size={14} className="ml-1" /></a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link to="/projects">View All Projects <ArrowRight size={16} className="ml-1" /></Link>
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
          subtitle="Everything you need to know for a meaningful and comfortable pilgrimage experience."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Calendar, title: "Best Time to Visit", desc: "October to March offers pleasant weather. Major festivals like Ram Navami and Diwali attract millions of devotees." },
            { icon: MapPin, title: "Getting There", desc: "Ayodhya is well connected by rail (Ayodhya Junction), road (NH-27), and the new Maharishi Valmiki International Airport." },
            { icon: Star, title: "Temple Etiquette", desc: "Dress modestly, remove footwear before entering temples, maintain silence in prayer halls, and follow local customs." },
            { icon: Users, title: "Nearby Landmarks", desc: "Explore Faizabad, Lucknow (130km), and other pilgrimage sites like Naimisharanya and Chitrakoot." },
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
              className="bg-card rounded-xl p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-temple-gold text-temple-gold" />
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
          Whether you represent a temple trust seeking digital presence, a tourism board looking to promote Ayodhya, or a historian passionate about preserving sacred heritage — we'd love to work together to build something meaningful.
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {["Temple Websites", "Travel Portals", "Digital Archives", "Tourism Platforms"].map((s, i) => (
            <motion.div
              key={s}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-lg p-4 shadow-sm"
            >
              <Code size={20} className="text-primary mb-2 mx-auto" />
              <p className="text-sm font-medium">{s}</p>
            </motion.div>
          ))}
        </div>
        <Button asChild size="lg" className="bg-gradient-saffron text-primary-foreground hover:opacity-90 font-semibold px-8">
          <Link to="/contact">Build Your Website With Our Team <ArrowRight size={16} className="ml-2" /></Link>
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
              <item.icon size={28} className="text-primary mb-3 mx-auto" />
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
  </>
);

export default Index;
