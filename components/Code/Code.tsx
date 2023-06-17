import useSdkStore from "../../store";
import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Editor from "./Editor";

const Code = () => {
  const setRoomView = useSdkStore((state) => state.setRoomView);

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  ("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <div>
      <button
        type="button"
        onClick={() => setRoomView("normal")}
        className="glassButton h-10 w-auto flex items-center justify-center text-sm rounded-xl font-bold px-6 mx-auto"
      >
        Normal Mode
      </button>
    </div>
  );
};

export default Code;
