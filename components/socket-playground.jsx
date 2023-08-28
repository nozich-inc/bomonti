'use client';

import { useStoreSocket } from '@/app/(user)/socket';
import io from '@/lib/io';
import classNames from '@/utils/classnames';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { IoMdSend } from 'react-icons/io';

const SocketPlayground = ({ className, ...props }) => {
  const pathname = usePathname();
  const [message, setMessage] = useState('');
  const session = useSession();
  const { id, connected, messages } = useStoreSocket();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!message) return;

      console.log('[SocketPlayground]', `IO`, io);

      io.socket?.send(message);
      setMessage('');
    },
    [message]
  );

  const handleChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  useEffect(() => {
    console.log('[SocketPlayground]', 'useStoreSocket', {
      id,
      connected,
      messages,
    });
  }, [id, connected, messages]);

  useEffect(() => {
    console.log('[SocketPlayground]', `session`, session);
  }, [session]);

  return (
    (pathname !== '/login' && (
      <form
        onSubmit={handleSubmit}
        className={classNames(
          'w-full flex mt-2 p-2 bg-slate-200 border-t border-gray-300',
          className
        )}
        {...props}
      >
        <input
          type="text"
          className="w-full mx-3 mb-1 bg-white p-2 rounded-lg shadow-md"
          label="Name"
          placeholder="⚡ Copilot"
          value={message}
          onChange={handleChange}
          spellCheck="false"
          data-ms-editor="true"
        />

        <button type="submit" title="Send">
          <IoMdSend className="w-6 h-6 text-gray-400" aria-hidden="true" />
        </button>
      </form>
    )) ||
    null
  );
};

export default SocketPlayground;
