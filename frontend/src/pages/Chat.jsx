import { useState, useEffect } from 'react'
import styled from "styled-components";

const ChatContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=PT+Sans:wght@400;700&display=swap');

* {
  color: #898489;
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
}

.app {
  background-color: #ccf0f3; /* Change to white */
  display: flex;
}

.side-bar {
  background-color: #b8d8db;
  height: 100vh;
  width: 244px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button {
  border: solid 0.5px rgba(255, 255, 255, 0.5);
  background-color: bg-primaryColor; /* Change to your primary color */
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}

nav {
  border-top: solid 0.5px rgba(255, 255, 255, 0.5);
  padding: 10px;
  margin: 10px;
}

.main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.history {
  padding: 10px;
  margin: 10px;
  height: 100%;
}

.history li {
  list-style-type: none;
  padding: 15px 0;
  cursor: pointer;
}

.info {
  color: rgba(255, 255, 255, 0.5);
  font-size: 11px;
  padding: 10px;
}

.input-container {
  position: relative;
  width: 100%;
  max-width: 650px;
}

.bottom-sectiom {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  width: 100%;
  border: none;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 12px 15px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 54px 55px,
    rgba(0, 0, 0, 0.05) 0 -12px 30px,
    rgba(0, 0, 0, 0.05) 0 4px 6px,
    rgba(0, 0, 0, 0.05) 0 12px 3px,
    rgba(0, 0, 0, 0.05) 0 -3px 5px;
}

input:focus {
  outline: none;
}

#submit {
  position: absolute;
  bottom: 15px;
  right: 0;
  cursor: pointer;
}

.feed {
  width: 100%; 
  padding: 0;
}

.feed li {
  display: flex;
  background-color: #ccf0f3;
  width: 80%;
  padding: 20px;
  margin: 20px 0;
  color: #898489;
  border: 1px solid #898489;
  border-radius: 10px;
}

.feed p {
  color: #898489;
  font-size: 14px;
  text-align: left;
}

.feed p.role {
  min-width: 80px;
}

`;

const Chat = () => {
  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null)

  const createNewChat = () => {
    setMessage(null)
    setValue("")
    setCurrentTitle(null)
  }

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle)
    setMessage(null)
    setValue("")
  }

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const response = await fetch('http://localhost:8000/completions', options);
      const data = await response.json();

      // Проверяем наличие свойства choices
      if (data.choices && data.choices.length > 0) {
        setMessage(data.choices[0].message);
      } else {
        // Если choices отсутствует или пуст, устанавливаем сообщение по умолчанию
        setMessage({ role: 'default', content: 'No response from AI.' });
      }
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    console.log(currentTitle, value, message);

    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }

    if (currentTitle && value && message) {
      setPreviousChats(prevChats => (
        [...prevChats,
        {
          title: currentTitle,
          role: 'user',
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
        ]))
    }
  }, [message, currentTitle]);



  // console.log(previousChats)

  // console.log(uniqueTitles)
  console.log(previousChats)
  const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle)
  const uniqueTitles = Array.from(new Set(previousChats.map(previousChat => previousChat.title)))
  console.log(uniqueTitles)



  return (
    <ChatContainer>
      <div className="app">
        <section className="side-bar">
          <button onClick={createNewChat}>+ Zhana chat</button>
          <ul className="history">
            {uniqueTitles?.map((uniqueTitle, index) => <li key={index} onClick={() => handleClick(uniqueTitle)}>{uniqueTitle}</li>)}
          </ul>
          <nav>
            <p>Made by Medikerim</p>
          </nav>
        </section>
        <section className="main">
          {!currentTitle && <h1>Medikerim Ai Chat</h1>}
          <ul className="feed">
            {currentChat?.map((chatMessage, index) => (
              <li key={index}>
                <p className='role'>{chatMessage.role}</p>
                <p>{chatMessage.content}</p>
              </li>
            ))}

          </ul>
          <div className="bottom-section">
            <div className="input-container">
              <input value={value} onChange={(e) => setValue(e.target.value)} />
              <div id="submit" onClick={getMessages}>➢</div>
            </div>
            <p className="info">
              ChatGPT is a free-to-use AI system. Use it for engaging conversations, gain insights, automate tasks, and witness the future of AI, all in one place.
            </p>
          </div>
        </section>
      </div>
    </ChatContainer>
  );
}

export default Chat;

