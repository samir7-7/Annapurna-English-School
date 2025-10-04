// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://travelmasterthailand.com/send", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         toast({
//           title: "Message Sent!",
//           description:
//             "Thank you for contacting us. We'll get back to you soon.",
//         });
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         toast({
//           title: "Error",
//           description: "Something went wrong. Please try again later.",
//           variant: "destructive",
//         });
//       }
//     } catch (err) {
//       toast({
//         title: "Error",
//         description: "Could not send your message. Try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1">
//         {/* Page Header */}
//         <section className="bg-primary py-16">
//           <div className="container mx-auto px-4">
//             <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
//               Contact Us
//             </h1>
//           </div>
//         </section>

//         {/* Contact Content */}
//         <section className="py-16">
//           <div className="container mx-auto px-4">
//             <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//               {/* Contact Form */}
//               <div>
//                 <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
//                 <p className="text-muted-foreground mb-8">
//                   Have questions or need more information? Fill out the form
//                   below and we'll get back to you as soon as possible.
//                 </p>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium mb-2"
//                     >
//                       Full Name *
//                     </label>
//                     <Input
//                       id="name"
//                       value={formData.name}
//                       onChange={(e) =>
//                         setFormData({ ...formData, name: e.target.value })
//                       }
//                       required
//                       placeholder="Enter your name"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium mb-2"
//                     >
//                       Email Address *
//                     </label>
//                     <Input
//                       id="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       required
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="phone"
//                       className="block text-sm font-medium mb-2"
//                     >
//                       Phone Number
//                     </label>
//                     <Input
//                       id="phone"
//                       type="tel"
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                       placeholder="+977-XXXXXXXXXX"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-medium mb-2"
//                     >
//                       Message *
//                     </label>
//                     <Textarea
//                       id="message"
//                       value={formData.message}
//                       onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                       }
//                       required
//                       placeholder="How can we help you?"
//                       rows={5}
//                     />
//                   </div>
//                   <Button
//                     type="submit"
//                     variant="default"
//                     size="lg"
//                     className="w-full"
//                   >
//                     Send Message
//                   </Button>
//                 </form>
//               </div>

//               {/* Contact Information */}
//               <div>
//                 <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm">
//                     <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="font-semibold mb-1">Address</h3>
//                       <p className="text-muted-foreground">
//                         Ratuwamai-9, Morang
//                         <br />
//                         Nepal
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm">
//                     <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="font-semibold mb-1">Phone</h3>
//                       <p className="text-muted-foreground">
//                         +977-23-570142
//                         <br />
//                         +977-23-571572
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm">
//                     <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="font-semibold mb-1">Email</h3>
//                       <p className="text-muted-foreground">
//                         annapurnaenglishschool@gmail.com
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm">
//                     <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="font-semibold mb-1">Office Hours</h3>
//                       <p className="text-muted-foreground">
//                         Sunday - Friday: 7:00 AM - 4:00 PM
//                         <br />
//                         Saturday: Closed
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Map */}
//                 <div className="mt-8">
//                   <h3 className="font-semibold mb-4">Location Map</h3>
//                   <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
//                     {/* <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.643392804815!2d87.287!3d26.661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e59a9b6d9a4a4d%3A0xb54ef51cf9d8e6b9!2sAnnapurna%20English%20School%2C%20Itahara!5e0!3m2!1sen!2snp!4v1696249553020!5m2!1sen!2snp"
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen={true}
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       title="Annapurna English School Location"
//                     /> */}
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d14575.92866099738!2d87.6140317!3d26.542859212868837!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39e5867e0f4716f7%3A0x4ee6f1fe8a894023!2z4KSF4KSo4KWN4KSo4KSq4KWC4KSw4KWN4KSjIOCkheCkguCkl-CljeCksOClh-CknOClgCDgpLjgpY3gpJXgpYLgpLIgR0pSNytSSjcgSXRhaGFyYSA1NjYwMA!3m2!1d26.542058599999997!2d87.6140317!5e0!3m2!1sen!2snp!4v1759326378747!5m2!1sen!2snp"
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen={true}
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       title="Annapurna English School Location"
//                     ></iframe>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // ✅ use relative API route instead of hardcoded domain
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for contacting us. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Could not send your message. Try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
              Contact Us
            </h1>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions or need more information? Fill out the form
                  below and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+977-XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      placeholder="How can we help you?"
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Ratuwamai-9, Morang
                        <br />
                        Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        +977-23-570142
                        <br />
                        +977-23-571572
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        annapurnaenglishschool@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Sunday - Friday: 7:00 AM - 4:00 PM
                        <br />
                        Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Location Map</h3>
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d14575.92866099738!2d87.6140317!3d26.542859212868837!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39e5867e0f4716f7%3A0x4ee6f1fe8a894023!2z4KSF4KSo4KWN4KSo4KSq4KWC4KSw4KWN4KSjIOCkheCkguCkl-CljeCksOClh-CknOClgCDgpLjgpY3gpJXgpYLgpLIgR0pSNytSSjcgSXRhaGFyYSA1NjYwMA!3m2!1d26.542058599999997!2d87.6140317!5e0!3m2!1sen!2snp!4v1759326378747!5m2!1sen!2snp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Annapurna English School Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
