import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import { useRouter } from 'next/router';
import Modal from 'components/Modal';

const Video = () => {
    const router = useRouter();
    const [modal, setModal] = useState(false);

    return <div className="absolute h-screen w-full top-0 left-0 overflow-hidden">
        <ReactPlayer
            url='/video.mp4'
            width='100%'
            height='100%'
            playing={true}
            light={true}
            previewTabIndex={5}
            playIcon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            }
            onEnded={() => setModal(true)}
        />
        {modal && <Modal />}
    </div>;
};

export default Video;
