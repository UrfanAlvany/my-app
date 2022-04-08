import React from "react"
import "./_header.scss"

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"

const Header = ({ handleToggleSidebar }) => {
   return (
      <div className="header ">
         <FaBars
            className="header__menu"
            size={26}
            onClick={() => handleToggleSidebar()}
         />

         <form>
            <input type="text" placeholder="Search" />
            <button type="submit">
               <AiOutlineSearch size={22} />
            </button>
         </form>
      </div>
   )
}

export default Header