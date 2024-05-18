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
        "className",
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
        "accept-charset",
        "accesskey",
        "action",
        "align",
        "allow",
        "alt",
        "async",
        "autocapitalize",
        "autocomplete",
        "autofocus",
        "autoplay",
        "background",
        "bgcolor",
        "border",
        "buffered",
        "challenge",
        "charset",
        "checked",
        "cite",
        "class",
        "code",
        "codebase",
        "color",
        "cols",
        "colspan",
        "content",
        "contenteditable",
        "contextmenu",
        "controls",
        "coords",
        "crossorigin",
        "csp",
        "data-*",
        "datetime",
        "decoding",
        "default",
        "defer",
        "dir",
        "dirname",
        "disabled",
        "download",
        "draggable",
        "dropzone",
        "enctype",
        "for",
        "form",
        "formaction",
        "formenctype",
        "formmethod",
        "formnovalidate",
        "formtarget",
        "headers",
        "height",
        "hidden",
        "high",
        "href",
        "hreflang",
        "http-equiv",
        "icon",
        "id",
        "importance",
        "integrity",
        "intrinsicsize",
        "inputmode",
        "ismap",
        "itemid",
        "itemprop",
        "itemref",
        "itemscope",
        "itemtype",
        "kind",
        "label",
        "lang",
        "language",
        "loading",
        "list",
        "loop",
        "low",
        "manifest",
        "max",
        "maxlength",
        "minlength",
        "media",
        "method",
        "min",
        "multiple",
        "muted",
        "name",
        "novalidate",
        "open",
        "optimum",
        "pattern",
        "ping",
        "placeholder",
        "poster",
        "preload",
        "radiogroup",
        "readonly",
        "referrerpolicy",
        "rel",
        "required",
        "reversed",
        "rows",
        "rowspan",
        "sandbox",
        "scope",
        "scoped",
        "selected",
        "shape",
        "size",
        "sizes",
        "slot",
        "span",
        "spellcheck",
        "src",
        "srcdoc",
        "srclang",
        "srcset",
        "start",
        "step",
        "style",
        "summary",
        "tabindex",
        "target",
        "title",
        "translate",
        "type",
        "usemap",
        "value",
        "width",
        "wrap",
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
  const [backgroundColor, setBackgroundColor] = useState(
    "linear-gradient(140deg, rgb(255, 99, 99), rgb(115, 52, 52))"
  );
  const [allTest, setTest] = useState("");
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

  useEffect(() => {
    const regex =/(\s+|=)/g;
    console.log("Input ", inputText.split(" "));
    autoResize();
  }, [inputText]);

  const escapeHtml = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const formatTextarea = () => {
    // const regex =/(\s+|=)/g;
    const highlightedText = inputText
      .split(" ")
      .map((word) => {
        if (data.javascript.keywords.includes(word)) {
          return `<span class="hljs-keyword">${escapeHtml(word)}</span>`;
        } else if (data.javascript.attributes.includes(word.toLowerCase())) {
          return `<span class="hljs-attributes">${escapeHtml(word)}</span>`;
        } else if (data.javascript.functions.includes(word)) {
          return `<span class="hljs-functions">${escapeHtml(word)}</span>`;
        } else if (data.javascript.tags.includes(word)) {
          return `<span class="hljs-tags">${escapeHtml(word)}</span>`;
        } else {
          return `<span class="hljs">${escapeHtml(word)}</span>`;
        }
      })
      .join(" ");
    return (
      <pre
        className="Editor_formatted__x4nkp hljs"
        ref={preRef}
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      ></pre>
    );
  };
  
  function autoResize() {
    const textarea2 = document.getElementById("myTextarea2");
    textarea2.style.height = "auto";
    textarea2.style.height = textarea2.scrollHeight + "px";
  }

  const handleColor = (event) => {
    const { value } = event.target;
    if (value === "Crimson") {
      setBackgroundColor(
        "linear-gradient(140deg, rgb(255, 99, 99), rgb(115, 52, 52))"
      );
    } else if (value === "Purple") {
      setBackgroundColor(
        "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))"
      );
    } else {
      setBackgroundColor(
        "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))"
      );
    }
  };

  return (
    <div className="flex justify-center items-center mx-auto min-h-screen bg-black">
      <div
        ref={elementRef}
        className="p-20 bg-slate-200"
        style={{
          backgroundImage: `${backgroundColor}`,
        }}
      >
        <div className="bg-black min-w-max h-content min-h-28 rounded-xl px-2">
          <div className="w-38 h-full	pt-4 font-medium text-white flex justify-center">
            <div className="w-1/3 flex px-4">
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
          <div id="myTextarea2" className="Editor_editor__Jz9sW ">
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

      <div className="dashboard">
        <div className="dashboard_items">
          <strong className="dashboard_heading">Theme</strong>
          <select
            style={{
              backgroundColor: "#191919",
              color: "#959595",
              border: " 1px solid #959595",
            }}
            onChange={handleColor}
            className="block bg-black w-26 p-1  outline-none text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              value="Purple"
              
              style={{ backgroundColor: "#191919", color: "#959595" }}
            >
              Purple
            </option>
            <option
            selected
              value="Crimson"
              style={{ backgroundColor: "#191919", color: "#959595" }}
            >
              
              Crimson
            </option>
            <option
              value="Blue"
              style={{ backgroundColor: "#191919", color: "#959595" }}
            >
              Blue
            </option>
          </select>
        </div>
        <div className="dashboard_items">
          <strong className="dashboard_heading">Background</strong>
          <label className="inline-flex items-center cursor-pointer mt-2">
            <input
              type="checkbox"
              value=""
              className="sr-only peer outline-none"
            />
            <div className="relative w-9 h-5 outline-none bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="dashboard_items">
          <strong class="dashboard_heading">Dark mode</strong>
          <label className="inline-flex items-center cursor-pointer outline-none mt-2">
            <input
              type="checkbox"
              value=""
              className="sr-only peer outline-none"
            />
            <div className="relative w-9 h-5 outline-none bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="dashboard_items">
          <strong className="dashboard_heading">Padding</strong>
          <div className=" mt-2">
            <div className="flex text-sm " style={{ color: "#959595" }}>
              <button className="mr-2">16</button>
              <button className="mr-2">32</button>
              <button className="mr-2">64</button>
              <button className="mr-2">128</button>
            </div>
          </div>
        </div>
        <div className="dashboard_items">
          <strong className="dashboard_heading">Language</strong>
          <div className="mt-2">
            <strong className="text-white text-lg" style={{ color: "#8f8f8f" }}>
              Javascript
            </strong>
          </div>
        </div>
        <div className="dashboard_items">
          <button
            onClick={htmlToImageConvert}
            className="bg-red-400 w-20 text-sm p-2 rounded-lg"
          >
            Save PNG
          </button>
        </div>
      </div>
    </div>
  );
}
