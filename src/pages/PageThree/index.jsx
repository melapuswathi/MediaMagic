import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const PageThree = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[22px] items-center justify-start mx-auto pb-[34px] w-full">
        <Header className="bg-white-A700 border border-black-900_19 border-solid flex items-center justify-center md:px-5 px-[113px] py-[21px] rounded-sm w-full" />
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center max-w-[1440px] mx-auto md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                size="txtRobotoRomanExtraBold40"
              >
                Image to Text{" "}
              </Text>
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoRegular16Black900"
              >
                Upload an image and extract the text from it !
              </Text>
            </div>
            <Line className="bg-black-900_19 h-px hidden w-full" />
          </div>
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center max-w-[1440px] mt-[-132px] mx-auto md:px-10 sm:px-5 px-[170px] py-[60px] w-full z-[1]">
            <div className="flex flex-col gap-6 items-center justify-start mt-[5%] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                size="txtRobotoRomanSemiBold40"
              >
                Upload Image
              </Text>
              <div className="flex flex-col items-start justify-center w-[360px] sm:w-full">
                <Input
                  name="textfield"
                  placeholder="Upload image"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                ></Input>
              </div>
              <div className="flex flex-col h-12 md:h-auto items-center justify-center w-auto">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[160px]"
                  leftIcon={
                    <div className="h-6 mr-1 w-6 bg-black-900 p-1 flex justify-center items-center">
                      <Img
                        className="h-4"
                        src="images/img_twitter.svg"
                        alt="twitter"
                      />
                    </div>
                  }
                >
                  <div className="font-medium text-base text-left">Upload</div>
                </Button>
              </div>
            </div>
            <Line className="bg-black-900_19 h-px hidden w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageThree;
