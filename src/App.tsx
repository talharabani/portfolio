import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import N8nAutomation from "./components/N8nAutomation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatBot from "./components/ChatBot";
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2.5,
        backgroundColor: "#dc2626",
        transformOrigin: "0%",
        zIndex: 9999,
      }}
    />
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col relative selection:bg-crimson-600 selection:text-white font-sans antialiased overflow-x-hidden">
      <ScrollProgressBar />

      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <N8nAutomation />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ChatBot />
    </div>
  );
}

export default App;
