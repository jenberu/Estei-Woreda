import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, MessageCircle, Share2 } from 'lucide-react';
import { toast } from 'sonner';

export const Community: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* News Section (Internal) */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-8">{t.news.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
               <h2 className="text-2xl font-bold mb-6 text-primary">{t.news.events}</h2>
               <div className="space-y-6">
                 {[
                   { date: "Oct 27", title: "Meskel Celebration", loc: "Town Square" },
                   { date: "Nov 12", title: "Agricultural Fair", loc: "Andabet Hall" },
                   { date: "Dec 05", title: "Health Awareness Day", loc: "District Clinic" }
                 ].map((ev, idx) => (
                    <div key={idx} className="flex gap-4 items-center">
                      <div className="bg-primary text-white p-2 rounded-lg text-center min-w-[60px]">
                        <span className="text-xs block uppercase">2024</span>
                        <span className="font-bold">{ev.date}</span>
                      </div>
                      <div>
                        <h4 className="font-bold">{ev.title}</h4>
                        <p className="text-sm text-gray-500">{ev.loc}</p>
                      </div>
                    </div>
                 ))}
               </div>
            </div>
            
            <div className="bg-primary/10 rounded-2xl p-8 flex items-center justify-center flex-col text-center">
              <Mail className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Subscribe to News</h2>
              <p className="text-gray-600 mb-6">Receive the latest updates from the Estie Woreda administration.</p>
              <div className="flex w-full max-w-sm gap-2">
                <Input placeholder="Enter your email" />
                <Button>Join</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">{t.contact.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>{t.contact.info}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full"><Phone className="text-primary" /></div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="font-medium">+251 58 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full"><Mail className="text-primary" /></div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium">contact@estieworeda.gov.et</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full"><MapPin className="text-primary" /></div>
                  <div>
                    <p className="text-xs text-gray-500">Address</p>
                    <p className="font-medium">Mekane Eyesus Town, Estie Woreda, Ethiopia</p>
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-sm font-bold mb-4 uppercase text-gray-400">Follow Us</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full"><MessageCircle className="h-5 w-5" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full"><Share2 className="h-5 w-5" /></Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.formName}</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.formEmail}</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.formMessage}</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" required />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> {t.contact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};