const StatItem = ({ count, title, icon, color, bgc, border }) => {
  return (
    <div
      className={`bg-white rounded-sm w-[75%] lg:w-[27%] h-[160px] p-6 capitalize flex flex-col justify-start items-start gap-4 border-b-4 ${border}`}
    >
      <header className="flex justify-between items-center w-full">
        <span className={`${color} text-3xl font-semibold`}>{count}</span>
        <span className={`${bgc} ${color} text-xl rounded-sm p-4 `}>
          {icon}
        </span>
      </header>
      <h5 className="font-medium">{title}</h5>
    </div>
  );
};

export default StatItem;
