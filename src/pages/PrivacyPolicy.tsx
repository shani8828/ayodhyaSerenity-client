import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <main className="bg-[#000000] text-[#F9F9F6] pt-16 min-h-screen selection:bg-[#FF6B00] selection:text-black">
    <SEOHead
      title="Ayodhya Serenity Privacy Policy | Data Protection"
      description="Learn how Ayodhya Serenity collects, uses, and protects your personal information. Our privacy practices for visitors and contributors."
      canonical="https://ayodhyaserenity.vercel.app/privacy-policy"
      breadcrumbs={[
        { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
        { name: "Privacy Policy", url: "https://ayodhyaserenity.vercel.app/privacy-policy" },
      ]}
    />

    <section className="py-24 md:py-36 px-6 md:px-16 max-w-4xl mx-auto space-y-16">
      <SectionHeading label="Legal" title="Ayodhya Serenity Privacy Policy" subtitle="Last updated: March 2026" />

      <div className="space-y-12 font-['Plus_Jakarta_Sans'] text-base text-[#F9F9F6]/80 leading-relaxed">
        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-xl font-bold text-[#F9F9F6]">Information We Collect</h2>
          <p>Ayodhya Serenity may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#9AAB9B]">
            <li><span className="text-[#F9F9F6]/80">Visitor analytics data (pages visited, session duration, device type)</span></li>
            <li><span className="text-[#F9F9F6]/80">Contact form submissions (name, email, message)</span></li>
            <li><span className="text-[#F9F9F6]/80">Email addresses submitted via inquiry or collaboration forms</span></li>
            <li><span className="text-[#F9F9F6]/80">Photo uploads submitted for competitions</span></li>
            <li><span className="text-[#F9F9F6]/80">Cookies and tracking technologies for performance monitoring</span></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-xl font-bold text-[#F9F9F6]">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-[#9AAB9B]">
            <li><span className="text-[#F9F9F6]/80">Improving user experience and website performance</span></li>
            <li><span className="text-[#F9F9F6]/80">Responding to inquiries and support requests</span></li>
            <li><span className="text-[#F9F9F6]/80">Managing collaborations and partnership requests</span></li>
            <li><span className="text-[#F9F9F6]/80">Verifying photo and content submissions</span></li>
            <li><span className="text-[#F9F9F6]/80">Maintaining platform security and preventing misuse</span></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-xl font-bold text-[#F9F9F6]">Third-Party Services</h2>
          <p className="text-[#F9F9F6]/70">
            We integrate with third-party services to operate our platform effectively. These include EmailJS for processing contact forms, analytics tools for understanding visitor behaviour, and CDN/image hosting services for optimised content delivery. These services may process limited user data in accordance with their own privacy policies.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-xl font-bold text-[#F9F9F6]">Cookies Policy</h2>
          <p className="text-[#F9F9F6]/70">
            Ayodhya Serenity uses cookies for analytics tracking, performance optimisation, and remembering user preferences. You may disable cookies through your browser settings, though some features may not function optimally without them.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-xl font-bold text-[#F9F9F6]">Data Protection</h2>
          <p className="text-[#F9F9F6]/70">
            We are committed to protecting your personal information. We do not sell, trade, or rent your personal data to third parties. All data is stored securely and accessed only by authorised team members for legitimate operational purposes.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-xl font-bold text-[#F9F9F6]">Contact for Privacy Concerns</h2>
          <p className="text-[#F9F9F6]/70">
            If you have any questions or concerns about our privacy practices, please contact us at{" "}
            <a href="mailto:info.ayodhyaserenity@gmail.com" className="text-[#FF6B00] hover:underline font-bold">info.ayodhyaserenity@gmail.com</a>.
          </p>
        </div>

        <p className="text-xs uppercase font-bold tracking-widest text-[#9AAB9B] pt-8 border-t-[0.5px] border-white/10 flex gap-4">
          <Link to="/terms-and-conditions" className="text-[#FF6B00] hover:text-[#F9F9F6] transition-colors">Terms & Conditions</Link>
          <span>·</span>
          <Link to="/copyright-legal" className="text-[#FF6B00] hover:text-[#F9F9F6] transition-colors">Copyright & Legal</Link>
        </p>
      </div>
    </section>
  </main>
);

export default PrivacyPolicy;
