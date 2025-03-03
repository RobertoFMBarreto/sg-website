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
  const [cpuVisible, setCpuVisible] = useState(false);
  const cpuRef = useRef<HTMLDivElement>(null);
  const cpuContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll-based rotation and position
  useEffect(() => {
    // Show CPU with animation on component mount
    setTimeout(() => {
      setCpuVisible(true);
    }, 300);

    const handleScroll = () => {
      // Calculate rotation based on scroll position
      // Rotate 1 degree for every 10px scrolled
      const newRotation = (window.scrollY / 10) % 360;
      setRotation(newRotation);

      // Update current topic based on rotation
      // Each topic spans 45 degrees (360 / 8 topics)
      const topicIndex = Math.floor((newRotation % 360) / 45) % TOPICS.length;
      setCurrentTopic(TOPICS[topicIndex]);

      // Make CPU follow scroll within the hero section
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (cpuContainerRef.current) {
        // Apply the scroll position as a translation, capped at the hero section height
        const maxTranslation = heroHeight * 0.6; // Limit how far down it can go
        const translation = Math.min(scrollPosition * 0.3, maxTranslation);
        cpuContainerRef.current.style.transform = `translateY(${translation}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center section-padding"
    >
      {/* Enhanced futuristic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/80 to-indigo-950 -z-10"></div>

      {/* Holographic grid pattern */}
      <div
        className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-[0.15] -z-10 animate-pulse-subtle"
        style={{ animationDuration: "15s" }}
      ></div>

      {/* Dynamic energy particles */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-blue-400/40 blur-sm animate-float"
            style={{
              width: `${Math.random() * 12 + 2}px`,
              height: `${Math.random() * 12 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${
                Math.random() * 3 + 1
              }px rgba(59, 130, 246, 0.5)`,
            }}
          ></div>
        ))}

        {/* Digital code lines */}
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
      </div>

      <div className="container-padding mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6 animate-fade-in z-10">
            <div className="inline-block rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary mb-2 backdrop-blur-sm">
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 animate-pulse" />
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse-subtle font-bold"
                  style={{
                    textShadow:
                      "0 0 15px rgba(34, 211, 238, 0.9), 0 0 30px rgba(59, 130, 246, 0.6)",
                    animationDuration: "2s",
                  }}
                >
                  Next-Generation Tech Solutions
                </span>
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
              of quantum computing and AI innovation, creating solutions that
              redefine what's possible.
            </p>

            {/* Current topic display */}
            <div className="neo-glass py-4 px-6 rounded-lg mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-cyan-300 mb-2">
                Current Focus:
              </h3>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 animate-pulse-subtle">
                {currentTopic}
              </div>
            </div>

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
          </div>

          <div className="flex-1 relative z-10" ref={cpuContainerRef}>
            {/* Rotating CPU with Enhanced Electronic Circuit Animation */}
            <div
              ref={cpuRef}
              className={`relative w-full aspect-square max-w-md mx-auto transition-all duration-700 ${
                cpuVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{
                transform: `rotate(${rotation}deg)`,
                transition:
                  "opacity 0.7s ease-out, transform 0.7s ease-out, scale 0.7s ease-out",
              }}
            >
              {/* Energy field */}
              <div
                className="absolute inset-[-15%] rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-400/10 blur-3xl animate-pulse-subtle"
                style={{ animationDuration: "4s" }}
              ></div>

              {/* Multiple orbital energy rings */}
              <div
                className="absolute inset-[-5%] border-[1px] border-cyan-500/30 rounded-full animate-spin"
                style={{ animationDuration: "30s" }}
              ></div>
              <div
                className="absolute inset-[5%] border-[2px] border-blue-400/20 rounded-full animate-spin"
                style={{
                  animationDuration: "25s",
                  animationDirection: "reverse",
                }}
              ></div>
              <div
                className="absolute inset-[15%] border-[1px] border-indigo-500/30 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>

              {/* Central CPU with metallic finish */}
              <div className="absolute inset-[20%] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-lg shadow-2xl shadow-cyan-700/30 flex items-center justify-center z-20 border border-cyan-500/50 overflow-hidden">
                {/* Metallic texture overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjEwIiBzdHJva2U9IiNhYWFhYWEwOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"></div>

                {/* CPU Internal Grid with enhanced realism */}
                <div className="absolute inset-[8%] grid grid-cols-10 grid-rows-10 opacity-80">
                  {[...Array(100)].map((_, i) => (
                    <div
                      key={`grid-${i}`}
                      className="border border-cyan-800/20 bg-gradient-to-br from-slate-900/80 to-slate-800/50"
                    ></div>
                  ))}
                </div>

                {/* Detailed circuit traces */}
                <div className="absolute inset-[8%] z-20">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={`circuit-h-${i}`}
                      className="absolute h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      style={{
                        width: "90%",
                        left: "5%",
                        top: `${15 + i * 18}%`,
                        boxShadow: "0 0 8px 1px rgba(34, 211, 238, 0.4)",
                      }}
                    >
                      <div className="absolute w-2 h-2 rounded-full bg-cyan-400 -right-1 -top-[3px] shadow-lg shadow-cyan-400/50 animate-pulse"></div>
                    </div>
                  ))}

                  {[...Array(5)].map((_, i) => (
                    <div
                      key={`circuit-v-${i}`}
                      className="absolute w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                      style={{
                        height: "90%",
                        top: "5%",
                        left: `${15 + i * 18}%`,
                        boxShadow: "0 0 8px 1px rgba(96, 165, 250, 0.4)",
                      }}
                    >
                      <div className="absolute h-2 w-2 rounded-full bg-blue-400 -bottom-1 -left-[3px] shadow-lg shadow-blue-400/50 animate-pulse"></div>
                    </div>
                  ))}
                </div>

                {/* CPU Core with enhanced glow */}
                <div className="relative z-30">
                  <div className="absolute inset-[-100%] bg-cyan-500/20 blur-xl rounded-full animate-pulse"></div>
                  <div
                    className="absolute inset-[-50%] bg-blue-500/20 blur-lg rounded-full animate-pulse"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <Cpu className="w-16 h-16 text-cyan-100 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                </div>

                {/* Data processing visualization */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`data-flow-${i}`}
                      className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-pulse-subtle"
                      style={{
                        width: "100%",
                        top: `${i * 10}%`,
                        animationDuration: `${1 + i * 0.3}s`,
                        animationDelay: `${i * 0.1}s`,
                        opacity: Math.random() * 0.5 + 0.2,
                      }}
                    ></div>
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`data-flow-v-${i}`}
                      className="absolute w-0.5 bg-gradient-to-b from-transparent via-blue-400/80 to-transparent animate-pulse-subtle"
                      style={{
                        height: "100%",
                        left: `${i * 10}%`,
                        animationDuration: `${1 + i * 0.3}s`,
                        animationDelay: `${i * 0.1}s`,
                        opacity: Math.random() * 0.5 + 0.2,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Enhanced realistic connector pins */}
                <div className="absolute inset-0">
                  {/* Top pins - metallic look */}
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={`top-${i}`}
                      className="absolute top-0 h-[8%] w-[6%] bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600 rounded-b-sm"
                      style={{
                        left: `${16 + i * 11}%`,
                        boxShadow: "0 0 5px rgba(34, 211, 238, 0.6)",
                      }}
                    >
                      <div className="absolute bottom-0 inset-x-0 h-[20%] bg-cyan-400/50 animate-pulse"></div>
                    </div>
                  ))}

                  {/* Bottom pins */}
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={`bottom-${i}`}
                      className="absolute bottom-0 h-[8%] w-[6%] bg-gradient-to-t from-gray-300 via-gray-400 to-gray-600 rounded-t-sm"
                      style={{
                        left: `${16 + i * 11}%`,
                        boxShadow: "0 0 5px rgba(34, 211, 238, 0.6)",
                      }}
                    >
                      <div className="absolute top-0 inset-x-0 h-[20%] bg-blue-400/50 animate-pulse"></div>
                    </div>
                  ))}

                  {/* Left pins */}
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={`left-${i}`}
                      className="absolute left-0 w-[8%] h-[6%] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 rounded-r-sm"
                      style={{
                        top: `${16 + i * 11}%`,
                        boxShadow: "0 0 5px rgba(34, 211, 238, 0.6)",
                      }}
                    >
                      <div className="absolute right-0 inset-y-0 w-[20%] bg-indigo-400/50 animate-pulse"></div>
                    </div>
                  ))}

                  {/* Right pins */}
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={`right-${i}`}
                      className="absolute right-0 w-[8%] h-[6%] bg-gradient-to-l from-gray-300 via-gray-400 to-gray-600 rounded-l-sm"
                      style={{
                        top: `${16 + i * 11}%`,
                        boxShadow: "0 0 5px rgba(34, 211, 238, 0.6)",
                      }}
                    >
                      <div className="absolute left-0 inset-y-0 w-[20%] bg-purple-400/50 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Circuit connection lines with enhanced glow effect */}
              <div className="absolute inset-0 z-10">
                {/* Power supply connections - enhanced with bright glow */}
                <div
                  className="absolute top-[20%] left-0 w-[20%] h-[4px] bg-gradient-to-r from-yellow-400 to-cyan-400 shadow-[0_0_15px_5px_rgba(34,211,238,0.8)] animate-pulse"
                  style={{ animationDuration: "1.5s" }}
                ></div>
                <div
                  className="absolute bottom-[20%] right-0 w-[20%] h-[4px] bg-gradient-to-l from-yellow-400 to-cyan-400 shadow-[0_0_15px_5px_rgba(34,211,238,0.8)] animate-pulse"
                  style={{ animationDuration: "1.7s" }}
                ></div>
                <div
                  className="absolute right-[20%] top-0 h-[20%] w-[4px] bg-gradient-to-b from-yellow-400 to-cyan-400 shadow-[0_0_15px_5px_rgba(34,211,238,0.8)] animate-pulse"
                  style={{ animationDuration: "1.3s" }}
                ></div>
                <div
                  className="absolute left-[20%] bottom-0 h-[20%] w-[4px] bg-gradient-to-t from-yellow-400 to-cyan-400 shadow-[0_0_15px_5px_rgba(34,211,238,0.8)] animate-pulse"
                  style={{ animationDuration: "1.9s" }}
                ></div>

                {/* Regular connection lines */}
                <div className="absolute top-[35%] left-0 w-[20%] h-[2px] bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-pulse"></div>
                <div className="absolute top-[65%] left-0 w-[20%] h-[2px] bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-pulse"></div>
                <div className="absolute top-[35%] right-0 w-[20%] h-[2px] bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-pulse"></div>
                <div className="absolute top-[65%] right-0 w-[20%] h-[2px] bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] animate-pulse"></div>

                {/* Vertical data lines */}
                <div className="absolute left-[35%] top-0 h-[20%] w-[2px] bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.6)] animate-pulse"></div>
                <div className="absolute left-[65%] top-0 h-[20%] w-[2px] bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.6)] animate-pulse"></div>
                <div className="absolute left-[35%] bottom-0 h-[20%] w-[2px] bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.6)] animate-pulse"></div>
                <div className="absolute left-[65%] bottom-0 h-[20%] w-[2px] bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.6)] animate-pulse"></div>

                {/* Diagonal connection lines with enhanced glow */}
                <div className="absolute top-[15%] left-[15%] w-[28%] h-[2px] bg-purple-400 shadow-[0_0_10px_2px_rgba(192,132,252,0.6)] animate-pulse origin-bottom-left rotate-45"></div>
                <div className="absolute top-[15%] right-[15%] w-[28%] h-[2px] bg-indigo-400 shadow-[0_0_10px_2px_rgba(129,140,248,0.6)] animate-pulse origin-bottom-right -rotate-45"></div>
                <div className="absolute bottom-[15%] left-[15%] w-[28%] h-[2px] bg-indigo-400 shadow-[0_0_10px_2px_rgba(129,140,248,0.6)] animate-pulse origin-top-left -rotate-45"></div>
                <div className="absolute bottom-[15%] right-[15%] w-[28%] h-[2px] bg-purple-400 shadow-[0_0_10px_2px_rgba(192,132,252,0.6)] animate-pulse origin-top-right rotate-45"></div>

                {/* Connection nodes with enhanced glow */}
                {/* Power supply nodes with enhanced yellow glow */}
                <div
                  className="absolute top-[20%] left-0 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_20px_8px_rgba(250,204,21,0.8)] animate-pulse-subtle"
                  style={{ animationDuration: "1.2s" }}
                ></div>
                <div
                  className="absolute bottom-[20%] right-0 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_20px_8px_rgba(250,204,21,0.8)] animate-pulse-subtle"
                  style={{ animationDuration: "1.4s" }}
                ></div>
                <div
                  className="absolute right-[20%] top-0 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_20px_8px_rgba(250,204,21,0.8)] animate-pulse-subtle"
                  style={{ animationDuration: "1.6s" }}
                ></div>
                <div
                  className="absolute left-[20%] bottom-0 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_20px_8px_rgba(250,204,21,0.8)] animate-pulse-subtle"
                  style={{ animationDuration: "1.8s" }}
                ></div>

                {/* Regular nodes */}
                <div className="absolute top-[35%] left-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_5px_rgba(34,211,238,0.6)] animate-pulse-subtle"></div>
                <div className="absolute top-[65%] left-0 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_15px_5px_rgba(74,222,128,0.6)] animate-pulse-subtle"></div>
                <div className="absolute top-[35%] right-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_5px_rgba(250,204,21,0.6)] animate-pulse-subtle"></div>
                <div className="absolute top-[65%] right-0 w-3 h-3 bg-red-400 rounded-full shadow-[0_0_15px_5px_rgba(248,113,113,0.6)] animate-pulse-subtle"></div>

                <div className="absolute left-[35%] top-0 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_5px_rgba(192,132,252,0.6)] animate-pulse-subtle"></div>
                <div className="absolute left-[65%] top-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_5px_rgba(34,211,238,0.6)] animate-pulse-subtle"></div>
                <div className="absolute left-[35%] bottom-0 w-3 h-3 bg-orange-400 rounded-full shadow-[0_0_15px_5px_rgba(251,146,60,0.6)] animate-pulse-subtle"></div>
                <div className="absolute left-[65%] bottom-0 w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_15px_5px_rgba(129,140,248,0.6)] animate-pulse-subtle"></div>

                {/* Diagonal node connections */}
                <div className="absolute top-[15%] left-[15%] w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_5px_rgba(52,211,153,0.6)] animate-pulse-subtle"></div>
                <div className="absolute top-[15%] right-[15%] w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_15px_5px_rgba(251,191,36,0.6)] animate-pulse-subtle"></div>
                <div className="absolute bottom-[15%] left-[15%] w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_15px_5px_rgba(232,121,249,0.6)] animate-pulse-subtle"></div>
                <div className="absolute bottom-[15%] right-[15%] w-3 h-3 bg-lime-400 rounded-full shadow-[0_0_15px_5px_rgba(163,230,53,0.6)] animate-pulse-subtle"></div>
              </div>

              {/* Data transmission pulse effects */}
              <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`pulse-${i}`}
                    className="absolute w-full h-full border-2 border-cyan-400/30 rounded-full opacity-0 animate-ping"
                    style={{
                      animationDuration: `${3 + i}s`,
                      animationDelay: `${i * 0.75}s`,
                      animationIterationCount: "infinite",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Rotation indicator markers (every 45 degrees) */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => {
                const angle = i * 45;
                const isActive = Math.floor((rotation % 360) / 45) === i;
                return (
                  <div
                    key={`marker-${i}`}
                    className={`absolute w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive ? "bg-cyan-400 scale-150" : "bg-cyan-700"
                    }`}
                    style={{
                      transform: `rotate(${angle}deg) translateY(-170px) rotate(-${angle}deg)`,
                      boxShadow: isActive
                        ? "0 0 15px 5px rgba(34,211,238,0.6)"
                        : "none",
                      left: "calc(50% - 6px)",
                      top: "calc(50% - 6px)",
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced futuristic scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-float text-cyan-100 z-10">
        <span className="text-sm font-medium tracking-wide">
          SCROLL TO ROTATE
        </span>
        <div className="relative w-8 h-12 border border-cyan-400/30 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-blue-900/10">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="h-4 w-4 text-cyan-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
