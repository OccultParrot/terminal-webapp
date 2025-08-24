import Cursor from "./Cursor.tsx";
import { useEffect, useState } from "react";

interface IRenderProps {
  text: string;
  time?: number;
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
  }

  useEffect(() => {
    const interval = setInterval(render, (props.time * 1000) || 100);

    return () => clearInterval(interval);
  })
  return (
    <div className="">
      <p className="text-slate-200 font-mono">{ content }<Cursor char="_" isTyping={ isTyping }/></p>
    </div>
  )
}

export default TextRenderer;