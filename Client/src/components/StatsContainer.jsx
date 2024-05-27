import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";

import StatItem from "./StatsItem";

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: "pending applications",
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "text-green-900",
      bgc: "bg-green-300",
      border: "border-green-900",
    },
    {
      title: "interviews scheduled",
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: "text-blue-900",
      bgc: "bg-blue-300",
      border: "border-blue-900",
    },
    {
      title: "jobs declined",
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: "text-red-900",
      bgc: "bg-red-300",
      border: "border-red-900",
    },
  ];
  return (
    <div className="flex justify-center items-start gap-8  ">
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </div>
  );
};
export default StatsContainer;
