import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const PageOne = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <header className="bg-white-A700 border border-black-900_19 border-solid flex flex-col items-center md:items-stretch justify-center md:justify-start md:px-5 rounded-sm w-full">
          <div className="flex md:flex-col flex-row gap-[9px] items-center justify-center mx-auto my-[21px] w-[85%]">
            <div className="header-row ">
              <Img
                className="md:flex md:flex-col md:grid-cols-3 md:grid-rows-1 h-10 md:items-start md:justify-end"
                src="images/img_forward.svg"
                alt="forward"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row md:gap-10 sm:hidden items-start justify-between w-[96%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtRobotoMedium28"
                >
                  MEDIA MAGIC
                </Text>
              </div>
              <ul className="bg-white-A700 flex sm:flex-col flex-row gap-10 sm:hidden items-center justify-center mb-1.5 mt-0.5 w-auto common-row-list">
                <li>
                  <a
                    href="javascript:"
                    className="font-medium text-base text-black-900 text-shadow-ts"
                  >
                    <Text size="txtRobotoRegular16Black900">
                      Text to Speech
                    </Text>
                  </a>
                </li>
                <li>
                  <a className="text-base text-black-900">
                    <Text
                      className="common-pointer"
                      size="txtRobotoRegular16Black900"
                      onClick={() => navigate("/pagetwo")}
                    >
                      Speech to Text
                    </Text>
                  </a>
                </li>
                <li>
                  <a className="text-base text-black-900">
                    <Text
                      className="common-pointer"
                      size="txtRobotoRegular16Black900"
                      onClick={() => navigate("/pagethree")}
                    >
                      Image to Text
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center pt-[57px] w-full">
          <div className="md:h-[135px] h-[85px] ml-[-45px] md:ml-[0] md:px-5 relative w-1/5">
            <Text
              className="md:flex md:items-center sm:m-[] md:m-[] sm:ml-[-300%] md:ml-[-40%] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-[125%] md:w-[200%] sm:w-[400px]"
              size="txtRobotoBold40Black900"
            >
              Text to Speech
            </Text>
            <div className="absolute flex flex-col md:flex-row gap-[19px] h-full inset-[0] items-center justify-center sm:w-1/2 w-[400px] md:w-[]">
              <Text
                className="hidden sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtRobotoBold40Black900"
              >
                Text to Speech
              </Text>
              <Text
                className="md:ml-[-58%] ml-[-60px] sm:ml-[65px] sm:mr-[] mt-[50px] text-base text-black-900 text-center sm:w-[200px]"
                size="txtRobotoRegular16Black900"
              >
                Convert your text to speech
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-6 h-[480px] md:h-auto items-center justify-start mt-[37px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoRomanSemiBold40"
            >
              Enter Text
            </Text>
            <div className="border border-black-900 border-solid flex flex-col h-[232px] md:h-auto items-start justify-center w-1/2">
              <div className="bg-white-A700 border border-black-900_19 border-solid flex flex-col h-[226px] md:h-auto items-start justify-start px-3 py-2 rounded-md w-full">
                <Text
                  className="text-black-900_7f text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  text
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="bg-black-900 flex flex-col items-center justify-center p-3 rounded-lg w-40">
                <div className="bg-white-A700 flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                  <Img
                    className="h-[23px] rounded-tl-[12px] rounded-tr-[12px] w-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                </div>
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtRobotoMedium16"
                >
                  Convert
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
      </div>
    </>
  );
};

export default PageOne;
