import Link from "next/link"
import { useState } from "react"
import useWindowSize from "../hooks/useWindowSize"
import useThemes from "../hooks/theme.context";
import { Hamburger } from "./Icons/tool";


export default function Navbar() {

    const [open, isOpen] = useState(false)
    const size = useWindowSize()
    const breakpoint = 767
    const small = size < breakpoint ? true : false
    const { theme, setTheme } = useThemes()
    const filterNegative = {
        filter: !theme ? `invert(0)` : `invert(1)`
    }
    
    const navLink = [
        { name:'About', link:'/about' },
        { name:'Blog', link:'/blog' },
        { name:'Reference', link:'/reference' },
        { name:'Contact', link:'/contact' },
    ]

    return (
        <div>
            <nav className="bg-white dark:bg-gray-800  shadow ">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full justify-between flex items-center">
                            <Link href="/" legacyBehavior><a className="flex-shrink-0" >
                                <img className="h-20 w-20" src="/vercel.svg" alt="Workflow" style={filterNegative} />
                            </a></Link>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {
                                        navLink.map((page, index) => <Link key={index} href={page.link} legacyBehavior><a className="text-gray-400  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            {page.name}
                                        </a></Link>)
                                    }
                                    <div className="relative inline-block w-10 py-2 m-auto align-middle select-none">
                                        <input onChange={setTheme} checked={theme ? true : false} type="checkbox" name="toggle" id="theme" className="checked:bg-gray-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                        <label htmlFor="theme" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden" style={{ transform: open ? `rotate(90deg)`: `rotate(0deg)` }}>
                            <button className="text-gray-800 dark:text-white hover:text-gray-400 inline-flex items-center justify-center p-2 rounded-md focus:outline-none" onClick={() => isOpen(x => !x)}>
                                    <Hamburger />
                            </button>
                        </div>
                    </div>
                </div>
                { small && <div className="md:hidden" style={{ display: open ? `block` : `none` }}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {
                            navLink.map((page, index) => <div key={index} className="text-gray-400  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                <Link href={page.link}> {page.name} </Link>
                            </div>
                            )
                        }
                        <div className="pl-2">
                            <div className="relative inline-block w-10 py-2 m-auto align-middle select-none">
                                <input onChange={setTheme} checked={theme ? true : false} type="checkbox" name="toggle" id="theme" className="checked:bg-gray-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label htmlFor="theme" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>}
            </nav>
        </div>
    )
}