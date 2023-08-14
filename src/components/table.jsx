import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios
      .get("https://dev.hospitalbooking.in/doctors", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
      });
  });

  return (
    <div className="bg-[#FAFBFD] w-full flex justify-center  absolute">
      <div className="w-[90%] max-w-xl mt-10">
        <table className="w-full mb-10">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-gray-500 uppercase tracking-wider text-sm  text-center">
                Departments
              </th>
              <th className="p-4 text-gray-500 uppercase tracking-wider text-center text-sm">
                Availability
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  divide-y divide-gray-200">
            {data.map((datas) => (
              <tr key={datas.department}>
                <td className="p-4 capitalize whitespace-nowrap text-center text-md">
                  {datas.department}
                </td>
                <td className="p-4 whitespace-nowrap text-center text-sm">
                  {datas.isAvailable === true ? (
                    <span className="font-semibold text-sm">
                      Dr. {datas.name}
                    </span>
                  ) : (
                    <span className="text-red-500 font-bold text-sm">NO</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
