import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Navbar from "components/Navbar";
import ServicesCard from "components/ServicesCard";

import { handleSectionNavigation } from "utils";

const DesktopOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <Navbar className="bg-white-A700 border border-black-900_19 border-solid flex md:flex-col md:gap-5 items-center justify-center md:px-5 rounded-sm w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-black-900_99 flex flex-col md:flex-row items-center md:justify-end justify-start p-[170px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-6 h-[168px] md:h-auto items-center justify-start max-w-[1100px] mb-[119px] mt-[106px] mx-auto w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
                size="txtRobotoBold40"
              >
                Welcome to MEDIA MAGIC
              </Text>
              <Text
                className="text-base text-center text-white-A700 w-auto"
                size="txtRobotoRegular16"
              >
                Convert your media like a magic!
              </Text>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                  onClick={() => {
                    handleSectionNavigation("block1");
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col md:gap-10 gap-[156px] items-center justify-start pt-[104px] w-full"
            id="block1"
          >
            <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                size="txtRobotoBold40Black900"
              >
                Our Services
              </Text>
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoRegular16Black900"
              >
                Choose from our range of conversion tools
              </Text>
              <List
                className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
                orientation="horizontal"
              >
                {new Array(3).fill({}).map((props, index) => (
                  <React.Fragment key={`ServicesCard${index}`}>
                    <ServicesCard
                      className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full"
                      onClick={() => navigate("/pageone")}
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
          <div className="flex flex-col items-center justify-end pt-32 w-full">
            <div className="flex flex-col md:gap-10 gap-[145px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center md:justify-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-[520px] sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                    size="txtRobotoBold40Black900"
                  >
                    Why Choose MEDIA MAGIC
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16Black900"
                  >
                    We offer the best conversion experience
                  </Text>
                </div>
                <List
                  className="flex md:flex-1 flex-col gap-10 items-center py-5 w-[520px] md:w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md md:w-3/5 w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Secure
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16Black900"
                        >
                          Your data is safe within your browser.
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <div className="flex flex-col items-center justify-start w-6">
                            <Img
                              className="h-[19px] md:h-auto object-cover w-[18px]"
                              src="images/img_icon_2.png"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md md:w-3/5 w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Ease of Use
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16Black900"
                        >
                          Simple and user-friendly interface
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <div className="flex flex-col items-center justify-start w-6">
                            <Img
                              className="h-[19px] md:h-auto object-cover w-[18px]"
                              src="images/img_icon_2.png"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md md:w-3/5 w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Fast Processing
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16Black900"
                        >
                          Quickly convert your media files
                        </Text>
                        <div className="flex flex-col items-start justify-start py-1 w-full">
                          <div className="flex flex-col items-center justify-start w-6">
                            <Img
                              className="h-[19px] md:h-auto object-cover w-[18px]"
                              src="images/img_icon_2.png"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gradient  h-[60px] w-full"></div>
                <Line className="bg-black-900_19 h-px w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
