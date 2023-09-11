// import * as basicLightbox from 'basiclightbox';

export const ImageView = ({selectedImg, tags}) => {
  // const { selectedImg, tags } = this.props;
  return (
    <img src={selectedImg} alt={tags} />
    // basicLightbox.create(`<img src="${selectedImg}" width="800" height="600" alt="${tags}">`).show()
  )
};


