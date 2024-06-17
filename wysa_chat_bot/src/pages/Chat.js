import React, { useState } from 'react';
import bg_colors from '../bg_colors';

const Chat = () => {

    var [BG, setBG] = useState({
        Body_bg: bg_colors[0].Body_BG,
        Bubble_bg: bg_colors[0].Bubble_BG
    });

    const ChangeBg = () => {
        var k = Math.floor(Math.random() * (bg_colors.length));
        var obj = bg_colors[k];
        setBG({
            Body_bg: obj.Body_BG,
            Bubble_bg: obj.Bubble_BG
        })
    }

    var backGroundChange = {
        background: BG.Body_bg,
    }

    var bubble = {
        background: BG.Bubble_bg,
    }

    return (
        <div className='body' style={backGroundChange}>
            <button className='component' onClick={ChangeBg}>
                Lets change BG
            </button>
            <div className="con" >
                <ul className='chat_msgs'>
                    <li style={bubble}>Hi there! <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/480px-Emoji_u1f44b.svg.png" alt='hi wave' height="18px"></img></li>
                    <li style={bubble}>I'm Wysa - an AI chatbot built by therapists.</li>
                    <li style={bubble}>I'm here to understand your concerns and connect you with the best resources available to support you.</li>
                    <li style={bubble}>Can I help?</li>
                </ul>
            </div>
        </div>
    )
};

export default Chat;
