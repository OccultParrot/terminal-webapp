import Cursor from "./Cursor.tsx";
import { useEffect, useState } from "react";

interface IRenderProps {
  text: string;
  time?: number;
  onComplete?: () => void;
}

function TextRenderer(props: IRenderProps) {
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
    const delay = ((props.time as number * 900) + (Math.random() * 100) * stutterFlag) || 100;

    const interval = setInterval(render, delay);

    return () => clearInterval(interval);
  })
  
  return (
    <div className="mt-4">
      <p className="text-slate-200 font-mono">
        <span className="inline text-amber-400">$ </span>
        { content }
        <Cursor char="_" isTyping={ isTyping }/>
      </p>
    </div>
  )
}

export default TextRenderer;