// pages/index.tsx

import React from "react";
import MarkdownEditor from "../components/MarkdownEditor";

const Home: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ height: "100vh" }}
    >
      <h1 className="text-2xl font-bold mb-4">Markdown Editor</h1>
      <MarkdownEditor />
    </div>
  );
};

export default Home;
