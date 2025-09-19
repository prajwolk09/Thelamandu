// import React from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { MapPin, Phone, Clock, Mail } from 'lucide-react';

// export const ContactSection: React.FC = () => {
//   return (
//     <section id="contact" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="heading-display text-4xl md:text-5xl mb-6">
//             Visit <span className="text-gold-primary">Thelamandu</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Come experience authentic Nepali hospitality. We're here to serve you the best of Nepal.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <Card className="glass-dark p-6 hover-lift">
//               <div className="flex items-start gap-4">
//                 <MapPin className="text-gold-primary mt-1" size={24} />
//                 <div>
//                   <h3 className="heading-primary text-xl mb-2">Location</h3>
//                   <p className="text-muted-foreground">
//                     #######<br />
//                     #######<br />
//                     #######
//                   </p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="glass-dark p-6 hover-lift">
//               <div className="flex items-start gap-4">
//                 <Phone className="text-gold-primary mt-1" size={24} />
//                 <div>
//                   <h3 className="heading-primary text-xl mb-2">Phone</h3>
//                   <p className="text-muted-foreground">
//                     (999) 9999999999<br />
//                     (999) 9999999999
//                   </p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="glass-dark p-6 hover-lift">
//               <div className="flex items-start gap-4">
//                 <Mail className="text-gold-primary mt-1" size={24} />
//                 <div>
//                   <h3 className="heading-primary text-xl mb-2">Email</h3>
//                   <p className="text-muted-foreground">
//                     info@thelamandu.com<br />
//                     orders@thelamandu.com
//                   </p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="glass-dark p-6 hover-lift">
//               <div className="flex items-start gap-4">
//                 <Clock className="text-gold-primary mt-1" size={24} />
//                 <div>
//                   <h3 className="heading-primary text-xl mb-2">Hours</h3>
//                   <div className="text-muted-foreground space-y-1">
//                     <p><strong>Monday - Thursday:</strong> 11:00 AM - 9:00 PM</p>
//                     <p><strong>Friday - Saturday:</strong> 11:00 AM - 10:00 PM</p>
//                     <p><strong>Sunday:</strong> 12:00 PM - 8:00 PM</p>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Map & Actions */}

//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-display text-4xl md:text-5xl mb-6">
            Visit <span className="text-gold-primary">Thelamandu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Come experience authentic Nepali hospitality. We're here to serve
            you the best of Nepal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-dark p-6 hover-lift">
              {" "}
              <div className="flex items-start gap-4">
                <MapPin className="text-gold-primary mt-1" size={24} />{" "}
                <div>
                  <h3 className="heading-primary text-xl mb-2">Location</h3>{" "}
                  <p className="text-muted-foreground">
                    #######
                    <br />
                    #######
                    <br />
                    #######{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </Card>

            <Card className="glass-dark p-6 hover-lift">
              {" "}
              <div className="flex items-start gap-4">
                <Phone className="text-gold-primary mt-1" size={24} />{" "}
                <div>
                  <h3 className="heading-primary text-xl mb-2">Phone</h3>
                  {" "}
                  <p className="text-muted-foreground space-y-1">
                    <a href="tel:+9999999999" className="hover:underline block">
                      (999) 9999999999
                    </a>
                    <a href="tel:+9888888888" className="hover:underline block">
                      (988) 8888888888
                    </a>
                  </p>
                  {" "}
                </div>{" "}
              </div>{" "}
            </Card>

            <Card className="glass-dark p-6 hover-lift">
              <div className="flex items-start gap-4">
                <Mail className="text-gold-primary mt-1" size={24} />
                <div>
                  <h3 className="heading-primary text-xl mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@thelamandu.com" className="hover:underline block">
                      info@thelamandu.com
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-dark p-6 hover-lift">
              <div className="flex items-start gap-4">
                <Clock className="text-gold-primary mt-1" size={24} />
                <div>
                  <h3 className="heading-primary text-xl mb-2">Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>
                      <strong>Monday - Thursday:</strong> 11:00 AM - 9:00 PM
                    </p>
                    <p>
                      <strong>Friday - Saturday:</strong> 11:00 AM - 10:00 PM
                    </p>
                    <p>
                      <strong>Sunday:</strong> 12:00 PM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Map Section */}
          <Card className="glass-dark p-8 h-full">
            <div className="h-full min-h-[600px] bg-gradient-dark rounded-lg border-2 border-dashed border-gold-primary/30 p-4">
              <iframe
                title="Thelamandu Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2172061941786!2d85.3123292150616!3d27.70414798279198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fc1741ad1f%3A0x4db6c5f6c826d80f!2sKathmandu%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1695058653253!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg w-full h-full"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
