"use client";
import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";

export default function Home() {
  const elementRef = useRef(null);
  const textHeight = useRef(null);
  const divHeight = useRef(null);
  const [data, setData] = useState({
    javascript: {
      keywords: [
        "await",
        "break",
        "case",
        "catch",
        "class",
        "const",
        "continue",
        "debugger",
        "default",
        "delete",
        "do",
        "else",
        "enum",
        "export",
        "extends",
        "false",
        "finally",
        "for",
        "function",
        "if",
        "import",
        "in",
        "instanceof",
        "new",
        "null",
        "return",
        "super",
        "switch",
        "this",
        "throw",
        "true",
        "try",
        "typeof",
        "var",
        "void",
        "while",
        "with",
        "yield",
      ],
      functions: [
        "parseInt",
        "parseFloat",
        "isNaN",
        "isFinite",
        "encodeURI",
        "encodeURIComponent",
        "decodeURI",
        "decodeURIComponent",
        "String",
        "Number",
        "Boolean",
        "Array",
        "Object",
        "Function",
        "Symbol",
        "Math",
        "Date",
        "RegExp",
        "Error",
        "eval",
        "JSON",
      ],
      attributes: [
        "window",
        "document",
        "console",
        "alert",
        "prompt",
        "confirm",
        "setTimeout",
        "setInterval",
        "clearTimeout",
        "clearInterval",
        "location",
        "navigator",
        "localStorage",
        "sessionStorage",
        "history",
        "XMLHttpRequest",
        "fetch",
        "addEventListener",
        "removeEventListener",
        "Date",
        "Math",
        "parseInt",
        "parseFloat",
        "isNaN",
        "isFinite",
        "encodeURI",
        "encodeURIComponent",
        "decodeURI",
        "decodeURIComponent",
        "String",
        "Number",
        "Boolean",
        "Array",
        "Object",
        "Function",
        "Symbol",
        "RegExp",
        "Error",
        "eval",
        "JSON",
      ],
      tags: [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rb",
        "rp",
        "rt",
        "rtc",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "slot",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "svg",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
      ],
    },
  });

  const [inputText, setInputText] = useState("");
  const [dynamicHeight, setDynamicHeight] = useState(0);
  const [dynamicWidth, setDynamicwidth] = useState(0);
  const preRef = useRef(null);

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
  const inputWords = inputText.split(" ");

  // useEffect(() => {
  //   if (preRef.current) {
  //     const preHeight = preRef.current.getBoundingClientRect().height;
  //     divHeight.current.style.height = preHeight * 1.1;
  //     textHeight.current.style.height = preHeight * 1.1;
  //     setDynamicHeight(preHeight * 1.1);
  //   }
  //   console.log("ASDFAsD", JSON.stringify(inputText));
  // }, [inputText]);

  const formatTextarea = () => {
    const highlightedText = inputText
      .split(' ')
      .map((word) => {
        if (data.javascript.keywords.includes(word)) {
          return `<span className="hljs-keyword">${word}</span>`;
        } else if (data.javascript.attributes.includes(word)) {
          return `<span className="hljs-keyword">${word}</span>`;
        } else if (data.javascript.functions.includes(word)) {
          return `<span className="hljs-functions">${word}</span>`;
        } else if (data.javascript.tags.includes(word)) {
          return `<span className="hljs-tags">${word}</span>`;
        } else {
          return `<span className="hljs">${word}</span>`;
        }
      })
      .join(' ');

    return (
      <pre
        className="Editor_formatted__x4nkp hljs "
        ref={preRef}
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      />
    );
  };
  
  function autoResize() {
    const textarea = document.getElementById("myTextarea");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    const textarea2 = document.getElementById("myTextarea2");
    textarea2.style.height = "auto";
    textarea2.style.height = textarea2.scrollHeight + "px";
  }

  return (
    <div className="flex justify-center items-center mx-auto min-h-screen bg-black">
      <div ref={elementRef} className="p-20 bg-slate-200 ">
        <div className="bg-black min-w-max h-content min-h-28 rounded-xl px-5">
          <div className="w-38 h-full	pt-4 font-medium text-white flex justify-center  ">
            <div className="w-1/3 flex">
              <div className="w-3 h-3 bg-red-500 rounded-lg mr-1.5"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-lg mr-1.5"></div>
              <div className="w-3 h-3 bg-green-500 rounded-lg mr-1.5"></div>
            </div>
            <div
              className="text-sm w-72 flex justify-center  text-gray-300 mr-4"
              contentEditable
              style={{ outline: "none" }}
            >
              untitled-1
            </div>
          </div>
          <div
             id="myTextarea2"
            className="Editor_editor__Jz9sW "
          >
            <textarea
              id="myTextarea"
              onInput={() => autoResize()}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              autoCapitalize="off"
            />
            {formatTextarea()}
          </div>
        </div>
      </div>
      <button onClick={htmlToImageConvert} className="bg-red-400">
        Download Image
      </button>
    </div>
  );
}
