import type { IRenderSteps } from '../../types';
import Cursor from "../Cursor.tsx";
import ConsoleType from "../ConsoleType.tsx";

interface IConsoleRendererProps {
  steps: IRenderSteps[];
  isComplete: boolean;
}

function ConsoleRenderer(props: IConsoleRendererProps) {
  const { steps, isComplete } = props;

  return (
    <div className="font-mono text-slate-200">
      {steps.map((step, index) => {
        if (step.type === 'break') {
          return null;
        }

        if (step.type === "input") {
          return <ConsoleType text={step.content!} time={step.time} />
        }

        return (
          <p key={index} className={`mb-2 text-slate-300`}>
            {step.content}
          </p>
        );
      })}
    </div>
  );
}

export default ConsoleRenderer;