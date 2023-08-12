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
     <div className="bg-[#FAFBFD] w-full p-10 absolute">
       <div className="w-full py-8">
         <div className="max-w-3xl mx-auto">
           <table className="min-w-full border rounded-lg divide-y divide-gray-200">
             <thead className="bg-gray-100">
               <tr>
                 <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                   Departments
                 </th>
                 <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Availability
                 </th>
               </tr>
             </thead>
             <tbody className="bg-white divide-y divide-gray-200">
               {data.map((datas) => (
                 <tr key={datas.dept}>
                   <td className="px-6 py-4 whitespace-nowrap text-center">
                     {datas.dept}
                   </td>
                   {datas.dr == "NO"?(<td className="px-6 py-4 whitespace-nowrap text-center text-red-500 font-bold">
                     {datas.dr}
                   </td>):(<td className="px-6 py-4 whitespace-nowrap text-center">
                     {datas.dr}
                   </td>)}
                   
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
     </div>
   );
 };
 
 export default Table;
 