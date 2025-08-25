import { useEffect, useState } from "react";

function Cursor(props: { char?: string; isTyping?: boolean }) {
  const [ cursorVisible, setCursorVisible ] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (props.isTyping) return setCursorVisible(true);
      setCursorVisible(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <span className={ `${ cursorVisible ? "opacity-100" : "opacity-0" } inline text-slate-200` }>
      { props.char || "_" }
    </span>
  )
}

export default Cursor;