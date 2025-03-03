import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "Hardware Design", href: "#services" },
      { label: "Software Development", href: "#services" },
      { label: "Data Analytics", href: "#services" },
      { label: "VR", href: "#services" },
    ],
    contact: [
      { label: "+1 (555) 123-4567", href: "tel:+15551234567" },
      {
        label: "hugo.lopes@linovt.com",
        href: "mailto:hugo.lopes@linovt.com",
      },
      {
        label: "Praça Dr Francisco Sá Carneiro, Nº 219 - 4º esq.",
        href: "#contact",
      },
      {
        label: "4200 - 313 Porto Portugal",
        href: "#contact",
      },
    ],
  };

  return (
    <footer className="bg-black border-t border-cyan-500/20 relative">
      {/* Digital grid background */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-[0.05] pointer-events-none"></div>

      <div className="container-padding mx-auto py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-display font-bold group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Smart
              </span>
              <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                Gadgets
              </span>
              <span className="relative ml-1 inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.7)]"></span>
            </Link>

            <p className="text-blue-100/60">
              Creating innovative smart products and software solutions that
              bridge the physical and digital worlds, enabling connected and
              intelligent experiences.
            </p>

            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900/30 border border-cyan-500/30 flex items-center justify-center text-blue-100/60 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900/30 border border-cyan-500/30 flex items-center justify-center text-blue-100/60 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900/30 border border-cyan-500/30 flex items-center justify-center text-blue-100/60 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-100/60 hover:text-cyan-400 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-100/60 hover:text-cyan-400 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              {links.contact.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-100/60 hover:text-cyan-400 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100/60 text-sm mb-4 md:mb-0">
              © {currentYear} SmartGadgets. All rights reserved.
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-blue-100/60 hover:text-cyan-400 transition-all duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-blue-100/60 hover:text-cyan-400 transition-all duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-blue-100/60 hover:text-cyan-400 transition-all duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
