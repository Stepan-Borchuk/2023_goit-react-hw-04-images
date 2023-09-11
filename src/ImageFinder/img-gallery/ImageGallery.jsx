import { ImgGallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = ({ images, selectedImg }) => {

  return (
    <ImgGallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          previewImg={webformatURL}
          tags={tags}
          selectedImg={() => selectedImg(largeImageURL, tags)}
        />
      ))}
    </ImgGallery>
  );
};


