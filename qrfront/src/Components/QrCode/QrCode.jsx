import { Spiner } from "../../Components";
import { useQrFetch } from "../../Hooks/useQrFetch";
import styles from "./qrcode.module.css";

const QrCode = () => {
  const qrSrc = useQrFetch();

  return (
    <div className={styles.qrCode}>
      {qrSrc.isFetching ? <Spiner /> : <img src={qrSrc.fetchedImage} alt="Your Qr Image" /> }
    </div>
  );
};

export default QrCode;
