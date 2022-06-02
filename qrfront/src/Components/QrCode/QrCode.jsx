import { Suspense } from "react";
import { Spiner } from "../../Components";
import { useQrFetch } from "../../Hooks/useQrFetch";
import './qrcode.css'

const QrCode = () => {

  const qrSrc = useQrFetch();

  return (
    <div className="QrCode">
    {qrSrc ? <img src={qrSrc} alt='Your Qr Image'/> : <Spiner />}
    </div>
  );
};

export default QrCode;
