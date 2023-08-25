import { useSession } from 'next-auth/react';

export default function AuthStatus() {
  const session = useSession();

  return (
    <div className="absolute top-5 w-full flex justify-center items-center">
      {session && (
        <p className="text-stone-200 text-sm">
          Signed in as {session?.user?.email}
        </p>
      )}
    </div>
  );
}
