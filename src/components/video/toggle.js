import React from 'react'
import "./_toggle.scss"
// const Toggle = (props) => (
//     <input type = "checkbox" />
// )


const Toggle = ({toggle,handleTogglecom}) => {
    return ( 
    <nav classname = "toggle"
        onClick = {() => handleTogglecom(false)}>
        <form > 
        <label >
            Comment:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        </form>

    
       
        
    </nav>
      
    )
}


export default Toggle