import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Stethoscope, GraduationCap, Sprout, Briefcase } from 'lucide-react';

export const PublicInfo: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.admin.health,
      icon: <Stethoscope className="h-8 w-8 text-red-500" />,
      description: "2 Main Hospitals and 12 Health Centers providing 24/7 care.",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a9ca11e1-32c4-4233-a42b-ee61197cba0d/public-health-service-4c7deca4-1775216260309.webp"
    },
    {
      title: t.admin.education,
      icon: <GraduationCap className="h-8 w-8 text-blue-500" />,
      description: "Over 45 primary schools and 4 secondary high schools.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: t.admin.agriculture,
      icon: <Sprout className="h-8 w-8 text-green-500" />,
      description: "Extension services for crop production and livestock management.",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a9ca11e1-32c4-4233-a42b-ee61197cba0d/agricultural-terraces-0a4fd3d4-1775216260238.webp"
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">{t.admin.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Building2 className="text-primary" /> {t.admin.offices}
            </h2>
            <div className="space-y-4">
              {['Woreda Administration Office', 'Justice Office', 'Education Office', 'Agriculture & Natural Resources'].map((office, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary flex justify-between items-center">
                   <span className="font-medium">{office}</span>
                   <Briefcase className="h-5 w-5 text-gray-300" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              alt="Administration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">{t.admin.services}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="overflow-hidden hover:translate-y-[-5px] transition-transform duration-300">
              <div className="h-40 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};