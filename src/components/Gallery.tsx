import type * as Stitches from "@stitches/react";
import React, { useState } from "react";
import { Card } from "./Card";
import { Img } from "./Img";
import { Video } from "./Video";
import { Modal } from "./Modal";
import { SGridItem, SelectedImg } from "./Gallery.S";

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
    <>
      <Modal isOpen={!!selected} onOpenChange={handleModal}>
        <SelectedImg>
          {selected?.video ? (
            <Video src={`/images/${selected?.video}`} />
          ) : (
            <Img src={`/images/${selected?.src}`} title={selected?.alt} />
          )}
        </SelectedImg>
      </Modal>
      <Card>
        {images.map(({ size, src, float, video, alt }) => (
          <SGridItem size={size} float={float}>
            <Img
              className="image"
              key={src}
              src={`/images/${src}`}
              title={alt}
              alt={alt}
              onClick={() => {
                setSelected({ src, video, alt });
              }}
            />
          </SGridItem>
        ))}
      </Card>
    </>
  );
};
