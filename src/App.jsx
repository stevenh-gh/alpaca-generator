import { useEffect, useRef, useState } from "react"

import Option from "./Option"
import accessories from "./options"
import html2canvas from "html2canvas";

function App() {
  const anchorRef = useRef(null);
  const alpacaRef = useRef(null);
  const [focus, setFocus] = useState('');
  const [style, setStyle] = useState('');
  const [image, setImage] = useState({
    'accessories': 'earings',
    'backgrounds': 'blue50',
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

  function getRandom(focus) {
    return accessories.get(focus)[Math.floor(Math.random() * accessories.get(focus).length)]
  }

  function randomize() {
    setImage({
      'accessories': getRandom('accessories'),
      'backgrounds': getRandom('backgrounds'),
      'ears': getRandom('ears'),
      'eyes': getRandom('eyes'),
      'hair': getRandom('hair'),
      'leg': getRandom('leg'),
      'mouth': getRandom('mouth'),
      'neck': getRandom('neck'),
    })
  }

  function download() {
    (async () => {
      if (alpacaRef.current && anchorRef.current) {
        let canvas = await html2canvas(alpacaRef.current, {
          windowWidth: alpacaRef.current.scrollWidth,
          windowHeight: alpacaRef.current.scrollHeight
        });
        let image = canvas.toDataURL('image/png');
        anchorRef.current.href = image;
        anchorRef.current.click();
      }
    })();
  }

  return (
    <div className='container mx-auto h-screen bg-gray-300'>
      <h1 className="uppercase text-3xl text-center p-9">alpaca generator</h1>
      <div className="flex justify-center gap-6">
        <div className="w-96 h-96 relative flex-none" ref={alpacaRef}>
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
          <div className="m-7 flex gap-3">
            <button className="bg-blue-400 rounded-lg p-2 text-white hover:bg-blue-500 focus:bg-blue-700"
              onClick={() => randomize()}>
              Randomize
            </button>
            <button className="bg-blue-400 rounded-lg p-2 text-white hover:bg-blue-500 focus:bg-blue-700"
              onClick={() => download()}>
              Download
            </button>
          </div>
        </div>
      </div>
      <a ref={anchorRef} download='alpaca' className="hidden"></a>
    </div>
  )
}

export default App
