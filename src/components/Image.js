import React from "react";
//import useDarkMode from "use-dark-mode";

const Image = ({ className, src, srcDark, srcSet, srcSetDark, alt }) => {
  //const darkMode = useDarkMode(false);

  return <img className={className} srcSet={srcDark} src={srcDark} alt={alt} />;
};

export default Image;
