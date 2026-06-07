import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const CopyrightLegal = () => (
  <main className="bg-[#000000] text-[#F9F9F6] pt-16 min-h-screen selection:bg-[#FF6B00] selection:text-black">
    <SEOHead
      title="Ayodhya Serenity Copyright & Legal | IP Protection"
      description="Ayodhya Serenity's copyright ownership, intellectual property protections, and legal enforcement policies for its digital ecosystem in Ayodhya."
      canonical="https://ayodhyaserenity.vercel.app/copyright-legal"
      breadcrumbs={[
        { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
        { name: "Copyright & Legal", url: "https://ayodhyaserenity.vercel.app/copyright-legal" },
      ]}
    />

    <section className="py-24 md:py-36 px-6 md:px-16 max-w-4xl mx-auto space-y-16">
      <SectionHeading label="Legal" title="Ayodhya Serenity Copyright & Legal Protection" subtitle="Protecting Ayodhya's digital heritage" />

      <div className="space-y-12 font-['Plus_Jakarta_Sans'] text-base text-[#F9F9F6]/80 leading-relaxed">
        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-xl font-bold text-[#F9F9F6]">Copyright Ownership</h2>
          <p className="text-[#F9F9F6]/70">
            All content, design systems, branding assets, visual identities, and digital architecture created under the Ayodhya Serenity ecosystem are protected by applicable copyright laws. This includes all temple and landmark websites developed and managed by the platform.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-xl font-bold text-[#F9F9F6]">Unauthorised Use</h2>
          <p className="text-[#F9F9F6]/75">The following activities are strictly prohibited without prior written consent:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#9AAB9B]">
            <li><span className="text-[#F9F9F6]/80">Copying or reproducing website content in any form</span></li>
            <li><span className="text-[#F9F9F6]/80">Duplicating website design, layout, or user interface elements</span></li>
            <li><span className="text-[#F9F9F6]/80">Scraping or extracting information for commercial purposes</span></li>
            <li><span className="text-[#F9F9F6]/80">Republishing photographs or visual media without attribution or permission</span></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-xl font-bold text-[#F9F9F6]">Legal Enforcement</h2>
          <p className="text-[#F9F9F6]/75">
            Ayodhya Serenity reserves the right to pursue legal action against any individual or organisation found engaging in:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#9AAB9B]">
            <li><span className="text-[#F9F9F6]/80">Copyright infringement of any Ayodhya Serenity property</span></li>
            <li><span className="text-[#F9F9F6]/80">Impersonation of the Ayodhya Serenity brand or its affiliates</span></li>
            <li><span className="text-[#F9F9F6]/80">Misuse or fraudulent display of Ayodhya Serenity authenticity badges</span></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-xl font-bold text-[#F9F9F6]">Reporting Violations</h2>
          <p className="text-[#F9F9F6]/70">
            If you become aware of any unauthorised use of Ayodhya Serenity content or branding, please report it to{" "}
            <a href="mailto:info.ayodhyaserenity@gmail.com" className="text-[#FF6B00] hover:underline font-bold">info.ayodhyaserenity@gmail.com</a>. We take all reports seriously and will investigate promptly.
          </p>
        </div>

        <p className="text-xs uppercase font-bold tracking-widest text-[#9AAB9B] pt-8 border-t-[0.5px] border-white/10 flex gap-4">
          <Link to="/privacy-policy" className="text-[#FF6B00] hover:text-[#F9F9F6] transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link to="/terms-and-conditions" className="text-[#FF6B00] hover:text-[#F9F9F6] transition-colors">Terms & Conditions</Link>
        </p>
      </div>
    </section>
  </main>
);

export default CopyrightLegal;
