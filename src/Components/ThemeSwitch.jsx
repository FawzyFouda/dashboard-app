import { useContext, useState } from 'react'
import {DarkmodeContext} from '../DarkmodeContext/DarkmodeContext'
function ThemeSwitch() {
  let {theme, SetTheme} = useContext(DarkmodeContext)
  const [isDarkmode, setIsDarkmode] = useState(theme === 'dark')
  function toggleTheme(){
    const newTheme = isDarkmode? 'light':'dark'
    setIsDarkmode(!isDarkmode);
    SetTheme(newTheme)
    localStorage.setItem('theme',newTheme)

  }
  return (
    <div>
      <div className={`switch ${isDarkmode ? 'light':'dark' } cursor-pointer w-[40px] rounded-[20px] h-[16px]  relative py-[2px] flex justify-center items-center ${isDarkmode}?'light':'dark'`} onClick={toggleTheme}>
        <div className={`ball ${isDarkmode ? 'dark':'light' } absolute rounded-[50%] w-[14px] h-[14px] right-0 me-[1.5px]`}></div>
      </div>
    </div>
  )
}

export default ThemeSwitch
