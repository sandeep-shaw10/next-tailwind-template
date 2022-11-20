import { createContext, useContext } from "react"
import useTheme from './useTheme'


type ThemeContextType = {
    setTheme: ()=>void,
    theme: boolean
}


const defaultThemeContext: ThemeContextType = {
    setTheme: ()=>{},
    theme: false
}

// Create Context
const ThemeContext = createContext<ThemeContextType>(
    defaultThemeContext
)


export const ThemeProvider = ({children}: { children: React.ReactNode }) => {
    const {dark, toggleTheme} = useTheme()
    const value = {
        theme: dark,
        setTheme: toggleTheme
    }
    return <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
}


// Export Context with resources
export default function useThemes() {
	return useContext(ThemeContext)
}