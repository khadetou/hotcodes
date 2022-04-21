import SmallCards from "../smallcards";
import { useTranslation } from "next-i18next";


const Slider = () => {
  const { t } = useTranslation("common");
  return (
    <>
    <SmallCards title={t("process.cards.1.title")} p={t("process.cards.1.p")} />
  </>
  )
}

export default Slider;