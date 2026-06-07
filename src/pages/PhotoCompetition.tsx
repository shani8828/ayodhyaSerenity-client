import { motion } from "framer-motion";
import { Camera, Trophy, Upload, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import dailyPhoto from "/images/daily-photo.avif";
import hanumanGarhi from "/images/Hanuman_Garhi_Temple,_a_major_religious_site_in_Ayodhya_utter_pradesh.avif";
import shravanMandir from "/images/shravan-kumar-mandir.avif";

const gallery = [
  { img: dailyPhoto, title: "Golden Dawn at the Sarayu", by: "Arvind Mehta", votes: 247, alt: "Ayodhya Serenity photo – golden dawn at Sarayu river in Ayodhya" },
  { img: hanumanGarhi, title: "Hanuman Garhi at Dusk", by: "Sneha Kumari", votes: 189, alt: "Ayodhya Serenity photo – Hanuman Garhi temple at dusk in Ayodhya" },
  { img: shravanMandir, title: "Sandstone Serenity", by: "Rajesh Gupta", votes: 156, alt: "Ayodhya Serenity photo – sandstone temple architecture in Ayodhya" },
];

const PhotoCompetition = () => (
  <>
    <SEOHead
      title="Ayodhya Serenity Photo Competition | Capture Ayodhya"
      description="Participate in the Ayodhya Serenity photo competition. Upload your best photos of Ayodhya's temples and sacred landmarks to win recognition."
      canonical="https://ayodhyaserenity.vercel.app/photo-competition"
      breadcrumbs={[
        { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
        { name: "Photo Competition", url: "https://ayodhyaserenity.vercel.app/photo-competition" },
      ]}
    />

    <main className="bg-[#000000] text-[#F9F9F6] pt-16 min-h-screen selection:bg-[#FF6B00] selection:text-black">
      {/* Header */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-gradient-warm border-b-[0.5px] border-white/5">
        <SectionHeading
          label="Photography"
          title="Ayodhya Serenity Photo Competition"
          subtitle="Share your lens on Ayodhya's divine beauty. Winners are featured on our homepage daily."
        />
      </section>

      {/* Steps Section */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-[#000000]">
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* Borderless Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { icon: Upload, title: "Upload", desc: "Submit your best photos of Ayodhya's temples, ghats, and sacred sites." },
              { icon: Heart, title: "Vote", desc: "Community members vote for their favorite photographs daily." },
              { icon: Trophy, title: "Win", desc: "Winners are featured on the homepage and recognized across our network." },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                  className="space-y-4 flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#FF6B00]">
                    <Icon size={20} strokeWidth={1} />
                  </div>
                  <h3 className="font-['Clash_Display'] text-xl font-bold tracking-tight">{step.title}</h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/75 max-w-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Submissions Section */}
          <div className="space-y-12">
            <h2 className="font-['Clash_Display'] text-3xl font-bold tracking-tight text-center">Recent Submissions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {gallery.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                  className="flex flex-col space-y-4 group"
                >
                  <div className="overflow-hidden aspect-video bg-[#0d0d0d]">
                    <img 
                      src={p.img} 
                      alt={p.alt} 
                      title={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103" 
                      loading="lazy" 
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-['Clash_Display'] text-lg font-bold tracking-tight">{p.title}</h4>
                    <div className="flex items-center justify-between text-xs font-['Plus_Jakarta_Sans'] text-[#9AAB9B]">
                      <span>by {p.by}</span>
                      <div className="flex items-center gap-1.5 text-[#FF6B00]">
                        <Heart size={12} strokeWidth={2} className="fill-current text-[#FF6B00]" aria-hidden="true" />
                        <span className="font-semibold tracking-wider">{p.votes} votes</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="text-center space-y-6 pt-8 border-t-[0.5px] border-white/10 font-['Plus_Jakarta_Sans']">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6B00] text-black font-semibold px-8 py-4 uppercase text-xs tracking-widest transition-all duration-300 inline-flex items-center gap-2"
            >
              <Camera size={14} strokeWidth={1.5} /> Submit Your Photo
            </motion.button>
            <p className="text-xs text-[#9AAB9B]">
              Browse all <Link to="/projects" className="text-[#FF6B00] hover:underline font-bold">Ayodhya Serenity projects</Link> for more inspiration.
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default PhotoCompetition;
