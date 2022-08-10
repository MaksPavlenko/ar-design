import React from 'react';
import { gsap, Expo } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useGsapFade = (options) => {
  // gsap.registerPlugin(ScrollTrigger);

  const { current: tl } = React.useRef(gsap.timeline({ paused: true }));
  const [ref, setRef] = React.useState({});

  React.useEffect(() => {
    tl.fromTo(ref, options);
  }, [ref, options, tl]);
};

export default useGsapFade;
