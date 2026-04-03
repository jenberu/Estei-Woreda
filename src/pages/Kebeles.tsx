import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { KebeleMap } from '../components/KebeleMap';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Landmark, UserCheck, MapPin, Globe, ShieldCheck, Heart } from 'lucide-react';

const kebeleData = [
  {
    name: "Estie Town (Andabet)",
    population: "35,000",
    landmarks: "Andabet Grand Mosque, St. Michael Church",
    personalities: "Lij Iyasu (Historical significance)",
  },
  {
    name: "Gumayde",
    population: "12,400",
    landmarks: "Ancient Rock Formations",
    personalities: "Local Community Leaders",
  },
  {
    name: "Debre Tsehay",
    population: "8,900",
    landmarks: "Mountain Monastery",
    personalities: "Spiritual Scholars",
  },
  {
    name: "Mekit",
    population: "15,200",
    landmarks: "Traditional Irrigation Systems",
    personalities: "Agricultural Innovators",
  }
];

export const Kebeles: React.FC = () => {
  const { t } = useLanguage();

  const demoStats = [
    { label: t.kebeles.totalPopulation, value: "403,956", icon: Users },
    { label: t.kebeles.men, value: "199,325", icon: UserCheck },
    { label: t.kebeles.women, value: "204,631", icon: Heart },
    { label: t.kebeles.urbanDwellers, value: "16,014 (3.96%)", icon: MapPin },
    { label: t.kebeles.density, value: "170.6 / km²", icon: Globe },
    { label: t.kebeles.ethnicity, value: "99.98%", icon: ShieldCheck },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.kebeles.title}</h1>
          <p className="text-gray-600 text-lg max-w-2xl">{t.kebeles.subtitle}</p>
        </header>

        {/* Demographics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
             <Users className="h-6 w-6" />
             {t.kebeles.demographicsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {demoStats.map((stat, idx) => (
              <Card key={idx} className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-lg">2005 CSA Estimates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{t.kebeles.stats2005}</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="text-lg">1994 National Census</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{t.kebeles.stats1994}</p>
                <div className="mt-4 flex gap-4 text-sm font-medium">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded">Amharic: 99.98%</span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded">Orthodox: 96.53%</span>
                  <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded">Muslim: 3.45%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mb-8">
            <TabsTrigger value="map">{t.kebeles.mapView}</TabsTrigger>
            <TabsTrigger value="list">{t.kebeles.listView}</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="space-y-4">
            <div className="bg-white p-2 rounded-xl border">
               <KebeleMap />
            </div>
            <p className="text-sm text-gray-400 text-center italic">Tip: Click markers to see Kebele info</p>
          </TabsContent>

          <TabsContent value="list">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kebeleData.map((kebele, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{kebele.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-gray-400 mt-1 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase">{t.kebeles.population}</p>
                          <p className="text-gray-800">{kebele.population}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Landmark className="h-5 w-5 text-gray-400 mt-1 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase">{t.kebeles.landmarks}</p>
                          <p className="text-gray-800">{kebele.landmarks}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <UserCheck className="h-5 w-5 text-gray-400 mt-1 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase">{t.kebeles.personalities}</p>
                          <p className="text-gray-800">{kebele.personalities}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};