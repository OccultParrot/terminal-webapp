export interface IRenderSteps {
  type: "input" | "response" | "break";
  content?: string;
  time?: number;
  onComplete?: () => void;
}