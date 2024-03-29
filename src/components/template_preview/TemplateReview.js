import {
  setGenerateStep,
  setOpenChooseTempModal,
  setOpenTempForm,
  setSelectedTmp,
} from "@/redux/features/globals/globalsSlice";
import { Button, Dialog } from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import TemplateCard from "../templates/TemplateCard";
import { templates } from "@/lib/datas/templates";
import Image from "next/image";

const TemplateReview = ({}) => {
  const { selectedTmp, openChooseTempModal, openTempForm } = useSelector(
    (state) => state.global
  );

  const dispatch = useDispatch();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleGetData = (template) => {
    dispatch(setSelectedTmp(template));
    dispatch(setOpenTempForm(true));
  };

  console.log(selectedTmp);
  return (
    <>
      <div className="flex flex-col items-end gap-4">
        <div ref={componentRef} className="bg-white">
          {selectedTmp?.template}
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => {
              dispatch(setOpenChooseTempModal(true));
            }}
            size="sm"
            className="rounded-sm shadow-none hover:shadow-none h-8 bg-deep-purple-600 text-xs text-current text-white"
          >
            Change Template
          </Button>
          <Button
            onClick={() => {
              dispatch(setOpenChooseTempModal(true));
              dispatch(setOpenTempForm(true));
            }}
            size="sm"
            className="rounded-sm shadow-none hover:shadow-none h-8 bg-white text-xs text-current text-blue-gray-800"
          >
            Update
          </Button>
          <Button
            onClick={() => handlePrint()}
            size="sm"
            className="rounded-sm shadow-none hover:shadow-none h-8 bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
          >
            Download
          </Button>
        </div>
      </div>

      <Dialog
        open={openChooseTempModal}
        handler={() => {
          dispatch(setOpenChooseTempModal(false));
          dispatch(setOpenTempForm(false));
        }}
        size="xl"
        className="h-full p-4 overflow-y-auto max-h-full"
      >
        {openChooseTempModal && !openTempForm && (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
              {templates.map((tmp, index) => (
                <div
                  key={index}
                  className={`w-full h-full cursor-pointer hover:border hover:border-primary bg-white overflow-hidden ${
                    selectedTmp?._id === tmp?._id &&
                    "border-[4px] border-primary"
                  }`}
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  }}
                >
                  <Image
                    onClick={() => handleGetData(tmp)}
                    className="w-full border h-full object-contain hover:scale-125 duration-500"
                    src={tmp.img}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {openChooseTempModal && openTempForm && (
          <div className="bg-white my-4 w-fit mx-auto">
            {selectedTmp && <>{selectedTmp?.tmp_form}</>}
          </div>
        )}
      </Dialog>
    </>
  );
};

export default TemplateReview;
