import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, err } = useFetch('http://localhost:8000/blogs')
  return (
    <div className="home">
      { err && <div> <p style={{color: "red"}}>{ err }</p> </div> }
      { isPending && <div>Loading... </div>}
      { blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;