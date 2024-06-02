import { createContext, useState } from "react";

export let DarkmodeContext = createContext()

function DarkmodeContextProvider(props){
    const [theme, setTheme] = useState(localStorage.getItem('theme')?? 'light')
    
        function SetTheme(val){
             setTheme(val)
        }

        
    return(
        <DarkmodeContext.Provider value={{SetTheme, theme}}>
            {props.children}
        </DarkmodeContext.Provider>
    )
    
    
}


export default DarkmodeContextProvider