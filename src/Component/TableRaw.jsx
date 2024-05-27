import React from 'react';
import trophy from "../Image/award.png"

const DataTable = () => {
    
  const data = [
    { rank: 1, name: 'Selling with re entr', calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercentage: 0.65, price: '-', action: 'View' },
    { rank: 2, name: 'strategy_name', calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercentage: 0.64, price: 500, action: 'Buy' },
    { rank: 3, name: 'Based on premium and', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercentage: 0.64, price: '-', action: 'View' },
    { rank: 4, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: '-', action: 'View' },
    { rank: 5, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: '-', action: 'View' },
    { rank: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: 0.49, price: '-', action: 'View' },
    { rank: 7, name: 'strategy_name', calmarRatio: 2.76, overallProfit: 267867.5, avgDailyProfit: 218.49, winPercentage: 0.6, price: '-', action: 'View' },
    { rank: 8, name: 'Wait and trade_Save', calmarRatio: 2.62, overallProfit: 178252.5, avgDailyProfit: 161.9, winPercentage: 0.63, price: '-', action: 'View' },
    { rank: 9, name: 'iron condor', calmarRatio: 2.44, overallProfit: 176420, avgDailyProfit: 137.51, winPercentage: 0.65, price: '-', action: 'View' },
    { rank: 10, name: 'strategy_name', calmarRatio: 2.04, overallProfit: 244555, avgDailyProfit: 198.66, winPercentage: 0.62, price: '-', action: 'View' },
  ];

  return (

    <div className='bg-[#EBF0F8]'>
        <div className='py-16 text-center'> 
            <h1 className='text-[3.5rem]'>LeaderBoards</h1>
        </div>

        <div className='w-full h-[15rem] flex justify-center'>
            {
                data.map((data) => {
                    if(data.rank <= 3){
                        return (
                        <div key={data.rank} className='relative w-[22rem] h-[13rem] border-2 border-gray-400 rounded-3xl mx-4'>
                        <div className='absolute right-5 top-[-35px]'>
                            <img src={trophy} alt="" className='w-24' />
                        </div>
                        <div className='mt-2 ml-2 text-[20px] font-semibold'>
                            <p>{data.name}</p>
                        </div>
                        <div className='mt-2 ml-2 text-[35px]'>
                        <p className='text-[15px] '>Profite</p>
                         <p className='text-blue-500'>{data.overallProfit}</p>
                        </div>
                        <div className='mt-2 ml-4 text-[18px] flex'>
                            <div>
                            <p>Ratio</p>
                            <p className='text-[24px] text-green-600 font-semibold'>{data.calmarRatio}</p>
                            </div>
                            <div className='ml-4'>
                            <p>AVG. Daily Profit</p>
                            <p className='text-[24px] ml-4 text-green-600 font-semibold'>{data.avgDailyProfit}</p>
                            </div>
                        </div>
                    </div>
                 ) }
                })
            }
                
        </div>
    <div className='flex w-full justify-center h-16 items-center'>
        <div className='w-[66%] pb-4'>
            <h1 className="text-[2rem] font-semibold" >Basic Backtest</h1>
        </div>

    </div>
    <div className="overflow-x-auto w-full flex justify-center">
        <div className='border-2 border-blue-500 p-4 bg-white rounded-lg'>
      <table className="min-w-[60%] divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-[#ECF0F9]">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-m font-semibold text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th scope="col" className="px-6 py-3 text-left text-m font-semibold text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-m font-semibold text-gray-500 uppercase tracking-wider">
              Calmar Ratio
            </th>
            <th scope="col" className="px-6 py-3 text-left text-m font-semibold text-gray-500 uppercase tracking-wider">
              Overall Profit
            </th>
            <th scope="col" className="px-6 py-3 text-left text-m font-semibold text-gray-500 uppercase tracking-wider">
              Avg. Daily Profit
            </th>
            <th scope="col" className="px-6 py-3 text-left text-m font-semibold text-gray-500 uppercase tracking-wider">
              Win % (Day)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-m font-semibold text-gray-500 uppercase tracking-wider">
              Price (Rs)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-m font-semibold text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index}>
              <td className={`px-6 py-4 whitespace-nowrap font-semibold ${row.action === 'Buy' ? ' text-green-500' : 'text-blue-500'}`}>{row.rank}</td>
              <td className={`px-6 py-4 whitespace-nowrap font-semibold ${row.action === 'Buy' ? ' text-green-500' : 'text-blue-500'}`}>{row.name}</td>
              <td className={`px-6 py-4 whitespace-nowrap font-semibold ${row.action === 'Buy' ? ' text-green-500' : 'text-blue-500'}`}>{row.calmarRatio}</td>
              <td className={`px-6 py-4 whitespace-nowrap font-semibold ${row.action === 'Buy' ? ' text-green-500' : 'text-blue-500'}`}>{row.overallProfit}</td>
              <td className={`px-6 py-4 whitespace-nowrap font-semibold ${row.action === 'Buy' ? ' text-green-500' : 'text-blue-500'}`}>{row.avgDailyProfit}</td>
              <td className={`px-6 py-4 whitespace-nowrap font-semibold ${row.action === 'Buy' ? ' text-green-500' : 'text-blue-500'}`}>{row.winPercentage}</td>
              <td className={`px-6 py-4 whitespace-nowrap font-semibold ${row.action === 'Buy' ? ' text-green-500' : 'text-blue-500'}`}>{row.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className={`px-4 py-2 rounded-md ${row.action === 'Buy' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                  {row.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
};

export default DataTable;