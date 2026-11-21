import React from 'react';
import {AbsoluteFill, Img, interpolate, random, staticFile, useCurrentFrame, useVideoConfig, Easing} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {fonts} from '../fonts';

// A slow, dreamy night film built from stills: gentle camera drift, long dissolves,
// soft bloom on the lights, floating dust, vignette and film grain.

type Shot = {
  src: string;
  frames: number;
  zoom: [number, number];
  pan?: [[number, number], [number, number]]; // start/end offset in % of frame
  origin?: string;
  fit?: 'cover' | 'contain';
};

const FADE = 24;
const SHOTS: Shot[] = [
  {src: 'entrance', frames: 130, zoom: [1.0, 1.1], origin: '50% 62%', fit: 'contain'},
  {src: 'lamp', frames: 96, zoom: [1.22, 1.06], origin: '52% 30%'},
  {src: 'palms', frames: 100, zoom: [1.08, 1.2], pan: [[4, 2], [-4, -2]], origin: '45% 60%'},
  {src: 'plaza', frames: 100, zoom: [1.05, 1.18], origin: '40% 42%'},
  {src: 'hedge', frames: 96, zoom: [1.2, 1.06], pan: [[0, -3], [0, 2]], origin: '55% 70%'},
  {src: 'walkway', frames: 100, zoom: [1.04, 1.2], origin: '45% 45%'},
  {src: 'lake', frames: 120, zoom: [1.18, 1.04], pan: [[-3, 0], [3, 0]], origin: '45% 50%'},
  {src: 'fire', frames: 130, zoom: [1.06, 1.3], origin: '48% 56%'},
];

export const NIGHT_PARK_DURATION = SHOTS.reduce((a, s) => a + s.frames, 0) - FADE * (SHOTS.length - 1);

const ShotView: React.FC<{shot: Shot}> = ({shot}) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [0, shot.frames], [0, 1], {easing: Easing.inOut(Easing.sin)});
  const scale = interpolate(t, [0, 1], shot.zoom);
  const [p0, p1] = shot.pan ?? [[0, 0], [0, 0]];
  const x = interpolate(t, [0, 1], [p0[0], p1[0]]);
  const y = interpolate(t, [0, 1], [p0[1], p1[1]]);
  const transform = `translate(${x}%, ${y}%) scale(${scale})`;
  const src = staticFile(`assets/park/${shot.src}.png`);
  const contain = shot.fit === 'contain';
  const base: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: contain ? 'contain' : 'cover',
    transform,
    transformOrigin: shot.origin ?? '50% 50%',
  };
  // For a wide photo shown whole, fade its top and bottom edges into black.
  const mask = contain ? 'linear-gradient(to bottom, transparent 12%, #000 24%, #000 76%, transparent 88%)' : undefined;
  return (
    <AbsoluteFill style={{background: '#000', overflow: 'hidden'}}>
      <Img src={src} style={{...base, maskImage: mask, WebkitMaskImage: mask}} />
      {/* Bloom: a blurred, brightened copy screened on top makes the lights glow. */}
      <Img
        src={src}
        style={{
          ...base,
          maskImage: mask,
          WebkitMaskImage: mask,
          filter: 'blur(22px) brightness(1.25) saturate(1.2)',
          mixBlendMode: 'screen',
          opacity: 0.32,
        }}
      />
    </AbsoluteFill>
  );
};

// Slow warm dust motes drifting upwards.
const Dust: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();
  return (
    <AbsoluteFill style={{mixBlendMode: 'screen'}}>
      {new Array(34).fill(0).map((_, i) => {
        const x0 = random(`x${i}`) * width;
        const y0 = random(`y${i}`) * height;
        const size = 3 + random(`s${i}`) * 7;
        const speed = 0.25 + random(`v${i}`) * 0.6;
        const phase = random(`p${i}`) * Math.PI * 2;
        const y = (((y0 - frame * speed) % height) + height) % height;
        const x = x0 + Math.sin(frame / 55 + phase) * 26;
        const twinkle = 0.5 + 0.5 * Math.sin(frame / 22 + phase * 3);
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: size,
              height: size,
              borderRadius: '50%',
              background: 'rgba(255, 214, 150, 1)',
              filter: `blur(${1 + size / 4}px)`,
              opacity: 0.1 + 0.3 * twinkle * random(`o${i}`),
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

const Grain: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{mixBlendMode: 'overlay', opacity: 0.16}}>
      <svg width="100%" height="100%">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={frame % 60} />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </AbsoluteFill>
  );
};

const Title: React.FC = () => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [18, 50, 95, 120], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const y = interpolate(frame, [18, 60], [24, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  const blur = interpolate(frame, [18, 50], [10, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{alignItems: 'center', paddingTop: 300, opacity: o, transform: `translateY(${y}px)`, filter: `blur(${blur}px)`}}>
      <div dir="rtl" style={{fontFamily: fonts.almarai, fontWeight: 400, fontSize: 78, color: '#f3dcb4', textShadow: '0 0 40px rgba(255,180,90,0.45)'}}>
        ليلة في متنزه البحيرات
      </div>
      <div style={{width: 120, height: 2, background: '#f3dcb4', opacity: 0.6, margin: '34px 0 28px'}} />
      <div style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 30, letterSpacing: 16, color: '#f3dcb4', opacity: 0.75}}>
        LAKES PARK
      </div>
    </AbsoluteFill>
  );
};

export const NightPark: React.FC = () => {
  const frame = useCurrentFrame();
  const inOut = interpolate(frame, [0, 24, NIGHT_PARK_DURATION - 40, NIGHT_PARK_DURATION], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <AbsoluteFill style={{opacity: inOut}}>
        <TransitionSeries>
          {SHOTS.map((shot, i) => (
            <React.Fragment key={shot.src}>
              <TransitionSeries.Sequence durationInFrames={shot.frames}>
                <ShotView shot={shot} />
              </TransitionSeries.Sequence>
              {i < SHOTS.length - 1 ? (
                <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: FADE})} />
              ) : null}
            </React.Fragment>
          ))}
        </TransitionSeries>
        <Dust />
        {/* Vignette */}
        <AbsoluteFill style={{background: 'radial-gradient(ellipse at 50% 52%, transparent 45%, rgba(0,0,0,0.6) 100%)'}} />
        <Title />
      </AbsoluteFill>
      <Grain />
    </AbsoluteFill>
  );
};
