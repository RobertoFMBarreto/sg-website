import { ShieldCheck, Users, Trophy, Globe, Zap, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Digital grid background */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-[0.07] -z-10"></div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: `radial-gradient(circle, ${
                [
                  "rgba(34,211,238,0.4)",
                  "rgba(96,165,250,0.4)",
                  "rgba(129,140,248,0.4)",
                ][Math.floor(Math.random() * 3)]
              }, transparent)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="about-container lg:lg-about-container mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <div className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-sm font-medium text-cyan-400 mb-4 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 inline-block mr-1.5" />
            About Us
          </div>
          <h2 className="heading-lg max-w-3xl mx-auto text-white">
            A passionate team creating{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              intelligent products
            </span>{" "}
            that solve real problems
          </h2>
          <p className="text-blue-100/80 mt-4 max-w-2xl mx-auto">
            At SmartGadgets, we combine expertise in hardware, software
            development, and product design to create innovative solutions that
            improve lives and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: <Users className="h-6 w-6 text-cyan-400" />,
              title: "Expert Team",
              description:
                "Our diverse team combines skills in electronics, software, and product design to deliver complete solutions.",
            },
            {
              icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />,
              title: "Quality Focused",
              description:
                "We're committed to delivering high-quality, reliable, and secure products that exceed expectations.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-950 backdrop-blur-md border border-cyan-500/20 p-6 rounded-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center mb-4 border border-cyan-500/30">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-blue-100/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 about-description-container">
          <div className="flex-1 animate-fade-in">
            <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                alt="Our team working"
                className="w-full h-auto object-cover aspect-video rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-white font-display text-xl font-medium">
                  Creating smarter products, one solution at a time
                </div>
              </div>

              {/* Scan lines effect */}
              <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={`scanline-${i}`}
                    className="absolute h-[1px] w-full bg-cyan-400 left-0"
                    style={{ top: `${i * 5}%`, animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6 animate-fade-in">
            <h3 className="heading-md text-white">
              We bring hardware and software expertise to every project
            </h3>

            <p className="text-blue-100/70">
              SmartGadgets brings together combined experience in electronics
              design, embedded systems, and software development. We're
              passionate about building smart products that solve real problems.
            </p>

            <p className="text-blue-100/70">
              Our approach integrates cutting-edge hardware design with
              innovative software development, with the additional capability to
              create immersive VR experiences when needed. Every solution we
              deliver is robust, scalable, and future-proof.
            </p>
            {/*
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-blue-900/30 border border-cyan-500/20 p-4 rounded-lg">
                <div className="text-3xl font-bold text-cyan-400">35+</div>
                <div className="text-sm text-blue-100/70">
                  Completed Projects
                </div>
              </div>
              <div className="bg-blue-900/30 border border-cyan-500/20 p-4 rounded-lg">
                <div className="text-3xl font-bold text-cyan-400">12+</div>
                <div className="text-sm text-blue-100/70">Team Members</div>
              </div>
              <div className="bg-blue-900/30 border border-cyan-500/20 p-4 rounded-lg">
                <div className="text-3xl font-bold text-cyan-400">8+</div>
                <div className="text-sm text-blue-100/70">Years Experience</div>
              </div>
              <div className="bg-blue-900/30 border border-cyan-500/20 p-4 rounded-lg">
                <div className="text-3xl font-bold text-cyan-400">95%</div>
                <div className="text-sm text-blue-100/70">
                  Client Satisfaction
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
