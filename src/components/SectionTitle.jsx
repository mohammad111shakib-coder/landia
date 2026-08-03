const SectionTitle = ({
  title,
  subtitle,
  containerClass = "",
  titleClass = "",
  subtitleClass = "",
  lineClass = "",
}) => {
  return (
    <div className={`text-center mb-7 ${containerClass}`}>
      <h1 className={`text-3xl text-gray-700 ${titleClass}`}>{title}</h1>
      <div className="relative w-48 mx-auto my-4 z-0 ">
        <div className="h-px bg-gray-300 w-full"></div>
        <div
          className={`h-0.75 bg-black w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2${lineClass}`}></div>
      </div>
      {subtitle && (
        <p className={`mb-2 text-gray-600 ${subtitleClass}`}>{subtitle}</p>
      )}
    </div>
  );
};
export default SectionTitle;
