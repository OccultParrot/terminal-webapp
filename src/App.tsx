import TextRenderer from "./components/TextRenderer.tsx";

function App() {
  return (
    <div className="m-20">
      <TextRenderer text="hello joey!! I wrote a [error]typing[/error] effect" time={0.1} />
    </div>
  )
}

export default App
