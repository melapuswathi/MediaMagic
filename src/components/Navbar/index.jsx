import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-[9px] items-end sm:items-start md:items-stretch md:justify-around justify-start sm:m-[] md:m-[] md:mb-0.5 md:mt-0 sm:mt-[] mx-auto my-[21px] w-[85%] md:w-full">
          <Img
            className="md:block h-10 md:m-[] md:ml-[0] md:mt-[5px] w-10"
            src="images/img_forward.svg"
            alt="forward"
          />
          <div className="flex flex-row md:gap-10 md:items-center items-start justify-between sm:m-[] md:m-[] md:mb-[] md:ml-[-55px] sm:ml-[0] sm:mr-[] md:mt-2.5 mt-[5px] sm:w-3/5 md:w-4/5 w-[96%]">
            <div className="flex flex-col items-center justify-start md:m-[] md:ml-[7%]">
              <Text
                className="common-pointer md:m-[] md:ml-[-75px] sm:p-[] sm:pt-[5px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtRobotoMedium28"
                onClick={() => navigate("/")}
              >
                MEDIA MAGIC
              </Text>
            </div>
            <ul className="bg-white-A700 flex sm:flex-col flex-row gap-10 sm:hidden items-center justify-center md:m-[] mb-1.5 md:mb-[3px] md:ml-[] mt-0.5 w-auto common-row-list">
              <li>
                <a className="text-base text-black-900">
                  <Text
                    className="common-pointer"
                    size="txtRobotoRegular16Black900"
                    onClick={() => navigate("/pageone")}
                  >
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
        <div className="bg-white-A700 border border-black-900_19 border-solid flex-col hidden items-center justify-start p-[21px] sm:px-5 rounded-sm w-full">
          <div className="flex md:flex-col flex-row gap-[9px] items-end justify-start w-[87%] md:w-full">
            <Img
              className="h-10 w-10"
              src="images/img_forward.svg"
              alt="forward_One"
            />
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-[5px] w-[96%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtRobotoMedium28"
                >
                  MEDIA MAGIC
                </Text>
              </div>
              <ul className="bg-white-A700 flex sm:flex-col flex-row gap-10 items-center justify-center mb-1.5 sm:mt-0 mt-0.5 w-auto sm:w-full">
                <li>
                  <a href="javascript:" className="text-base text-black-900">
                    <Text size="txtRobotoRegular16Black900">
                      Text to Speech
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-base text-black-900">
                    <Text size="txtRobotoRegular16Black900">
                      Speech to Text
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-base text-black-900">
                    <Text size="txtRobotoRegular16Black900">Image to Text</Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
