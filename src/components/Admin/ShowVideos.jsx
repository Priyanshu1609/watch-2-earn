import React, { useState } from 'react';
import { useMoralis } from "react-moralis";

function ShowVideos(){
    const [viewVideos, setViewVideos] = useState(false);
    const [videos, setVideos] = useState([]);
    const { Moralis, isAuthenticated } = useMoralis();
    const retrieveFiles = async () => {
        const campaign = new Moralis.Object.extend("Campaign");
        const query = new Moralis.Query(campaign);
        query.equalTo("brandID", "2");
        const results = await query.find();
        alert("Successfully retrieved " + results.length + " campaigns.");
        var videos = [];
        for (let i = 0; i < results.length; i++) {
            const object = results[i];
            videos.push(object);
        }
        setViewVideos(true);
        setVideos(videos);
    }
    return (
        <div >
            <button type="button" onClick={retrieveFiles} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
            {viewVideos ? (
                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Ad Campaign Name
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Category
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Price
                                            </th>
                                            <th scope="col" className="p-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {videos.map((videos, index) => (
                                            <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{videos.get('Name')}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Desktop PC</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$1999</td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <a href={videos.get('adVideo')["_url"]} className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                </td>
                                            </tr>
                                            // {videos.get('adVideo')["_url"]}
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <input type="hidden"  />
            )}
      </div>
    );
  }
export default ShowVideos;