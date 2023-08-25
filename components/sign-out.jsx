'use client';

import classNames from '@/utils/classnames';
import { signOut } from 'next-auth/react';
import { MdOutlineLogout } from 'react-icons/md';

function SignOut({ className, ...props }) {
  return (
    <button
      // icon={MdOutlineLogout}
      onClick={() => signOut({ callbackUrl: '/login' })}
      className={classNames(
        'bg-slate-200 rounded-md px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-300 transition duration-150 ease-in-out',
        className
      )}
      {...props}
    >
      <MdOutlineLogout className="inline-block mr-2" />
      Sign me out!
    </button>
  );
}

export default SignOut;
