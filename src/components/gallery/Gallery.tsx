import { Box, styled } from "@mui/material";
import { ImageModal } from "./ImageModal";
import { GalleryItem } from "./GalleryItem";
import { useState, useEffect } from "react";
import { TextHead } from "../typography/TextHead";

const GalleryWrapperOld = styled(Box)(({ theme }) => ({
  WebkitColumnCount: 1,
  MozColumnCount: 1,
  columnCount: 1,
  [theme.breakpoints.up("md")]: {
    WebkitColumnCount: 2,
    MozColumnCount: 2,
    columnCount: 2,
  },
  [theme.breakpoints.up("lg")]: {
    WebkitColumnCount: 3,
    MozColumnCount: 3,
    columnCount: 3,
  },
}));

const GalleryWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: 16,
  gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
}));

export interface ImageProps {
  imgSrc: string;
  alt?: string;
  credit?: string;
}

export interface GalleryProps {
  title?: string;
  imgs: {
    imgSrc: string;
    credit?: string;
  }[];
}

export const Gallery = ({ title, imgs }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImg = (item: ImageProps) => {
    const index = imgs.findIndex((img) => img.imgSrc === item.imgSrc);
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevImage();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNextImage();
      } else if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, imgs.length]);

  const currentImage = imgs[currentImageIndex];

  return (
    <>
      <ImageModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imgSrc={currentImage.imgSrc}
        imgCredit={currentImage?.credit}
        onPrevious={goToPrevImage}
        onNext={goToNextImage}
        currentIndex={currentImageIndex}
        totalImages={imgs.length}
      />
      {title && <TextHead label={title} />}
      <GalleryWrapper>
        {imgs.map((item, index) => {
          return (
            <GalleryItem
              key={item.imgSrc}
              imgSrc={item.imgSrc}
              alt={`${title} – Gallery Image ${index + 1}`}
              onClick={() => openImg(item)}
            />
          );
        })}
      </GalleryWrapper>
    </>
  );
};
