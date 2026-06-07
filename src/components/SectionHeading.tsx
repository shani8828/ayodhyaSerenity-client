import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, subtitle, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className={`mb-16 md:mb-24 ${center ? "text-center" : "text-left"}`}
  >
    {label && (
      <span className="block text-xs uppercase tracking-[0.3em] text-[#9AAB9B] font-medium mb-4">
        {label}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Clash_Display'] font-bold tracking-tighter leading-[1.0] text-wrap-balance text-[#F9F9F6]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-6 max-w-2xl text-base md:text-lg text-[#F9F9F6]/80 leading-relaxed mx-auto font-['Plus_Jakarta_Sans']">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
