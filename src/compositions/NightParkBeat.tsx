import React from 'react';
import {AbsoluteFill, Easing, Img, OffthreadVideo, Series, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Dust, Grain, Title} from './NightPark';

// Beat-cut version of the night film: a light-burst opener, hard cuts on a steady
// 2.4 s beat with a flash and a zoom "punch" on every cut, then a slow drift.

const BEAT = 71; // frames (~2.37 s), matching the reference edit

type Shot = {
  src: string;
  video?: boolean;
  beats: number;
  drift: [number, number]; // zoom after the punch settles: start -> end
  origin?: string;
  fit?: 'cover' | 'contain';
};

const SHOTS: Shot[] = [
  {src: 'entrance.png', beats: 2, drift: [1.0, 1.1], origin: '50% 62%', fit: 'contain'},
  {src: 'plaza.png', beats: 1, drift: [1.06, 1.14], origin: '40% 42%'},
  {src: 'palm-orbit.mp4', video: true, beats: 2, drift: [1.0, 1.06], origin: '50% 45%'},
  {src: 'palms.png', beats: 1, drift: [1.16, 1.08], origin: '45% 60%'},
  {src: 'lake.png', beats: 2, drift: [1.04, 1.16], origin: '45% 50%'},
  {src: 'walkway.png', beats: 1, drift: [1.05, 1.13], origin: '45% 45%'},
  {src: 'palm-below.jpg', beats: 1, drift: [1.14, 1.06], origin: '55% 50%'},
  {src: 'fire.png', beats: 2, drift: [1.06, 1.26], origin: '48% 56%'},
];

export const NIGHT_PARK_BEAT_DURATION = SHOTS.reduce((a, s) => a + s.beats * BEAT, 0);

const ShotView: React.FC<{shot: Shot; first: boolean}> = ({shot, first}) => {
  const frame = useCurrentFrame();
  const frames = shot.beats * BEAT;
  const drift = interpolate(frame, [0, frames], shot.drift);
  // Punch: starts zoomed in and snaps back over the first third of a second.
  const punch = first ? 0 : interpolate(frame, [0, 10], [0.12, 0], {extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  const contain = shot.fit === 'contain';
  const mask = contain ? 'linear-gradient(to bottom, transparent 12%, #000 24%, #000 76%, transparent 88%)' : undefined;
  const base: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: contain ? 'contain' : 'cover',
    transform: `scale(${drift + punch})`,
    transformOrigin: shot.origin ?? '50% 50%',
    maskImage: mask,
    WebkitMaskImage: mask,
  };
  const bloom: React.CSSProperties = {
    ...base,
    filter: 'blur(22px) brightness(1.25) saturate(1.2)',
    mixBlendMode: 'screen',
    opacity: 0.3,
  };
  const src = staticFile(`assets/park/${shot.src}`);
  // White flash on the cut, fading quickly.
  const flash = first ? 0 : interpolate(frame, [0, 7], [0.55, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: '#000', overflow: 'hidden'}}>
      {shot.video ? (
        <>
          <OffthreadVideo src={src} muted style={base} />
          <OffthreadVideo src={src} muted style={bloom} />
        </>
      ) : (
        <>
          <Img src={src} style={base} />
          <Img src={src} style={bloom} />
        </>
      )}
      <AbsoluteFill style={{background: '#fff3dc', opacity: flash, mixBlendMode: 'screen'}} />
    </AbsoluteFill>
  );
};

// Opening light burst: a bright flare that swells, then clears to reveal the first shot.
const Burst: React.FC = () => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 6, 34], [1, 1, 0], {extrapolateRight: 'clamp', easing: Easing.out(Easing.quad)});
  const s = interpolate(frame, [0, 34], [0.6, 2.6], {extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  if (frame > 36) return null;
  return (
    <AbsoluteFill style={{opacity: o, mixBlendMode: 'screen'}}>
      <AbsoluteFill
        style={{
          transform: `scale(${s})`,
          background:
            'radial-gradient(ellipse 60% 22% at 50% 45%, #ffffff 0%, #ffe9c4 30%, rgba(255,170,80,0.55) 55%, rgba(60,140,150,0.25) 75%, transparent 100%)',
        }}
      />
      <AbsoluteFill style={{background: '#fff', opacity: interpolate(frame, [0, 10], [0.9, 0], {extrapolateRight: 'clamp'})}} />
    </AbsoluteFill>
  );
};

export const NightParkBeat: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [NIGHT_PARK_BEAT_DURATION - 36, NIGHT_PARK_BEAT_DURATION], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <AbsoluteFill style={{opacity: fadeOut}}>
        <Series>
          {SHOTS.map((shot, i) => (
            <Series.Sequence key={shot.src} durationInFrames={shot.beats * BEAT}>
              <ShotView shot={shot} first={i === 0} />
            </Series.Sequence>
          ))}
        </Series>
        <Dust />
        <AbsoluteFill style={{background: 'radial-gradient(ellipse at 50% 52%, transparent 45%, rgba(0,0,0,0.6) 100%)'}} />
        <Title />
        <Burst />
      </AbsoluteFill>
      <Grain />
    </AbsoluteFill>
  );
};
