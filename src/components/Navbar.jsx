import React from "react";
import {useThemeContext} from "../contexts/ThemeContext.jsx"

function Navbar() {
    
    const {theme,setTheme,toggleTheme} = useThemeContext()

  return (
    <div className="h-12 bg-gray-400 dark:bg-slate-900 w-full text-gray-900 dark:text-white flex items-center justify-between px-10">
      <div className="flex gap-10">
        <div className="pr-10">Todoist</div>
        <div className="">Workspace</div>
        <div className="">Template</div>
      </div>
      <div className="flex gap-5">
        <div>
            {
                theme === "dark" ? 
                (<i className="ri-sun-line cursor-pointer" onClick={toggleTheme}></i>) 
                : 
                (<i className="ri-moon-line cursor-pointer" onClick={toggleTheme}></i>)
            }
        </div>
        <div><i class="ri-search-line cursor-pointer"></i></div>
        <div><i class="ri-notification-4-line cursor-pointer"></i></div>
        <div><i class="ri-user-line cursor-pointer"></i></div>
      </div>
    </div>
  );
}

export default Navbar;
