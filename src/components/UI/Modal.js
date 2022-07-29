import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  const {onClose} = props;

  return <div className={classes.backdrop} onClick={onClose}></div>
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
};

const portalLocation = document.getElementById('overlays');

const Modal = (props) => {
  const {onClose} = props;

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, portalLocation)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
    </Fragment>
  )
};

export default Modal;