import TextRenderer from "./components/TextRenderer.tsx";

function App() {
  const text = "Hello World"

  return (
    <div className="m-10 md:m-20">
      <TextRenderer text={ text } time={ 0.1 } onComplete={ () => console.log("Finished Writing") }/>
      {/*<TextRenderer text={ text } time={0.1} />*/ }
    </div>
  )
}

export default App
