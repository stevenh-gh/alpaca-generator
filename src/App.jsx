import Option from "./Option"
import accessories from "./options"
import { useState } from "react"

function App() {
  const [focus, setFocus] = useState('');
  const [style, setStyle] = useState('');

  return (
    <div className='container mx-auto h-screen bg-gray-300'>
      <h1 className="uppercase text-3xl">alpaca generator</h1>
      <div className="canvas">

      </div>
      <div>
        <h2 className="uppercase">accessorize the alpaca's</h2>
        <div className="flex flex-row gap-2">
          {Array.from(accessories.keys()).map((key, index) => {
            return <Option key={index} text={key} setFocus={setFocus} />
          })}
        </div>
      </div>
      <div>
        <h2 className="uppercase">style</h2>
        <div className="flex flex-row gap-2">
          {focus.length > 0 && accessories.get(focus).map((value, index) => {
            return <Option key={index} text={value} setStyle={setStyle} isStyle={true} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
