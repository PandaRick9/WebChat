import React from "react";

const Message = ({ sender, content }) => (
    <div>
        <strong>{sender}: </strong>
        <span>{content}</span>
    </div>
);

export default Message;
