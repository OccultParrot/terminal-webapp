import TextRenderer from "./components/TextRenderer.tsx";

function App() {
  const text = "Hello guys! Check out this snazzy terminal typing effect I wrote! All using React and TailwindCSS!"
  
  return (
    <div className="m-10 md:m-20">
      <TextRenderer text={ text } time={0.1} />
      {/*<TextRenderer text={ text } time={0.1} />*/}
    </div>
  )
}

export default App
