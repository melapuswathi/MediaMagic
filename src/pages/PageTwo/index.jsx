import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const PageTwo = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pb-[43px] w-full">
        <Header className="bg-white-A700 border border-black-900_19 border-solid flex flex-col items-center justify-center md:px-5 rounded-sm w-full" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto pt-[3px] px-[3px] w-full">
            <div className="h-[47px] ml-[-45px] md:ml-[0] relative w-[30%]">
              <Text
                className="m-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtRobotoBold40Black900"
              >
                Speech to Text
              </Text>
              <Img
                className="absolute bottom-[23%] h-4 hidden right-[8%] w-4"
                src="images/img_music.svg"
                alt="music"
              />
            </div>
            <Text
              className="ml-[-35px] md:ml-[0] text-base text-black-900 text-center"
              size="txtRobotoRegular16Black900"
            >
              Convert your speech into text
            </Text>
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <div className="border border-black-900 border-solid flex flex-col h-[60px] md:h-auto items-center justify-center p-3 rounded-lg w-40">
                <Img
                  className="h-6 w-6"
                  src="images/img_fluentmicon24filled.svg"
                  alt="fluentmicon24fi"
                />
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoMedium16Black900"
                >
                  Start
                </Text>
              </div>
              <div className="bg-black-900 flex flex-col h-[60px] items-center justify-center p-3 rounded-lg w-40">
                <Img
                  className="h-4 w-4"
                  src="images/img_vaadinmute.svg"
                  alt="vaadinmute"
                />
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtRobotoMedium16"
                >
                  Stop
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] h-[317px] md:h-auto items-center justify-center max-w-[1440px] mt-[37px] md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-[30px] justify-start max-w-[1100px] mx-auto py-[19px] w-full">
            <div className="flex flex-col items-start justify-center max-w-[1100px] w-full">
              <div className="border border-black-900_19 border-solid flex flex-col items-start justify-center p-4 rounded-md w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtRobotoMedium20"
                  >
                    Transcribed Text:
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16Black900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center mb-[21px] min-w-[216px] md:ml-[0] ml-[470px] mr-[414px]"
              leftIcon={
                <div className="h-6 mr-3 w-6 bg-black-900 rounded-md">
                  <Img
                    className="h-6 rounded-md"
                    src="images/img_ggcopy.svg"
                    alt="gg:copy"
                  />
                </div>
              }
              size="sm"
            >
              <div className="font-medium text-base text-left">
                Copy to clipboard
              </div>
            </Button>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
      </div>
    </>
  );
};

export default PageTwo;
