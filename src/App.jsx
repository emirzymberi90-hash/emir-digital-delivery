import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Cpu,
  Database,
  Download,
  Gauge,
  GitBranch,
  Layers3,
  Linkedin,
  Menu,
  Play,
  ScanLine,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";

const missions = [
  {
    id: "delivery",
    number: "01",
    title: "BIM & Digital Delivery",
    eyebrow: "TECHNICAL EXECUTION",
    description:
      "Hands-on delivery across complex construction environments, connecting coordination, constructability, information, and execution.",
    details: [
      "BIM coordination",
      "Constructability",
      "Digital workflows",
      "Project execution",
    ],
    icon: Layers3,
  },
  {
    id: "leadership",
    number: "02",
    title: "Team Leadership",
    eyebrow: "PEOPLE & PERFORMANCE",
    description:
      "Building scalable teams, developing talent, creating standards, and turning individual expertise into reliable delivery systems.",
    details: [
      "Team building",
      "Talent development",
      "Accountability",
      "Scalable delivery",
    ],
    icon: Users,
  },
  {
    id: "enterprise",
    number: "03",
    title: "Enterprise Scale",
    eyebrow: "SYSTEMS & STRATEGY",
    description:
      "Connecting BIM delivery across healthcare, data centers, semiconductor, and advanced manufacturing programs.",
    details: [
      "Standards",
      "Process design",
      "Technology adoption",
      "Continuous improvement",
    ],
    icon: GitBranch,
  },
  {
    id: "future",
    number: "04",
    title: "Next Chapter",
    eyebrow: "DIRECTOR-LEVEL VISION",
    description:"Leading digital delivery, BIM, and VDC strategy at enterprise scale while building teams and systems that improve construction delivery.
