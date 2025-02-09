import React from 'react'
import './style/scan.css'
import { useState, useContext, useRef, useEffect } from 'react'
import { AppContent } from '../context/AppContext'
import axios from 'axios'
import { marked, parse } from "marked";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const camera = <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46 35C46 36.0609 45.5786 37.0783 44.8284 37.8284C44.0783 38.5786 43.0609 39 42 39H6C4.93913 39 3.92172 38.5786 3.17157 37.8284C2.42143 37.0783 2 36.0609 2 35V13C2 11.9391 2.42143 10.9217 3.17157 10.1716C3.92172 9.42143 4.93913 9 6 9H14L18 3H30L34 9H42C43.0609 9 44.0783 9.42143 44.8284 10.1716C45.5786 10.9217 46 11.9391 46 13V35Z" stroke="#F5F5F5" strokeWidth="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 31C28.4183 31 32 27.4183 32 23C32 18.5817 28.4183 15 24 15C19.5817 15 16 18.5817 16 23C16 27.4183 19.5817 31 24 31Z" stroke="#F5F5F5" strokeWidth="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const upload = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M34 16L24 6M24 6L14 16M24 6V30" stroke="#F5F5F5" strokeWidth="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


const Scan = () => {

  const {userData} = useContext(AppContent)

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [diagnosis, setDiagnosis] = useState("");


  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const {backendUrl} = useContext(AppContent);
  const chatContainerRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true); // Show camera, hide scan button
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      const file = canvasRef.current.toDataURL("image/png") 
      setImage(file); 
      setPreview(URL.createObjectURL(file));

      stopCamera(); // Stop camera after capturing image
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      let stream = videoRef.current.srcObject;
      let tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false); // Reset to initial state
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Create a preview
    }
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please upload an image first.");

      //uplopading image to the server
      
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:4000/api/ai/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important to set for file upload
        },
      });

      const data = response.data.result;
      console.log("API Response:", data);
      setDiagnosis(parseDiagnosis(data)); // Update state with the diagnosis result
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to process image.");
    }
  };

  const parseDiagnosis = (rawData) => {
    if (!rawData) return "No diagnosis available.";

    // Extract JSON part
    const jsonMatch = rawData.match(/\{.*\}/s);
    if (jsonMatch) {
      try {
        const parsedData = JSON.parse(jsonMatch[0]);
        const formattedDiagnosis = `${parsedData.diagnosis}\n\n${parsedData.advice}`;
        return formattedDiagnosis;
      } catch (error) {
        console.error("Error parsing diagnosis JSON:", error);
      }
    }

    return rawData; // Fallback if JSON is not found
  };


  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [message]);

  const getChatbotResponse = async (message) => {
    try {
      const res = await axios.post(backendUrl + "/api/ai/chat", {
        message,
      });
      return res.data.reply;
    } catch (error) {
      console.error("Chatbot error:", error);
      return "Sorry, something went wrong.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessage( (prevMessages) => [...prevMessages, userMessage]);

    const botReply = await getChatbotResponse(input);
    const botMessage = { role: "assistant", content: botReply };

    setMessage( (prevMessages) => [...prevMessages, botMessage]);
    setInput("");
  };

  useEffect(() => {
    if (diagnosis) {
      setMessage((prevMessages) => [
        ...prevMessages,
        { role: "bot", content: `**Diagnosis:**\n${diagnosis}` }
      ]);
    }
  }, [diagnosis]);
  

  return (
    /* SCAN AREA */
    <div className='scan-upper-container'>
      <div className='scan-container'>
        {!image && (
          <div className='scan-area'>
            <div className='scan-element' id="scanBtn" onClick={startCamera}>
                <div className='scan-icon'>{camera}</div>
                <p>Scan from</p>
                <p>device camera</p>
            </div>

            {/* Upload button */}
            <div className='scan-element' id="uploadBtn" onClick={handleUploadClick}>
                <div className='scan-icon'>{upload}</div>
                <p>Upload from device</p>
                <p>(JPG, PNG)</p>
            </div>

            {/* Hidden file input */}
            <input type="file" id="fileInput" accept="image/*" onChange={handleImageUpload} style={{display: "none"}}/>
          </div>
        )}
        <div className='diagnosis-area'></div>

        {/* Image Preview */}
        {preview && (
            <div className="preview-container">
              <p className="preview-text">Image Preview:</p>
              <img src={preview} alt="Preview" className="image-preview" />
            </div>
        )}

        {/* Diagnose Button */}
        <div className="Btn-container">
            {image && (
              <div className="scan-element" id="uploadBtn" onClick={handleUploadClick}>
                <div className="scan-icon">{upload}</div>
                <p>Upload from device</p>
                <p>(JPG, PNG)</p>
              </div>
            )}
            {image && (<button className="diagnose-btn" onClick={handleSubmit}>Diagnose</button>)}
            {image && (
              <div className="scan-element" id="scanBtn">
              <div className="scan-icon">{camera}</div>
              <p>Scan from</p>
              <p>device camera</p>
            </div>
            )}

          <input 
            type="file" 
            id="fileInput" 
            accept="image/*" 
            onChange={handleImageUpload} 
            style={{ display: "none" }} 
          />
        </div>

    </div>

      {/* CHATBOT AREA */}

      <div className='chatbot-container'>
        <div className='form-container'>
            {message.length === 0 && (
                <label for="chatbot-input" className="chatbot-title">What can I help with?</label>
            )}
            <div className="chat-box" ref={chatContainerRef}>
            {Array.isArray(message) && message.map((msg, index) => (
              <div key={index} className="chat">
                {msg?.role === "user" ? (
                  <div className='message user'>
                    <p>{msg?.content}</p>
                  </div>
                ) : (
                  <div className="message bot">
                    <p>{msg?.content}</p>
                  </div>
                )}
              </div>
            ))}
            </div>
            
            <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            id="chatbot-input" className="chatbot-msg" placeholder='Message your AI Doctor'/>
        </div>
      </div>
    </div>
)
}
export default Scan;
