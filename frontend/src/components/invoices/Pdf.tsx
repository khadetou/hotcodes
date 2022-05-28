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

function componentWithChildren<Props>(Component: React.ComponentType<Props>) {
  return Component as React.ComponentType<Props & { children: ReactNode }>;
}

const Document = componentWithChildren(_Document);
const Page = componentWithChildren(_Page);

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 100,
    padding: 10,
    flexGrow: 1,
  },

  text: {
    fontSize: 20,
    color: "blue",
  },
});

interface PdfProp {
  section: string;
}
const Pdf: FC<PdfProp> = ({ section }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src="/images/Design-banner.png" />
          <Text style={styles.text}>{section}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
