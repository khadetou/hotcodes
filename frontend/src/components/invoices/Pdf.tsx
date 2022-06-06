import React, { FC, ReactNode } from "react";
import Img from "/public/images/Design-banner.png";
import {
  StyleSheet,
  Document as _Document,
  Page as _Page,
  Image,
  View,
  Text,
} from "@react-pdf/renderer";
import { useTypedSelector } from "@/hooks/useTypeSelector";

function componentWithChildren<Props>(Component: React.ComponentType<Props>) {
  return Component as React.ComponentType<Props & { children: ReactNode }>;
}

const Document = componentWithChildren(_Document);
const Page = componentWithChildren(_Page);

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#fff",
  },
  content: {
    width: "100%",
  },
  section: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  logoImg: {
    width: "100%",
    height: "auto",
  },
  logo: {
    marginTop: "30px",
    marginLeft: "55px",
    width: "120px",
  },

  text1: {
    marginTop: "130px",
    marginLeft: "55px",
    fontSize: 16,
  },
  text: {
    fontSize: 20,
    color: "blue",
  },
});

interface PdfProp {
  orderw: any;
  orderm: any;
  orderd: any;
  plateforme: string | null;
}
const Pdf: FC<PdfProp> = ({ orderw, orderm, orderd, plateforme }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src="/images/invoice/design-svg.png" />
          <Image src="/images/invoice/bg-image.png" />
        </View>
        <View style={styles.logo}>
          <Image style={styles.logoImg} src="/images/invoice/logo-png.png" />
        </View>
        <View style={styles.text1}>
          <Text>Invoice</Text>
          <Text>
            Date:
            {plateforme === "web"
              ? orderw?.date.split("T")[0]
              : plateforme == "mobile"
              ? orderm?.date.split("T")[0]
              : orderd?.date.split("T")[0]}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
