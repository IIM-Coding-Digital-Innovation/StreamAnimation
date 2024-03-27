"use client"; 

import { useState } from 'react';
import Head from 'next/head';
import * as Tone from 'tone';

export default function TonePlayer() {
  const [loading, setLoading] = useState(true);

  const mp3 = 'http://localhost:3000/music.mp3';

  const handleStart = () => {
    const player = new Tone.Player(mp3).toDestination();
    player.autostart = true;
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Tone Player</title>
      </Head>
      <button id="start" onClick={handleStart}>Start</button>
      &nbsp;<span id="loading">{loading ? 'loading...' : 'loaded'}</span>
    </div>
  );
}
