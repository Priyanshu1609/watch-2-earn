import React, { useEffect, useState } from 'react';
import { useMoralis } from "react-moralis";

function AddCampaign(){
    const [selectedFile, setSelectedFile] = useState("");
    const [inputs, setInputs] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    const { isAuthenticated, Moralis } = useMoralis();
    const [nftPic, setNftPic] = useState(null);
    const [isSelectedNftPic, setIsSelectedNftPic] = useState(false);

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
	};
    const handleChange = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
    }
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

	const handleSubmission = async (event) => {
        event.preventDefault();
        await getBase64(selectedFile, async (document) => {
        const moralisFile = new Moralis.File(selectedFile.name, { base64: document });
        await moralisFile.save().then(function() {
            console.log(moralisFile.url());
        }, function(error) {
            console.log("Error: ", error);
        });
        const campaign = new Moralis.Object("Campaign");
        campaign.set("Name",inputs.campaignName);
        campaign.set("brandID",inputs.brandID);
        campaign.set("adVideo", moralisFile);
        campaign.set("expiresAt", new Date("2022-02-28T16:00:00Z"));
        campaign.set("startsAt", new Date("2022-02-06T16:00:00Z"));
        campaign.set("Status",'Active');
        await campaign.save()
        .then((campaign) => {
            createReward(campaign.id);
            // Execute any logic that should take place after the object is saved.
            console.log('New campaign created with objectId: ' + campaign.id);
          }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Moralis.Error with an error code and message.
            console.log('Failed to create new object, with error code: ' + error.message);
          });
        });
	};
    const createReward = async (campaignId) => {
        await getBase64(nftPic, async (document) => {
            const moralisFile = new Moralis.File(nftPic.name, { base64: document });
            await moralisFile.save().then(function() {
                console.log(moralisFile.url());
            }, function(error) {
                console.log("Error: ", error);
            });
            const reward = new Moralis.Object("Reward");
            reward.set("campaignId",);
            reward.set("rewardName",inputs.rewardName);
            reward.set("rewardType",inputs.rewardType);
            reward.set("maxQty",inputs.maxQty);
            reward.set("rewardQuantity",inputs.rewardQty);
            reward.set("nftPic",moralisFile);
            await reward.save()
                .then((reward) => {
                    console.log('New campaign created with objectId: ' + reward.id);
                }, (error) => {
                  // Execute any logic that should take place if the save fails.
                  // error is a Moralis.Error with an error code and message.
                  console.log('Failed to create new object, with error code: ' + error.message);
                });

        })
    }
    const selectedNFTPic = async (event) =>{
        if(event.target.files.length){
            setNftPic(event.target.files[0]);
		    setIsSelectedNftPic(true);
        }else{
		    setIsSelectedNftPic(false);

        }
    }
    return (
        <div>
            {isAuthenticated ? (
            <form onSubmit={handleSubmission} className="h-auto p-10 border-2 m-5 rounded-lg inline-block">
                <h1 className="text-center font-bold">Create a new Ad Campaign</h1>
                    <div className="mb-6">
                        <label htmlFor="campaignName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Campaign Name</label>
                        <input onChange={changeHandler} type="text" name="campaignName" id="campaignName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder="Winter Sale 2022" required="" />
                    </div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="user_avatar">Upload Video</label>
                <input onChange={handleChange} className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
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
                <select onChange={changeHandler} name="brandID" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="0" hidden="">Select a Brand</option>
                    <option value="1">McDonalds</option>
                    <option value="2">KFC</option>
                </select>
                <div className="mb-6">
                        <label htmlFor="rewardName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Voucher Name</label>
                        <input onChange={changeHandler} type="text" name="rewardName" id="rewardName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder="Free Voucher NFT" required="" />
                </div>

                <div className="mb-6">
                        <label htmlFor="rewardQty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Voucher Quantity</label>
                        <input onChange={changeHandler} type="text" name="rewardQty" id="rewardQty" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder="Voucher Quantity" required="" />
                </div>
                <div className="mb-6">
                        <label htmlFor="maxQty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maximum Quantity</label>
                        <input onChange={changeHandler} type="text" name="maxQty" id="maxQty" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-none" placeholder="Maximum Quantity" required="" />
                </div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="user_avatar">Upload NFT thumbnail</label>
                <input  onChange={selectedNFTPic}  className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                {isSelectedNftPic ? (
                    <img src={URL.createObjectURL(nftPic)} alt="" />
                ):(
                    <p>Please Select an NFT pic for preview</p>
                )}
                <div className="mt-3">
                    <input type="submit" value="Create a Campaign" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmission}/>
                </div>
            </form>
            ) : (
                <input type="hidden"  />
            )}
        </div>
    );
}
export default AddCampaign;