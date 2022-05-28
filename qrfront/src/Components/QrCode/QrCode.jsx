import { Spiner } from "../../Components";

const QrCode = ({image, isLoading}) => {
  return (
    <div>
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
