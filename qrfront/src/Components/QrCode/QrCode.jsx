import { Spiner } from "../../Components";
import { useQrFetch } from "../../Hooks/useQrFetch";
import "./qrcode.css";

const QrCode = () => {
  const qrSrc = useQrFetch();

  return (
    <div className="QrCode">
      {qrSrc.isFetching ? <Spiner /> : <img src={qrSrc.fetchedImage} alt="Your Qr Image" /> }
    </div>
  );
};

export default QrCode;
