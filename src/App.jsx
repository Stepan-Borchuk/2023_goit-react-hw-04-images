import { Box } from './Box';
import SearchBar from 'ImageFinder/search/Searchbar';
import React, { Component } from 'react';
import { Vortex } from 'react-loader-spinner';

// import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import { ImageGallery } from 'ImageFinder/img-gallery/ImageGallery';
import fetchPictures from 'ImageFinder/services/fetchImg';
import LoadMoreButton from 'ImageFinder/loadMore/LoadMoreButton';
import Modal from 'ImageFinder/Modal/Modal';

import 'react-toastify/dist/ReactToastify.css';
import { ImageView } from 'ImageFinder/Modal/ImageView';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    selectedImg: null,
    status: 'idle',
    alt: null,
  };

  totalHits = null;

  submitForm = (values, { resetForm }) => {
    const searchQuery = values.searchQuery.toLowerCase();

    if (this.state.searchQuery === searchQuery) {
      return;
    }

    this.setState({ searchQuery });
    resetForm();
    this.resetState();
  };

  resetState = () => {
    this.setState({
      page: 1,
      images: [],
      selectedImage: null,
      alt: null,
      status: 'pending',
    });
  };

  async componentDidUpdate(_, prevState) {
    const { page, searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ status: 'pending' });

      try {
        const imageData = await fetchPictures(searchQuery, page);

        this.totalHits = imageData.total;
        const imagesHits = imageData.hits;
        if (!imagesHits.length) {
          toast.warning(
            'No results were found for your search, please try something else.',
            { position: 'top-center' }
          );
        }
        this.setState(({ images }) => ({
          images: [...images, ...imagesHits],
          status: 'resolved',
        }));

        if (page > 1) {
          const CARD_HEIGHT = 300; // preview image height
          window.scrollBy({
            top: CARD_HEIGHT * 2,
            behavior: 'smooth',
          });
        }
      } catch (error) {
        toast.error(`Sorry something went wrong.`);
        this.setState({ status: 'rejected' });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSelectImg = (largeImageURL, tags) => {
    this.setState({ selectedImg: largeImageURL, alt: tags });
  };

  toggleModal = () => {
    this.setState(({ selectedImg }) => ({
      selectedImg: !selectedImg,
    }));
  };

  render() {
    // const { showModal } = this.state;
    const { images, status, selectedImg, alt} = this.state;
    console.log(this.state);

    return (
      <Box
        as="div"
        display="grid"
        grid-template-columns="1fr"
        grid-gap="16"
        padding-bottom="32px"
      >
        <SearchBar submitForm={this.submitForm} />
        {images.length > 0 && (
          <ImageGallery images={images} selectedImg={this.handleSelectImg} />
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
        {images.length > 0 && images.length !== this.totalHits && (
          <LoadMoreButton onClick={this.loadMore} />
        )}
        <ToastContainer autoClose="3000" />
        {selectedImg && (
          // <Modal
          //   onClose={this.toggleModal}
          //   selectedImg={selectedImg}
          //   tags={alt}
          // />
          <Modal onClose={this.toggleModal}>
            <ImageView selectedImg={selectedImg} tags={alt} />
          </Modal>
        )}
      </Box>
    );
  }
}

export default App;
