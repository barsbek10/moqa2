import { markdownify } from "@/lib/utils/textConverter";
import React, { useEffect, useState } from "react";

const ImageGallery = ({
  images,
}: {
  images: {
    image: string;
    description?: string;
    width?: number;
  }[];
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        setTimeout(() => setSelectedImage(null), 300);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const openImage = (img: string) => {
    setSelectedImage(img);
    // console.log("openImage", img)
    setTimeout(() => setIsOpen(true), 10);
  };

  const closeImage = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      // console.log("closeImage")
      setTimeout(() => setSelectedImage(null), 300);
    }
  };

  return (
    <>
      <div className="row g-4 justify-center items-center">
        {images.map((img, i: number) => {

          // console.log(img);
          return (
          <div
            key={i}
            className={`col-12 md:col-${img.width ?? 4} group relative overflow-hidden cursor-pointer`}
            onClick={() => openImage(img.image)}>
            <img
              src={img.image}
              alt={img.description || "Image"}
              width={635}
              height={433}
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] flex items-center justify-between ">
              {img.description && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: markdownify(img.description),
                  }}
                  className="bg-text-gallery-back/50 px-3 py-2 text-base rounded-2xl text-text-gallery-photo"
                />
              )}
              <div className="bg-text-gallery-back/50 px-3 py-2 rounded-2xl
                transition-all duration-300 hover:scale-110 hover:bg-text-gallery-back/70 ">
                <svg
                  className="w-6 h-6 rotate-45 text-base text-text-gallery-photo inline-block"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z" />
                </svg>
              </div>
            </div>
          </div>
        )})}
      </div>

      {/* Floating Image Viewer */}
      {selectedImage && (
        <div className={`overlay ${isOpen ? "open" : ""}`} onClick={closeImage}>
          <img
            src={selectedImage}
            alt="Preview"
            className={`floating-image ${isOpen ? "open" : ""}`}
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
