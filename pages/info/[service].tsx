import Graph from "../../components/Skeleton/Graph";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'


interface ServiceType {
    service: string;
}


interface IParams extends ParsedUrlQuery {
    service: string
}


const Info: NextPage<ServiceType> = ({ service }) => {
    return (
        <div className='text-center'>
            <h1 className="text-3xl sm:text-5xl dark:text-gray-300 text-gray-700 mb-4">
            ./info/{service}
            </h1>

            <div>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                NextJS @13.0.4
                </span>
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Tailwind @3.2.4
                </span>
            </button>
            </div>

            <Graph/>
        </div>
    )
}


export const getStaticPaths: GetStaticPaths<IParams> = async() => {
    const path = ['product', 'resource', 'developer', 'company']
    const paths = path.map((serviceName) => ({ params: { service: serviceName } }));
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<ServiceType> = (context) => {
    const { service } = context.params as IParams
    return {
        props: {
            service,
        },
    };
}


export default Info;