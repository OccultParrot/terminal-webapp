import Cursor from "./Cursor.tsx";
import { useEffect, useState } from "react";

interface IRenderProps {
  text: string;
  time?: number;
  onComplete?: () => void;
}

function ConsoleType(props: IRenderProps) {
  const [ content, setContent ] = useState("");
  const [ remainingText, setRemainingText ] = useState(props.text);
  const [ isTyping, setIsTyping ] = useState(true);

  const render = () => {
    if (remainingText.length === 0) {
      setIsTyping(false);
      return;
    }

    setIsTyping(true);

    const char: string = remainingText.charAt(0);
    setContent(content + char);
    setRemainingText(remainingText.slice(1));
    if (remainingText.length === 1 && props.onComplete) props.onComplete();
  }

  useEffect(() => {
    const stutterFlag = Math.random() < 0.5 ? -1 : 1;
    const delay = props.time ? (props.time * 1000) / props.text.length : 50;
    const variability = Math.random() * (delay / 2);
    const adjustedDelay = delay + (variability * stutterFlag);

    const interval = setInterval(render, adjustedDelay);

    return () => clearInterval(interval);
  })
  
  return (
    <div className="mt-4">
      <p className="text-slate-200 font-mono">
        <span className="inline text-amber-400">$ </span>
        { content }
        {remainingText.length > 0 ? <Cursor char="_" isTyping={ isTyping }/> : null}
      </p>
    </div>
  )
}

export default ConsoleType;