export default function Testimonial() {
    return (
        <div role="status" className="animate-pulse border border-gray-200 shadow dark:border-gray-600 p-8 max-w-[30rem] m-auto my-8">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-500 mb-2.5 mx-auto max-w-[20rem]"></div>
            <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-500 max-w-[25rem]"></div>
            <div className="flex justify-center items-center mt-4">
                <svg className="mr-2 w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 mr-3"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}