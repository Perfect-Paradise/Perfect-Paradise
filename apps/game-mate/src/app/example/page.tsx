import { Example } from '@perfect-paradise/game-mate/example';
import { HelloServer } from '@perfect-paradise/game-mate/chat-room/server';
import { ChatRoom } from '@perfect-paradise/game-mate/chat-room';

export default function Index() {
  return (
    <div>
      {/* <Example /> */}
      <HelloServer />
      <ChatRoom />
    </div>
  );
}
