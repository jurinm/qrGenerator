import { useState, useTransition, useEffect } from "react";
import { Spiner } from "../../Components";
import { useQrFetch } from "../../Hooks/useQrFetch";
import './qrcode.css'

const QrCode = () => {
  const [isPending, startTransition] = useTransition();

  const qrSrc = useQrFetch();
  
  return (
    <div className="QrCode">
    {isPending ? <Spiner /> : <img src={qrSrc} alt='Your Qr Image'/>}
    </div>
  );
};

export default QrCode;
