import ConsoleRenderer from "./components/console/ConsoleRenderer.tsx";
import type { IRenderSteps } from "./types.ts";
import { useEffect, useState } from "react";

function App() {
  const steps: IRenderSteps[] = [
    {
      type: "break",
      time: 1,
    },
    {
      type: "input",
      content: ".venv/Scripts/python main.py",
      time: 4,
    },
    {
      type: "break",
      time: 6,
    },
    {
      type:"response",
      content: "Hello World!"
    },
    {
      type: "break",
      time: 1,
    },
    {
      type: "input",
      content: "ls -A",
      time: 0.5,
    },
    {
      type: "break",
      time: 1,
    },
    {
      type: "response",
      content: "main.py\nREADME.md\n.venv\n.gitignore"
    }
  ];

  const [ renderedSteps, setRenderedSteps ] = useState<IRenderSteps[]>([]);
  const [ stepIndex, setStepIndex ] = useState(0);
  const [ isComplete, setIsComplete ] = useState<boolean>(false);

  useEffect(() => {
    // Check if we have processed all steps.
    if (stepIndex >= steps.length) {
      setIsComplete(true);
      return;
    }

    const currentStep = steps[stepIndex];
    const delay = currentStep.type === 'break' ? currentStep.time! * 1000 : 0;

    const timer = setTimeout(() => {
      if (currentStep.type !== 'break') {
        setRenderedSteps(prevSteps => [ ...prevSteps, currentStep ]);
      }
      
      setStepIndex(prevIndex => prevIndex + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [ stepIndex, steps ]);

  return (
    <div className="m-4">
      <ConsoleRenderer steps={ renderedSteps } isComplete={ isComplete }/>
    </div>
  );
}

export default App;