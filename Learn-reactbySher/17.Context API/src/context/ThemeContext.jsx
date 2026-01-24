// For use Context API wee need Wrap The this context Around Our APP in MAIN file

import React, { createContext } from 'react'
import { useState } from 'react'

// export const ThemeDataContext = createContext()
export const ThemeDataChange = createContext()

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light')

  return (
    <div>
        {/* <ThemeDataContext.Provider value='Vishal'> */}
            {/* {props.children} */}
        {/* </ThemeDataContext.Provider> */}

        <ThemeDataChange.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeDataChange.Provider>

    </div>
  )
}

export default ThemeContext