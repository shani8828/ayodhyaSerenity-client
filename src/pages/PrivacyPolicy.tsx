import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <main className="pt-16">
    <SEOHead
      title="Ayodhya Serenity Privacy Policy | Data Protection"
      description="Learn how Ayodhya Serenity collects, uses, and protects your personal information. Our privacy practices for visitors and contributors."
      canonical="https://ayodhyaserenity.vercel.app/privacy-policy"
      breadcrumbs={[
        { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
        { name: "Privacy Policy", url: "https://ayodhyaserenity.vercel.app/privacy-policy" },
      ]}
    />

    <section className="section-padding max-w-4xl mx-auto">
      <SectionHeading label="Legal" title="Ayodhya Serenity Privacy Policy" subtitle="Last updated: March 2026" />

      <div className="prose prose-lg max-w-none space-y-10 text-foreground/85">
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
          <p>Ayodhya Serenity may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Visitor analytics data (pages visited, session duration, device type)</li>
            <li>Contact form submissions (name, email, message)</li>
            <li>Email addresses submitted via inquiry or collaboration forms</li>
            <li>Photo uploads submitted for competitions</li>
            <li>Cookies and tracking technologies for performance monitoring</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Improving user experience and website performance</li>
            <li>Responding to inquiries and support requests</li>
            <li>Managing collaborations and partnership requests</li>
            <li>Verifying photo and content submissions</li>
            <li>Maintaining platform security and preventing misuse</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Third-Party Services</h2>
          <p className="text-muted-foreground">
            We integrate with third-party services to operate our platform effectively. These include EmailJS for processing contact forms, analytics tools for understanding visitor behaviour, and CDN/image hosting services for optimised content delivery. These services may process limited user data in accordance with their own privacy policies.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Cookies Policy</h2>
          <p className="text-muted-foreground">
            Ayodhya Serenity uses cookies for analytics tracking, performance optimisation, and remembering user preferences. You may disable cookies through your browser settings, though some features may not function optimally without them.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Data Protection</h2>
          <p className="text-muted-foreground">
            We are committed to protecting your personal information. We do not sell, trade, or rent your personal data to third parties. All data is stored securely and accessed only by authorised team members for legitimate operational purposes.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Contact for Privacy Concerns</h2>
          <p className="text-muted-foreground">
            If you have any questions or concerns about our privacy practices, please contact us at{" "}
            <a href="mailto:info.ayodhyaserenity@gmail.com" className="text-primary hover:underline">info.ayodhyaserenity@gmail.com</a>.
          </p>
        </div>

        <p className="text-muted-foreground">
          See also: <Link to="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link> · <Link to="/copyright-legal" className="text-primary hover:underline">Copyright & Legal</Link>
        </p>
      </div>
    </section>
  </main>
);

export default PrivacyPolicy;
