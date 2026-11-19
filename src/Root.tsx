import React from 'react';
import {Composition} from 'remotion';
import {FPS, formats} from './formats';
import {Sample, SAMPLE_DURATION} from './compositions/Sample';
import {CoffeeReel, COFFEE_REEL_DURATION} from './compositions/CoffeeReel';

// Register every video here.
export const Root: React.FC = () => (
  <>
    <Composition id="Sample" component={Sample} durationInFrames={SAMPLE_DURATION} fps={FPS} {...formats.vertical} />
    <Composition id="CoffeeReel" component={CoffeeReel} durationInFrames={COFFEE_REEL_DURATION} fps={FPS} {...formats.vertical} />
  </>
);
