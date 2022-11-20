import { createContext, useContext } from "react"
import useTheme from './useTheme'


// Create Context
const ThemeContext = createContext<any>({
    toggleTheme: ()=>{},
    theme: false
})


export function ThemeProvider(props: any){
    const [theme, setTheme] = useTheme()
    const value = { theme, setTheme }
    return <ThemeContext.Provider value={value} {...props} />
}


// Export Context with resources
export default function useThemes() {
	return useContext(ThemeContext)
}