import React, { useState, useEffect } from "react";
import axios from "axios";
import InfinteScroll from "react-infinite-scroll-component";

export default function Images() {
  const [count, setCount] = useState(30);
  const [images, setImages] = useState([]);
  const [start, setStart] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/photos?count=${count}&start=${start}`)
      .then((res) => setImages(res.data))
      .catch((error) => console.log(error));
      
  }, [start, count]);

  console.log(images);

  return <div>Hello</div>;
}
