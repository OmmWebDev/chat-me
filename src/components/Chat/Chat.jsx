import React, { useContext } from 'react';
import './Chat.css';

import Context from '../../context/Context';

const Chat = () => {

  const { query, setQuery, openaiReply, botReply } = useContext(Context);

  // const openaiAnswer = openaiReply;
  const handleSubmit = (e) => {
    e.preventDefault();
    openaiReply();
  }

  return (
    <>
      <div id='chat_container'>
        <form onSubmit={handleSubmit}>
          <textarea
            name="prompt"
            rows="1" cols="1"
            placeholder="Ask Query...."
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
            required
          ></textarea>
          <button type='submit'>Send</button>
        </form>
        <div className="wrapper ${isAi && 'ai'}">
          <div className="chat">
            <div className="message">{botReply}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat;