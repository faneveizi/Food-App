import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};
export const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalId = document.getElementById('overlays');
export const Modal = (props) => {
  return <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalId)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalId)}
    </>;
};

export default Modal;
