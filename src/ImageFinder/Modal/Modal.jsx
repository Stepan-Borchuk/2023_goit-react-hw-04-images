import { Backdrop, ModalContent } from './Modal.styled';
import { createPortal } from 'react-dom';
import React, { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    // const { selectedImg, tags } = this.props;
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          {this.props.children}
          {/* <img src={selectedImg} alt={tags} /> */}
        </ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}
