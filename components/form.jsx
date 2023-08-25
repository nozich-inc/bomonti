'use client';

import LoadingDots from '@/components/loading-dots';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Suspense, useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import SkeletonCard from './skeleton-card';

function Form({ type }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      if (type === 'login') {
        signIn('credentials', {
          redirect: false,
          email: e.currentTarget.email.value,
          password: e.currentTarget.password.value,
        }).then(({ error }) => {
          setLoading(false);

          if (error) {
            return toast.error(error);
          }

          toast.success('Logged in!');
          router.push('/account');
          router.refresh();
        });
      } else {
        fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
          }),
        }).then(async (res) => {
          setLoading(false);

          if (res.status !== 200) {
            return toast.error(await res.text());
          }

          toast.success('Account created! Redirecting to login...');
          router.push('/login');

          setTimeout(() => {
            router.refresh();
          }, 1200);
        });
      }
    },
    [type, router]
  );

  return (
    <Suspense fallback={<SkeletonCard />}>
      <form
        action="#"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-xs text-gray-600 uppercase"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="nozich@yandex.ru"
            autoComplete="email"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs text-gray-600 uppercase"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>

        <button
          disabled={loading}
          className={`${
            loading
              ? 'cursor-not-allowed border-gray-200 bg-gray-100'
              : 'border-black bg-black text-white hover:bg-white hover:text-black'
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? (
            <LoadingDots color="#808080" />
          ) : (
            <p>{type === 'login' ? 'Sign In' : 'Sign Up'}</p>
          )}
        </button>

        {type === 'login' ? null /*(
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-semibold text-gray-800">
            Sign up
          </Link>{' '}
          for free.
        </p>
      )*/ : (
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-gray-800">
              Sign in
            </Link>{' '}
            instead.
          </p>
        )}
      </form>
    </Suspense>
  );
}

export default Form;
