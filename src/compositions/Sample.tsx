import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {fonts} from '../fonts';

const Card: React.FC<{title: string; subtitle: string; bg: string}> = ({title, subtitle, bg}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pop = spring({frame, fps, config: {damping: 14}});
  const subOpacity = interpolate(frame, [12, 28], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const subY = interpolate(frame, [12, 28], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: bg, justifyContent: 'center', alignItems: 'center', padding: 80}}>
      <div dir="rtl" style={{textAlign: 'center', color: '#fff'}}>
        <div style={{fontFamily: fonts.tajawal, fontWeight: 900, fontSize: 130, transform: `scale(${pop})`}}>{title}</div>
        <div
          style={{
            fontFamily: fonts.plex,
            fontSize: 54,
            marginTop: 30,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
          }}
        >
          {subtitle}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const SAMPLE_DURATION = 60 + 60 - 15;

export const Sample: React.FC = () => (
  <TransitionSeries>
    <TransitionSeries.Sequence durationInFrames={60}>
      <Card title="استوديو المقاطع" subtitle="جاهز للتصميم" bg="linear-gradient(160deg,#0b1f3a,#14427a)" />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({direction: 'from-left'})} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence durationInFrames={60}>
      <Card title="ارفع موادك" subtitle="صور · مقاطع · مراجع" bg="linear-gradient(160deg,#3a0b2e,#7a1452)" />
    </TransitionSeries.Sequence>
  </TransitionSeries>
);
