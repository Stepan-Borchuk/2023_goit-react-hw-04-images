import { Box } from './Box';
import SearchBar from 'ImageFinder/search/Searchbar';
import { Vortex } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import { ImageGallery } from 'ImageFinder/img-gallery/ImageGallery';
import fetchPictures from 'ImageFinder/services/fetchImg';
import LoadMoreButton from 'ImageFinder/loadMore/LoadMoreButton';
import Modal from 'ImageFinder/Modal/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { ImageView } from 'ImageFinder/Modal/ImageView';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null);
  const [status, setStatus] = useState('idle');
  const [alt, setAlt] = useState(null);
  const [totalHits, setTotalHits] = useState(null);

  const submitForm = (values, { resetForm }) => {
    const searchQueryNew = values.searchQuery.toLowerCase();

    if (searchQuery === searchQueryNew) {
      return;
    }

    setSearchQuery(searchQueryNew);
    resetForm();
    resetState();
  };

  const resetState = () => {
    setImages([]);
    setPage(1);
    setStatus('idle');

    setTotalHits(null);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetchImages() {
      setStatus('pending');
      try {
        const imageData = await fetchPictures(searchQuery, page);
        setTotalHits(imageData.total);

        const imagesHits = imageData.hits;
        if (!imagesHits.length) {
          toast.warning(
            'No results were found for your search, please try something else.',
            { position: 'top-center' }
          );
        }
        setStatus('resolved');
        setImages(images => [...images, ...imagesHits]);

        if (page > 1) {
          const CARD_HEIGHT = 300;
          window.scrollBy({
            top: CARD_HEIGHT * 2,
            behavior: 'smooth',
          });
        }
      } catch (error) {
        toast.error(`Sorry something went wrong.`);
        setStatus('rejected');
      }
    }

    fetchImages();
  }, [page, searchQuery]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSelectImg = (largeImageURL, tags) => {
    setSelectedImg(largeImageURL);
    setAlt(tags);
  };

  const toggleModal = () => {
    setSelectedImg(null);
  };

  return (
    <Box
      as="div"
      display="grid"
      grid-template-columns="1fr"
      grid-gap="16"
      padding-bottom="32px"
    >
      <SearchBar submitForm={submitForm} />
      {images.length > 0 && (
        <ImageGallery images={images} selectedImg={handleSelectImg} />
      )}
      <Vortex
        visible={status === 'pending'}
        height="180"
        width="180"
        ariaLabel="vortex-loading"
        wrapperStyle={{ margin: 'auto' }}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
      {images.length > 0 && images.length !== totalHits && (
        <LoadMoreButton onClick={loadMore} />
      )}
      <ToastContainer autoClose="3000" />
      {selectedImg && (
        <Modal onClose={toggleModal}>
          <ImageView selectedImg={selectedImg} tags={alt} />
        </Modal>
      )}
    </Box>
  );
};

export default App;
