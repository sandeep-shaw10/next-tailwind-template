import { useEffect, useState } from "react"


const THEME = {
    DARK: `dark`,
    LIGHT: `light`
}


const keyVal = 'my-app-theme'


const useTheme = () => {
    const [dark, setDark] = useState<boolean>(false)
    const toggleTheme: ()=>void = () => setDark((curVal) => {
        return !curVal
    })

    // System Theme
    // useEffect(() => {
    //     const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
    //     setDark(matches)
    // }, [])

    // Last Saved Theme
    useEffect(() => {
        try{
            const theme = localStorage.getItem(keyVal)
            if(theme === THEME.DARK) setDark(true)
        }catch(err){
            localStorage.setItem(keyVal, THEME.LIGHT)
        }
    }, [])

    useEffect(()=>{
        try{
            localStorage.setItem(keyVal, dark ? THEME.DARK: THEME.LIGHT)
            let html = window.document.documentElement
            let val = dark ? THEME.DARK : THEME.LIGHT
            html.classList.add(val)
            html.classList.remove((val===THEME.LIGHT)?THEME.DARK:THEME.LIGHT)
        }
        catch(err){
            setDark(!dark)
        }
    }, [dark])
    return {dark, toggleTheme}
}


export default useTheme