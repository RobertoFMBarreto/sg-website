import {
  Cpu,
  Code,
  BarChart,
  CloudCog,
  Zap,
  Activity,
  Smartphone,
  Glasses,
  Sparkles,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Hardware Design",
      description:
        "Custom electronic circuit design, PCB layout, prototyping, and production-ready hardware solutions.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software Development",
      description:
        "Embedded firmware, mobile applications, web dashboards, and cloud integrations for complete IoT ecosystems.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Data Analytics",
      description:
        "Turn sensor data into actionable insights with our custom analytics solutions and intuitive visualization tools.",
    },
    // {
    //   icon: <CloudCog className="h-6 w-6" />,
    //   title: "Cloud Infrastructure",
    //   description:
    //     "Scalable, secure, and reliable cloud infrastructure for processing, storing, and managing IoT device data.",
    // },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Energy Optimization",
      description:
        "Battery life optimization, energy harvesting solutions, and power-efficient system design for IoT devices.",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Connectivity Solutions",
      description:
        "Implement the right wireless protocols for your needs - Wi-Fi, Bluetooth, NB-IoT, Cellular, and more.",
    },
    {
      icon: <Glasses className="h-6 w-6" />,
      title: "VR Development",
      description:
        "Immersive virtual reality experiences for training, visualization, entertainment, and product demonstrations.",
    },
    // {
    //   icon: <Smartphone className="h-6 w-6" />,
    //   title: "User Interface Design",
    //   description:
    //     "Intuitive, user-friendly interfaces for both physical devices and software applications that enhance user experience.",
    // },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-no-repeat bg-cover opacity-[0.07] -z-10"></div>

      {/* Digital floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-blue-400/30 blur-sm animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: `0 0 ${Math.random() * 8 + 3}px ${
                Math.random() * 2 + 1
              }px rgba(59, 130, 246, 0.5)`,
            }}
          ></div>
        ))}
      </div>

      <div className="container-padding mx-auto relative z-10 about-container">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-sm font-medium text-cyan-400 mb-4 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 inline-block mr-1.5" />
            Our Services
          </div>
          <h2 className="heading-lg max-w-3xl mx-auto text-white">
            End-to-end product development from{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              concept to delivery
            </span>
          </h2>
          <p className="text-blue-100/70 mt-4 max-w-2xl mx-auto">
            Our comprehensive services cover every aspect of smart product
            development, ensuring seamless integration and optimal performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-950 backdrop-blur-md rounded-lg p-8 border border-cyan-500/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-blue-100/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
