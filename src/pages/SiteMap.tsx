import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const pages = [
  { title: "Home", path: "/", desc: "Ayodhya Serenity homepage – your gateway to spiritual Ayodhya." },
  { title: "About Ayodhya Serenity", path: "/about", desc: "Our vision, mission, and commitment to Ayodhya's heritage." },
  { title: "Projects", path: "/projects", desc: "All verified temple and landmark websites by Ayodhya Serenity." },
  { title: "Our Team", path: "/team", desc: "Meet the developers, researchers, and experts behind the platform." },
  { title: "Photo Competition", path: "/photo-competition", desc: "Submit and vote on photos of Ayodhya's sacred sites." },
  { title: "Trust Badge Program", path: "/trust-badge", desc: "Apply for the Verified by Ayodhya Serenity badge." },
  { title: "Contact", path: "/contact", desc: "Get in touch for inquiries, partnerships, or development services." },
  { title: "Privacy Policy", path: "/privacy-policy", desc: "How Ayodhya Serenity handles and protects your data." },
  { title: "Terms & Conditions", path: "/terms-and-conditions", desc: "Rules governing the use of the Ayodhya Serenity platform." },
  { title: "Copyright & Legal", path: "/copyright-legal", desc: "Intellectual property protections and legal enforcement." },
];

const SiteMap = () => (
  <main className="pt-16">
    <SEOHead
      title="Ayodhya Serenity Site Map | All Pages"
      description="Browse the complete site map of Ayodhya Serenity. Find every page including temples, travel guides, and legal information about Ayodhya."
      canonical="https://ayodhyaserenity.com/site-map"
      breadcrumbs={[
        { name: "Home", url: "https://ayodhyaserenity.com" },
        { name: "Site Map", url: "https://ayodhyaserenity.com/site-map" },
      ]}
    />

    <section className="section-padding max-w-4xl mx-auto">
      <SectionHeading label="Navigation" title="Ayodhya Serenity Site Map" subtitle="All pages on our platform at a glance." />

      <nav aria-label="Site map">
        <ul className="space-y-4">
          {pages.map((page) => (
            <li key={page.path} className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors">
              <Link to={page.path} className="block">
                <h2 className="font-display font-bold text-lg text-foreground hover:text-primary transition-colors">{page.title}</h2>
                <p className="text-muted-foreground text-sm mt-1">{page.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  </main>
);

export default SiteMap;
