import "../css/loginPopup.css";

const LoginPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
        <div className="popup-content">
            <button onClick={() => onClose('button1')}>Button 1</button>
            <button onClick={() => onClose('button2')}>Button 2</button>
        </div>
  </div>
  )
}

export default LoginPopup