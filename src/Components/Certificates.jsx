import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  Award, CheckCircle2, Clock, ExternalLink, Copy, Check,
  Code, Server, Layers, Database, Wrench, Terminal,
  Cloud, Shield, Zap, Globe, GitBranch, Box, Share2,
  ChevronLeft, ChevronRight
} from "lucide-react";

// ─── SKILL BADGES ─────────────────────────────────────────────────────────────
// Set `shareUrl` to your LinkedIn profile, GitHub, or any shareable page.
const skillBadges = [
  { label: "AWS", icon: Cloud, color: "#e9c484ff", shareUrl: "https://www.linkedin.com/in/your-profile" },
  { label: "Docker", icon: Box, color: "#0ea5e9", shareUrl: null },
  { label: "Kubernetes", icon: Layers, color: "#818cf8", shareUrl: null },
  { label: "Jenkins", icon: GitBranch, color: "#ef4444", shareUrl: null },
  { label: "Linux", icon: Terminal, color: "#84cc16", shareUrl: null },
  { label: "GitLab CI/CD", icon: GitBranch, color: "#fb923c", shareUrl: null },
  { label: "Terraform", icon: Shield, color: "#a78bfa", shareUrl: null },
  { label: "React", icon: Code, color: "#38bdf8", shareUrl: null },
  { label: "Node.js", icon: Server, color: "#4ade80", shareUrl: null },
  { label: "FastAPI", icon: Zap, color: "#2dd4bf", shareUrl: null },
  { label: "Python", icon: Code, color: "#facc15", shareUrl: null },
  { label: "MongoDB", icon: Database, color: "#4ade80", shareUrl: null },
  { label: "PostgreSQL", icon: Database, color: "#60a5fa", shareUrl: null },
  { label: "TailwindCSS", icon: Globe, color: "#38bdf8", shareUrl: null },
  { label: "Redis", icon: Zap, color: "#f87171", shareUrl: null },
  { label: "n8n", icon: Wrench, color: "#e879f9", shareUrl: null },
];

// ─── CERTIFICATES ─────────────────────────────────────────────────────────────
// `link`: Google Drive share URL — fill in yours below.
// `image`: path like "/certs/aws.png" once you place images in /public/certs/
const certificates = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    status: "completed",
    gradient: ["#ebbf73ff", "#e49468ff"],
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",   // 👈 added dummy link for demonstration
    image: null,
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    status: "completed",
    gradient: ["#86c2deff", "#7694d3ff"],
    link: null,
    image: null,
  },
  {
    title: "Docker & Kubernetes: The Practical Guide",
    issuer: "Udemy",
    date: "2024",
    status: "completed",
    gradient: ["#71d4c8ff", "#70baccff"],
    link: null,
    image: null,
  },
  {
    title: "React – The Complete Guide 2024",
    issuer: "Udemy",
    date: "2024",
    status: "completed",
    gradient: ["#8182c3ff", "#9d7fd1ff"],
    link: null,
    image: null,
  },
  {
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "2025 (expected)",
    status: "in-progress",
    gradient: ["#65b49aff", "#71c791ff"],
    link: null,
    image: null,
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF / Linux Foundation",
    date: "2025 (expected)",
    status: "in-progress",
    gradient: ["#bf8dc7ff", "#cb6f83ff"],
    link: null,
    image: null,
  },
];

// ─── SIMPLE CARD WRAPPER (REPLACED TILT) ──────────────────────────────────────
const SimpleCard = ({ children, className = "", isActive }) => {
  return (
    <motion.div
      animate={{ 
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.7,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${className}`}
      style={{
        background: "rgba(30, 41, 59, 0.4)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: isActive ? "0 20px 40px -15px rgba(0,0,0,0.5)" : "0 10px 20px -10px rgba(0,0,0,0.3)",
      }}
    >
      {children}
    </motion.div>
  );
};

// ─── BADGE CARD ───────────────────────────────────────────────────────────────
const BadgeCard = ({ badge, index }) => {
  const Icon = badge.icon;
  const [copied, setCopied] = useState(false);

  const handleShare = (e) => {
    e.stopPropagation();
    if (badge.shareUrl) {
      window.open(badge.shareUrl, "_blank", "noopener,noreferrer");
    } else {
      navigator.clipboard.writeText(`${badge.label} — Prachi Sukre's skill`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 18 }}
      className="group"
    >
      <SimpleCard isActive={true} className="group-hover:border-indigo-500/50">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative flex flex-col items-center gap-3 p-5 rounded-2xl backdrop-blur-sm cursor-default select-none overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${badge.color}18, ${badge.color}08)`,
            border: `1px solid ${badge.color}44`,
            boxShadow: `0 4px 24px ${badge.color}22`,
          }}
        >
          {/* Animated glow orb */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 0%, ${badge.color}30, transparent 70%)` }}
          />

          {/* Icon container */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${badge.color}30, ${badge.color}10)`,
              border: `1px solid ${badge.color}55`,
              boxShadow: `0 0 20px ${badge.color}44`,
            }}
          >
            <Icon className="w-6 h-6" style={{ color: badge.color }} />
          </div>

          <span className="text-sm font-bold text-white tracking-wide">
            {badge.label}
          </span>

          {/* Share button */}
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
            style={{ background: `${badge.color}22`, border: `1px solid ${badge.color}44` }}
            title={badge.shareUrl ? "View on LinkedIn" : "Copy badge"}
          >
            {copied
              ? <Check className="w-3 h-3 text-green-400" />
              : badge.shareUrl
                ? <ExternalLink className="w-3 h-3" style={{ color: badge.color }} />
                : <Copy className="w-3 h-3" style={{ color: badge.color }} />
            }
          </motion.button>
        </motion.div>
      </SimpleCard>
    </motion.div>
  );
};

// ─── FLOATING THUMBNAIL VISUAL ──────────────────────────────────────────────
const FloatingThumbnailVisual = ({ color1, color2 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      
      {/* Animated Blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
           key={i}
           className="absolute rounded-full blur-[80px] opacity-40"
           style={{
             width: 180 + i * 60,
             height: 180 + i * 60,
             background: i % 2 === 0 ? color1 : color2,
             top: `${15 + i * 25}%`,
             left: `${15 + i * 30}%`,
           }}
           animate={{
             x: [0, 30, -30, 0],
             y: [0, -50, 50, 0],
             scale: [1, 1.15, 0.9, 1],
           }}
           transition={{
             duration: 12 + i * 4,
             repeat: Infinity,
             ease: "easeInOut",
           }}
        />
      ))}
    </div>
  );
};

// ─── CERTIFICATE CARD ─────────────────────────────────────────────────────────
const CertCard = ({ cert, index, isActive }) => {
  const isCompleted = cert.status === "completed";

  const handleClick = () => {
    if (cert.link) window.open(cert.link, "_blank", "noopener,noreferrer");
  };

  const g0 = cert.gradient[0];
  const g1 = cert.gradient[1];

  return (
    <div className="group w-full flex justify-center">
      <div className="w-full max-w-2xl">
        <SimpleCard isActive={isActive} className={isActive ? "border-indigo-500/50" : ""}>
          <div
            className={`relative overflow-hidden ${cert.link && isCompleted ? "cursor-pointer" : "cursor-default"}`}
          >
            {/* Top gradient banner */}
            <div
              onClick={handleClick}
              className="relative h-80 flex items-center justify-center overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${g0}, ${g1})` }}
            >
              <FloatingThumbnailVisual color1={g0} color2={g1} />
            {/* Animated shimmer */}
            <motion.div
              className="absolute inset-0"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: index * 0.5 }}
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", width: "50%" }}
            />

            {cert.image
              ? <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
              : (
                <div className="flex flex-col items-center gap-2 opacity-80" style={{ transform: "translateZ(30px)" }}>
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  >
                    <Award className="w-16 h-16 text-white drop-shadow-2xl" />
                  </motion.div>
                  <span className="text-white/80 text-xs font-black tracking-[0.2em] uppercase">Certificate</span>
                </div>
              )
            }

            {/* Status pill */}
            <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border ${isCompleted
              ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-300"
              : "bg-amber-500/20 border-amber-400/40 text-amber-300"
              }`}>
              {isCompleted ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
              {isCompleted ? "Certified" : "In Progress"}
            </div>

            {/* External link icon */}
            {cert.link && isCompleted && (
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-bold text-white leading-snug text-xl mb-1">{cert.title}</h3>
                <p className="text-slate-300 text-base font-medium">{cert.issuer}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-indigo-300 text-sm font-bold bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                  {cert.date}
                </span>
              </div>
            </div>

            {!isCompleted && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                  <span>Ongoing</span><span>~60%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${g0}, ${g1})` }}
                  />
                </div>
              </div>
            )}

            {!cert.link && isCompleted && (
              <p className="mt-3 text-slate-500 text-sm italic">🔗 Link coming soon</p>
            )}

            {cert.link && isCompleted && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClick}
                className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-all shadow-lg shadow-indigo-500/25"
              >
                <ExternalLink className="w-4 h-4" /> View Certificate
              </motion.button>
            )}
          </div>
        </div>
      </SimpleCard>
    </div>
  </div>
  );
};

// ─── FLOATING ORB (AMBIENT BG) ────────────────────────────────────────────────
const FloatingOrb = ({ style, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ background: color, filter: "blur(80px)", ...style }}
    animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
    transition={{ repeat: Infinity, duration: 6 + Math.random() * 4, ease: "easeInOut" }}
  />
);

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────
const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying, nextSlide]);

  return (
  <section id="certificates" className="py-24 px-4 relative overflow-hidden">
    {/* Ambient floating orbs */}
    <FloatingOrb style={{ width: 400, height: 400, top: "5%", left: "-10%", opacity: 0.1 }} color="#6366f1" />
    <FloatingOrb style={{ width: 300, height: 300, bottom: "10%", right: "-8%", opacity: 0.1 }} color="#f59e0b" />
    <FloatingOrb style={{ width: 350, height: 350, top: "40%", left: "40%", opacity: 0.05 }} color="#0ea5e9" />

    {/* Top divider */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

    <div className="max-w-6xl mx-auto">
      {/* ── SECTION HEADER ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-sm font-bold uppercase tracking-widest mb-6"
        >
          <Award className="w-4 h-4" />
          Professional Recognition
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
          Certifications
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
          Industry-recognized credentials that validate my expertise in cloud architecture, DevOps, and modern software engineering.
        </p>
      </motion.div>

      {/* ── CERTIFICATES CAROUSEL ── */}
      <div className="relative group/carousel">
        <div 
          className="overflow-visible px-4"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl">
            <motion.div 
              className="flex items-center"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {certificates.map((cert, i) => (
                <div key={cert.title} className="w-full flex-shrink-0 p-4 md:p-8">
                  <CertCard cert={cert} index={i} isActive={i === currentIndex} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all z-20"
          aria-label="Previous certificate"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all z-20"
          aria-label="Next certificate"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Horizontal Scroll Progress Bar */}
        <div className="mt-12 max-w-md mx-auto h-1.5 bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-indigo-500"
            animate={{ 
              width: `${((currentIndex + 1) / certificates.length) * 100}%`,
              left: `${(currentIndex / certificates.length) * 0}%` 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          {/* Snap dots */}
          <div className="absolute inset-0 flex justify-between px-1">
            {certificates.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full self-center transition-colors ${i === currentIndex ? "bg-white" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex flex-wrap justify-center gap-6"
      >
        {[
          { label: "Completed", value: certificates.filter(c => c.status === "completed").length, color: "#4ade80", icon: CheckCircle2 },
          { label: "In Progress", value: certificates.filter(c => c.status !== "completed").length, color: "#fbbf24", icon: Clock },
          { label: "Total Issued", value: certificates.length, color: "#818cf8", icon: Award },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              style={{ boxShadow: `0 10px 30px -10px rgba(0,0,0,0.5)` }}
            >
              <div className="p-2 rounded-lg" style={{ background: `${s.color}15` }}>
                <Icon className="w-5 h-5" style={{ color: s.color }} />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl leading-none">{s.value}</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">{s.label}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
  );
};

export default Certificates;
