import React from 'react'
import { BsCurrencyDollar, BsCashCoin  } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";


const data = [
  {
    label:"Your Total Balance",
    amount:"100,020.00",
    increase:10.6,
    icon:<BsCurrencyDollar size={26}/>
  },
  {
    label:"Total Income",
    amount:"150,020.00",
    increase:9.8,
    icon:<BsCashCoin  size={26}/>
  },
  {
    label:"Total Expense",
    amount:"50,020.00",
    increase:-10.9,
    icon:<SiCashapp size={26}/>
  }
]
const ICON_STYLES =[
  "bg-blue-300 text-blue-800",
  "bg-emerald-300 text-emerald-800",
  "bg-rose-300 text-rose-800"
]

function Stats() {

  return (
    <div className='flex flex-col items-center justify-between gap-8 mb-20 2xl:gap-30 md:flex-row'>
      {
        data.map((item, idx) => (
          <div key={idx + item.label} className='w-full flex items-center justify-between gap-5 px-4 rounded-lg bg-gray-50 border border-gray-100 dark:border-slate-900 dark:bg-slate-800 md:px-8 2xl:min-w-96 py-12'>
            <div className='flex items-center gap-2'>
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${ICON_STYLES[idx]}`}>
                {item.icon}
              </div>
              <div className='space-y-3'>
                <span className='text-gray-600 text-base dark:text-gray-400 md:text-lg'>{item.label}</span>
                <p className='text-2xl font-medium text-black 2xl:text-3xl dark:text-gray-400'>${item.amount}</p>
              </div>
            </div>
            <div>
              <p className={`flex gap-1 items-center text-base md:text-lg font-semibold ${item.increase > 0? 'text-emerald-500' : 'text-red-500'}`}>{item.increase > 0 ? <FaArrowUp/>:<FaArrowDown/>}{Math.abs(item.increase)}%</p>
              <span className='text-xs md:text-sm text-gray-600 dark:text-gray-500'>Compare to last year</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Stats
