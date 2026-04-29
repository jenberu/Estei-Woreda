import { useEffect } from "react";
import { createPortal } from "react-dom";

const TextReaderModal = ({ isOpen, onClose, title, content }) => {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-3xl mx-4 rounded-xl shadow-lg flex flex-col max-h-[80vh]"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 cursor-pointer hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <p className="text-body leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default TextReaderModal;
