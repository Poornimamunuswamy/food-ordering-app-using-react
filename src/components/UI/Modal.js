import { Fragment } from 'react/cjs/react.production.min';
import reactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props)=>{
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = (props) => {
  return <div className={classes.modal}>
      <div>{props.children}</div>
  </div>;
};

const portal = document.getElementById("modal-overlay")

const Modal = (props)=>{
    return (
      <Fragment>
        {reactDom.createPortal(
          <Backdrop onClick={props.onClick}></Backdrop>,
          portal
        )}
        {reactDom.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portal
        )}
      </Fragment>
    );
}

export default Modal;