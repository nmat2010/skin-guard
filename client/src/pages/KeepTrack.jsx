import React, { useState } from 'react';
import Modal from 'react-modal';
import './style/keep-track.css';
Modal.setAppElement('#root');

const KeepTrack = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tracks, setTracks] = useState([]);
    const [trackCount, setTrackCount] = useState(0);
const handleAddTrack = () => {
    const newTrack = { 
      completed: false, 
      name: trackCount === 0 ? "Start" : `Track ${trackCount}` 
    };
    setTracks([...tracks, newTrack]); 
    setTrackCount(trackCount + 1); 
};
const handleTrackClick = (index) => {
    const updatedTracks = [...tracks];
    updatedTracks[index].completed = !updatedTracks[index].completed; 
    updatedTracks[index].name = updatedTracks[index].completed ? `Track ${index + 1}` : "Start"; 
    setTracks(updatedTracks);
    setIsModalOpen(true);
};
const handlePopUp = (index) => {
    const updatedTracks = [...tracks];
    updatedTracks[index].completed = !updatedTracks[index].completed; 
    setTracks(updatedTracks);
    setIsModalOpen(true);
};
const closeModal = () => {
    setIsModalOpen(false); 
};
const saveModal = () => {
    setIsModalOpen(true);
};
const currentDate = new Date().toLocaleDateString();
    
    return(
        <div className="track-container">
            <div className="track-header">
                <h2>Skin Care Track</h2>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                <button className="create-track" onClick={handleAddTrack}>
                    CREATE A TRACK 
                </button>
                <img src="addition.jpg" alt="Icon" style={{ width: '40px', height: '42.5px', marginRight: '10px' }} />
                </div>
            </div>
            <div className = "track-list">
                {tracks.length > 0 ? (
                    tracks.map((track, index) => (
                        <div key={index} className="track-item">
                            <div className="track-circle" onClick={() => handlePopUp(index)}>
                                {track.name}
                                <div className = "absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2">
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Heyy! Let's keep tracks on our journey.</p>
                )}
            </div>
            <Modal 
                isOpen={isModalOpen} 
                onRequestClose={closeModal} 
                contentLabel="Track Popup"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div>
                <h2>Track Details</h2>
                <p>More information about the selected track.</p>
                <p>Current Date: {currentDate}</p>
                <p>Note for the date</p>
                <textarea className="textarea" placeholder='Enter the message'></textarea>
                <p style={{ marginTop: '15px' }}>Let's upload our improvement efforts:</p>
                <img src="skinKeepTrack.jpg" alt="default image" style={{ width: '200px', height: '200px', marginTop: '10px' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <button className="close-button" onClick={saveModal}>Save</button>
                    <button className="close-button" onClick={closeModal}>Close</button>
                </div>
                </div>
            </Modal>
        </div>
    );
};
export default KeepTrack