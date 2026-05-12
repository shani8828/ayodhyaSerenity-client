import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Store, Car, Laptop, ArrowRight, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    id: "business",
    icon: Store,
    title: "Business Listing Service",
    description: "People can list shops, hotels, hospitals, restaurants, and other services so visitors exploring Ayodhya Serenity can discover them easily. This improves visibility and publicity.",
    process: "Submit your business → our team reviews it → listed within 24 hours.",
    highlight: "Absolutely free of cost.",
    buttonText: "List Your Business",
    route: "/services/business",
  },
  {
    id: "transport",
    icon: Car,
    title: "Transport Listing Service",
    description: "Vehicle owners and transport providers can list their services for visitors travelling across Ayodhya and nearby places.",
    process: "Submit vehicle details, contact info, route coverage, and pricing/range. Team reviews and lists within 24 hours.",
    highlight: "Absolutely free.",
    buttonText: "List Transport Service",
    route: "/services/transport",
  },
  {
    id: "website",
    icon: Laptop,
    title: "Website Development Service",
    description: "Users can create a new website or modernize an existing one with our professional tech team.",
    process: "Submit requirements and our team will contact them within 24 hours.",
    highlight: "Premium quality & support.",
    buttonText: "Get a Website",
    route: "/services/website",
  }
];

const Services = () => {
  return (
    <>
      <SEOHead
        title="Our Services | Ayodhya Serenity"
        description="Discover our premium services including business listing, transport listing, and professional website development to connect with visitors of Ayodhya."
        canonical="https://ayodhyaserenity.vercel.app/services"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
          { name: "Services", url: "https://ayodhyaserenity.vercel.app/services" },
        ]}
      />

      <main className="pt-16 min-h-screen bg-background">
        <section className="section-padding bg-gradient-warm">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="Our Services"
              title="Empowering Businesses, Transport Providers, and Organizations"
              subtitle="Seamlessly connect with millions of visitors exploring Ayodhya"
            />
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 pb-24 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-muted/50 rounded-xl p-4 mb-6 border border-border/50">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Process
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.process}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-8 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={16} />
                    <span>{service.highlight}</span>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/50">
                    <Button
                      asChild size="lg"
                      className="bg-gradient-saffron hover:opacity-80 text-primary-foreground font-semibold px-8 shadow-lg active:scale-95 transition-all duration-300"
                    >
                      <Link to={service.route}>
                        {service.buttonText}
                        <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                    {/* <Button
            asChild
            size="lg"
            className="bg-gradient-saffron hover:opacity-80 text-primary-foreground font-semibold px-8 shadow-lg active:scale-95 transition-all duration-300"
          >
            <Link to="/projects">Explore Ayodhya</Link>
          </Button> */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
