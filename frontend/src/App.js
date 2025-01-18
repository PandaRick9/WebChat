import React, { useState } from "react";
import RoomList from "./components/RoomList";
import ChatRoom from "./components/ChatRoom";

const App = () => {
    const [currentRoom, setCurrentRoom] = useState(null);

    return (
        <div>
            <h1>Real-Time Chat</h1>
            {!currentRoom ? (
                <RoomList onSelectRoom={setCurrentRoom} />
            ) : (
                <ChatRoom room={currentRoom} onBack={() => setCurrentRoom(null)} />
            )}
        </div>
    );
};

export default App;