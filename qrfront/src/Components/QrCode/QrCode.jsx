import { Suspense } from "react";
import { Spiner } from "../../Components";
import { useFetchImage } from "../../Helpers/fetchImage";
import './qrcode.css'

const QrCode = () => {

  const qrSrc = useFetchImage()

  return (
    <div className="QrCode">
    {qrSrc ? <img src={qrSrc} alt='Your Qr Image'/> : <Spiner />}
    </div>
  );
};

export default QrCode;
