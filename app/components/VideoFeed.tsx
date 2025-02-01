"use client"

import { useRef, useEffect } from "react"

export default function VideoFeed() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch((error) => console.error("Error accessing the camera:", error))
    }
  }, [])

  return (
    <div className="relative">
      <video ref={videoRef} autoPlay playsInline className="w-full h-auto" />
    </div>
  )
}

