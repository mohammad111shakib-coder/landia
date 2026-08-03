import React from "react";

function FeatureInfo({
  icon: Icon,
  title,
  text1,
  text2,
  tik1,
  tik2,
  tik3,

  variant = "default",
  classTik = "",
  classText1 = "",
  classText2 = "",
  classIcon = "",
  classContenier = "",
  titleClass = "",
}) {
  const styles = {
    default: {
      container:
        "flex gap-4   border border-gray-800 rounded-2xl py-3 px-4  shadow-lg hover:scale-101",
      icon: "text-3xl",
      title: "text-[17px] font-semibold",
      text1: " ",
    },
  };

  const currentStyle = styles[variant] || {};
  const style = {
    container: `${styles.default.container} ${currentStyle.container || ""}`,
    icon: `${styles.default.icon} ${currentStyle.icon || ""}`,
    title: `${styles.default.title} ${currentStyle.title || ""}`,
    text: `${styles.default.text} ${currentStyle.text || ""}`,
  };

  return (
    <div
      className={`flex-row-reverse items-end md:flex-row md:items-start h-full hover:bg-gray-300  ${style.container} ${classContenier}`}>
      <div
        className={`inline border border-gray-300  rounded-sm bg-gray-200 md:p-1.5 md:block ${style.icon} ${classIcon}`}>
        <Icon />
      </div>
      <div className="flex flex-col ">
        <div className=" flex flex-row gap-4 mb-2 md:gap-12 ">
          <h1 className={` ${style.title} ${titleClass}`}>{title}</h1>
          <p
            className={`border rounded-2xl px-1.5 font-light  bg-gray-200   ${style.text} ${classText1}`}>
            {text1}
          </p>
        </div>
        <p
          className={`mb-3 text-gray-700 font-light text-[13px] md:text-[16px] ${style.text} ${classText2}`}>
          {text2}
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:gap-9 font-medium text-[12px] md:text-[16px] hover:cursor-pointer  ">
          <p className={`hover:underline ${style.text} ${classTik}`}>{tik1}</p>
          <p className={`hover:underline ${style.text} ${classTik}`}>{tik2}</p>
          <p className={`hover:underline ${style.text} ${classTik}`}>{tik3}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureInfo;
