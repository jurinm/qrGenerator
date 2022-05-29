import { Spiner } from "../../Components";

import './qrcode.css'

const QrCode = ({image, isLoading}) => {
  return (
    <div className="QrCode">
      {isLoading ? (
          <Spiner />
        ) : (
          <>
            {image ? (
              <img src={image.qrImage} alt="Your QR code" />
            ) : (
              <h3>Your Qr code, will apear here</h3>
            )}
          </>
        )}
    </div>
  );
};

export default QrCode;
