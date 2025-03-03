import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cpu, Code, Smartphone, Zap, ChevronDown } from "lucide-react";

// Define topics to display at each rotation interval
const TOPICS = [
  "Quantum Processing",
  "Neural Networks",
  "Holographic UI",
  "AI Integration",
  "Molecular Computing",
  "Quantum Encryption",
  "Neural Interfaces",
  "Smart Automation",
];

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);
  const [currentTopic, setCurrentTopic] = useState(TOPICS[0]);

  const [particles, setParticles] = useState([]);
  const [lines, setLines] = useState([]);
  const cpuRef = useRef<HTMLDivElement>(null);

  // Handle scroll-based rotation
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = window.scrollY / maxScroll;
      //console.log(scrollPercentage * 100);
      // Calculate rotation based on scroll position
      // Rotate 1 degree for every 10px scrolled
      const newRotation = (window.scrollY / 10) % 360;
      setRotation(newRotation);

      // Update current topic based on rotation
      // Each topic spans 45 degrees (360 / 8 topics)
      const topicIndex = Math.floor((newRotation % 360) / 45) % TOPICS.length;
      setCurrentTopic(TOPICS[topicIndex]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const generatedParticles = [...Array(30)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 12 + 2}px`,
      blur: `${Math.random() * 10 + 5}px`,
    }));
    setParticles(generatedParticles);

    const generatedCodeLines = [...Array(15)].map(() => ({
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 8 + 3}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setLines(generatedCodeLines);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center section-padding"
    >
      {/* Enhanced futuristic background gradient */}
      <div className="absolute inset-0  -z-10"></div>

      {/* Holographic grid pattern */}
      <div
        className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-[0.15] -z-10 animate-pulse-subtle"
        style={{ animationDuration: "15s" }}
      ></div>

      {/* Dynamic energy particles */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {particles.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-blue-400/40 blur-sm animate-float"
            style={{
              width: particle.size,
              height: particle.size,
              top: particle.top,
              left: particle.left,
              boxShadow: `0 0 ${particle.blur} rgba(59, 130, 246, 0.5)`,
            }}
          ></div>
        ))}

        {lines.map((line, i) => (
          <div
            key={`code-line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse-subtle"
            style={{
              width: "100%",
              top: line.top,
              animationDuration: line.duration,
              animationDelay: line.delay,
            }}
          ></div>
        ))}

        {/* Digital code lines 
        {[...Array(15)].map((_, i) => (
          <div
            key={`code-line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse-subtle"
            style={{
              width: "100%",
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
          */}
      </div>

      <div className="container-padding mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1 space-y-6 animate-fade-in z-10">
            <div className="inline-block rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary mb-2 backdrop-blur-sm">
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 animate-pulse" />
                Smart solutions for a connected world
              </span>
            </div>

            <h1 className="heading-xl max-w-4xl text-white">
              Turning Ideas into{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse-subtle">
                Intelligent
              </span>{" "}
              Reality
            </h1>

            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl backdrop-blur-sm bg-blue-900/10 p-4 rounded-lg">
              We design and develop cutting-edge devices that harness the power
              of computing and AI innovation, creating solutions that redefine
              what's possible.
            </p>

            {/* Current topic display 
            <div className="neo-glass py-4 px-6 rounded-lg mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-cyan-300 mb-2">
                Current Focus:
              </h3>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 animate-pulse-subtle">
                {currentTopic}
              </div>
            </div>
           
{/*
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90 text-white border-none shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-400/40"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Our Work
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-cyan-100 hover:bg-cyan-500/10 backdrop-blur-sm transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </Button>
            </div>
 */}
            {/*
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-2 text-cyan-100 bg-blue-900/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-cyan-500/20 shadow-inner shadow-cyan-500/5">
                <Cpu className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">Quantum Devices</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-100 bg-blue-900/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-cyan-500/20 shadow-inner shadow-cyan-500/5">
                <Code className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">Neural Networks</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-100 bg-blue-900/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-cyan-500/20 shadow-inner shadow-cyan-500/5">
                <Smartphone className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">Holographic UI</span>
              </div>
            </div>
             */}
          </div>

          <div className="flex-1 relative animate-slide-up z-10"></div>
        </div>
      </div>

      {/* Enhanced futuristic scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-float text-cyan-100 z-10">
        <span className="text-sm font-medium tracking-wide">
          SCROLL TO ROTATE
        </span>
        <div className="relative w-8 h-12 border border-cyan-400/30 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-blue-900/10">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="h-4 w-4 text-cyan-400 animate-pulse" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
