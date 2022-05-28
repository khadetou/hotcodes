import React from "react";
import dynamic from "next/dynamic";
import Pdf from "@/components/invoices/Pdf";
// const DynamicPDF = dynamic(() => import("@/components/invoices/Pdf"), {
//   ssr: false,
// });
const PdfDownload = dynamic(() => import("@/components/invoices/PdfDownload"), {
  ssr: false,
});

const PDFViewer = dynamic(() => import("@/components/invoices/PdfViewer"), {
  ssr: false,
});
const Invoice = () => {
  return (
    <section className="h-screen">
      <PDFViewer>
        <Pdf section="#Section Text" />
      </PDFViewer>
    </section>
  );
};

export default Invoice;
