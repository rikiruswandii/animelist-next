"use client"

import { useState } from "react"

const { default: YouTube } = require("react-youtube")

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const options = {
        width: "300",
        height: "250",
    }

    const Player = () => {
        return (
            <div className="fixed bottom-0 right-0">
                <button
                onClick={handleVideoPlayer}
                className="float-right text-color-primary bg-color-secondary px-3 mb-1">X</button>
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
                <button onClick={handleVideoPlayer} className="rounded fixed bottom-5 right-5 w-32 md:text-xl bg-color-primary text-color-dark hover:bg-color-accent transition-all">Tonton Trailer</button>
        )
    }
    return isOpen ? <Player/> : <ButtonShowPlayer />
}

export default VideoPlayer