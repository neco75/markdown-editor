"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "zenn-content-css";

const MarkdownEditor: React.FC = () => {
  const [markdownText, setMarkdownText] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div style={{ display: "flex", height: "90%" }}>
      <div
        style={{
          width: "50%",
          padding: "1rem",
          margin: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          overflow: "auto",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        className="znc"
      >
        <textarea
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            outline: "none",
            resize: "none",
            fontFamily: "inherit",
            fontSize: "inherit",
            padding: "0.5rem",
          }}
          value={markdownText}
          onChange={handleInputChange}
          placeholder="Markdownを入力してください"
        />
      </div>
      <div
        style={{
          width: "50%",
          padding: "1rem",
          margin: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          overflow: "auto",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        className="znc"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
