import { useState } from "react";

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mt-8 ">Monthly Applications</h3>
      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
        className=" mt-4 font-semibold text-white bg-violet-600 hover:bg-violet-500 py-1 px-2 rounded-sm"
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </div>
  );
};

export default ChartsContainer;
