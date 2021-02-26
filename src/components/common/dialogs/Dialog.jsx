import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const Dialog = ({ open, close, title, children, render, buttons }) => {
  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title> {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>{render(buttons)}</Modal.Footer>
    </Modal>
  );
};

Dialog.propTypes = {
  render: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dialog;
