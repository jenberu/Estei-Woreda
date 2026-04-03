import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, ShieldCheck, Users } from "lucide-react";
import HeriImage from "../assets/images/hero-image.png";
import MerkoriwosImage from "../assets/images/merkoriwos.png";
import AsplatImage from "../assets/images/aspalt.png";

export const newsData = [
  {
    id: 1,
    title: "Sustainable Agriculture Initiative in Estie",
    description:
      "The woreda administration launched a new program to support highland honey producers and improve productivity.",
    category: "Updates",
    date: "June 11, 2024",
    image: MerkoriwosImage,
  },
  {
    id: 2,
    title: "እስቴ የአስፓልት መንገድ ግንባታ",
    description:
      "በአሁኑ ሰዓት 76.6 ኪ.ሜ የሚሸፍነዉ የሀሙሲት - እስቴ የአስፓልት መንገድ  የግንባታ ስራዉን   Ningxia communication construction Co. Ltd. በተባለ የቻይና የመንገድ ስራ ተቋራጭ ድርጅት   እንዲሁም የማማከርና የቁጥጥር ስራዉን ደግሞ ኬቲም እና አላሚ አማካሪ መሀንዲሶች ከኮር አማካሪ መሀንዲሶች የግል ኃላፊነቱ የተወሰነ ኩባንያ ጋር በመተባበር  የመንገድ ስራዉ እተከናወነ ይገኛል.",
    category: "Construction",
    date: "June 12, 2024",
    image: AsplatImage,
  },
  {
    id: 3,
    title: "Community Health Awareness Campaign",
    description:
      "Local health offices conducted awareness programs focusing on sanitation, nutrition, and disease prevention.",
    category: "Health",
    date: "June 13, 2024",
    image: MerkoriwosImage,
  },
  {
    id: 4,
    title: "Youth Skill Training Program",
    description:
      "A new initiative aims to equip young people with digital and vocational skills for employment opportunities.",
    category: "Education",
    date: "June 14, 2024",
    image: HeriImage,
  },
];
const defualtImage =
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a9ca11e1-32c4-4233-a42b-ee61197cba0d/estie-highlands-landscape-2224bfff-1775216260309.webp";

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeriImage || defualtImage}
            alt="Estie Highlands"
            className="w-full h-full object-cover brightness-[0.5]"
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/about">
              <Button
                size="lg"
                className="rounded-full px-8 cursor-pointer  py-6 text-lg"
              >
                {t.hero.explore} <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <Mountain className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Heritage</h3>
                <p className="text-gray-600">
                  Discover the ancient churches and historical significance of
                  the Estie region.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600">
                  Over 250,000 residents living in harmony across 30+ Kebeles.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <ShieldCheck className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Governance</h3>
                <p className="text-gray-600">
                  Efficient public services and administrative support for all
                  citizens.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured News Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">{t.news.latest}</h2>
            <Link
              to="/news"
              className="text-primary hover:underline flex items-center"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">
                    {item.category}
                  </span>

                  <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>{item.date}</span>
                    <span className="text-primary font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
