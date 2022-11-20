export default function Graph() {
    return (
        <div role="status" className="m-auto p-4 my-8 max-w-sm rounded border border-gray-300 shadow animate-pulse md:p-6 dark:border-gray-600">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32 mb-2.5"></div>
            <div className="mb-10 w-48 h-2 bg-gray-300 rounded-full dark:bg-gray-600"></div>
            <div className="flex items-baseline mt-4 space-x-6">
                <div className="w-full h-72 bg-gray-300 rounded-t-lg dark:bg-gray-600"></div>
                <div className="w-full h-56 bg-gray-300 rounded-t-lg dark:bg-gray-600"></div>
                <div className="w-full h-72 bg-gray-300 rounded-t-lg dark:bg-gray-600"></div>
                <div className="w-full h-64 bg-gray-300 rounded-t-lg dark:bg-gray-600"></div>
                <div className="w-full h-80 bg-gray-300 rounded-t-lg dark:bg-gray-600"></div>
                <div className="w-full h-72 bg-gray-300 rounded-t-lg dark:bg-gray-600"></div>
                <div className="w-full h-80 bg-gray-300 rounded-t-lg dark:bg-gray-600"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}