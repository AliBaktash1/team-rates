
import React from 'react';
import te from '../assets/TeamLogo.png';

const TeamTable = () => {
  return (
    <>

      <table className="hidden md:table mx-auto w-full">
        <thead className="text-green-600">
          <tr>
            <th className="px-4 py-2 text-center">رتبه</th>
            <th className="px-4 py-2 text-center"></th>
            <th className="px-4 py-2 text-center">بازی</th>
            <th className="px-4 py-2 text-center">برد</th>
            <th className="px-4 py-2 text-center">مساوی</th>
            <th className="px-4 py-2 text-center">باخت</th>
            <th className="px-4 py-2 text-center">گل زده</th>
            <th className="px-4 py-2 text-center">گل خورده</th>
            <th className="px-4 py-2 text-center">تفاضل</th>
            <th className="px-4 py-2 text-center">امتیاز</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(3)].map((_, index) => (
            <tr key={index} className="border-b text-gray-500">
              <td className="px-4 py-2 text-center">-</td>
              <td className="px-4 py-2 text-center">
                <img src={te} alt="team logo" className="inline-block w-[22px] h-[22px] mx-2" />
                نام تیم
              </td>
              <td className="px-4 py-2 text-center">0</td>
              <td className="px-4 py-2 text-center">0</td>
              <td className="px-4 py-2 text-center">0</td>
              <td className="px-4 py-2 text-center">0</td>
              <td className="px-4 py-2 text-center">11</td>
              <td className="px-4 py-2 text-center">5</td>
              <td className="px-4 py-2 text-center">+6</td>
              <td className="px-4 py-2 text-center text-blue-600">0</td>
            </tr>
          ))}
        </tbody>
      </table>


      <table className="md:hidden mx-auto w-full">
        <thead className="text-green-600">
          <tr>
            <th className="px-4 py-2 text-center">رتبه</th>
            <th className="px-4 py-2 text-center"></th>
            <th className="px-4 py-2 text-center">بازی</th>
            <th className="px-4 py-2 text-center">گل ها</th>
            <th className="px-4 py-2 text-center">امتیاز</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(4)].map((_, index) => (
            <tr key={index} className="border-b text-gray-500">
              <td className="px-4 py-2 text-center">-</td>
              <td className="px-4 py-2 text-center">
                <img src={te} alt="team logo" className="inline-block w-[22px] h-[22px] mx-2" />
                نام تیم
              </td>
              <td className="px-4 py-2 text-center">0</td>
              <td className="px-4 py-2 text-center">11:5</td>
              <td className="px-4 py-2 text-center text-blue-600">0</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TeamTable;
