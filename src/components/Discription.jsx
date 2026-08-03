export default function Discription({
  icon: Icon,
  title,
  text1,
  text2,
  text3,
  variant = "default",
  color = "yello",
  containerClass = "",
  iconClass = "",
  titleClass = "",
  textClass = "",
}) {
  const styles = {
    default: {
      container:
        "flex justify-start items-center border border-gray-300  rounded-2xl py-3 pl-2 shadow-lg hover:scale-105  ",
      icon: "text-3xl   ",
      title: "text-xl font-semibold ",
      text: " ",
    },
    features: {
      container:
        "flex justify-start items-center border border-gray-300  rounded-2xl py-3 pl-2 shadow-lg hover:scale-105 gap-6",
      icon: " border border-gray-300  rounded-sm bg-gray-200 md:p-1.5",
      title: "text-2xl font-semibold ",
      text: "text-gray-600 text-[11px] md:text-[13px]",
    },
    about: {
      container: " gap-6 w-full",
      icon: " border border-gray-300  rounded-sm bg-gray-200 md:p-1.5",
      title: "text-2xl font-semibold  ",
      text: " text-gray-600 text-[11px] md:text-[13px] ",
    },
    black: {
      container: " ",
      icon: " ",
      title: "",
      text: "text-gray-400 text-[11px] text-frist md:text-[13px]",
    },
  };

  const colorMap = {
    blue: {
      bg: "bg-blue-100",
      border: "border border-blue-400",
      text: "text-blue-600",
    },
    green: {
      bg: "bg-green-100",
      border: " border border-green-400",
      text: "text-green-600",
    },
    gray: {
      bg: "bg-gray-100",
      border: "border border-gray-400",
      text: "text-gray-700",
      pl: "2",
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
    <div className={` ${style.container} ${containerClass}`}>
      <div className={`${style.icon} ${iconClass}`}>
        <Icon />
      </div>

      <div className="">
        <h2 className={`${style.title} ${titleClass}`}>{title}</h2>
        <p
          className={`${style.text} ${textClass} ${colorMap[color]?.text} ${colorMap[color]?.bg} ${colorMap[color]?.border} ${colorMap[color]?.pl}`}>
          {text1}
        </p>
        <p className={`${style.text} ${textClass}`}>{text2}</p>
        {text3 && <p className={`${style.text} ${textClass}`}>{text3}</p>}
      </div>
    </div>
  );
}
