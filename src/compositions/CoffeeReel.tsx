import React from 'react';
import {AbsoluteFill, Img, OffthreadVideo, Series, interpolate, staticFile, useCurrentFrame} from 'remotion';

// Warm, slightly punchy grade to match the reference.
// Colour looks, applied as SVG filters. Brightness is raised with a gamma curve
// (lifts midtones and shadows without clipping highlights, unlike CSS brightness()).
// Each look has separate photo and video settings: the tonemapped iPhone clips come
// out more orange than the photos, so they get less saturation and less added warmth.
type Grade = {gamma: number; r: number; g: number; b: number; sat: number; contrast: number};
export const LOOKS: Record<string, {photo: Grade; video: Grade}> = {
  // Bright, warm and cosy: the classic coffee look, closest to the reference.
  warm: {
    photo: {gamma: 0.78, r: 1.04, g: 1.0, b: 0.92, sat: 1.15, contrast: 1.08},
    video: {gamma: 0.85, r: 1.0, g: 1.0, b: 0.97, sat: 0.82, contrast: 1.08},
  },
  // Bright and neutral: true-to-life colours.
  clean: {
    photo: {gamma: 0.78, r: 1.0, g: 1.0, b: 1.0, sat: 1.05, contrast: 1.05},
    video: {gamma: 0.85, r: 0.97, g: 1.0, b: 1.05, sat: 0.72, contrast: 1.05},
  },
  // Darker, high contrast, desaturated: cinematic.
  moody: {
    photo: {gamma: 1.0, r: 1.02, g: 1.0, b: 0.97, sat: 0.85, contrast: 1.2},
    video: {gamma: 1.05, r: 1.0, g: 1.0, b: 1.0, sat: 0.65, contrast: 1.2},
  },
};
export type Look = 'warm' | 'clean' | 'moody';

const GradeFilter: React.FC<{id: string; g: Grade}> = ({id, g}) => (
  <filter id={id} colorInterpolationFilters="sRGB">
    <feComponentTransfer>
      <feFuncR type="gamma" exponent={g.gamma} amplitude={g.r} />
      <feFuncG type="gamma" exponent={g.gamma} amplitude={g.g} />
      <feFuncB type="gamma" exponent={g.gamma} amplitude={g.b} />
    </feComponentTransfer>
    <feColorMatrix type="saturate" values={String(g.sat)} />
  </filter>
);

type Shot =
  | {kind: 'video'; src: string; from: number; frames: number; zoom?: [number, number]; origin?: string; volume?: number}
  | {kind: 'photo'; src: string; frames: number; zoom?: [number, number]; origin?: string};

// Structure follows the reference: hook -> bag -> beans -> grind -> pour -> final cup.
const SHOTS: Shot[] = [
  {kind: 'video', src: '4027', from: 5.6, frames: 45, zoom: [1.15, 1.25], origin: '50% 62%'},
  {kind: 'video', src: '4026', from: 0.6, frames: 30, zoom: [1.9, 2.1], origin: '50% 62%'},
  {kind: 'video', src: '4021', from: 11.05, frames: 54, zoom: [1.0, 1.05]},
  {kind: 'video', src: '4020', from: 0.2, frames: 45, zoom: [1.0, 1.08]},
  {kind: 'photo', src: 'IMG_4022-beans.jpg', frames: 36, zoom: [1.05, 1.2], origin: '50% 45%'},
  {kind: 'photo', src: 'IMG_4024-ground.jpg', frames: 36, zoom: [1.25, 1.1], origin: '45% 68%'},
  {kind: 'video', src: '4027', from: 0.3, frames: 105, zoom: [1.0, 1.15], origin: '50% 62%'},
  {kind: 'video', src: '4026', from: 1.0, frames: 60, zoom: [1.2, 1.35], origin: '50% 62%'},
  {kind: 'photo', src: 'IMG_4029-brewer.jpg', frames: 45, zoom: [1.0, 1.1], origin: '50% 45%'},
  {kind: 'photo', src: 'IMG_4035-iced-cup.jpg', frames: 90, zoom: [1.35, 1.6], origin: '45% 62%'},
];

export const COFFEE_REEL_DURATION = SHOTS.reduce((a, s) => a + s.frames, 0);

const ShotView: React.FC<{shot: Shot; look: Look}> = ({shot, look}) => {
  const frame = useCurrentFrame();
  const [z0, z1] = shot.zoom ?? [1, 1];
  const scale = interpolate(frame, [0, shot.frames], [z0, z1]);
  const style: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: `scale(${scale})`,
    transformOrigin: shot.origin ?? '50% 50%',
    filter: `url(#grade-${shot.kind}) contrast(${LOOKS[look][shot.kind].contrast})`,
  };
  return (
    <AbsoluteFill style={{background: '#000'}}>
      {shot.kind === 'video' ? (
        <OffthreadVideo
          src={staticFile(`assets/proxies/${shot.src}.mp4`)}
          trimBefore={Math.round(shot.from * 30)}
          volume={shot.volume ?? 1}
          style={style}
        />
      ) : (
        <Img src={staticFile(`assets/images/${shot.src}`)} style={style} />
      )}
    </AbsoluteFill>
  );
};

export const CoffeeReel: React.FC<{look: Look}> = ({look}) => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [COFFEE_REEL_DURATION - 12, COFFEE_REEL_DURATION], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: '#000', opacity: fadeOut}}>
      <svg width="0" height="0" style={{position: 'absolute'}}>
        <GradeFilter id="grade-photo" g={LOOKS[look].photo} />
        <GradeFilter id="grade-video" g={LOOKS[look].video} />
      </svg>
      <Series>
        {SHOTS.map((shot, i) => (
          <Series.Sequence key={i} durationInFrames={shot.frames}>
            <ShotView shot={shot} look={look} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
