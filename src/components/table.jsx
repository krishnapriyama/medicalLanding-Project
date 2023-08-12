const Table = () => {
   const data = [
     { dept: "Cardiology", dr: "Dr.Bindhu" },
     { dept: "Pediatrician", dr: "NO" },
     { dept: "Surgeon", dr: "Dr.Maheshan/Dr.Biju" },
     { dept: "E N T", dr: "Dr.Tony" },
     { dept: "Dental", dr: "NO" },
     { dept: "Physician", dr: "Dr.Jacob" },
     { dept: "Dermatology", dr: "Dr.Bindhu" },
     { dept: "Ortho", dr: "NO" },
     { dept: "Ophthalmologist", dr: "Dr.Hemanth" },
     { dept: "Gynaecologist", dr: "NO" },
   ];
 
   return (
     <div className="bg-[#FAFBFD] w-full h-full flex justify-center items-center absolute">
       <div className="w-[90%] max-w-sm mt-32">
         <table className="w-full">
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
           <tbody className="bg-white divide-y divide-gray-200">
             {data.map((datas) => (
               <tr key={datas.dept}>
                 <td className="p-4 whitespace-nowrap text-center text-sm">
                   {datas.dept}
                 </td>
                 <td className="p-4 whitespace-nowrap text-center text-sm">
                   {datas.dr === "NO" ? (
                     <span className="text-red-500 font-bold text-sm">NO</span>
                   ) : (
                     datas.dr
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
 