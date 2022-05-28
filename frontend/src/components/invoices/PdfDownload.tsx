import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./Pdf";

const Pdfdowloadbutton = () => {
  return (
    <PDFDownloadLink document={<Pdf section="Section #1" />} fileName="FORM">
      {({ loading }) =>
        loading ? (
          <button>Loading document ..</button>
        ) : (
          <button>Download</button>
        )
      }
    </PDFDownloadLink>
  );
};

export default Pdfdowloadbutton;
