import { Github, LinkedIn, Twitter } from "./Icons/social";
import useThemes from "../hooks/theme.context";
import Link from "next/link";


export default function Footer() {

    const { theme, setTheme } = useThemes()
    const footerLink = [
        { 
            name: 'Products',
            sublink: [
                { name: 'Functions', link: '/info/product' },
                { name: 'Pricing', link: '/info/product' },
                { name: 'Beta', link: '/info/product' },
            ] 
        },
        { 
            name: 'Resources',
            sublink: [
                { name: 'Support', link: '/info/resource' },
                { name: 'Integrations', link: '/info/resource' },
            ] 
        },
        { 
            name: 'Developers',
            sublink: [
                { name: 'Documentation', link: '/info/developer' },
                { name: 'API Reference', link: '/info/developer' },
                { name: 'Open Source', link: '/info/developer' },
            ] 
        },
        { 
            name: 'Company',
            sublink: [
                { name: 'Privacy Policy', link: '/info/company' },
                { name: 'Terms of Service', link: '/info/company' },
            ] 
        }
    ]

    return (

        <footer className="bg-white dark:bg-gray-800 w-full py-8 border-slate-500/25 border-scale-500 border-t">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row flex-wrap items-start justify-start">
                    <div className="px-4 mr-16">
                        <div>
                            <Link href='/' legacyBehavior><a className="flex-shrink-0" href="/">
                                <img className="h-28 w-28" src="/vercel.svg" alt="Workflow" style={{ filter: !theme ? `invert(0)` : `invert(1)` }} />
                            </a></Link>
                        </div>
                        <div className="flex max-w-xs mx-auto items-center justify-between">
                            <Twitter link="https://twitter.com/sandeep10shaw" />
                            <Github link="https://github.com/sandeep-shaw10" />
                            <LinkedIn link="https://www.linkedin.com/in/sandeep10shaw/" />
                        </div>
                    </div>
                    <div className="px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-24 md:gap-8">
                        {
                            footerLink.map((items, index) => <div key={index} className="font-medium pl-0 pb-8 sm:px-8">
                                <div className="text-lg pb-4 text-gray-600 dark:text-gray-100 ">{items.name}</div>
                                {
                                    items.sublink.map((item, key) => <div className="pb-2" key={key}>
                                    <Link href={item.link} className="text-gray-400 hover:text-gray-800 dark:hover:text-white text-sm">{item.name}</Link>
                                    </div>)
                                }
                            </div>)
                        }
                    </div>
                </div>
                <div className="border-slate-500/25 border-scale-500 mt-32 flex justify-between border-t pt-8">
                    <small className="small text-gray-400 ">© next-tailwind-template/{(new Date().getFullYear())}</small>
                    <small>
                        <div className="mb-3">
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                <input onChange={setTheme} checked={theme ? true : false} type="checkbox" name="toggle" id="theme" className="checked:bg-gray-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label htmlFor="theme" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                </label>
                            </div>
                        </div>
                    </small>
                </div>
            </div>
        </footer>

    )
}