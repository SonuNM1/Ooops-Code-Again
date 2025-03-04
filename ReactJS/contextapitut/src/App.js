import React from "react";
import "./App.css";
import { PostList } from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { PostStoreProvider } from "./global_provider/PostStore";

function App() {

  return (
    <div className="App">
      <PostStoreProvider>
        <PostList />
        <PostDetail />
      </PostStoreProvider>
    </div>
  );
}

export default App;


// 6