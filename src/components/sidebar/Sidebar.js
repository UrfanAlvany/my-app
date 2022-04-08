import React from "react"
import "./_sidebar.scss"

import {
   MdExitToApp,
   MdHome,
   MdLibraryBooks

} from "react-icons/md"

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
   return (
      <nav
         className={sidebar ? "sidebar open" : "sidebar"}
         onClick={() => handleToggleSidebar(false)}>
         <li>
            <MdHome size={23} />
            <span>Home</span>
         </li>
         <hr />
        
         <li>
            <MdLibraryBooks  size={23} />
            <span>History</span>
         </li>
         <li>
            <MdExitToApp size={23} />
            <span>Log Out</span>
         </li>

         <hr />
      </nav>
   )
}

export default Sidebar