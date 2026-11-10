import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, FaExternalLinkAlt, FaTimes, 
  FaCheckCircle, FaBolt, FaLayerGroup, FaPlay,
  FaChevronLeft, FaChevronRight, FaThLarge, FaClone
} from "react-icons/fa";
import FlyInText from "./FlyInText";

import agentLinkImg from "../assets/agentlink.svg";
import agentLinkRealImg from "../assets/agentlink.jpg";
import vayparImg from "../assets/vaypar.svg";
import vayparRealImg from "../assets/vaypar.jpg";
import tudostockImg from "../assets/tudostock.svg";
import tudostockRealImg from "../assets/tudostock.jpg";
import developworkImg from "../assets/developwork.svg";
import developworkRealImg from "../assets/developwork.jpg";
import newalilajpalImg from "../assets/newalilajpal.svg";
import newalilajpalRealImg from "../assets/newalilajpal.jpg";
import luxesaloonImg from "../assets/luxesaloon.svg";
import luxesaloonRealImg from "../assets/luxesaloon.png";
import rhabuilderImg from "../assets/rhabuilder.svg";
import rhabuilderRealImg from "../assets/rhabuilders.jpg";
import veloceImg from "../assets/veloce.svg";
import veloceRealImg from "../assets/veloce.jpg";
import meridiaImg from "../assets/meridia.svg";
import meridiaRealImg from "../assets/meridia.jpg";
import foodguyImg from "../assets/foodguy.svg";
import foodguyRealImg from "../assets/foodguy.jpg";
import attackDetectionImg from "../assets/attack detetction system.png";
import namazImg from "../assets/namaz_viewer.svg";
import deliciousBitesImg from "../assets/DeliciousBites.jpg";

export interface ProjectData {
  num: string;
  title: string;
  tagline: string;
  category: "AI & Automation" | "POS & ERP" | "3D & Interactive" | "Websites & Commercial" | "Cybersecurity";
  badge: string;
  year: string;
  desc: string;
  fullSummary: string[];
  features: string[];
  architecture?: { component: string; tech: string }[];
  image: string;
  secondaryImage?: string;
  tech: string[];
  github: string;
  live: string;
  status: "Active Project" | "Live Application" | "Production Ready" | "Client Project";
}

const allProjects: ProjectData[] = [
  {
    num: "01",
    title: "AGENTLINK",
    tagline: "AI Agent Remote Control Platform",
    category: "AI & Automation",
    badge: "AI Platform",
    year: "2026",
    status: "Active Project",
    desc: "A remote-control platform allowing developers to monitor, approve, reject, and guide their AI coding agents (Antigravity, Cursor, Kiro, VS Code) directly from their phone or web browser.",
    fullSummary: [
      "Problem: Developers use autonomous AI agents in Cursor, Antigravity, Kiro and VS Code. Whenever an AI agent executes commands, edits files, or requests tool permissions, developers have to physically sit at their computers to approve or guide actions.",
      "Solution: AgentLink gives developers complete mobile freedom: Receive approval requests instantly on your phone, click 'Approve' or 'Reject', inspect live prompts, send new instructions, and control your coding workflow from anywhere."
    ],
    features: [
      "Remote Approvals: Immediate phone notification with Allow/Reject action buttons.",
      "Remote Prompting: Send new instructions and prompts to your AI agent directly from mobile.",
      "Multi-Device Management: Connect, switch, and monitor different laptops & coding environments.",
      "Web Push Notifications: VAPID push protocol with customizable sound and vibration alerts.",
      "Activity History & Audit Log: Complete timeline of approved, rejected, and executed actions.",
      "Robust Security: 6/6 tests passed including session token exchange, rate limiting, and replay prevention."
    ],
    architecture: [
      { component: "Local Agent", tech: "PowerShell Script Engine" },
      { component: "Local Server", tech: "Python Server & WebSocket API" },
      { component: "Web & Mobile UI", tech: "Responsive JavaScript / Vercel" },
      { component: "Cloud Database", tech: "Neon Serverless PostgreSQL 18.6" },
      { component: "IDE Integration", tech: "Antigravity, Cursor, VS Code" },
      { component: "UI Automation", tech: "Windows UIAutomation Engine" },
      { component: "Push Delivery", tech: "Web Push / VAPID Protocol" }
    ],
    image: agentLinkImg,
    secondaryImage: agentLinkRealImg,
    tech: ["Python", "PowerShell", "Neon PostgreSQL", "Vercel", "Web Push", "UIAutomation", "JavaScript"],
    github: "https://github.com/talharabani/AgentLink",
    live: "https://agentlink-mu.vercel.app/",
  },
  {
    num: "02",
    title: "VAYPAR",
    tagline: "Multi-Business POS & Retail ERP Platform",
    category: "POS & ERP",
    badge: "POS & ERP",
    year: "2026",
    status: "Live Application",
    desc: "A customizable Point of Sale (POS) & business ERP platform engineered for multiple industries. Features real-time sales & finance tracking, automated thermal/digital slip printing, inventory tagging with low-stock alerts, customer credit (udhaar ledger), exchange & refund workflows, and integrated Vaypar AI.",
    fullSummary: [
      "Vaypar aik comprehensive aur customizable POS (Point of Sale) & business management system hai jo multiple industries (retail shops, clothing boutiques, general stores, custom service providers) ke liye banaya gaya hai.",
      "Business owners apne business model ke mutabiq settings aur workflows optimize kar sakte hain. Iska complete billing engine real-time mein sales slips generate aur print karta hai, inventory stock alerts deta hai, customer credit (udhaar ledger) record karta hai, aur revenue vs expenses cashflow analyze karta hai."
    ],
    features: [
      "Instant POS Slip & Billing: Fully working thermal & digital bill printouts with tax, discounts, and itemized calculations.",
      "Multi-Business Optimization: Easily configurable for retail shops, clothing boutiques, grocery stores, and custom service shops.",
      "Real-Time Sales & Finance Tracking: Live daily, weekly, monthly, and annual revenue vs expense analytics.",
      "Inventory & Low-Stock Alerts: Item tagging (Fast Moving, Low Stock, Dead Item, Discounted) with automatic stock deduction.",
      "Customer Credit (Udhaar Ledger): Transparent balance tracking, credit limits, and settled customer accounts.",
      "Exchange & Refund Management: Seamless return handling with automatic restock updates and bill adjustments.",
      "Vaypar AI Integration: Smart business insights, automated product tagging, and sales forecasting."
    ],
    architecture: [
      { component: "Frontend Application", tech: "React 19 / Next.js & TypeScript" },
      { component: "Styling & UI Components", tech: "Tailwind CSS & Modern Dashboard" },
      { component: "POS Billing & Slip Engine", tech: "HTML5 Canvas & Web Print API" },
      { component: "Analytics & Cashflow", tech: "Interactive Charts & Data Visualizer" },
      { component: "Cloud Deployment", tech: "Vercel Edge Platform (Live)" },
      { component: "Database & Persistence", tech: "Cloud PostgreSQL & Storage" }
    ],
    image: vayparImg,
    secondaryImage: vayparRealImg,
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel", "POS Engine", "Print API"],
    github: "https://github.com/talharabani/vaypar",
    live: "https://vaypar-nine.vercel.app/",
  },
  {
    num: "03",
    title: "TUDOSTOCK PORTUGAL",
    tagline: "Custom Shopify B2B Storefront & Integrated POS",
    category: "POS & ERP",
    badge: "Shopify & POS",
    year: "2026",
    status: "Client Project",
    desc: "A custom-built B2B wholesale platform & integrated Point of Sale (POS) system developed for a leading electronics repair & spare parts distributor in Portugal. Allows client to manage products, process in-store and wholesale orders, generate VAT-compliant proforma invoices, and offer tiered pricing.",
    fullSummary: [
      "Client Requirement: Client ko Portugal aur Euro zone ke repair shops ke liye aik custom, high-speed B2B wholesale platform chahiye tha jahan thousands of products manage ki ja sakein, aur sath hi physical in-store counter ke liye complete POS integrated ho.",
      "Delivered Solution: Custom Shopify storefront + integrated POS terminal developed with Next.js & Tailwind CSS. Client easily nayi products add kar sakta hai, wholesale tier accounts verify kar sakta hai (with Portuguese NIF / VAT numbers), aur in-store POS terminal se direct receipts aur invoices generate kar sakta hai."
    ],
    features: [
      "Custom Product Catalog Engine: Client can add, update, categorize, and bulk-import thousands of phone repair parts (iPhone, Samsung, Xiaomi screens, batteries, motherboards).",
      "Integrated POS Terminal: In-store barcode scanning, quick item lookup, checkout, and receipt printing synchronized with online inventory.",
      "B2B Wholesale Tiered Pricing: Automatic volume-based pricing for registered repair shops and service centers across Portugal.",
      "European VAT / NIF Verification: Compliant tax invoicing and proforma generation for registered business accounts.",
      "Multi-Warehouse Real-Time Stock Sync: Live inventory tracking between central warehouse and retail counter.",
      "Bilingual Localization (EN / PT) & EUR Currency: Multi-language support with localized Portuguese and English interfaces."
    ],
    architecture: [
      { component: "Storefront & Wholesale", tech: "Next.js / React 19 & TypeScript" },
      { component: "E-Commerce Engine", tech: "Custom Shopify Storefront API" },
      { component: "POS Terminal Engine", tech: "Integrated Point of Sale & Receipt Generator" },
      { component: "Cloud Deployment", tech: "Vercel Edge Platform (Live)" },
      { component: "Localization & Tax", tech: "i18n (PT / EN) & EU VAT System" }
    ],
    image: tudostockImg,
    secondaryImage: tudostockRealImg,
    tech: ["Shopify API", "React", "TypeScript", "Next.js", "Tailwind CSS", "POS System", "Vercel"],
    github: "#",
    live: "https://tudostockportugal.vercel.app/en/wholesale",
  },
  {
    num: "04",
    title: "DEVELOPWORK",
    tagline: "Autonomous Company Operations & Skill-Based Task Allocation ERP",
    category: "AI & Automation",
    badge: "Enterprise SaaS",
    year: "2026",
    status: "Live Application",
    desc: "An intelligent autonomous workspace system that manages end-to-end enterprise operations. Automatically allocates tasks to employees based on their proven skills, monitors real-time deliverables, prevents bottlenecks, and gives clients transparent access to active milestones.",
    fullSummary: [
      "DevelopWork aik aesa complete company management aur autonomous execution system hai jo aik enterprise ke saare administrative aur technical kaam automate karta hai.",
      "System mein har employee ki skill competencies record hoti hain. Jab naya project ya task aata hai, automated dispatch algorithm automatically best-fit engineer ko task assign kar deta hai, sprint velocity track karta hai, aur client portal ke through automated sign-offs provide karta hai."
    ],
    features: [
      "Skill-Based Automated Task Allocation: Intelligent matching engine that assigns engineering tasks to developers based on verified competency scores.",
      "Autonomous Project Telemetry: Live sprint progress tracking, automated blocker escalation, and delivery timelines.",
      "Centralized Client Portal: Dedicated external client dashboard to inspect deliverables, test builds, and sign off on invoices.",
      "Employee Performance Metrics: Transparent workload balancing, completed story points, and productivity scores.",
      "Enterprise Access Control: Role-based permissions for Admins, Project Managers, Developers, and External Clients."
    ],
    architecture: [
      { component: "Frontend App", tech: "Next.js / React 19 + TypeScript" },
      { component: "Dispatch Engine", tech: "Skill-Matrix Routing Algorithm" },
      { component: "UI & Workspace", tech: "Tailwind CSS & Dynamic Kanban" },
      { component: "Cloud Infrastructure", tech: "Vercel Enterprise Edge Network" }
    ],
    image: developworkImg,
    secondaryImage: developworkRealImg,
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SaaS ERP", "Vercel"],
    github: "#",
    live: "https://www.thedevelopwork.com/",
  },
  {
    num: "05",
    title: "NEW ALI LAJPAL RENT A CAR",
    tagline: "Online Fleet Booking & Inter-City Car Rental Platform",
    category: "Websites & Commercial",
    badge: "Websites",
    year: "2026",
    status: "Live Application",
    desc: "A commercial car rental web platform engineered for New Ali Lajpal Rent A Car. Features an extensive vehicle fleet showcase (sedans, luxury SUVs, commercial travel vans), instant WhatsApp booking, city-to-city one-way route pricing, Google Reviews integration, and verified chauffeur selection.",
    fullSummary: [
      "New Ali Lajpal Car Rental business ke liye develop kiya gaya high-converting commercial platform hai jo travelers, families, corporate clients aur wedding parties ko luxury aur affordable cars rent karne ki facility deta hai.",
      "Customer directly fleet explore kar sakta hai, transparent city-to-city drop rates calculate kar sakta hai (jahan one-way charges lagte hain), aur instant 1-click WhatsApp ya phone se car reserve kar sakta hai."
    ],
    features: [
      "Comprehensive Vehicle Fleet Catalog: Sedans (Corolla, Yaris), SUVs (Fortuner, Prado), and Travel Vans (Hiace, Grand Cabin) with per-day rates.",
      "One-Click WhatsApp Booking: Automated reservation inquiry pre-populated with chosen car, rental duration, and city.",
      "Inter-City Route Network: Transparent route pricing for travel between Lahore, Islamabad, Faisalabad, Multan, and northern areas.",
      "Google Reviews & Social Proof: Live verified customer testimonials and ratings showcase.",
      "Chauffeur & Self-Drive Options: Flexible rental packages for corporate tours, airport pickups, and family vacations."
    ],
    architecture: [
      { component: "Frontend Framework", tech: "React 19 / Modern Web Stack" },
      { component: "Styling & Responsive UI", tech: "Tailwind CSS & Mobile-First Design" },
      { component: "Integration Channel", tech: "WhatsApp Business API & Direct Dial" },
      { component: "Cloud Deployment", tech: "Production Hosting (Live)" }
    ],
    image: newalilajpalImg,
    secondaryImage: newalilajpalRealImg,
    tech: ["React", "JavaScript", "Tailwind CSS", "WhatsApp API", "Mobile-First"],
    github: "#",
    live: "https://newalilajpal.com/",
  },
  {
    num: "06",
    title: "LUXE SALOON",
    tagline: "Saloon Management & Smart POS Billing System",
    category: "POS & ERP",
    badge: "Websites",
    year: "2026",
    status: "Live Application",
    desc: "A smart salon management platform & point-of-sale billing system built for salon owners. Allows the owner to track daily sales, record cash/online payments, manage stylist appointments, maintain product inventory, and generate instant itemized customer bills.",
    fullSummary: [
      "Luxe Saloon aik complete operational dashboard aur POS billing system hai jahan saloon owner aur staff sab kuch aik single screen se track aur manage kar sakte hain.",
      "Service catalog (haircut, beard grooming, facial treatments, hair spa) se 1-click mein customer cart create hota hai, automated bill settle hota hai, aur sales records real-time mein store hote hain."
    ],
    features: [
      "Fast POS Billing Terminal: 1-click customer cart creation with itemized service pricing, discounts, and net bill calculation.",
      "Service & Treatment Catalog: Pre-configured services with duration, stylist assignment, and product usage tracking.",
      "Real-Time Sales & Revenue Dashboard: Daily total sales, cash payments, card/online breakdown, and transaction logs.",
      "Customer Ledger & Credit: History tracking for frequent VIP clients and service loyalty records.",
      "Staff & Stylist Allocation: Track stylist shifts, performance, and daily commissions."
    ],
    architecture: [
      { component: "Frontend App", tech: "React 19 + TypeScript + Vite" },
      { component: "UI & Theme", tech: "Tailwind CSS (Sleek Purple & Dark)" },
      { component: "POS Subsystem", tech: "Automated Bill Settle & Local State Engine" },
      { component: "Cloud Hosting", tech: "Vercel Edge Platform (Live)" }
    ],
    image: luxesaloonImg,
    secondaryImage: luxesaloonRealImg,
    tech: ["React", "TypeScript", "Tailwind CSS", "POS System", "Vercel"],
    github: "#",
    live: "https://saloon-portfolio.vercel.app/",
  },
  {
    num: "07",
    title: "THE RHA BUILDERS",
    tagline: "Commercial Construction & Real Estate Development",
    category: "Websites & Commercial",
    badge: "Real Estate",
    year: "2026",
    status: "Live Application",
    desc: "A construction company & architectural engineering web platform developed for The RHA Builders. Showcases completed multi-storey commercial plazas in Islamabad & Lahore (G-11 Markaz, F-10 Markaz), residential luxury villas, structural engineering methodologies, and milestone project estimates.",
    fullSummary: [
      "The RHA Builders (Established 2006) ke liye develop kiya gaya corporate platform jo commercial plazas aur residential projects ko high-end visual fidelity ke sath showcase karta hai.",
      "Investors aur clients completed commercial developments ki details explore kar sakte hain, construction timelines dekh sakte hain, aur online project cost estimation inquiry submit kar sakte hain."
    ],
    features: [
      "Interactive Commercial Portfolio: Showcase of multi-storey corporate shopping plazas (G-11 & F-10 Markaz Islamabad).",
      "Structural Engineering Standards: Highlights seismic structural designs, 3-year structural warranties, and 20+ delivered landmarks.",
      "Online Construction Estimation Form: Streamlined quotation inquiry for commercial and residential developments.",
      "Responsive Interactive Galleries: High-resolution exterior and interior architecture walkthroughs.",
      "WhatsApp & Direct Call Integration: Direct channel to project directors and structural engineers."
    ],
    architecture: [
      { component: "Frontend Framework", tech: "React + Next.js & TypeScript" },
      { component: "Styling", tech: "Tailwind CSS & Architectural Layout" },
      { component: "Hosting", tech: "Vercel Edge Cloud (Live)" }
    ],
    image: rhabuilderImg,
    secondaryImage: rhabuilderRealImg,
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Architecture UI"],
    github: "https://github.com/talharabani/RhaBuilder",
    live: "https://www.therhabuilders.com/",
  },
  {
    num: "08",
    title: "VELOCE",
    tagline: "3D Interactive Car Experience & WebGL Configurator",
    category: "3D & Interactive",
    badge: "3D WebGL",
    year: "2026",
    status: "Live Application",
    desc: "A modern, high-performance 3D automotive web experience built with Three.js and WebGL. Features an interactive 3D model of 'The 04 Coupe' assembled in Modena, smooth camera choreography, dynamic lighting, real-time vehicle configuration, and aerodynamic engineering telemetry.",
    fullSummary: [
      "Overview: Veloce is a cutting-edge 3D interactive web platform engineered for a luxury sports coupe ('The 04 Coupe. Assembled in Modena. Argued about everywhere else').",
      "Interactive 3D Engine: Developed with Three.js and modern WebGL shaders, visitors can rotate, zoom, inspect vehicle curves, explore aerodynamic engineering specifications, and customize options in real-time with 60 FPS fluidity on both desktop and mobile."
    ],
    features: [
      "Interactive 3D Vehicle Showcase: Real-time 3D coupe model with camera orbit, pan, and zoom controls.",
      "Cinematic Camera Choreography: Smooth scroll-driven camera transitions focusing on wheels, headlights, and cockpit.",
      "Vehicle Configurator: Live color customization and trim selections rendered in real-time WebGL.",
      "Aerodynamics & Engineering Telemetry: Interactive breakdown of vehicle specs, horsepower, and chassis rigidity.",
      "60 FPS Mobile-Optimized Rendering: Low-poly LOD optimizations ensuring buttery smooth performance across all devices.",
      "Reserve & Specification Inquiries: Seamless reservation and inquiry flow with instant feedback."
    ],
    architecture: [
      { component: "3D Graphics Engine", tech: "Three.js / React Three Fiber / WebGL" },
      { component: "Frontend Framework", tech: "React 19 + TypeScript + Vite" },
      { component: "Animation & Shaders", tech: "Framer Motion & Custom GLSL Shaders" },
      { component: "Styling & UI", tech: "Tailwind CSS (Minimalist Luxury Aesthetic)" },
      { component: "Cloud Deployment", tech: "Vercel Edge Platform (Live)" }
    ],
    image: veloceImg,
    secondaryImage: veloceRealImg,
    tech: ["Three.js", "WebGL", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/talharabani/veloce",
    live: "https://veloce-lime-five.vercel.app/",
  },
  {
    num: "09",
    title: "MERIDIA",
    tagline: "3D Luxury Architectural Property & Walkthrough",
    category: "3D & Interactive",
    badge: "3D Real Estate",
    year: "2026",
    status: "Live Application",
    desc: "An immersive 3D architectural web experience for an ultra-luxury private estate ('Nine hundred metres of private road, and then nothing'). Features a scroll-to-walk-in spatial exploration, Chapter-by-Chapter narrative storytelling, material inspection, ambient lighting transitions, and private dossier inquiries.",
    fullSummary: [
      "Overview: Meridia is an award-winning style 3D architectural real estate platform crafted for an ultra-exclusive multi-million dollar private estate.",
      "Immersive Walkthrough: As visitors scroll ('Scroll to Walk In'), the camera glides down the 900-metre private approach, past the modern security gate, through the glass pavilion, across the infinity pool, and into the master suites with synchronized spatial cues."
    ],
    features: [
      "Scroll-to-Walk-In Camera Pipeline: Seamless scroll-triggered 3D camera path navigating through the estate grounds.",
      "Chapter-Based Storytelling: Structured narrative (Chapter 01: The Approach, Threshold, Volume, View).",
      "Architectural Materials & Light Mode: High-definition material inspection (travertine marble, acoustic glass, matte timber).",
      "Interactive 3D Hotspots: Clickable exploration pins highlighting architectural blueprints and dimensions.",
      "Private Dossier & VIP Enquiries: Discrete confidential contact form for qualified high-net-worth buyers.",
      "High-Fidelity Audio Atmosphere: Subtle ambient nature and spatial audio design."
    ],
    architecture: [
      { component: "3D Spatial Framework", tech: "Three.js / WebGL / Canvas Pipeline" },
      { component: "Frontend Architecture", tech: "React 19 / Next.js & TypeScript" },
      { component: "Motion Orchestration", tech: "Framer Motion & GSAP ScrollTrigger" },
      { component: "Typography & UI", tech: "Editorial Luxury Serif & Tailwind CSS" },
      { component: "Hosting & CDN", tech: "Vercel Edge Infrastructure (Live)" }
    ],
    image: meridiaImg,
    secondaryImage: meridiaRealImg,
    tech: ["Three.js", "WebGL", "React 19", "GSAP", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/talharabani/3d-property-website-",
    live: "https://3d-property-website.vercel.app/",
  },
  {
    num: "10",
    title: "FOOD GUY",
    tagline: "Modern Fast-Food Ordering & Delivery Platform",
    category: "Websites & Commercial",
    badge: "Food & E-Commerce",
    year: "2026",
    status: "Live Application",
    desc: "A fast, appetizing online food ordering and table-booking web app built for FoodGuy (Johar Town, Lahore). Features hand-breaded gourmet burgers and zinger fillets, real-time categorized menus, instant cart calculations, live deals, customer reviews, and automated 30-45 min delivery ordering.",
    fullSummary: [
      "Overview: FoodGuy ('Bite into Perfection') is a modern fast-food brand based in Johar Town, Lahore, specializing in hand-breaded zinger fillets, freshly toasted buns, and signature sauces.",
      "Delivered Platform: Talha developed a high-converting, lightning-fast digital storefront: Customers browse categorized deals, customize burger combos, track estimated 30-45 minute delivery times, and complete checkout smoothly with direct WhatsApp & online order confirmation."
    ],
    features: [
      "Instant Food Ordering & Cart: Fast item addition, add-on customization (cheese, patties, sauces), and live bill total.",
      "Categorized Digital Menu: Zinger burgers, gourmet beef burgers, loaded fries, family deals, and beverages.",
      "Deals & Limited-Time Promos: Dynamic promo banners with starting prices (e.g. Rs. 700 deals).",
      "Real-Time Delivery Estimator: Automatic delivery duration calculation (30-45 min Johar Town radius).",
      "Verified Customer Reviews: Social proof section showcasing customer ratings and foodie testimonials.",
      "WhatsApp & Direct Dial Integration: Automated order dispatch directly to kitchen dispatch terminals."
    ],
    architecture: [
      { component: "Frontend Application", tech: "React 19 + TypeScript + Vite" },
      { component: "Cart & State Engine", tech: "Local Storage & Reactive State Manager" },
      { component: "UI & Theme", tech: "Tailwind CSS (Warm Orange & Gourmet Aesthetic)" },
      { component: "Order Dispatch", tech: "WhatsApp Business API & Webhook" },
      { component: "Cloud Deployment", tech: "Vercel Edge Hosting (Live)" }
    ],
    image: foodguyImg,
    secondaryImage: foodguyRealImg,
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "WhatsApp API", "E-Commerce", "Vercel"],
    github: "https://github.com/talharabani/food-guy",
    live: "https://food-guy.vercel.app/",
  },
  {
    num: "11",
    title: "ATTACK DETECTION SYSTEM FOR CPS",
    tagline: "Intrusion Detection & Prevention (IDS/IPS)",
    category: "Cybersecurity",
    badge: "Security IDS",
    year: "2025",
    status: "Production Ready",
    desc: "Cross-platform IDS/IPS system built in Python continuously monitoring network traffic, logs, processes, and ICS/CPS protocols to detect cyber attacks in real-time.",
    fullSummary: [
      "Problem: Cyber-Physical Systems (CPS) and industrial control networks face continuous threats, brute-force anomalies, and zero-day intrusion patterns that generic firewalls miss.",
      "Solution: Acts as a 24/7 autonomous security guard. Sniffs network packets, inspects ICS protocols, queries live Shodan threat intelligence, profiles attacker behavior, and dispatches instant desktop and Discord alerts."
    ],
    features: [
      "Real-time packet sniffing and deep protocol inspection across 8+ protocols.",
      "Live Shodan API integration for attacker IP reputation and threat intelligence.",
      "Instant incident escalation via Discord webhooks and desktop alerts.",
      "Attacker profiling and anomaly detection engine powered by 17+ Python libraries.",
      "Comprehensive forensic reporting with export to PDF, CSV, JSON, and ElasticSearch."
    ],
    architecture: [
      { component: "Sniffing Engine", tech: "Python Scapy, Sockets & Threading" },
      { component: "Threat Intel", tech: "Shodan REST API Integration" },
      { component: "Alert Dispatch", tech: "Discord Webhook & OS Notifications" },
      { component: "Analytics & Export", tech: "ElasticSearch, Grafana, JSON, PDF" }
    ],
    image: attackDetectionImg,
    tech: ["Python", "Shodan API", "Discord API", "Network Security", "IDS/IPS"],
    github: "https://github.com/talharabani/Attack-detection-system-for-CPS",
    live: "#",
  },
  {
    num: "12",
    title: "3D NAMAZ VIEWER LEARNING PLATFORM",
    tagline: "Interactive Islamic Prayer Learning Platform",
    category: "3D & Interactive",
    badge: "PWA App",
    year: "2025",
    status: "Live Application",
    desc: "A comprehensive Islamic prayer learning platform with visual step-by-step guides, audio recitations, Arabic text with transliteration, interactive galleries, and a quiz system.",
    fullSummary: [
      "Problem: Learning prayer postures, recitations, and correct pronunciation can be challenging with static books or disjointed video clips.",
      "Solution: An interactive, visual-first platform that breaks down Salah step-by-step with 3D postures, crystal-clear Arabic recitations with transliteration, and a quiz test system built as an installable Progressive Web App (PWA)."
    ],
    features: [
      "Step-by-step 3D posture visualizer for all stages from Takbeer to Salam.",
      "Clear Arabic text with phonetic transliteration and English translations.",
      "Interactive audio recitation player with variable speed controls.",
      "Interactive Islamic prayer quiz system with score evaluation.",
      "Progressive Web App (PWA) with offline caching and mobile-first experience."
    ],
    architecture: [
      { component: "Frontend Framework", tech: "React 19 + TypeScript + Vite" },
      { component: "Styling & UI", tech: "Tailwind CSS & Framer Motion" },
      { component: "Audio Subsystem", tech: "HTML5 Web Audio Player API" },
      { component: "Cloud Deployment", tech: "Render Cloud Hosting (Live PWA)" }
    ],
    image: namazImg,
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "PWA", "Audio API"],
    github: "https://github.com/talharabani/3D-Namaz-Viewer/",
    live: "https://namaz-p10k.onrender.com/",
  },
  {
    num: "13",
    title: "DELICIOUSBITES RESTAURANT PLATFORM",
    tagline: "Modern Food Ordering & Table Reservation",
    category: "Websites & Commercial",
    badge: "Websites",
    year: "2025",
    status: "Live Application",
    desc: "A modern and responsive restaurant web platform with interactive food menus, online table booking, dynamic cart, customer reviews, and chef specials.",
    fullSummary: [
      "Problem: Restaurant owners lose customers due to clunky PDF menus and complicated phone-only reservation procedures.",
      "Solution: DeliciousBites provides an engaging, mouth-watering digital storefront with categorized menus, real-time table reservations, customer reviews, and fast checkout on any device."
    ],
    features: [
      "Interactive categorized menu with dietary tags and instant search.",
      "Online table reservation system with immediate confirmation feedback.",
      "High-resolution dishes gallery and customer testimonials carousel.",
      "Ultra-fast page loads with Vite build optimization and Netlify Edge CDN."
    ],
    architecture: [
      { component: "Frontend Framework", tech: "React + TypeScript + Vite" },
      { component: "Styling & Theme", tech: "Tailwind CSS" },
      { component: "Cloud CDN", tech: "Netlify Edge Network" }
    ],
    image: deliciousBitesImg,
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Netlify"],
    github: "https://github.com/talharabani/DeliciousBites",
    live: "https://thunderous-bonbon-a4564a.netlify.app/",
  },
];

const categories = ["All Projects", "3D & Interactive", "AI & Automation", "POS & ERP", "Websites & Commercial", "Cybersecurity"] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All Projects");
  const [viewMode, setViewMode] = useState<"deck" | "grid">("deck");
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Touch gesture state for mobile swiping
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Responsive screen listener
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredProjects = activeCategory === "All Projects"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  const handlePrev = () => {
    if (filteredProjects.length === 0) return;
    setActiveCardIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    setActiveCardIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  // Touch handlers for mobile deck swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  // Lock body scroll and handle Escape / Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
      if (e.key === "ArrowLeft" && viewMode === "deck") handlePrev();
      if (e.key === "ArrowRight" && viewMode === "deck") handleNext();
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, viewMode, activeCardIndex, filteredProjects.length]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveCardIndex(0);
  };

  const activeProject = filteredProjects[activeCardIndex] || filteredProjects[0];

  return (
    <section id="projects" className="bg-[#0a0a0a] py-14 sm:py-20 border-t border-zinc-900 relative overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-crimson-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-crimson-500 bg-crimson-950/40 border border-crimson-800/40 px-3 sm:px-3.5 py-1.5 rounded-full mb-3 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
            <span>PORTFOLIO SHOWCASE • CRAFTED WITH PRECISION</span>
          </div>

          <FlyInText
            as="h2"
            text="DISCOVER FEATURED PROJECTS"
            className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 sm:mb-3"
            stagger={0.06}
          />
          <FlyInText
            as="p"
            text="Explore 13 production-grade full-stack systems, 3D WebGL experiences, and autonomous n8n workflows."
            className="text-xs sm:text-sm text-zinc-400 max-w-xl px-2"
            delay={0.15}
            stagger={0.03}
          />
        </div>

        {/* Filter Pills & View Switcher Bar (Responsive Horizontal Scroll on Mobile) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-zinc-900/80 mb-6 sm:mb-8 w-full">
          
          {/* Category Filter Pills (Center/Left, Horizontally Scrollable on Mobile) */}
          <div className="w-full sm:w-auto overflow-x-auto no-scrollbar flex items-center gap-1.5 bg-[#101117] p-1.5 rounded-2xl border border-zinc-800/80 shadow-lg shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? "bg-crimson-600 text-white shadow-md shadow-crimson-950/60"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Mode Toggle (Deck vs Grid) */}
          <div className="flex items-center gap-1 bg-[#101117] p-1 rounded-xl border border-zinc-800 text-xs font-bold self-end sm:self-auto shrink-0">
            <button
              onClick={() => setViewMode("deck")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === "deck"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
              title="Smooth Expanding Accordion Showcase"
            >
              <FaClone className="text-[11px] text-crimson-400" />
              <span>Slider</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
              title="Classic Mockup Grid"
            >
              <FaThLarge className="text-[11px] text-zinc-400" />
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* VIEW 1: SMOOTH EXPANDING ACCORDION SHOWCASE (Fey / Linear) */}
        {/* ======================================================== */}
        {viewMode === "deck" && (
          <div className="relative w-full">
            {/* Quick Step Bar */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                  CLICK OR HOVER TO EXPAND • {filteredProjects.length} PROJECTS
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-crimson-600 border border-zinc-800 hover:border-crimson-500 text-white flex items-center justify-center transition cursor-pointer shadow-md"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next project"
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-crimson-600 border border-zinc-800 hover:border-crimson-500 text-white flex items-center justify-center transition cursor-pointer shadow-md"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            </div>

            {/* Horizontal Expanding Accordion Track */}
            <div 
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="relative w-full overflow-x-auto no-scrollbar py-2 px-1 flex gap-2 sm:gap-3 items-stretch h-[510px] sm:h-[550px] md:h-[580px]"
            >
              {filteredProjects.map((p, idx) => {
                const isExpanded = activeCardIndex === idx;

                return (
                  <motion.div
                    key={p.num}
                    layout
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                      mass: 0.75
                    }}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer select-none transition-all duration-300 flex flex-col justify-between ${
                      isExpanded
                        ? `${isMobile ? "min-w-[290px] w-full" : "min-w-[440px] md:min-w-[560px] flex-1 max-w-[700px]"} bg-[#0c0d14] border-2 border-crimson-500/80 shadow-[0_20px_50px_-10px_rgba(220,38,38,0.38)] ring-1 ring-crimson-500/20`
                        : `${isMobile ? "w-[52px]" : "w-[68px] md:w-[74px]"} shrink-0 bg-[#0e0f16]/90 hover:bg-[#151722] border border-zinc-800/80 hover:border-zinc-700`
                    }`}
                  >
                    {isExpanded ? (
                      /* EXPANDED PROJECT CARD: Full Image Showcase + 2 Actions */
                      <div className="relative w-full h-full p-2.5 sm:p-3.5 flex flex-col justify-between overflow-hidden">
                        {/* Full Showcase Image Container */}
                        <div 
                          onClick={() => setSelectedProject(p)}
                          className="relative flex-1 w-full rounded-xl overflow-hidden border border-zinc-800 bg-[#07080d] group cursor-pointer shadow-xl flex items-center justify-center min-h-[360px]"
                        >
                          <img
                            src={p.secondaryImage || p.image}
                            alt={p.title}
                            className="w-full h-full object-contain sm:object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                          />

                          {/* Top Floating Glass Pills */}
                          <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                            <span className="font-mono text-[10px] sm:text-xs font-black text-crimson-400 bg-black/80 backdrop-blur-md border border-crimson-900/60 px-2.5 py-1 rounded-md shadow-lg">
                              {p.num}
                            </span>
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white bg-black/80 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-md shadow-lg">
                              {p.title}
                            </span>
                          </div>

                          <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-emerald-300 bg-black/80 backdrop-blur-md border border-emerald-800/40 px-2.5 py-1 rounded-md shadow-lg z-10">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>{p.status}</span>
                          </div>
                        </div>

                        {/* Bottom Action Footer with only 2 Buttons */}
                        <div className="relative z-10 flex items-center gap-2 pt-2.5 sm:pt-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(p);
                            }}
                            className="flex-1 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs uppercase tracking-wider py-2.5 sm:py-3 px-3 rounded-xl shadow-lg shadow-crimson-950/80 transition flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                          >
                            <span>View Full Case Study</span>
                            <FaExternalLinkAlt className="text-[10px]" />
                          </button>

                          {p.live && p.live !== "#" && (
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-xs font-bold uppercase tracking-wider py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl transition flex items-center justify-center gap-1.5 hover:scale-[1.01] active:scale-[0.99]"
                            >
                              <span>Live Preview</span>
                              {p.live.includes("drive.google.com") ? (
                                <FaPlay className="text-[9px]" />
                              ) : (
                                <FaExternalLinkAlt className="text-[9px]" />
                              )}
                            </a>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* COLLAPSED VERTICAL STRIP (Reference Style) */
                      <div className="relative w-full h-full py-4 sm:py-6 px-1 flex flex-col justify-between items-center group overflow-hidden">
                        {/* Top Number Badge */}
                        <div className="w-7 h-7 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold text-zinc-400 group-hover:text-crimson-400 group-hover:border-crimson-800/50 transition-colors">
                          {p.num}
                        </div>

                        {/* Middle Vertical Text Label (Rotated 180 degrees like Fey reference) */}
                        <div className="flex-1 flex items-center justify-center py-4 overflow-hidden">
                          <span className="[writing-mode:vertical-rl] rotate-180 text-xs sm:text-sm font-bold tracking-wider text-zinc-400 group-hover:text-white uppercase whitespace-nowrap transition-colors select-none truncate">
                            {p.title}
                          </span>
                        </div>

                        {/* Bottom Sleek Dot / Glyph */}
                        <div className="w-7 h-7 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                          <FaCheckCircle className="text-[10px]" />
                        </div>

                        {/* Soft Gradient Bottom Glow */}
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-800/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Metallic / Chrome Liquid Wave Accent (Reference Inspired) */}
            <div className="relative w-full h-12 sm:h-16 mt-3 overflow-hidden pointer-events-none select-none opacity-60">
              <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />
              <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="w-full h-full text-zinc-900 fill-current opacity-40"
              >
                <path d="M0,20 C180,90 320,-20 540,60 C760,140 920,-20 1200,30 L1200,120 L0,120 Z" />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-10 bg-crimson-600/20 blur-2xl rounded-full" />
            </div>

            {/* Bottom Progress Bar & Selector Dots */}
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-900">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-crimson-500 bg-crimson-950/60 border border-crimson-900/40 px-2 py-0.5 rounded">
                  {activeProject?.num} / {filteredProjects.length < 10 ? `0${filteredProjects.length}` : filteredProjects.length}
                </span>
                <span className="text-xs font-bold uppercase text-white truncate max-w-[200px] sm:max-w-[300px]">
                  {activeProject?.title}
                </span>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCardIndex(idx)}
                    aria-label={`Go to project ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeCardIndex === idx
                        ? "w-6 sm:w-8 bg-crimson-500 shadow-md shadow-crimson-950"
                        : "w-2 bg-zinc-800 hover:bg-zinc-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(activeProject)}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-400 hover:text-white transition cursor-pointer"
              >
                <span>Full Details ↗</span>
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 2: CLASSIC DEVICE-MOCKUP GRID (Available via Toggle)*/}
        {/* ======================================================== */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((p, idx) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group relative bg-[#0e0f16] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-crimson-950/20 cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                  {/* Device Frame (Laptop / Tablet Mockup Container) */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-800 bg-[#07080d] mb-4 group-hover:border-zinc-700 transition-colors">
                    
                    {/* Laptop Top Bezel Dot */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-800 z-10" />

                    {/* Project Image Inside Screen */}
                    <img
                      src={p.secondaryImage || p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                    {/* "View Now ↗" Floating Pill Button */}
                    <div className="absolute top-4 right-4 bg-crimson-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-xl shadow-crimson-950/60 flex items-center gap-1.5 transform group-hover:scale-105 transition-transform">
                      <span>View Now</span>
                      <FaExternalLinkAlt className="text-[9px]" />
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-black text-crimson-500">
                        {p.num}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-white group-hover:text-crimson-400 transition-colors">
                        {p.title}
                      </h3>
                    </div>

                    {/* Badges on Right */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-sky-400 px-2.5 py-1 rounded-md">
                        {p.badge}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-900">
                        {p.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>

      {/* EDITORIAL BLOG-STYLE CASE STUDY OVERLAY (Reference Pattern) */}
      <AnimatePresence>
        {selectedProject && (() => {
          const currentIndex = filteredProjects.findIndex((p) => p.num === selectedProject.num);
          const handlePrevProj = () => {
            const nextIdx = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
            setSelectedProject(filteredProjects[nextIdx]);
          };
          const handleNextProj = () => {
            const nextIdx = (currentIndex + 1) % filteredProjects.length;
            setSelectedProject(filteredProjects[nextIdx]);
          };

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-[#07080e] overflow-y-auto text-left select-text"
            >
              {/* Sticky Editorial Header */}
              <header className="sticky top-0 z-50 bg-[#0c0d14]/90 backdrop-blur-xl border-b border-zinc-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xl">
                {/* Brand / Left title */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-crimson-500/50 px-3.5 py-1.5 rounded-xl transition cursor-pointer shadow-sm group"
                  >
                    <FaChevronLeft className="text-xs text-crimson-400 group-hover:-translate-x-0.5 transition-transform" />
                    <span>Back to Portfolio</span>
                  </button>

                  <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="text-zinc-600">/</span>
                    <span className="font-bold text-white uppercase tracking-wider">{selectedProject.title}</span>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {selectedProject.live && selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md shadow-crimson-950/60"
                    >
                      <span>{selectedProject.live.includes("drive.google.com") ? "Video Demo" : "Live App"}</span>
                      {selectedProject.live.includes("drive.google.com") ? (
                        <FaPlay className="text-[9px]" />
                      ) : (
                        <FaExternalLinkAlt className="text-[10px]" />
                      )}
                    </a>
                  )}

                  {selectedProject.github && selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-bold text-xs uppercase tracking-wider rounded-xl transition"
                    >
                      <FaGithub className="text-xs" />
                      <span>GitHub</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition cursor-pointer"
                    aria-label="Close Case Study"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </div>
              </header>

              {/* Main Editorial Container (Reference Layout) */}
              <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                
                {/* ======================================================== */}
                {/* ROW 1: ASYMMETRIC HERO GRID (Left Big Card + Right List) */}
                {/* ======================================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 items-start">
                  
                  {/* Left Column (8 cols): Big Featured Showcase Card */}
                  <div className="lg:col-span-8 flex flex-col gap-4">
                    <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800/90 bg-[#0d0e15] shadow-2xl">
                      {/* Big Hero Image */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden bg-black">
                        <img
                          src={selectedProject.secondaryImage || selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-contain sm:object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        {/* Dark Gradient Vignette for Editorial Legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      </div>

                      {/* Card Overlay Content (Bottom) */}
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col justify-end">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-crimson-600 text-white shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            {selectedProject.badge}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono text-zinc-300 bg-black/60 border border-white/10 backdrop-blur-md">
                            {selectedProject.year} • {selectedProject.status}
                          </span>
                        </div>

                        <h1 className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-2 leading-tight drop-shadow-md">
                          {selectedProject.title}: {selectedProject.tagline}
                        </h1>

                        <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 max-w-2xl font-normal leading-relaxed">
                          {selectedProject.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (4 cols): Highlights & Core Modules List */}
                  <div className="lg:col-span-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                      <h2 className="text-base sm:text-lg font-black uppercase tracking-wide text-white">
                        Project Highlights
                      </h2>
                      <span className="text-[10px] font-mono text-crimson-400 bg-crimson-950/60 border border-crimson-900/40 px-2 py-0.5 rounded">
                        {selectedProject.features.length} Modules
                      </span>
                    </div>

                    {/* Vertical Mini Cards List */}
                    <div className="flex flex-col gap-3">
                      {selectedProject.features.slice(0, 4).map((feat, i) => {
                        const [title, ...rest] = feat.split(":");
                        return (
                          <div
                            key={i}
                            className="p-3.5 rounded-2xl bg-[#0e0f17] border border-zinc-850 hover:border-zinc-700 transition flex items-start gap-3 group"
                          >
                            {/* Square Icon/Thumbnail Container */}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/80 flex items-center justify-center text-crimson-400 shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                              {i === 0 && <FaBolt className="text-sm" />}
                              {i === 1 && <FaCheckCircle className="text-sm" />}
                              {i === 2 && <FaLayerGroup className="text-sm" />}
                              {i >= 3 && <FaPlay className="text-xs" />}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-wide truncate mb-0.5 group-hover:text-crimson-400 transition-colors">
                                {title}
                              </h3>
                              <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                                {rest.join(":") || title}
                              </p>
                              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-1 block">
                                Core Capability • Verified
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* ======================================================== */}
                {/* ROW 2: 3-CARD GRID (Like "Founders corner" in Reference)  */}
                {/* ======================================================== */}
                <div className="mb-14 sm:mb-16">
                  {/* Section Title with Slider Navigation Arrows */}
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                        Architecture &amp; Core Capabilities
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                        Key engineering pillars and technical specifications for {selectedProject.title}.
                      </p>
                    </div>

                    {/* Arrow controls matching reference */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handlePrevProj}
                        aria-label="Previous project"
                        className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-crimson-600 border border-zinc-800 hover:border-crimson-500 text-white flex items-center justify-center transition cursor-pointer shadow-sm"
                      >
                        <FaChevronLeft className="text-xs" />
                      </button>
                      <button
                        onClick={handleNextProj}
                        aria-label="Next project"
                        className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-crimson-600 border border-zinc-800 hover:border-crimson-500 text-white flex items-center justify-center transition cursor-pointer shadow-sm"
                      >
                        <FaChevronRight className="text-xs" />
                      </button>
                    </div>
                  </div>

                  {/* 3-Column Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    
                    {/* Card 1: The Problem & Purpose */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0e0f17] border border-zinc-850 hover:border-zinc-700 transition flex flex-col justify-between group">
                      <div>
                        {/* Aspect Image Box */}
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-zinc-800 mb-4">
                          <img
                            src={selectedProject.secondaryImage || selectedProject.image}
                            alt=""
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-crimson-400 bg-black/70 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                            Challenge &amp; Context
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-crimson-500" />
                          <span>Core Purpose</span>
                        </div>

                        <h3 className="text-sm sm:text-base font-black uppercase text-white tracking-wide mb-2">
                          Problem Statement
                        </h3>

                        <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-normal">
                          {selectedProject.fullSummary && selectedProject.fullSummary[0]
                            ? selectedProject.fullSummary[0]
                            : selectedProject.desc}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-zinc-850 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                        <span>Timeline: {selectedProject.year}</span>
                        <span className="text-emerald-400">{selectedProject.status}</span>
                      </div>
                    </div>

                    {/* Card 2: The Solution & Technical Architecture */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0e0f17] border border-zinc-850 hover:border-zinc-700 transition flex flex-col justify-between group">
                      <div>
                        {/* Aspect Image Box */}
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-zinc-800 mb-4">
                          <img
                            src={selectedProject.image}
                            alt=""
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-sky-400 bg-black/70 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                            Engineering Architecture
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                          <span>The Solution</span>
                        </div>

                        <h3 className="text-sm sm:text-base font-black uppercase text-white tracking-wide mb-2">
                          System Build &amp; Tech
                        </h3>

                        <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-normal">
                          {selectedProject.fullSummary && selectedProject.fullSummary[1]
                            ? selectedProject.fullSummary[1]
                            : "Engineered with modular, cloud-native frameworks ensuring sub-second response times and seamless UX."}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-zinc-850 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                        <span className="truncate max-w-[170px]">Tech: {selectedProject.tech.slice(0, 3).join(", ")}</span>
                        <span className="text-zinc-400">Production</span>
                      </div>
                    </div>

                    {/* Card 3: Business Impact & Deployment */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0e0f17] border border-zinc-850 hover:border-zinc-700 transition flex flex-col justify-between group">
                      <div>
                        {/* Aspect Image Box */}
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-zinc-800 mb-4">
                          <img
                            src={selectedProject.secondaryImage || selectedProject.image}
                            alt=""
                            className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-amber-400 bg-black/70 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                            Impact &amp; Delivery
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>Results &amp; Security</span>
                        </div>

                        <h3 className="text-sm sm:text-base font-black uppercase text-white tracking-wide mb-2">
                          Deployment &amp; Metrics
                        </h3>

                        <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-normal">
                          Successfully deployed on cloud edge infrastructure with automated CI/CD pipelines, SSL encryption, and high-uptime availability.
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-zinc-850 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                        <span>Role: Lead Engineer</span>
                        <span className="text-crimson-400">Talha Ishaq</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ======================================================== */}
                {/* ROW 3: DETAILED ARCHITECTURE SPECS & TECH BADGES         */}
                {/* ======================================================== */}
                {selectedProject.architecture && selectedProject.architecture.length > 0 && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0d15] border border-zinc-850 mb-12">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800">
                      <FaLayerGroup className="text-crimson-500 text-sm" />
                      <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                        Component Architecture Breakdown
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {selectedProject.architecture.map((arch, i) => (
                        <div
                          key={i}
                          className="bg-[#12131c] border border-zinc-800 p-3.5 rounded-xl flex flex-col justify-between"
                        >
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                            {arch.component}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-white mt-1">
                            {arch.tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* ======================================================== */}
                {/* ROW 4: PAGINATION SWITCHER (Like `← 1 2 3 4 5 →` in Ref) */}
                {/* ======================================================== */}
                <div className="p-4 sm:p-6 rounded-2xl bg-[#0c0d14] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Prev Button */}
                  <button
                    onClick={handlePrevProj}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition cursor-pointer"
                  >
                    <FaChevronLeft className="text-xs text-crimson-400" />
                    <span>Previous</span>
                  </button>

                  {/* Numbered Pills (1 2 3 4 ...) */}
                  <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
                    {filteredProjects.map((p, idx) => {
                      const isActive = p.num === selectedProject.num;
                      return (
                        <button
                          key={p.num}
                          onClick={() => setSelectedProject(p)}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-mono font-bold transition cursor-pointer flex items-center justify-center ${
                            isActive
                              ? "bg-crimson-600 text-white shadow-md shadow-crimson-950 font-black scale-105"
                              : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80"
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNextProj}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition cursor-pointer"
                  >
                    <span>Next</span>
                    <FaChevronRight className="text-xs text-crimson-400" />
                  </button>
                </div>

                {/* Bottom Direct Live Launch Banner */}
                <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-crimson-950/40 via-[#10111a] to-zinc-950 border border-crimson-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
                  <div>
                    <h3 className="text-base sm:text-xl font-black uppercase text-white mb-1">
                      Ready to experience {selectedProject.title}?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      Launch the live application in a new tab or inspect the full code repository.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                    {selectedProject.live && selectedProject.live !== "#" && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-crimson-950/70"
                      >
                        <span>Launch Live App</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="flex-1 sm:flex-initial px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer"
                    >
                      Back to Portfolio
                    </button>
                  </div>
                </div>

              </main>
            </motion.div>
          );
        })()}
      </AnimatePresence>

    </section>
  );
}
