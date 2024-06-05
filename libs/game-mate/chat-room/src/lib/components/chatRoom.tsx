'use client';
import { useState, useEffect, useRef } from 'react';
import InputEmoji from 'react-input-emoji';

interface Message {
  id: number;
  message: string;
}

export function ChatRoom(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    setMessages((prevState) => [...prevState, { id: 1, message: input }]);
    console.log(messages);

    setInput('');
  };

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen p-4">
      <div
        ref={chatContainerRef}
        className="flex-grow overflow-y-scroll border border-gray-300 p-4 rounded mb-4 bg-white shadow"
      >
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg.message}
          </div>
        ))}
      </div>
      <div className="flex">
        <InputEmoji
          value={input}
          onChange={setInput}
          cleanOnEnter={true}
          onEnter={sendMessage}
          placeholder="Send message..."
          shouldReturn={false}
          shouldConvertEmojiToImage={false}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
