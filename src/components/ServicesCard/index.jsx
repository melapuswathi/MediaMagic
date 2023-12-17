import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const ServicesCard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className} onClick={() => navigate("/pageone")}>
        <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
          <div
            className="common-pointer bg-blue_gray-100_7f flex flex-col h-[340px] items-center justify-center p-[103px] md:px-10 sm:px-5 w-[340px]"
            onClick={props?.onClick}
          >
            <Text
              className="mb-[53px] mt-14 text-black-900 text-center text-xl"
              size="txtRobotoRomanRegular20"
            >
              Text to Speech
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
          <Text
            className="text-black-900 text-xl w-full"
            size="txtRobotoMedium20"
          >
            Convert written text into speech
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <Img
              className="h-[19px] md:h-auto object-cover w-[18px]"
              src="images/img_icon.png"
              alt="icon"
            />
            <Img
              className="h-6 md:h-auto object-cover w-6"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <Img
              className="h-[19px] md:h-auto object-cover w-[18px]"
              src="images/img_icon_19x18.png"
              alt="icon_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ServicesCard.defaultProps = {};

export default ServicesCard;
