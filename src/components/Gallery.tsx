import type * as Stitches from "@stitches/react";
import React, { useState } from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";
import {
  SGridItem,
  SGridItemImage,
  SModalVideo,
  SModalImage,
} from "./Gallery.S";

type TImage = {
  src: string;
  alt: string;
  video?: string;
} & Stitches.VariantProps<typeof SGridItem>;

export type TGalleryProps = {
  images: Array<TImage>;
};

export const Gallery = ({ images }: TGalleryProps) => {
  const [selected, setSelected] = useState<TImage | undefined>(undefined);

  const handleModal = (value: boolean) => {
    if (value === false) setSelected(undefined);
  };

  return (
    <Card>
      <Modal isOpen={!!selected} onOpenChange={handleModal}>
        {selected?.video ? (
          <SModalVideo src={`/images/${selected?.video}`} />
        ) : (
          <SModalImage
            src={`/images/${selected?.src}`}
            title={selected?.alt}
            style={{ objectFit: "contain" }}
          />
        )}
      </Modal>

      {images.map(({ size, src, float, video, alt }) => (
        <SGridItem size={size} float={float}>
          <SGridItemImage
            className="image"
            key={src}
            src={`/images/${src}`}
            title={alt}
            alt={alt}
            onClick={() => {
              setSelected({ size, src, float, video, alt });
            }}
          />
        </SGridItem>
      ))}
    </Card>
  );
};
