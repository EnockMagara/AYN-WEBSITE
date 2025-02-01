"use client"

import { useState, useEffect } from "react"
import { webkitSpeechRecognition } from "speech-recognition"

export default function VoiceCommandInterface({ onCommand }) {
  const [isListening, setIsListening] = useState(false)
  let recognition = null

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      recognition = new webkitSpeechRecognition()
      recognition.continuous = true
      recognition.interimResults = true

      recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1]
        if (result.isFinal) {
          onCommand(result[0].transcript)
        }
      }
      recognition.start()
    }

    return () => {
      if (recognition) {
        recognition.stop()
      }
    }
  }, [onCommand])

  const toggleListening = () => {
    setIsListening(!isListening)
    if (recognition) {
      if (!isListening) {
        recognition.start()
      } else {
        recognition.stop()
      }
    }
  }

  return (
    <div>
      <button
        onClick={toggleListening}
        className={`px-4 py-2 rounded ${isListening ? "bg-red-500" : "bg-green-500"} text-white`}
      >
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
    </div>
  )
}

