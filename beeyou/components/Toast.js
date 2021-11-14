const Toast = ({ msg, handleShow }) => {
  const icons = {
    success: "fas fa-check-circle",
    info: "fas fa-info-circle",
    warning: "fas fa-exclamation-circle",
    error: "fas fa-exclamation-circle",
  };

  const icon = icons[msg.title];
  const showToast = setTimeout(handleShow, 3000);

  const handleClick = () => {
    clearTimeout(showToast);
    handleShow();
  };

  return (
    <div className={`show my-toast toast--${msg.title}`}>
      <div className="toast__icon">
        <i className={icon}></i>
      </div>
      <p className="toast__msg">{msg.msg}</p>
      <div className="toast__close" onClick={handleClick}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
};

export default Toast;
