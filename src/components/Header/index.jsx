import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row gap-[9px] items-center justify-center w-full">
          <div className="header-row ">
            <Img className="h-10" src="images/img_forward.svg" alt="forward" />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-row md:gap-10 sm:hidden items-start justify-between w-[96%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtRobotoMedium28"
              >
                MEDIA MAGIC
              </Text>
            </div>
            <ul
              className="common-pointer bg-white-A700 flex sm:flex-col flex-row gap-10 sm:hidden items-center justify-center mb-1.5 mt-0.5 w-auto common-row-list"
              onClick={() => navigate("/pagetwo")}
            >
              <li>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRegular16Black900"
                >
                  Text to Speech
                </Text>
              </li>
              <li>
                <Text
                  className="font-normal text-base text-black-900"
                  size="txtRobotoRegular16Black900"
                >
                  Speech to Text
                </Text>
              </li>
              <li>
                <Text
                  className="font-medium text-base text-black-900"
                  size="txtRobotoRegular16Black900"
                >
                  Image to Text
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
