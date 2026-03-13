import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const TermsConditions = () => (
  <main className="pt-16">
    <SEOHead
      title="Ayodhya Serenity Terms & Conditions | Usage Policy"
      description="Read the terms and conditions governing the use of Ayodhya Serenity and its ecosystem of verified temple and landmark platforms in Ayodhya."
      canonical="https://ayodhyaserenity.com/terms-and-conditions"
      breadcrumbs={[
        { name: "Home", url: "https://ayodhyaserenity.com" },
        { name: "Terms & Conditions", url: "https://ayodhyaserenity.com/terms-and-conditions" },
      ]}
    />

    <section className="section-padding max-w-4xl mx-auto">
      <SectionHeading label="Legal" title="Ayodhya Serenity Terms & Conditions" subtitle="Last updated: March 2026" />

      <div className="prose prose-lg max-w-none space-y-10 text-foreground/85">
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Website Usage</h2>
          <p className="text-muted-foreground">
            By accessing and using the Ayodhya Serenity website, you agree to use the platform only for lawful purposes. Any misuse, unauthorised access, or activities that disrupt the platform's functionality are strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Accuracy of Information</h2>
          <p className="text-muted-foreground">
            Ayodhya Serenity strives to provide verified and accurate information about temples, landmarks, and cultural destinations across Ayodhya. However, we do not guarantee absolute accuracy and recommend visitors verify critical travel details independently.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content on this platform – including text, images, design elements, branding, and website architecture – is the intellectual property of Ayodhya Serenity unless otherwise credited. Reproduction without written permission is prohibited.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">User Submissions</h2>
          <p className="text-muted-foreground">
            By submitting photos, content, or any material to Ayodhya Serenity (including competition entries), you grant us a non-exclusive, royalty-free licence to display, distribute, and promote that content on our platform and affiliated channels.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">External Links</h2>
          <p className="text-muted-foreground">
            Ayodhya Serenity may contain links to external websites for reference or additional information. We are not responsible for the content, accuracy, or privacy practices of those third-party sites.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Modification of Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to update or modify these terms at any time without prior notice. Continued use of the website after changes constitutes acceptance of the revised terms. We encourage users to review this page periodically.
          </p>
        </div>

        <p className="text-muted-foreground">
          See also: <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> · <Link to="/copyright-legal" className="text-primary hover:underline">Copyright & Legal</Link>
        </p>
      </div>
    </section>
  </main>
);

export default TermsConditions;
