import React from "react";

const FeatureCards = ({
  icon: Icon,
  text1,
  title,
  text2,
  tik1,
  tik2,
  tik3,
  // hr,
  link,
  variant = "default",
  containerClass = "",
  iconClass = "",

  titleClass = "",
  text1Class = "",
  text2Class = "",
  tikClass = "",
  linkClass = "",
}) => {
  const styles = {
    default: {
      container: "",
    },
    cards: {},
  };
  const currentStyle = styles[variant] || {};
  const style = {
    container: `${styles.default.container} ${currentStyle.container || ""}`,
    icon: `${styles.default.icon} ${currentStyle.icon || ""}`,

    title: `${styles.default.title} ${currentStyle.title || ""}`,
    text1: `${styles.default.text1} ${currentStyle.text1 || ""}`,
    text2: `${styles.default.text2} ${currentStyle.text2 || ""}`,
    tik: `${styles.default.tik} ${currentStyle.tik || " "}`,
    link: `${styles.default.link} ${currentStyle.tlink || " "}`,
  };
  return (
    <div className={`${style.container} ${containerClass}`}>
      <div className={`${style.icon} ${iconClass}`}>
        <span className="border border-gray-500 bg-gray-200  rounded-sm p-1">
          <Icon />
        </span>

        <p className={`font- ${style.text} ${text1Class}`}>{text1}</p>
      </div>
      <h2 className={`${style.title} ${titleClass}`}>{title}</h2>
      <p className={`${style.text} ${text2Class}`}>{text2}</p>
      <p className={`${style.tik} ${tikClass}`}>{tik1}</p>
      <p className={`mb-2 ${style.tik} ${tikClass}`}>{tik2}</p>
      {tik3 && <p className={`${style.tik} ${tikClass}`}>{tik3}</p>}
      <hr className="text-gray-200" />
      <h4 className={`${style.link} ${linkClass}`}>{link}</h4>
    </div>
  );
};

export default FeatureCards;
