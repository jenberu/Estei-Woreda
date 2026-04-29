import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mountain,
  ShieldCheck,
  Users,
  Heart,
} from "lucide-react";
import HeriImage from "../assets/images/hero-image.png";
import MerkoriwosImage from "../assets/images/merkoriwos.png";
import AsplatImage from "../assets/images/aspalt.png";
import TimqetImage from "../assets/images/timiqet.png";

export const newsData = [
  {
    id: 1,
    title: "በእስቴ መካነ ኢየሱስ የቅዱስ መርቆሬዎስ በዓል አከባበር",
    description:
      "የቅዱስ መርቆሬዎስ ዓመታዊ ክብረ በዓል በደብረ ታቦር እና በእስቴ መካነ ኢየሱስ ከተሞች በድምቀት ይከበራል። በዓሉ በታላቅ ሃይማኖታዊ ሥርዓት የሚፈጸም፣ ባሕላዊ ክዋኔዎችም የሚበዙበት ነው። .",
    category: "Updates",
    date: "Feb 04, 2026",
    image: MerkoriwosImage,
  },
  {
    id: 2,
    title: "እስቴ የአስፓልት መንገድ ግንባታ",
    description:
      "በአሁኑ ሰዓት 76.6 ኪ.ሜ የሚሸፍነዉ የሀሙሲት - እስቴ የአስፓልት መንገድ  የግንባታ ስራዉን   Ningxia communication construction Co. Ltd. በተባለ የቻይና የመንገድ ስራ ተቋራጭ ድርጅት   እንዲሁም የማማከርና የቁጥጥር ስራዉን ደግሞ ኬቲም እና አላሚ አማካሪ መሀንዲሶች ከኮር አማካሪ መሀንዲሶች የግል ኃላፊነቱ የተወሰነ ኩባንያ ጋር በመተባበር  የመንገድ ስራዉ እተከናወነ ይገኛል.",
    category: "Construction",
    date: "Feb 12, 2026",
    image: AsplatImage,
  },
  {
    id: 3,
    title: "ጥምቀት በእስቴ ወረዳ በመካነ-ኢየሱስ ከተማ በድምቀት ተከበረ",
    description:
      "በእስቴ መካነ ኢየሱስ የጥምቀት በዓል በደመቀ መልኩ ተከብሮ የዋለ ሲሆን ታቦታቱም ከማደሪያቸው ወደ መንበራቸው በሰላም ተመልሰዋል",
    category: "Religous",
    date: "Jan 19, 2026",
    image: TimqetImage,
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
              className="  flex flex-col sm:flex-row justify-center pt-6 items-center gap-4"

          >
            <Link to="/about">
              <Button
                size="lg"
                className="rounded-full px-8 cursor-pointer  py-6 text-lg"
              >
                {t.hero.explore} <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <a
              href="https://myportifolo.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-8 py-6 text-lg cursor-pointer"
              >
                Contact Developer
                <ArrowRight className="ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-10 bg-gray-50">
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
                  Over 250,000 residents living in harmony across 40+ Kebeles.
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
      {/* Peace Indicator Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Heart className="h-10 w-10 text-red-500 fill-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.homeExtras.peaceTitle}
            </h2>
            <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a9ca11e1-32c4-4233-a42b-ee61197cba0d/peace-indicator-88a057f3-1777453104283.webp"
                alt="Peace and Harmony in Estie"
                className="w-full h-auto object-cover max-h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6">
                <p className="text-white text-lg md:text-xl font-medium italic">
                  "{t.homeExtras.peaceCaption}"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News Preview */}
      <section className="py-10 bg-gray-50">
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
