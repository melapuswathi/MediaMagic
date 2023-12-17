import React from "react";

const sizeClasses = {
  txtRobotoBold40: "font-bold font-roboto",
  txtRobotoMedium28: "font-medium font-roboto",
  txtRobotoRomanSemiBold40: "font-roboto font-semibold",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular16Black900: "font-normal font-roboto",
  txtRobotoRomanExtraBold40: "font-extrabold font-roboto",
  txtRobotoMedium16Black900: "font-medium font-roboto",
  txtRobotoMedium20: "font-medium font-roboto",
  txtRobotoBold40Black900: "font-bold font-roboto",
  txtRobotoRomanRegular20: "font-normal font-roboto",
  txtRobotoMedium16: "font-medium font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
