import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const PortfolioSection = () => {
  const categories = ["All", "Industry", "Agriculture", "Health"];
  const [activeCategory, setActiveCategory] = useState("All");

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Artisan",
      category: "Industry",
      description:
        "A vision system with AI fault classification, modular and scalable, offering faster inspections than manual ones, with an interface for I/O signals and integration with third-party management platforms.",
      image: "/assets/artisan.png",
      tags: ["AI", "Computer Vision"],
      longDescription:
        "A vision system with AI fault classification, modular and scalable, offering faster inspections than manual ones, with an interface for I/O signals and integration with third-party management platforms.",
      keypoints1: [
        {
          name: "Computer vision system",
          subItems: [],
        },
        {
          name: "AI fault classification",
          subItems: [],
        },
        {
          name: "Modular and scalable",
          subItems: [],
        },
      ],
      keypoints2: [
        {
          name: "Faster than manual inspection",
          subItems: [],
        },
        {
          name: "Interface for I/O signals",
          subItems: [],
        },
        {
          name: "Integration with 3dr-party management platforms",
          subItems: [],
        },
      ],
    },
    {
      title: "Beegenius",
      category: "Agriculture",
      description:
        "An innovative digital platform for beekeeping management that combines automatic hive registration, real-time physical monitoring, assisted interventions, anti-theft control, health supervision and honey authenticity tracking, guaranteeing efficiency, security and transparency throughout the production chain.",
      image: "/assets/bee.png",
      tags: ["Block Chain", "Mobile App", "Georeferencing"],
      longDescription:
        "An innovative digital platform for beekeeping management that combines automatic hive registration, real-time physical monitoring, assisted interventions, anti-theft control, health supervision and honey authenticity tracking, guaranteeing efficiency, security and transparency throughout the production chain.",
      keypoints1: [
        {
          name: "PGA - Digital Application Management Platform",
          subItems: [
            "Automatic Registration of hives and apiaries",
            "Beekeeper's diary",
            "Registration of Interventions",
            "Georeferencing",
            "Notifications and Alerts",
            "Associations and Suppliers",
            "Direct contact with authorities",
          ],
        },
        {
          name: "MFA - Physical Monitoring of Hives",
          subItems: [
            "Monitoring the hive ecosystem",
            "Real-time data recording",
            "Remote communication",
            "Apiary, Hive, Frame",
            "Non-intrusive system",
            "Great energy autonomy",
          ],
        },
        {
          name: "SAI - Assisted Intervention Service",
          subItems: [
            "Intervention agenda",
            "Intervention planning",
            "Intervention reports",
            "Voice recording of interventions",
          ],
        },
      ],
      keypoints2: [
        {
          name: "SRC - Anti-Theft Control Service",
          subItems: [
            "Unique identification of apiary, hive, frame",
            "Real-time tracking",
            "Immediate notification of device absence",
            "Transhumance control",
          ],
        },
        {
          name: "CS - Sanitary Control",
          subItems: [
            "Health control plan",
            "Immutable record of health intervention per hive",
            "Georeferencing of health checks",
            "Reports",
            "Data analysis and visualization",
          ],
        },
        {
          name: "SCAM - Honey Adulteration Control Service",
          subItems: [
            "Immutable record of production process",
            "Immutable record of export process",
            "Control report",
            "Data analysis and visualization",
          ],
        },
      ],
    },
    {
      title: "Eggstimation",
      category: "Agriculture",
      description:
        "A low-cost mobile application for automating the measurement of eggs, using photogrammetry to provide accurate indicators of size, weight and color.",
      image: "/assets/eggstimation.png",
      tags: ["Computer Vision", "Mobile App"],
      longDescription:
        "A low-cost mobile application for automating the measurement of eggs, using photogrammetry to provide accurate indicators of size, weight and color.",
      keypoints1: [
        {
          name: "Indicators of size",
          subItems: [],
        },
        {
          name: "Indicators of weight",
          subItems: [],
        },
        {
          name: "Indicators of color",
          subItems: [],
        },
      ],
      keypoints2: [],
    },
    {
      title: "Sewing Leap",
      category: "Industry",
      description:
        "An innovative automatic production management system for garment factories, featuring Edge AI for sewing pattern and cycle characterization, automatic garment classification, production time forecasting, preventive maintenance, and integration with third-party management platforms – a simple and scalable solution.",
      image: "/assets/sewing_leap.png",
      tags: ["AI", "Hardware"],
      longDescription:
        "An innovative automatic production management system for garment factories, featuring Edge AI for sewing pattern and cycle characterization, automatic garment classification, production time forecasting, preventive maintenance, and integration with third-party management platforms – a simple and scalable solution.",
      keypoints1: [
        {
          name: "Edge AI, artificial intelligence in the device, for characterizing sewing patterns and cycles",
          subItems: [],
        },
        {
          name: "Automatic classification of garments to be sewn",
          subItems: [],
        },
        {
          name: "Production time forecasting",
          subItems: [],
        },
      ],
      keypoints2: [
        {
          name: "Preventive maintenance",
          subItems: [],
        },
        {
          name: "Simple and scalable",
          subItems: [],
        },
        {
          name: "Integration with 3rd-party management platforms",
          subItems: [],
        },
      ],
    },
    {
      title: "Guardian",
      category: "Agriculture",
      description:
        "A cutting-edge animal management and real-time monitoring system featuring LTE-M/NB-IoT for optimized coverage, ultra-efficient energy consumption with integrated solar charging, and virtual fences for precise pasture control. It enables continuous health monitoring through biometric data collection and Edge AI for activity tracking and reproductive cycle prediction. With GPS-based georeferencing, it provides insights into grazing behavior while ensuring ecological balance and sustainability.",
      image: "/assets/guardian_logo.png",
      tags: [
        "LTE-M/NB-IoT",
        "Georeferencing",
        "Virtual Fences",
        "Mobile App",
        "AI",
      ],
      longDescription:
        "A cutting-edge animal management and real-time monitoring system featuring LTE-M/NB-IoT for optimized coverage, ultra-efficient energy consumption with integrated solar charging, and virtual fences for precise pasture control. It enables continuous health monitoring through biometric data collection and Edge AI for activity tracking and reproductive cycle prediction. With GPS-based georeferencing, it provides insights into grazing behavior while ensuring ecological balance and sustainability.",
      keypoints1: [
        {
          name: "Technology",
          subItems: [
            "LTE-M/NB-IoT: optimized coverage",
            "Ultra-efficient energy consumption (6 months guaranteed)",
            "Solar energy collection integrated into the collar",
          ],
        },
        {
          name: "Virtual fences",
          subItems: [
            "Demarcation of pasture areas, personalized and customizable",
            "Control of grazing areas and wasteland management",
            "Ecological balance and sustainability of natural resources",
            "Immediate notifications whether the animal leaves or enters the defined fence",
            "Diet control and monitoring of preferred grazing areas",
          ],
        },
      ],
      keypoints2: [
        {
          name: "Continuous monitoring of the animal's health",
          subItems: [
            "Collection of biometric data",
            "Edge AI, Artificial Intelligence algorithms integrated into the device to record the animal's activity",
            "Predicting reproductive cycles",
          ],
        },
        {
          name: "Georeferencing",
          subItems: [
            "GPS tracking",
            "Perception of preferred grazing areas chosen by the animal",
            "Parameterized collection intervals",
          ],
        },
      ],
    },
    {
      title: "Yu'muv",
      category: "Health",
      description:
        "We integrate small, modular, and scalable sensor kits into wheelchairs to minimize the risk of serious health issues caused by prolonged pressure on the body. Compatible with various manual and electric wheelchair types, our system supports multiple movements like tilting, reclining, and lifting. A modern Android and iOS app ensures seamless user experience with automatic data synchronization, even for those with limited smartphone access. Featuring BLE5 communication and Edge AI on sensors, our solution enhances classification accuracy while reducing data volume for efficient real-time monitoring.",
      image: "/assets/yumuv.png",
      tags: ["Wearable", "BLE", "Hardware", "Software", "Real-Time"],
      longDescription:
        "We integrate small, modular, and scalable sensor kits into wheelchairs to minimize the risk of serious health issues caused by prolonged pressure on the body. Compatible with various manual and electric wheelchair types, our system supports multiple movements like tilting, reclining, and lifting. A modern Android and iOS app ensures seamless user experience with automatic data synchronization, even for those with limited smartphone access. Featuring BLE5 communication and Edge AI on sensors, our solution enhances classification accuracy while reducing data volume for efficient real-time monitoring.",
      keypoints1: [
        {
          name: "Universal, modular and scalable sensor kit",
          subItems: [
            "Can be used on various types of wheelchairs, electric or manual, which perform one or more movements (tilting, reclining, lifting, among others).",
          ],
        },
        {
          name: "Android and iOS app",
          subItems: [
            "Modern mobile application, with support for Android and iOS and periodic and automatic data synchronization, to facilitate registration for users who have difficulties or are unable to use a smartphone.",
          ],
        },
        {
          name: "BLE5",
          subItems: ["BLE communication between smartphone and sensors."],
        },
        {
          name: "Edge AI",
          subItems: [
            "Edge AI implemented directly on sensors to improve classification and reduce data volume.",
          ],
        },
      ],
      keypoints2: [],
    },
    {
      title: "Sentinel",
      category: "Health",
      description:
        "Wearable devices for seamless indoor and outdoor movement and location tracking. With continuous monitoring, instant notifications are sent to a computer or smartphone whenever the device exits a predefined area, ensuring real-time awareness and security.",
      image: "/assets/sentinel.png",
      tags: ["Hardware", "Software", "Real-Time", "Wearable"],
      longDescription:
        "Wearable devices for seamless indoor and outdoor movement and location tracking. With continuous monitoring, instant notifications are sent to a computer or smartphone whenever the device exits a predefined area, ensuring real-time awareness and security.",
      keypoints1: [],
      keypoints2: [],
    },
    {
      title: "No Isolation",
      category: "Health",
      description:
        "A one-click solution for instant video calls on any TV or smartphone, enabling seamless communication. Automatically sends alerts if the operator falls and initiates emergency calls for rapid response.",
      image: "/assets/no_isolation.png",
      tags: ["Hardware", "Software"],
      longDescription:
        "A one-click solution for instant video calls on any TV or smartphone, enabling seamless communication. Automatically sends alerts if the operator falls and initiates emergency calls for rapid response.",
      keypoints1: [
        {
          name: "Send warnings if the operator goes down",
          subItems: [],
        },
      ],
      keypoints2: [
        {
          name: "Make emergency calls automatically.",
          subItems: [],
        },
      ],
    },
    {
      title: "Follow Me",
      category: "Heatlh",
      description:
        "With this system, electric wheelchair users who can move on their own two feet can gain better daily habits by maximizing the time they can move without the chair, knowing that whenever they feel tired and need to rest, the chair will be close by.",
      image: "/assets/followme_logo.png",
      tags: ["AI", "Hardware", "Software"],
      longDescription:
        "With this system, electric wheelchair users who can move on their own two feet can gain better daily habits by maximizing the time they can move without the chair, knowing that whenever they feel tired and need to rest, the chair will be close by.",
      keypoints1: [],
      keypoints2: [],
    },
    {
      title: "Blink Eyes",
      category: "Heatlh",
      description:
        "Driving an electric wheelchair with just the blink of an eye.\nWe have created the possibility of driving an electric wheelchair with just the blink of an eye.",
      image: "/assets/blinkeyes_logo-2.png",
      tags: ["AI", "Hardware", "Software"],
      longDescription:
        "Driving an electric wheelchair with just the blink of an eye.\nWe have created the possibility of driving an electric wheelchair with just the blink of an eye.",
      keypoints1: [],
      keypoints2: [],
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Digital grid background */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-[0.07] -z-10 "></div>

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

      <div
        className="container-padding mx-auto relative z-10 portfolio-container"
        id="portfolio"
      >
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-sm font-medium text-indigo-400 mb-4 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 inline-block mr-1.5" />
            Our Portfolio
          </div>
          <h2 className="heading-lg max-w-3xl mx-auto text-white">
            Innovative{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">
              solutions
            </span>{" "}
            developed
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
              <div className="relative overflow-hidden aspect-[4/3] portfolio-image-section flex justify-center items-center">
                {project.title == "Eggstimation" ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" transition-all duration-700 ease-in-out portfolio-image three-quarter-size "
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" transition-all duration-700 ease-in-out portfolio-image "
                  />
                )}

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
                  </div>
                  <DialogDescription className="text-indigo-300 mt-1">
                    {selectedProject.category} project
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-6">
                  <div className="aspect-video rounded-lg overflow-hidden border border-indigo-500/20 shadow-lg  flex justify-center items-center portfolio-image-section">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="object-cover"
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
                      <h3 className="text-lg font-semibold text-white"></h3>

                      <ul className="space-y-3">
                        {selectedProject.keypoints1.map((feature, index) => (
                          <li key={index} className="space-y-2">
                            {feature.subItems.length > 0 ? (
                              <div className="flex items-center">
                                <span className="text-blue-100 font-medium">
                                  {feature.name}
                                </span>
                              </div>
                            ) : (
                              <li key={index} className="flex items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 mr-2"></div>
                                <span className="text-blue-100/80">
                                  {feature.name}
                                </span>
                              </li>
                            )}

                            {feature.subItems.length > 0 ? (
                              <ul className="pl-6 space-y-1 mt-1">
                                {feature.subItems.map((subItem, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="flex items-start text-sm"
                                  >
                                    <div className="h-1 w-1 rounded-full bg-indigo-400/60 mt-2 mr-2"></div>
                                    <span className="text-blue-100/70">
                                      {subItem}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div></div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white"></h3>
                      <ul className="space-y-2">
                        {selectedProject.keypoints2.map((feature, index) => (
                          <li key={index} className="space-y-2">
                            {feature.subItems.length > 0 ? (
                              <div className="flex items-center">
                                <span className="text-blue-100 font-medium">
                                  {feature.name}
                                </span>
                              </div>
                            ) : (
                              <li key={index} className="flex items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 mr-2"></div>
                                <span className="text-blue-100/80">
                                  {feature.name}
                                </span>
                              </li>
                            )}

                            {feature.subItems.length > 0 ? (
                              <ul className="pl-6 space-y-1 mt-1">
                                {feature.subItems.map((subItem, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="flex items-start text-sm"
                                  >
                                    <div className="h-1 w-1 rounded-full bg-indigo-400/60 mt-2 mr-2"></div>
                                    <span className="text-blue-100/70">
                                      {subItem}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div></div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
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
