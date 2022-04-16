import { useTranslation } from "next-i18next";
import Design from "/public/images/design.svg";
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
          src={Design}
          title={t("services.card.title")}
          paragraph={t("services.card.p")}
        />
      </div>
    </section>
  );
};

export default Service;
