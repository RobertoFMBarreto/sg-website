import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Code, Smartphone, Zap, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ZigZagBall = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const cpuRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const createAnimation = () => {
      const screenWidth = window.innerWidth;
      const xOffset = screenWidth * 0.5;
      const xOffsetRight = screenWidth * 0.75;

      if (ballRef.current) {
        gsap.killTweensOf(ballRef.current); // Evita animações duplicadas

        gsap.to(ballRef.current, {
          keyframes: {
            x: [xOffset, 0, xOffsetRight, xOffsetRight / 2],
            y: ["25vh", "25vh", "25vh", "25vh"],
            rotation: [0, 180, 360, 720],
          },
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "45% center",
            scrub: true,
          },
          onComplete: () => {
            gsap.to(ballRef.current, {
              scale: 3, // Expande o objeto
              opacity: 0, // Faz o objeto desaparecer (se necessário)
              rotation: 1440, // Pode continuar rotacionando ou dar mais rotação
              duration: 1, // Tempo da "explosão"
              ease: "power4.inOut", // Efeito suave
              onComplete: () => {
                // Após a animação, o objeto pode ser removido ou ocultado
                //ballRef.current.style.display = "none";
              },
            });
          },
        });
      }
    };

    createAnimation();

    // Atualiza ao redimensionar a tela
    const handleResize = () => {
      createAnimation();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //   Handle scroll-based rotation
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = window.scrollY / maxScroll;
      console.log(scrollPercentage * 100);
      if (scrollPercentage * 100 < 45) {
        gsap.to(ballRef.current, {
          opacity: 1,
          scale: 1,
        });
      }
      // Calculate rotation based on scroll position
      // Rotate 1 degree for every 10px scrolled
      //   const newRotation = (window.scrollY / 10) % 360;
      //   setRotation(newRotation);
      //   console.log(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ballRef}
      className="fixed w-full aspect-square max-w-md mx-auto hidden lg:block"
    >
      {/* Rotating CPU with Enhanced Electronic Circuit Animation */}
      <div
        ref={cpuRef}
        className={`relative w-full aspect-square max-w-md mx-auto transition-all duration-700 ${"opacity-100 scale-100"}`}
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
  );
};

export default ZigZagBall;
