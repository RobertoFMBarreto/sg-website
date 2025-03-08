import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, CheckCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      // Reset form
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-cyan-400" />,
      title: "Our Location",
      details:
        "Praça Dr Francisco Sá Carneiro, Nº 219 - 4º esq. 4200 - 313, Porto, Portugal",
    },
    {
      icon: <MapPin className="h-5 w-5 text-cyan-400" />,
      title: "Our Location",
      details:
        "Incubo, Rua da Feira - Passos, Nº 309, 4970-786, Viana do Castelo, Portugal",
    },
    {
      icon: <Phone className="h-5 w-5 text-cyan-400" />,
      title: "Phone Number",
      details: "+351 910 164 302",
    },
    {
      icon: <Mail className="h-5 w-5 text-cyan-400" />,
      title: "Email Address",
      details: "hugo.lopes@linovt.com",
    },
  ];

  return (
    <section id="contact" className="section-padding  relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-no-repeat bg-cover opacity-[0.07] -z-10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-cyan-400/30 blur-sm animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: `0 0 ${Math.random() * 8 + 3}px ${
                Math.random() * 2 + 1
              }px rgba(34, 211, 238, 0.5)`,
            }}
          ></div>
        ))}
      </div>

      <div className="container-padding mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-sm font-medium text-cyan-400 mb-4 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 inline-block mr-1.5" />
            Get In Touch
          </div>
          <h2 className="heading-lg max-w-3xl mx-auto text-white">
            Let's discuss your next{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              IoT project
            </span>
          </h2>
          <p className="text-blue-100/70 mt-4 max-w-2xl mx-auto">
            Have a question or want to explore how we can help bring your IoT
            vision to life? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="heading-sm text-white">Contact Information</h3>
              <p className="text-blue-100/70">
                Our team is ready to answer your questions and discuss how our
                IoT solutions can help your business.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/40 flex items-center justify-center flex-shrink-0 mt-1 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-blue-100/70">{item.details}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="bg-blue-900/20 backdrop-blur-md p-6 rounded-lg border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <h4 className="font-semibold mb-3 text-white">Office Hours</h4>
              <div className="space-y-2 text-blue-100/70">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div> */}
          </div>

          <div className="lg:col-span-3 animate-fade-in">
            <div className="bg-blue-900/20 backdrop-blur-md p-8 rounded-lg border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <h3 className="heading-sm mb-6 text-white">Send us a message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 text-cyan-400 border border-cyan-500/30">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Thank you!
                  </h4>
                  <p className="text-blue-100/70 max-w-md">
                    Your message has been sent successfully. We'll get back to
                    you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-white"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-blue-900/30 border-cyan-500/30 text-blue-100 placeholder:text-blue-300/40 focus:border-cyan-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-white"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-blue-900/30 border-cyan-500/30 text-blue-100 placeholder:text-blue-300/40 focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-white"
                    >
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full bg-blue-900/30 border-cyan-500/30 text-blue-100 placeholder:text-blue-300/40 focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] w-full bg-blue-900/30 border-cyan-500/30 text-blue-100 placeholder:text-blue-300/40 focus:border-cyan-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
