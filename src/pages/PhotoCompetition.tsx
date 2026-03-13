import { motion } from "framer-motion";
import { Camera, Trophy, Upload, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import dailyPhoto from "/images/daily-photo.avif";
import hanumanGarhi from "/images/Hanuman_Garhi_Temple,_a_major_religious_site_in_Ayodhya_utter_pradesh.avif";
import shravanMandir from "/images/shravan-kumar-mandir.avif";

const gallery = [
  { img: dailyPhoto, title: "Golden Dawn at the Sarayu", by: "Arvind Mehta", votes: 247 },
  { img: hanumanGarhi, title: "Hanuman Garhi at Dusk", by: "Sneha Kumari", votes: 189 },
  { img: shravanMandir, title: "Sandstone Serenity", by: "Rajesh Gupta", votes: 156 },
];

const PhotoCompetition = () => (
  <>
    <SEOHead
      title="Photo Competition - Capture Ayodhya's Beauty"
      description="Participate in the Ayodhya Serenity daily photo competition. Upload your best photos of Ayodhya's temples and landmarks to win."
      canonical="https://ayodhyaserenity.vercel.app/photo-competition"
    />

    <main className="pt-16">
      <section className="section-padding bg-gradient-warm">
        <SectionHeading
          label="Photography"
          title="Ayodhya Photo Competition"
          subtitle="Share your lens on Ayodhya's divine beauty. Winners are featured on our homepage daily."
        />
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Upload, title: "Upload", desc: "Submit your best photos of Ayodhya's temples, ghats, and sacred sites." },
              { icon: Heart, title: "Vote", desc: "Community members vote for their favorite photographs daily." },
              { icon: Trophy, title: "Win", desc: "Winners are featured on the homepage and recognized across our network." },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-card rounded-xl p-6 shadow-sm"
              >
                <step.icon size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="font-display text-2xl font-bold text-center mb-8">Recent Submissions</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {gallery.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl overflow-hidden shadow-md bg-card"
              >
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-semibold text-sm mb-1">{p.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">by {p.by}</p>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Heart size={14} className="text-primary" />
                    <span className="text-xs">{p.votes} votes</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-saffron text-primary-foreground hover:opacity-90 font-semibold px-8">
              <Camera size={18} className="mr-2" /> Submit Your Photo
            </Button>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default PhotoCompetition;
