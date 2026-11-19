import React from 'react';
import {AbsoluteFill, Img, OffthreadVideo, Series, interpolate, staticFile, useCurrentFrame} from 'remotion';

// Warm, slightly punchy grade to match the reference.
const PHOTO_GRADE = 'contrast(1.08) saturate(1.12) brightness(1.02)';
// Tonemapped iPhone clips come out more orange than the photos; pull them back to match.
const VIDEO_GRADE = 'contrast(1.08) saturate(0.88) brightness(1.02)';

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

const ShotView: React.FC<{shot: Shot}> = ({shot}) => {
  const frame = useCurrentFrame();
  const [z0, z1] = shot.zoom ?? [1, 1];
  const scale = interpolate(frame, [0, shot.frames], [z0, z1]);
  const style: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: `scale(${scale})`,
    transformOrigin: shot.origin ?? '50% 50%',
    filter: shot.kind === 'video' ? VIDEO_GRADE : PHOTO_GRADE,
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

export const CoffeeReel: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [COFFEE_REEL_DURATION - 12, COFFEE_REEL_DURATION], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: '#000', opacity: fadeOut}}>
      <Series>
        {SHOTS.map((shot, i) => (
          <Series.Sequence key={i} durationInFrames={shot.frames}>
            <ShotView shot={shot} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
