import { useTranslation } from "next-i18next";
import React from "react";
import Card from "./card";
import Title from "./title";

const Service = () => {
  const { t } = useTranslation("common");
  return (
    <section>
      <div className="containers">
        <Title />
        <Card
          title={t("services.card.title")}
          paragraph={t("services.card.p")}
        />
      </div>
    </section>
  );
};

export default Service;
