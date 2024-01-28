import React, { useState } from 'react';
import Context from './Context';

import OpenAI from 'openai';

const AppContext = ({ children }) => {

  const [query, setQuery] = useState();
  const [botReply, setBotReply] = useState();

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_APP_OPENAI_API,
    dangerouslyAllowBrowser: true
  });

  async function openaiReply() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: query }],
      model: "gpt-3.5-turbo",
    })

    setBotReply(completion.choices[0].message.content);
  }

  return (
    <Context.Provider value={{
      openaiReply,
      query, setQuery,
      botReply
    }}>
      {children}
    </Context.Provider>
  )
}

export default AppContext;