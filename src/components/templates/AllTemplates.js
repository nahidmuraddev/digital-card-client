import React from "react";
import TemplateCard from "./TemplateCard";
import { templates } from "@/lib/datas/templates";

const AllTemplates = () => {
  return (
    <div className="container mt-[50px] pb-20">
      <h1 className="text-[#33389d] text-xl md:text-3xl lg:text-4xl font-semibold leading-[22px] text-center">
        Choose Templates
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
        {templates.map((tmp, index) => (
          <TemplateCard key={index} template={tmp} />
        ))}
      </div>
    </div>
  );
};

export default AllTemplates;
