"use client"

import { useState } from "react"

const { default: YouTube } = require("react-youtube")

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const options = {
        width: "250",
        height: "200",
    }

    const Player = () => {
        return (
            <div className="fixed bottom-0 right-0 mr-4 mb-4 md:mr-14">
                <button
                onClick={handleVideoPlayer}
                className="float-right text-color-accent border-collapse border-2 border-opacity-10 border-color-accent bg-color-primary hover:font-bold transition-all px-3 mb-1 rounded">X</button>
                <YouTube
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo()}
                opts={options}
                onError={() => alert("Video is broken. Please try another video.")}
                />
            </div>
        )
    }

    const ButtonShowPlayer = () => {
        return (
          <button
            onClick={handleVideoPlayer}
            className="rounded fixed text-nowrap md:bottom-32 bottom-16 right-5 md:w-40 w-32 md:text-xl bg-color-primary text-color-accent border-collapse border-2 border-opacity-10 border-color-accent hover:font-bold transition-all md:mx-10"
          >
            Tonton Trailer
          </button>
        );
    }
    return isOpen ? <Player/> : <ButtonShowPlayer />
}

export default VideoPlayer