import React from "react";

const RoomList = ({ onSelectRoom }) => {
    const rooms = ["General", "Tech", "Gaming"]; // Пример комнат

    return (
        <div>
            <h2>Available Rooms</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room} onClick={() => onSelectRoom(room)}>
                        {room}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;
