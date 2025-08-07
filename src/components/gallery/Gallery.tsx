import { Box, styled } from "@mui/material";
import { ImageModal } from "./ImageModal";
import { GalleryItem } from "./GalleryItem";
import { useState } from "react";
import { TextHead } from "../typography/TextHead";

const GalleryWrapper = styled(Box)(({ theme }) => ({
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

export interface ImageProps {
  imgSrc: string;
  alt?: string;
  credit?: string;
}

export interface GalleryProps {
  title?: string;
  imgs: {
    imgSrc: string;
    alt?: string;
    credit?: string;
  }[];
}

export const Gallery = ({ title, imgs }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [largeImage, setLargeImage] = useState<ImageProps>();

  const openImg = (item: ImageProps) => {
    setIsOpen(true);
    setLargeImage(item);
  };

  return (
    <>
      <ImageModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imgSrc={largeImage?.imgSrc}
        imgCredit={largeImage?.credit}
      />
      {title && <TextHead label={title} />}
      <GalleryWrapper>
        {imgs.map((item) => {
          return (
            <GalleryItem
              key={item.imgSrc}
              imgSrc={item.imgSrc}
              onClick={() => openImg(item)}
            />
          );
        })}
      </GalleryWrapper>
    </>
  );
};
