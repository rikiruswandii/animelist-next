"use client"
import { useState, useEffect } from 'react'

const GetZeroToIndex = (favoriteCount) => {
    const [currentCount, setCurrentCount] = useState(0)
    const increment = Math.ceil(favoriteCount / 1000)
    const intervalDuration = 50

    useEffect(() => {
        let interval;

        if (currentCount < favoriteCount) {
            interval = setInterval(() => {
                setCurrentCount((prevCount) => {
                    const nextCount = prevCount + increment
                    return nextCount >= favoriteCount ? favoriteCount : nextCount
                });
            }, intervalDuration)
        }

        return () => clearInterval(interval)
    }, [currentCount, favoriteCount, increment])

    return currentCount
}

export default GetZeroToIndex



