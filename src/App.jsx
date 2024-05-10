import { useEffect, useState } from "react"

import Option from "./Option"
import accessories from "./options"

function App() {
  const [focus, setFocus] = useState('');
  const [style, setStyle] = useState('');
  const [image, setImage] = useState({
    'accessories': '',
    'backgrounds': '',
    'ears': 'default',
    'eyes': 'default',
    'hair': 'default',
    'leg': 'default',
    'mouth': 'default',
    'neck': 'default',
  })

  useEffect(() => {
    setImage({
      ...image,
      [focus]: style
    })
  }, [style]);

  return (
    <div className='container mx-auto h-screen bg-gray-300'>
      <h1 className="uppercase text-3xl text-center p-9">alpaca generator</h1>
      <div className="flex justify-center gap-6">
        <div className="canvas w-96 relative flex-none">
          <img src={`/public/assets/alpaca/backgrounds/${image['backgrounds']}.png`} alt="" className="absolute" />
          <img src={`/public/assets/alpaca/accessories/${image['accessories']}.png`} alt="" className="absolute z-40" />
          <img src={`/public/assets/alpaca/ears/${image['ears']}.png`} alt="" className="absolute" />
          <img src={`/public/assets/alpaca/eyes/${image['eyes']}.png`} alt="" className="absolute z-50" />
          <img src={`/public/assets/alpaca/hair/${image['hair']}.png`} alt="" className="absolute" />
          <img src={`/public/assets/alpaca/leg/${image['leg']}.png`} alt="" className="absolute" />
          <img src={`/public/assets/alpaca/mouth/${image['mouth']}.png`} alt="" className="absolute z-40" />
          <img src={`/public/assets/alpaca/neck/${image['neck']}.png`} alt="" className="absolute" />
          <img src='/public/assets/alpaca/nose.png' alt="" className="absolute" />
        </div>
        <div className="flex-none">
          <div>
            <h2 className="uppercase">accessorize the alpaca's</h2>
            <div className="flex flex-row gap-2 p-3">
              {Array.from(accessories.keys()).map((key, index) => {
                return <Option key={index} text={key} setFocus={setFocus} />
              })}
            </div>
          </div>
          <div>
            <h2 className="uppercase">style</h2>
            <div className="flex flex-row flex-wrap w-96 gap-2 p-3">
              {focus.length > 0 && accessories.get(focus).map((value, index) => {
                return <Option key={index} text={value} setStyle={setStyle} isStyle={true} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
