import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import useTypewriter from 'react-typewriter-hook'

let index = 0;

const TypeWriter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          phrases
        }
      }
    }
  `)
  const [typing, setTyping] = useState("Something");
  const intervalRef = useRef({});
  const name = useTypewriter(typing);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        index = index > 2 ? 0 : ++index;
        setTyping(data.site.siteMetadata.phrases[index]);
      }, 3000);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [typing]
  );

  return (
    <div className="landing-text">
      <h1>{name}</h1>
    </div>
  )
}

export default TypeWriter
