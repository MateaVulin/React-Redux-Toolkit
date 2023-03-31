import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";
import "./App.css";
import { useState, useEffect } from "react";
import { getPostsFetch } from "./redux/posts";
import posts from "./redux/posts";
import { fetchPosts } from "./redux/posts";

function App() {
  const { count } = useSelector((state) => state.counter);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // primjer posts
  //  const [posts, setPosts] = useState([]);
  /*useEffect(() => {
    fetch("https:/jsonplaceholder.typecode.com/posts")
      .then((res) => res.json)
      .then((data) => setPosts(data));
  }, []); */

  /* const togglePostsHandler = () => {
    if (!posts.length) {
      fetch("https://jsonplaceholder.typecode.com/posts")
        .then((res) => res.json)
        .then((data) => setPosts(data));
    } else {
      setPosts([]);
    }
  };
*/
  return (
    <div className="App">
      <h1>Redux</h1>
      <div>Number: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        IncrementByAmount
      </button>

      <br />
      <br />
      <button onClick={() => dispatch(getPostsFetch())}>Get Posts</button>

      {posts.map(({ id, title }) => {
        return <div key={posts.id}>{title}</div>;
      })}
    </div>
  );
}

export default App;
