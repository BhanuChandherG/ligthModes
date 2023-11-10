import React, { useState} from 'react'
import "./LightDarkMode.css"

function LightDarkMode() {
    const [isLightTheme, setIsLightTheme] = useState(true)

    const ButtonText = isLightTheme ? "Dark Mode" : "Light Mode"

    const onClickButton=()=>{
        setIsLightTheme(prevState => !prevState)
    }

    const modeName = isLightTheme ? "lightMode" : "darkMode"

  return (

    <div className='remo'>
    <div className='App-container'> 
    <div className="bg-container">      
            <div className={`container ${modeName}`}> 
            <h2>Click To Change Mode.</h2>
            <button className="button "onClick={onClickButton}>{ButtonText}</button>
        </div>
        </div>
        </div>
        </div> 
  )
}

export default LightDarkMode