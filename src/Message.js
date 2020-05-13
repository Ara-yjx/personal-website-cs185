import React from 'react';
import './Message.css'

export default function Message(props) {

    // console.log(props)

    var multilineMsg = props.data.message.split('\n').map((item, i) => 
        <p key={i}>{item}</p>
    );

    return (
    <div className={(props.highlight ? 'breath ':'') + 'msg-box'}>
        <h4>{props.data.name}</h4>
        <p>{props.data.description}</p>
        <hr/>
        {multilineMsg}
        {/* <p>{props.data.message}</p> */}
    </div>
    );
}
