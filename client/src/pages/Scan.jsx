import React from 'react'
import './style/scan.css'
import { useState } from 'react'
import { AppContent } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
const camera = <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46 35C46 36.0609 45.5786 37.0783 44.8284 37.8284C44.0783 38.5786 43.0609 39 42 39H6C4.93913 39 3.92172 38.5786 3.17157 37.8284C2.42143 37.0783 2 36.0609 2 35V13C2 11.9391 2.42143 10.9217 3.17157 10.1716C3.92172 9.42143 4.93913 9 6 9H14L18 3H30L34 9H42C43.0609 9 44.0783 9.42143 44.8284 10.1716C45.5786 10.9217 46 11.9391 46 13V35Z" stroke="#F5F5F5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 31C28.4183 31 32 27.4183 32 23C32 18.5817 28.4183 15 24 15C19.5817 15 16 18.5817 16 23C16 27.4183 19.5817 31 24 31Z" stroke="#F5F5F5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
const upload = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M34 16L24 6M24 6L14 16M24 6V30" stroke="#F5F5F5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


const Scan = () => {

  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const {backendUrl} = useContext(AppContent)

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
    setMessage([...message, userMessage]);

    const botReply = await getChatbotResponse(input);
    const botMessage = { role: "assistant", content: botReply };

    setMessage([...message, userMessage, botMessage]);
    setInput("");
  };
  

  return (
    <div className='scan-upper-container'>
      <div className='scan-container'>
        <div className='scan-area'>
            <div className='scan-element' id="scanBtn">
                <div className='scan-icon'>{camera}</div>
                <p>Scan from</p>
                <p>device camera</p>
            </div>
            <div className='scan-element' id="uploadBtn">
                <div className='scan-icon'>{upload}</div>
                <input type="file" id="imageInput" accept="image/*"/>
                <p>(JPG, PNG, IMG)</p>
            </div>
        </div>
        <div className='diagnosis-area'></div>
      </div>
      <div className='chatbot-container'>
        <div className='form-container'>
            <label for="chatbot-input" className="chatbot-title">What can I help with?</label>
            <br></br>
            <div className="chat-box">
            {Array.isArray(message) && message.map((msg, index) => (
              <p key={index} className={msg.role === "user" ? "user-msg" : "bot-msg"}>
                <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
              </p>
            ))}
            </div>
            <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => {
              if (e.key === "Enter") {
                console.log("Message sent");
                handleSend();
              }
            }}
            id="chatbot-input" className='chatbot-msg' placeholder='Message your AI Doctor'/>
        </div>
      </div>
    </div>
  )
}

export default Scan
