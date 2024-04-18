import { useRef } from "react";
import { toPng } from "html-to-image";

export default function Home() {
  const elementRef = useRef(null);

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center mx-auto min-h-screen bg-black">
      <div ref={elementRef} className="p-20 bg-slate-200">
        <div className="bg-black min-w-80 rounded-xl">
          <div className="w-38 h-full pt-2 font-medium text-white flex justify-center items-center mx-5">
            <div className="w-1/3 flex">
              <div className="w-3 h-3 bg-red-500 rounded-lg mr-1.5">
              </div>
              <div className="w-3 h-3 bg-yellow-500 rounded-lg mr-1.5">
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-lg mr-1.5">
              </div>
            </div>
            <div className="text-sm	w-72 flex justify-center items-center text-gray-300 ml-5" contentEditable style={{ outline: 'none'}}>untitled-1
            </div>
          </div>
          <div className="text-white">
            Code
          </div>
        </div>
      </div>
      <button onClick={htmlToImageConvert}>Download Image</button>
    </div>
  );
}