import { animated, useSpring, useTrail, useChain, config } from "react-spring";
import React, { useRef, useState } from "react";

import "./styles.css";

export function MenuFull({ fullMenuVisible }) {
  const menuRef = useRef();
  const { opacity, x } = useSpring({
    x: fullMenuVisible ? 0 : -100,
    opacity: fullMenuVisible ? 1 : 0,
    from: { opacity: 0, x: -100 },
    ref: menuRef,
  });

  const trailRef = useRef();

  const trailSprings = useTrail(7, {
    ref: trailRef,
    /* 	left: fullMenuVisible ? '0%' : '100%', */
    x: fullMenuVisible ? 0 : 100,
    config: { mass: 5, tension: 2000, friction: 200 },
    duration: 20000,
    from: { x: 100 },
  });

  useChain(
    fullMenuVisible ? [menuRef, trailRef] : [trailRef, menuRef],
    fullMenuVisible ? [0, 0.15] : [0, 0.15]
  );

  return (
    <animated.nav
      className="menu menu--full grim"
      style={{
        opacity: opacity,
        transform: x.interpolate((x) => `translateY(${x}%)`),
      }}
    >
      {trailSprings.map(({ x, ...rest }, index) =>
        index % 2 === 1 ? (
          <div className={`menu__item__container item-${index + 1}`}>
            <animated.div
              key={index}
              className={`menu__item item-bg--${index + 1}`}
              style={{
                ...rest,
                left: x.interpolate((x) => `${x}%`),
              }}
            >
				
			</animated.div>
          </div>
        ) : (
          <div className={`menu__item__container item-${index + 1}`}>
            <animated.div
              key={index}
              className={`menu__item item-bg--${index + 1}`}
              style={{
                ...rest,
                bottom: x.interpolate((x) => `${x}%`),
              }}
            >
{index === (1 || 3) ? 'BUZZWORD' : '' }

			</animated.div>
          </div>
        )
      )}
    </animated.nav>
  );
}
