import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const PortfolioSection = () => {
  const categories = [
    "All",
    "Smart Home",
    "Industrial",
    "Healthcare",
    "Agriculture",
    "VR",
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Smart Irrigation Controller",
      category: "Agriculture",
      description:
        "An automated irrigation system that optimizes water usage based on soil moisture, weather forecasts, and plant needs.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      tags: ["Hardware", "Mobile App", "Cloud"],
      longDescription:
        "Our Smart Irrigation Controller is a comprehensive solution for modern agriculture, designed to maximize yield while minimizing resource usage. By integrating soil moisture sensors, weather data, and plant-specific needs, the system delivers precisely the right amount of water at the optimal time. The controller can be managed through a user-friendly mobile application, allowing farmers to monitor and adjust settings remotely. Cloud-based analytics provide insights on water usage patterns and recommendations for further optimization.",
      technologies: ["Arduino", "React Native", "AWS IoT", "Machine Learning"],
      features: [
        "Automated scheduling",
        "Real-time monitoring",
        "Weather integration",
        "Water usage analytics",
        "Remote control",
      ],
    },
    {
      title: "Industrial IoT Monitoring System",
      category: "Industrial",
      description:
        "Real-time monitoring solution for industrial equipment, predicting maintenance needs and preventing downtime.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1000",
      tags: ["Sensors", "Analytics", "Dashboard"],
      longDescription:
        "The Industrial IoT Monitoring System transforms traditional manufacturing environments into smart, connected facilities. Our solution deploys a network of specialized sensors throughout the production line to continuously monitor equipment health and performance metrics. Advanced analytics process this data to identify patterns that precede failures, allowing maintenance to be scheduled before costly downtime occurs. The intuitive dashboard provides plant managers with a comprehensive view of operations and actionable insights to improve efficiency.",
      technologies: [
        "Industrial Sensors",
        "Edge Computing",
        "Azure IoT Hub",
        "Predictive Analytics",
        "React",
      ],
      features: [
        "Predictive maintenance",
        "Real-time alerts",
        "Performance analytics",
        "Energy consumption monitoring",
        "Equipment lifecycle tracking",
      ],
    },
    {
      title: "Smart Home Energy Manager",
      category: "Smart Home",
      description:
        "Intelligent system that optimizes energy usage across home appliances, reducing consumption and utility bills.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
      tags: ["Energy", "Mobile App", "AI"],
      longDescription:
        "The Smart Home Energy Manager brings intelligent power management to residential spaces. By analyzing usage patterns across all connected devices, our system automatically optimizes energy consumption without sacrificing comfort. The AI-powered core learns from user preferences and behaviors to make increasingly personalized adjustments. Integration with smart meters enables real-time pricing awareness, allowing the system to shift energy-intensive tasks to lower-cost periods. The companion mobile app provides complete control and detailed insights on energy usage and savings.",
      technologies: [
        "Smart Plugs",
        "Machine Learning",
        "React Native",
        "Google Home/Alexa Integration",
        "Smart Meter API",
      ],
      features: [
        "Automated device control",
        "Usage analytics",
        "Cost saving recommendations",
        "Peak demand management",
        "Carbon footprint tracking",
      ],
    },
    {
      title: "Virtual Manufacturing Training",
      category: "VR",
      description:
        "Immersive VR training program for manufacturing staff to learn equipment operation and safety procedures.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
      tags: ["VR", "Training", "Simulation"],
      longDescription:
        "Our Virtual Manufacturing Training platform revolutionizes how workers learn to operate complex machinery and follow safety protocols. The immersive VR environment provides realistic simulations of manufacturing processes without the risks associated with hands-on training on actual equipment. Trainees can practice procedures repeatedly until mastery is achieved, with the system providing instant feedback and guidance. Training managers can track progress through comprehensive analytics and customize scenarios to address specific workplace challenges.",
      technologies: [
        "Unity 3D",
        "Oculus Quest",
        "3D Modeling",
        "Haptic Feedback",
        "Spatial Audio",
      ],
      features: [
        "Interactive tutorials",
        "Safety procedure simulations",
        "Performance assessment",
        "Customizable scenarios",
        "Multi-user training sessions",
      ],
    },
    {
      title: "Connected Health Monitor",
      category: "Healthcare",
      description:
        "Wearable device and accompanying platform for continuous health monitoring and early warning of potential issues.",
      image:
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=1000",
      tags: ["Wearable", "Mobile App", "Analytics"],
      longDescription:
        "The Connected Health Monitor is a comprehensive health tracking solution that combines a discreet wearable device with powerful analytics. The device continuously tracks vital signs including heart rate, blood oxygen, temperature, and activity levels. Using machine learning algorithms, our platform analyzes this data to establish personal baselines and detect subtle changes that might indicate emerging health issues. Healthcare providers can integrate with our API to receive alerts and access patient data for more informed care decisions. The mobile app empowers users with actionable insights about their health patterns and personalized recommendations.",
      technologies: [
        "Biometric Sensors",
        "React Native",
        "HIPAA-compliant Cloud Storage",
        "Machine Learning",
        "HL7 FHIR",
      ],
      features: [
        "24/7 vital monitoring",
        "Anomaly detection",
        "Medication reminders",
        "Doctor connectivity",
        "Health trend analysis",
      ],
    },
    {
      title: "Retail Analytics Platform",
      category: "Industrial",
      description:
        "In-store customer tracking system providing valuable insights on shopping patterns and store optimization.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
      tags: ["Analytics", "Dashboard", "Sensors"],
      longDescription:
        "Our Retail Analytics Platform transforms physical store spaces into data-rich environments that rival online shopping analytics. Using a network of unobtrusive sensors and computer vision technology, the system anonymously tracks customer movement and interaction throughout the store. The resulting heat maps and flow patterns help retailers optimize store layouts, product placement, and staffing. The platform integrates with point-of-sale data to correlate movement patterns with actual purchases, providing unprecedented insight into the customer journey from entry to checkout.",
      technologies: [
        "Computer Vision",
        "Bluetooth Beacons",
        "TensorFlow",
        "React",
        "Google Analytics",
      ],
      features: [
        "Customer flow visualization",
        "Dwell time analysis",
        "Conversion optimization",
        "A/B testing",
        "Staff allocation optimization",
      ],
    },
    {
      title: "Virtual Architectural Walkthrough",
      category: "VR",
      description:
        "Interactive VR experience allowing clients to explore and customize architectural designs before construction.",
      image:
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=1000",
      tags: ["VR", "Architecture", "Interactive"],
      longDescription:
        "The Virtual Architectural Walkthrough revolutionizes how architects and clients collaborate on building designs. Our platform converts CAD and BIM models into fully immersive virtual environments that clients can explore naturally. During virtual walkthroughs, clients can experience spatial relationships and lighting conditions at different times of day, providing intuitive understanding that 2D plans cannot match. Interactive elements allow real-time customization of finishes, fixtures, and furnishings, helping clients visualize options and make confident decisions before construction begins.",
      technologies: [
        "Unity 3D",
        "Autodesk Revit Integration",
        "Oculus Quest",
        "Photorealistic Rendering",
        "Web GL",
      ],
      features: [
        "Real-time material swapping",
        "Lighting simulation",
        "Measurements tool",
        "Collaborative sessions",
        "Design version comparison",
      ],
    },
    {
      title: "Voice-Controlled Home Assistant",
      category: "Smart Home",
      description:
        "Custom-built voice assistant with local processing for enhanced privacy and smart home integration.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
      tags: ["Voice AI", "Hardware", "Software"],
      longDescription:
        "Our Voice-Controlled Home Assistant represents the next generation of smart home technology with a focus on privacy and seamless integration. Unlike cloud-dependent alternatives, our assistant performs core voice processing locally on the device, ensuring that sensitive conversations remain private. The custom-designed hardware features far-field microphones for reliable voice capture and a powerful edge AI processor that enables quick response times. The system integrates with virtually all major smart home protocols, allowing unified control of diverse devices through natural voice commands or the companion app.",
      technologies: [
        "Wake Word Detection",
        "Natural Language Processing",
        "Edge Computing",
        "Zigbee/Z-Wave/Matter",
        "Custom PCB Design",
      ],
      features: [
        "Private voice processing",
        "Multi-room audio",
        "Custom voice commands",
        "Scene automation",
        "Voice identification",
      ],
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="section-padding bg-gradient-to-b from-indigo-950 to-blue-950 relative overflow-hidden"
    >
      {/* Digital grid background */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-[0.07] -z-10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-indigo-400/30 blur-sm animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: `0 0 ${Math.random() * 8 + 3}px ${
                Math.random() * 2 + 1
              }px rgba(129, 140, 248, 0.5)`,
            }}
          ></div>
        ))}
      </div>

      <div className="container-padding mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-sm font-medium text-indigo-400 mb-4 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 inline-block mr-1.5" />
            Our Portfolio
          </div>
          <h2 className="heading-lg max-w-3xl mx-auto text-white">
            Innovative{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">
              IoT and VR solutions
            </span>{" "}
            we've delivered
          </h2>
          <p className="text-blue-100/70 mt-4 max-w-2xl mx-auto">
            Browse our portfolio of successful projects across multiple
            industries and applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-none shadow-lg shadow-indigo-500/20"
                  : "border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-400/50"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-blue-900/20 backdrop-blur-md rounded-lg overflow-hidden border border-indigo-500/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300"></div>

                {/* Digital scan effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`scanline-${i}`}
                      className="absolute h-[1px] w-full bg-indigo-400 left-0"
                      style={{
                        top: `${i * 10}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className="absolute inset-0 flex items-end transition-all duration-300">
                  <div className="p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Button
                      variant="outline"
                      className="bg-indigo-900/40 backdrop-blur-sm border-indigo-500/40 text-white hover:bg-indigo-800/50 hover:text-white"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium py-1 px-2 rounded-full bg-blue-900/40 text-blue-100 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-blue-100/70 mb-4">{project.description}</p>

                <div className="text-sm font-medium text-indigo-400">
                  {project.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="bg-gradient-to-b from-indigo-950 to-blue-950 border border-indigo-500/30 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogClose className="rounded-full p-1.5 hover:bg-indigo-800/50 transition-colors">
                      <X className="h-5 w-5 text-indigo-400" />
                    </DialogClose>
                  </div>
                  <DialogDescription className="text-indigo-300 mt-1">
                    {selectedProject.category} project
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-6">
                  <div className="aspect-video rounded-lg overflow-hidden border border-indigo-500/20 shadow-lg">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 my-4">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm font-medium py-1 px-3 rounded-full bg-blue-900/40 text-blue-100 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">
                      Overview
                    </h3>
                    <p className="text-blue-100/80 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white">
                        Technologies Used
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 mr-2"></div>
                            <span className="text-blue-100/80">{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 mr-2"></div>
                            <span className="text-blue-100/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white border-none shadow-lg shadow-indigo-500/20">
                      Contact Us About This Project
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioSection;
