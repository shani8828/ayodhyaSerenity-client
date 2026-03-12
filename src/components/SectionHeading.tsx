import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, subtitle, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {label && (
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">{title}</h2>
    {subtitle && (
      <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed mx-auto">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
