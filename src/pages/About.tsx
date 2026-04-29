import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Separator } from "@/components/ui/separator";
import DesenaImage from "../assets/images/densa.png";
import KomaFasileImage from "../assets/images/KomaFasil.png";
import HuletePerosImage from "../assets/images/hulete.png";
import Hero2Image from "../assets/images/hero2.png";
import clulturalImage from "../assets/images/culturalImage.png";
import MekaneyesusIage from "../assets/images/mekane-eyesus.png";
import TextReaderModal from "@/components/modals/TextReaderModal";

const defualtImage =
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a9ca11e1-32c4-4233-a42b-ee61197cba0d/estie-densa-mountain-and-rivers-ac034d3c-1775216922948.webp";

export const About: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const sections = [
    {
      title: t.about.overviewTitle,
      text: t.about.overviewText,
      img: DesenaImage || defualtImage,
    },
    {
      title: t.about.bridgeTitle,
      text: t.about.bridgeText,
      img: KomaFasileImage,
    },
    {
      title: t.about.mekaneEyesusChurchTitle,
      text: t.about.mekaneEyesusChurchText,
      img: MekaneyesusIage,
    },

    {
      title: t.about.huletepetrosTitle,
      text: t.about.huletepetrosText,
      img: HuletePerosImage,
    },
    {
      title: t.about.history,
      text: t.about.historyText,
      img: Hero2Image,
    },

    {
      title: t.about.culture,
      text: t.about.cultureText,
      img: clulturalImage,
    },
    {
      title: t.about.economy,
      text: t.about.economyText,
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a9ca11e1-32c4-4233-a42b-ee61197cba0d/agricultural-terraces-0a4fd3d4-1775216260238.webp",
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-gray-600 italic">
            "A bridge between tradition and the future."
          </p>
        </motion.div>

        <div className="space-y-24">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  {section.title}
                </h2>
                <Separator className="w-20 mb-6 h-1 bg-primary" />
                <p className="text-lg leading-relaxed line-clamp-10 whitespace-break-spaces text-gray-700">
                  {section.text}
                </p>
                {section.text && section.text.length > 500 && (
                  <button
                    onClick={() => {
                      setModalContent({
                        title: section.title,
                        content: section.text,
                      });
                      setModalOpen(true);
                    }}
                    className="mt-4 text-sm text-primary hover:underline"
                  >
                    Read More
                  </button>
                )}
              </div>
              <div className="flex-1 w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={section.img}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <TextReaderModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={modalContent.title}
          content={modalContent.content}
        />
      )}
    </div>
  );
};
