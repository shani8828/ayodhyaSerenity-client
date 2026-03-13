import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const About = () => (
  <>
    <SEOHead
      title="About Ayodhya Serenity"
      description="Learn about Ayodhya Serenity's mission to preserve and digitally document Ayodhya's sacred temples, landmarks, and spiritual heritage."
      canonical="https://ayodhyaserenity.vercel.app/about"
    />

    <main className="pt-16">
      <section className="section-padding bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            label="Our Story"
            title="About Ayodhya Serenity"
            subtitle="Building the most trusted digital ecosystem for Ayodhya's sacred heritage."
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto space-y-12">
          {[
            { title: "Our Vision", text: "To become the definitive digital authority for Ayodhya's temples, landmarks, and spiritual destinations — a platform where authenticity meets technology to serve millions of pilgrims and travelers worldwide." },
            { title: "Our Mission", text: "Ayodhya Serenity is committed to documenting, verifying, and presenting accurate information about every sacred site in Ayodhya. We build dedicated websites for temples and landmarks, ensuring visitors receive trustworthy guidance for their spiritual journey." },
            { title: "Cultural Responsibility", text: "We understand the immense cultural and spiritual significance of Ayodhya. Every piece of content, every design choice, and every partnership reflects our deep respect for the heritage we represent. We work closely with local communities, temple trusts, and historians to ensure authenticity." },
            { title: "Digital Preservation", text: "Beyond tourism, Ayodhya Serenity serves as a digital archive — preserving the stories, architecture, rituals, and traditions of Ayodhya for future generations. Our photographers, researchers, and writers work tirelessly to create a comprehensive digital record of this sacred city." },
            { title: "Commitment to Authenticity", text: "In an era of misinformation, Ayodhya Serenity stands as a beacon of verified, reliable information. Every website in our network undergoes rigorous fact-checking and review. Our Trust Badge program extends this commitment to partner websites across the ecosystem." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="font-display text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  </>
);

export default About;
