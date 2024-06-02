import React from 'react'
import Navbar from '../Components/Navbar'
import Info from '../Components/Info'
import Stats from '../Components/Stats'
import Cart from '../Components/Cart'
import Transactions from '../Components/Transactions'
import Accounts from '../Components/Accounts'
import DoughnutChart from '../Components/DoughnutChart'

function Home() {
  return (
    <div className="w-full px-6 md:px-20 bg-white dark:bg-slate-900">
        <Navbar/>
        <div className='px-0 md:px-5 2xl:px-20'>
            <Info title="Dashboard" subTitle="Monitor your financial activities"/>
            <Stats/>
            <div className='w-full flex flex-col-reverse md:flex-row  md:flex-flow items-center gap-10'>
                <Cart/>
                <DoughnutChart/>
            </div>
            <div className='flex flex-col-reverse md:flex-row md:flex-flow gap-0 md:gap-10 2xl:gap-20'>
                <Transactions/>
                <Accounts/>
            </div>
        </div>
    </div>

  )
}

export default Home
