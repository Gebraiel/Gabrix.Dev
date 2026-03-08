"use client"
import React, { useEffect, useState } from 'react'

export default function TypingText({words}) {
  const [word,setWord] = useState("");
  const [activeWordIndex,setActiveWordIndex] = useState(0);
  useEffect(()=>{
    const activeWord = words[activeWordIndex];
    setWord(""); 
    let typingInterval;
    let erasingInterval;
    const erasing = ()=>{
    let index = activeWord.length;
    erasingInterval = setInterval(()=>{
      index--; 
      if(index < 0){
        clearInterval(erasingInterval);
        setActiveWordIndex(prev => (prev + 1) % words.length);
      }else{
        setWord(activeWord.slice(0, index)); 
      }
    },120);
  }
    const typing = ()=>{
      let index = 0;
      typingInterval = setInterval(()=>{
        if(index == activeWord.length ){
          clearInterval(typingInterval);
          setTimeout(erasing,1000);
        }else{
          setWord(activeWord.slice(0, index + 1));
          index++;
        }
      },180);
    }
    typing();
    return ()=>{
      clearInterval(typingInterval);
      clearInterval(erasingInterval);
    }

  },[activeWordIndex, words]);

  return (
    <span className='text-secondary typing-text'>{word}</span>
  )
}