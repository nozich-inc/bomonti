'use client';

import { dancingScript } from '@/components/providers';
import classNames from '@/utils/classnames';
import React from 'react';

export default function Choose() {
  return (
    <div
      className={classNames(
        'demo cursor-default p-2 overflow-hidden w-full h-full flex flex-wrap flex-col items-center justify-center text-center bg-black/30 rounded-lg'
      )}
    >
      <span
        className={classNames(
          'text-5xl scroll-mb-10 text-white',
          dancingScript.className
        )}
      >
        Welcome
      </span>

      <span
        className={classNames(
          'text-3xl mt-2 scroll-mb-6 text-white/50',
          dancingScript.className
        )}
      >
        pick a demo
      </span>

      <span
        className={classNames('text-5xl mt-2 mb-4 scroll-mb-10 text-white')}
      >
        ⇢
      </span>

      <div className="flex flex-col">
        <span className="text-md font-semibold text-lime-300">
          Bomonti Sydney
        </span>

        <span className="text-xs text-lime-300/50">
          44 Market St., NSW 2000
        </span>

        <span className="text-xs text-lime-300/50">+61 491 663 609</span>
      </div>
    </div>
  );
}
