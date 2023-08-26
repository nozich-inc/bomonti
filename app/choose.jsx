'use client';

import { dancingScript } from '@/components/providers';
import classNames from '@/utils/classnames';
import React from 'react';

export default function Choose() {
  return (
    <div
      className={classNames(
        'demo border overflow-hidden w-full h-full flex flex-wrap flex-col items-center justify-center text-center bg-white/50 rounded-lg'
      )}
    >
      <span
        className={classNames(
          'text-5xl scroll-mb-10 text-rose-900',
          dancingScript.className
        )}
      >
        Choose a Demo
        <br />⇢
      </span>

      <div className="flex flex-col">
        <span className="text-md font-semibold text-lime-900">
          Bomonti Sydney
        </span>

        <span className="text-sm">44 Market St., NSW 2000</span>

        <span className="text-sm">+61 491 663 609</span>
      </div>
    </div>
  );
}
