import React from 'react';
import AddBrand from "components/Admin/AddBrand";
import AddCampaign from "components/Admin/AddCampaign";
import ShowVideos from "components/Admin/ShowVideos";


function admin() {
    return (
        <div className="container mx-auto">
            <div className="container flex mx-auto justify-center">
                <div className='inline-block w-2/5 justify-start'>
                    <AddBrand />
                </div>
                <div className='inline-block w-2/5 justify-start'>
                    <AddCampaign />
                </div>
            </div>
        </div>
    );
}

export default admin;