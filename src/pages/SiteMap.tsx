import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const pages = [
  { title: "Home", path: "/", desc: "Ayodhya Serenity homepage – your gateway to spiritual Ayodhya." },
  { title: "About Ayodhya Serenity", path: "/about", desc: "Our vision, mission, and commitment to Ayodhya's heritage." },
  { title: "Our Services", path: "/services", desc: "Our services including business listing, transport listing, and professional website development to connect with visitors of Ayodhya." },
  { title: "Projects", path: "/projects", desc: "All verified temple and landmark websites by Ayodhya Serenity." },
  { title: "Our Team", path: "/team", desc: "Meet the developers, researchers, and experts behind the platform." },
  { title: "Contact", path: "/contact", desc: "Get in touch for inquiries, partnerships, or development services." },
  { title: "Privacy Policy", path: "/privacy-policy", desc: "How Ayodhya Serenity handles and protects your data." },
  { title: "Terms & Conditions", path: "/terms-and-conditions", desc: "Rules governing the use of the Ayodhya Serenity platform." },
  { title: "Copyright & Legal", path: "/copyright-legal", desc: "Intellectual property protections and legal enforcement." },
];

const SiteMap = () => (
  <main className="bg-[#000000] text-[#F9F9F6] pt-16 min-h-screen selection:bg-[#FF6B00] selection:text-black">
    <SEOHead
      title="Ayodhya Serenity Site Map | All Pages"
      description="Browse the complete site map of Ayodhya Serenity. Find every page including temples, travel guides, and legal information about Ayodhya."
      canonical="https://ayodhyaserenity.vercel.app/site-map"
      breadcrumbs={[
        { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
        { name: "Site Map", url: "https://ayodhyaserenity.vercel.app/site-map" },
      ]}
    />

    <section className="py-24 md:py-36 px-6 md:px-16 max-w-4xl mx-auto space-y-16">
      <SectionHeading label="Navigation" title="Ayodhya Serenity Site Map" subtitle="All pages on our platform at a glance." />

      <nav aria-label="Site map">
        <ul className="space-y-2 border-t-[0.5px] border-white/10">
          {pages.map((page) => (
            <li key={page.path} className="border-b-[0.5px] border-white/10 py-6 transition-colors duration-300 hover:border-[#FF6B00] group">
              <Link to={page.path} className="block space-y-2">
                <h2 className="font-['Clash_Display'] text-xl font-bold tracking-tight text-[#F9F9F6] group-hover:text-[#FF6B00] transition-colors">
                  {page.title}
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/70 leading-relaxed">
                  {page.desc}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  </main>
);

export default SiteMap;
