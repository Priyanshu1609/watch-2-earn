import React, { useState } from 'react';
import { useMoralis } from "react-moralis";

function AdminPanel(){
    const [selectedFile, setSelectedFile] = useState("");
    const [isSelected, setIsSelected] = useState(false);
    const [viewVideos, setViewVideos] = useState(false);
    const [videos, setVideos] = useState([]);
    const {
        Moralis
    } = useMoralis();
    const { authenticate, isAuthenticated, user, logout } = useMoralis();
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

    async function getBase64(file, _callback) {
        let document = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            document = reader.result;
            _callback(document);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };

	const handleSubmission = async () => {
        await getBase64(selectedFile, async (document) => {
        const moralisFile = new Moralis.File(selectedFile.name, { base64: document });
        await moralisFile.save().then(function() {
            console.log(moralisFile.url());
        }, function(error) {
            console.log("Error: ", error);
        });
        const campaign = new Moralis.Object("Campaign");
        campaign.set("Name","Test Campaign");
        campaign.set("brandID","2");
        campaign.set("adVideo", moralisFile);
        campaign.set("expiresAt","2022-02-28");
        campaign.set("startsAt","2022-02-04");
        campaign.set("Status",'Active');
        await campaign.save();
            console.log(result)
        });
	};

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

    const createBrand = async () => {
        const brand = new Moralis.Object("Brand");
        brand.set("Name","Test Campaign");
        brand.set("Status","Active");
        brand.set("contractAddress", "0xB6813CDD12d2dd710f4837cf3cBd335116471c4B");
        brand.set("category","Food");
        await brand.save();
            console.log(result)
    }
    return (
    <div>
        {isAuthenticated ? (
        <div className='container mx-auto'>
            <div className="w-2/5 h-auto p-10 border-2 m-5 rounded-lg inline-block">
                <h1 className="text-center font-bold">Create a new Ad Campaign</h1>
                <div className="mb-6">
                    <label htmlFor="campaignName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Campaign Name</label>
                    <input type="text" id="campaignName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder="Winter Sale 2022" required="" />
                </div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="user_avatar">Upload Video</label>
                <input  onChange={changeHandler} className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A Video Will be uploaded to the Moralis Server</div>
                {isSelected ? (
                    <div>
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>
                            lastModifiedDate:{' '}
                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p>
                    </div>
                ) : (
                    <p>Select a file to show details</p>
                )}
                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a Brand</label>
                <select id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>McDonalds</option>
                    <option>KFC</option>
                </select>
                <div className="mt-3">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmission}>Submit</button>
                </div>
            </div>
            <div className="w-2/5 h-auto p-10 border-2 m-5 rounded-lg inline-block">
                <h1 className="text-center font-bold">Create a new Brand</h1>
                <div className="mb-6">
                    <label htmlFor="brandName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Brand Name</label>
                    <input type="text" id="brandName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder="McDonalds" required="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="contractAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contract Address</label>
                    <input type="text" id="contractAddress" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder="0x3DA9193...3E1" required="" />
                </div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a Category</label>
                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Food</option>
                    <option>Automobiles</option>
                    <option>Retail</option>
                    <option>Wholesale</option>
                </select>
                <div className="mt-3">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </div>
            <div>
				<button onClick={retrieveFiles}>Get Campaigns</button>
			</div>
            {viewVideos ? (
            <div>
                {videos.map((videos, index) => (
                    <div key={index} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <video className="rounded-t-lg" alt="">
                                <source src={videos.get('adVideo')["_url"]}/>
                            </video>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{videos.get('Name')}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            ) : (
                <input type="hidden"  />
            )}
        </div>
        ) : (
            <p>Please Log in first</p>
        )}
    </div>
    );
}
export default AdminPanel;