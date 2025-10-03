import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-5xl md:text-6xl mb-8 animate-vintage-glow">
            Visit <span className="text-pink-accent">Thelamandu</span>
          </h2>
          <p className="text-xl text-brown-medium max-w-3xl mx-auto">
            Come experience authentic Nepali hospitality. We're here to serve you the best of Nepal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-light p-6 hover-lift">
              <div className="flex items-start gap-4">
                <MapPin className="text-pink-accent mt-1" size={24} />
                <div>
                  <h3 className="heading-primary text-xl mb-2">Location</h3>
                  <p className="text-brown-medium">
                    Fairfax, Virginia, USA<br />
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-light p-6 hover-lift">
              <div className="flex items-start gap-4">
                <Phone className="text-pink-accent mt-1" size={24} />
                <div>
                  <h3 className="heading-primary text-xl mb-2">Phone</h3>
                  <p className="text-brown-medium space-y-1">
                    <a href="tel:+17035594493" className="block hover:underline">+1 (703) 559-4493</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-light p-6 hover-lift">
              <div className="flex items-start gap-4">
                <Mail className="text-pink-accent mt-1" size={24} />
                <div>
                  <h3 className="heading-primary text-xl mb-2">Email</h3>
                  <p className="text-brown-medium space-y-1">
                    <a href="mailto:info@thelamandu.com" className="block hover:underline">info@thelamandu.com</a>
                    {/* <a href="mailto:orders@thelamandu.com" className="block hover:underline">orders@thelamandu.com</a> */}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-light p-6 hover-lift">
              <div className="flex items-start gap-4">
                <Clock className="text-pink-accent mt-1" size={24} />
                <div>
                  <h3 className="heading-primary text-xl mb-2">Hours</h3>
                  <div className="text-brown-medium space-y-1">
                    <p><strong>Monday - Thursday:</strong> 11:00 AM - 9:00 PM</p>
                    <p><strong>Friday - Saturday:</strong> 11:00 AM - 10:00 PM</p>
                    <p><strong>Sunday:</strong> 12:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Map Section */}
          <Card className="glass-light p-8 h-full">
            <div className="h-full min-h-[600px] bg-gradient-warm rounded-lg border-2 border-dashed border-pink-accent/30 p-2">
              <iframe className='w-full h-full rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49714.171829549545!2d-77.34303755313435!3d38.85224976354697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e96394b91cd%3A0x72326e785448640!2sFairfax%2C%20VA%2C%20USA!5e0!3m2!1sen!2snp!4v1759508980997!5m2!1sen!2snp" width="600" height="450"  loading="lazy"></iframe>
            </div>

          </Card>
        </div>
      </div>
    </section>
  );
};