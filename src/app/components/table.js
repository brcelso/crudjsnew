import data from '../database/data.json'

export default function Table(){ 
    return (
        <table className="min-w-full table auto rounded-md">
        <thead>
            <tr className="bg-gray-500">
                <th className="px-16 py-2">
                <span className="text-gray-200">Event</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-200">TypeOf</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-200">Start</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-200">End</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-200">Status</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-200">Actions</span>
                </th>
                
            </tr>
        
        </thead>
            <tbody className="bg-gray-500">
            {
                data.map((obj,i) => <Tr {...obj} key={i} />)
            }
            </tbody>
        </table>
    
    )

}

function Tr({id, event, typeOf, start, end, status}){

    return (

        <tr className="bg-gray-500 text-center">
            <td className="px-16 py-2 flex flex-row items-center">
            <img src="#" alt=""/>
            <span className="text-center ml-2 font-semibold">{event || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
        <span>{typeOf || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
        <span>0{start || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
        <span>{end || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
        <button className="flex justify-center text-md bg-green-500 text-white px-8 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">{status || "Unknown"}</button>
        </td>
        <td className="px-16 py-2 flex justify-around gap-5">
        <button className="flex justify-center text-md bg-yellow-500 text-white px-8 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Edit</button>
        <button className="flex justify-center text-md bg-red-500 text-white px-8 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Delete</button>

            </td>
        </tr>

    )

}


    