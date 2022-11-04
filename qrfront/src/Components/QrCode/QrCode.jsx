import { Spiner } from "../../Components";
import { useQrFetch } from "../../Hooks/useQrFetch";
import styles from "./qrcode.module.css";
import fallbackImg from '../../assets/img/fallback.png'

const QrCode = () => {
  const qrSrc = useQrFetch();
  console.log(qrSrc)
  return (
    <div className={styles.qrCode}>
      {qrSrc.isFetching ? <Spiner /> : <img src={qrSrc.fetchedImage ? qrSrc.fetchedImage : fallbackImg} alt="Your Qr Code" /> }
    </div>
  );
};

export default QrCode;
