const { Item, Image } = require('./ImageGalleryItem.styled');

export const ImageGalleryItem = ({ previewImg, tag, selectedImg }) => {
  return (
    <Item>
      <Image src={previewImg} alt={tag} onClick={selectedImg} />
    </Item>
  );
};
