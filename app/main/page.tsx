'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import mapImage from '@/public/assets/images/map.webp';

function Main() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map'), {
        loading: () => (
          <div className='flex h-[100svh] w-full items-center justify-center'>
            <p className='text-xl font-bold'>Map is loading...</p>
          </div>
        ),
        ssr: false,
      }),
    [],
  );

  return <Map image={mapImage} />;
}

export default Main;
