import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Map, Star } from 'lucide-react';

const gallery = [
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a9ca11e1-32c4-4233-a42b-ee61197cba0d/tourism-attraction-waterfall-30749e4b-1775216260236.webp",
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a9ca11e1-32c4-4233-a42b-ee61197cba0d/historical-landmark-fe5a97fd-1775216262086.webp",
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a9ca11e1-32c4-4233-a42b-ee61197cba0d/estie-highlands-landscape-2224bfff-1775216260309.webp",
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a9ca11e1-32c4-4233-a42b-ee61197cba0d/estie-market-culture-6f2d3356-1775216259516.webp",
  "https://images.unsplash.com/photo-1544085311-11a028465b0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
];

const attractions = [
  { name: "Densa Mountain", type: "Natural Heritage", stars: 5 },
  { name: "Hulete Petros Monastery", type: "Religious/Historic", stars: 5 },
  { name: "Gedame Eyesus Monastery", type: "Religious/Historic", stars: 5 },
  { name: "Wanqa Falls", type: "Natural Beauty", stars: 4 },
  { name: "Local Azmari Houses", type: "Cultural Experience", stars: 4 }
];

export const Tourism: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{t.tourism.title}</h1>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl">
          Estie is a treasure trove of undiscovered beauty, from the heights of Mount Densa to the ancient spiritual sites.
        </p>

        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Camera className="text-primary" />
            <h2 className="text-2xl font-bold">{t.tourism.gallery}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-xl overflow-hidden shadow-sm"
              >
                <img src={img} alt="Estie Gallery" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Map className="text-primary" />
              <h2 className="text-2xl font-bold">{t.tourism.attractions}</h2>
            </div>
            <div className="space-y-4">
              {attractions.map((attr, idx) => (
                <Card key={idx}>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">{attr.name}</h3>
                      <p className="text-sm text-gray-500">{attr.type}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(attr.stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold mb-6">{t.tourism.heritage}</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0 h-12 w-12 flex items-center justify-center font-bold text-primary">01</div>
                <div>
                  <h4 className="font-bold mb-1">Traditional Weaving</h4>
                  <p className="text-gray-600">Experience the craft of creating 'Gabi' and 'Netela' in the heart of local villages.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0 h-12 w-12 flex items-center justify-center font-bold text-primary">02</div>
                <div>
                  <h4 className="font-bold mb-1">Honey Festivals</h4>
                  <p className="text-gray-600">Celebrate the harvest of high-altitude white honey, a local delicacy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};