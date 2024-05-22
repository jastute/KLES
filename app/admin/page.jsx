import React from 'react'
import BarChart from '@/components/adminComponents/barchat';
import PieChart from '@/components/adminComponents/piechart';
import LineChart from '@/components/adminComponents/linechart';
import Topbar from '@/components/adminComponents/topbar';

import data from "@/lib/data.json"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement);
import SuccesfulDeproyment from '@/components/succesfulDeproyment';


export const metadata = {
    title: "KLES | ADMIN",
    description: "Generated by create next app",
  };

function Admin() {

    const {
        barData1,
        barOptions1,
        pieChartData,
        pieOptions,
        lineChartData,
        lineChartOptions,
        barChartData,
        barData2,
        barOptions2,
        lineData,
        lineOptions,
        doughnutData1,
        doughnutOptions1,
        doughnutData2,
        doughnutOptions2
      } = data;

  return (
    <div>
            <div className="sm:ml-64 pb-4  bg-gray-200">
                {/* <img src="/images/image.png" alt="bg" className='w-full h-full absolute object-cover' srcset="" /> */}
                <Topbar/>
                {/* <div className='bg-black opacity-80 absolute w-full h-full'></div> */}
            <div className=" mx-2 mt-14 sm:mt-0 md:mx-4 my-10 py-2 md:p-4 border-2 flex  space-y-2 space-x-0 lg:space-x-2 lg:flex-row flex-col items-center justify-center border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                 <BarChart  data={barChartData} options={barOptions1} title={"Job requested (countries)"}/>
                 <PieChart  data={pieChartData} options={pieOptions} title={"Job Application Stats"}/>
            </div>
            <div className="mx-2 md:mx-4 my-10 py-2 md:p-4 border-2  flex  space-y-2 lg:flex-row flex-col border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                 <BarChart  data={barData1} options={barOptions1} title={"Job requested (Categories)"}/>
                 <LineChart  data={lineChartData} options={lineChartOptions} title={"Export Stats"}/>

            </div>
            </div>
    </div>
  )
}

export default Admin







































 {/* <div className='flex flex-col lg:flex-row justify-around items-center h-[90vh]'>
                    <div className='bg-slate-200 w-44 h-44  lg:h-52 lg:w-52 text-center rounded-full  flex flex-col justify-center items-center'>
                        <p className='text-lg md:text-xl font-bold'> Job applications</p>
                            <p>2334</p>
                    </div>
                    <div className='bg-slate-200 w-44 h-44 lg:h-52 lg:w-52 text-center rounded-full  flex flex-col justify-center items-center'>
                        <p className='text-lg md:text-xl font-bold'> Job applications</p>
                            <p>2334</p>
                    </div>
                    <div className='bg-slate-200 w-44 h-44  lg:h-52 lg:w-52 text-center rounded-full  flex flex-col justify-center items-center'>
                        <p className='text-lg md:text-xl font-bold'> Job applications</p>
                            <p>2334</p>
                    </div>
                   

                </div> */}
                {/* <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                </div> */}