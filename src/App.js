import { MenuRight, MenuFull } from "./Menu";
import { animated, useSpring, useTrail, useChain, config } from "react-spring";
import React, { useRef, useState } from "react";
import nature1 from "./img/nature1.jpg";
import nature2 from "./img/nature2.jpg";
import nature3 from "./img/nature3.jpg";
import nature4 from "./img/nature4.jpg";
import nature5 from "./img/nature5.jpg";

import "./styles.css";

const naturePics = [nature1, nature2, nature3, nature4, nature5];

export default function App() {

  const [fullMenuVisible, setFullMenuVisible] = useState(false);


  
  return (
    <>
    <MenuFull fullMenuVisible={fullMenuVisible}/>
      <div className="frame">
        <h1 className="frame__title">Front end experimentation</h1>
        <div className="frame__links">
        <button 
                onClick={() => setFullMenuVisible(!fullMenuVisible)}
          className="frame__links__button">+ Menu</button>
        </div>
        
        <div className="frame__nav">
       
          <a
            className="frame__link"
            href="https://isengupt.github.io/fiber-website/"
          >
            Previous
          </a>
          <a
            className="frame__link"
            href="https://tympanus.net/codrops/?p=45441"
          >
            Resume
          </a>
          <a
            className="frame__link"
            href="https://github.com/isengupt/trail-effect"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="App">
        <Chain word={"NATURE"} images={naturePics} translate={-150} />
        <Chain word={"SCIENCE"} images={naturePics} />
        <Chain
          word={"EARTH"}
          images={naturePics}
          translate={-100}
          reverse={true}
        />
      </div>
    </>
  );
}

export const Chain = ({ word, translate, reverse, images }) => {
  const [expanded, setExpanded] = useState(false);

  const springRef = useRef();
  const springConfig = {
    xy: expanded ? [0, 0] : [75, 75],

    opacity: expanded ? 1 : 0,
    height: expanded ? "150px" : "0px",
    config: { mass: 5, tension: 2000, friction: 200 },
    reverse: !expanded,
    from: { xy: [75, 75], opacity: 0, height: "0px" },

    ref: springRef,
  };
  const { opacity, xy, height } = useSpring(springConfig);
  const trailRef = useRef();

  const trailSprings = useTrail(word.length, {
    ref: trailRef,

    x: expanded ? 0 : 150,
    config: { mass: 5, tension: 2000, friction: 200 },
    reverse: !expanded,
    from: { x: 150 },
  });

  const imageRef = useRef();

  const imageSprings = useTrail(4, {
    ref: imageRef,

    xy: expanded ? [0, 0] : [75, 75],

    opacity: expanded ? 1 : 0,
    config: { mass: 5, tension: 2000, friction: 200 },
    reverse: !expanded,
    from: { xy: [75, 75], opacity: 0 },
  });

  const arrowRef = useRef();
  const arrowConfig = {
    arrowX: expanded ? 0 : -75,

    arrowOp: expanded ? 1 : 0,
    config: { mass: 5, tension: 2000, friction: 200 },
    reverse: !expanded,
    from: { arrowX: -75, arrowOp: 0 },

    ref: arrowRef,
  };

  const { arrowOp, arrowX } = useSpring(arrowConfig);

  useChain(
    expanded
      ? [trailRef, springRef, imageRef, arrowRef]
      : [arrowRef, imageRef, springRef, trailRef],
    expanded ? [0, 0.15, 0.3, 0.45] : [0, 0.15, 0.3, 0.45]
  );
  if (reverse) {
    return (
      <div
        className="main__container"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        style={{
          transform: translate
            ? `translateX(${translate}px)`
            : "translateX(0px)",
        }}
      >
        <animated.div
          style={{
            transform: arrowX.interpolate(
              (arrowX) => `translate3d(${arrowX}px,0,0)`
            ),
            opacity: arrowOp,
          }}
          className="icon__container"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"
            ></path>
          </svg>
        </animated.div>

        <div className="grid__images">
          <div className="big__image__container">
            <animated.div
              style={{
                backgroundImage: `url(${images[0]})`,
                height: height,
                transform: xy.interpolate(
                  (x, y) => `translate3d(${x}px,${y}px,0)`
                ),
                opacity: opacity,
              }}
              className="big__image"
            ></animated.div>
          </div>
          <div className="small__image__container">
            {imageSprings.map(({ xy, ...rest }, index) => (
              <animated.div
              key={index}
                className="small__image"
                style={{
                  ...rest,
                  backgroundImage: `url(${images[index + 1]})`,
                  transform: xy.interpolate(
                    (x, y) => `translate3d(${x}px,${y}px,0)`
                  ),
                }}
              ></animated.div>
            ))}
          </div>
        </div>

        <div className="text__container">
          {trailSprings.map(({ x, ...rest }, index) => (
            <animated.span
              key={index}
              className="trails-text"
              style={{
                ...rest,

                transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
              }}
            >
              {word[index]}
            </animated.span>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="main__container"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        style={{
          transform: translate
            ? `translateX(${translate}px)`
            : "translateX(0px)",
        }}
      >
        <div className="text__container">
          {trailSprings.map(({ x, ...rest }, index) => (
            <animated.span
              key={index}
              className="trails-text"
              style={{
                ...rest,

                transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
              }}
            >
              {word[index]}
            </animated.span>
          ))}
        </div>

        <div className="grid__images">
          <div className="big__image__container">
            <animated.div
              style={{
                backgroundImage: `url(${images[0]})`,
                height: height,
                transform: xy.interpolate(
                  (x, y) => `translate3d(${x}px,${y}px,0)`
                ),
                opacity: opacity,
              }}
              className="big__image"
            ></animated.div>
          </div>
          <div className="small__image__container">
            {imageSprings.map(({ xy, ...rest }, index) => (
              <animated.div
              key={index}
                className="small__image"
                style={{
                  ...rest,
                  backgroundImage: `url(${images[index + 1]})`,
                  transform: xy.interpolate(
                    (x, y) => `translate3d(${x}px,${y}px,0)`
                  ),
                }}
              ></animated.div>
            ))}
          </div>
        </div>

        <animated.div
          style={{
            transform: arrowX.interpolate(
              (arrowX) => `translate3d(${arrowX}px,0,0)`
            ),
            opacity: arrowOp,
          }}
          className="icon__container"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"
            ></path>
          </svg>
        </animated.div>
      </div>
    );
  }
};
