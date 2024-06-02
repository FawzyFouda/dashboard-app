import { IoSearchOutline, IoFilterSharp } from "react-icons/io5";


function Info({title, subTitle}) {
  return (
    <div className='flex flex-col justify-between py-8 md:flex-row md:items-center'>
      <div className='mb-6'>
        <h1 className='text-4xl font-semibold text-black mb-2 dark:text-gray-300'>{title}</h1>
        <span className='text-gray-600 dark:text-gray-500'>{subTitle}</span>
      </div>
      <div className="flex items-center gap-4 md:gap-10 2xl:gap-20">
        <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-md p-2">
          <IoSearchOutline className="text-xl text-gray-600 dark:text-gray-500"/>
          <input type="text" placeholder="Search Now ...." className="bg-transparent outline-none text-gray-700 dark:text-gray-500"/>
        </div>
        <button className="flex items-center gap-2 bg-black dark:bg-violet-800 py-2 px-4 rounded text-white">
          <IoFilterSharp size={24}/>
          <span className="text-base">Filter By</span>
        </button>
      </div>
    </div>
  )
}

export default Info
