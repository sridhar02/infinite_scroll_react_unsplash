import React, { useState, useEffect } from "react";

import axios from "axios";
import InfinteScroll from "react-infinite-scroll-component";
import Image from "./image";

export default function Images() {
  const [count, setCount] = useState(30);
  const [images, setImages] = useState([]);
  const [start, setStart] = useState(1);

  const fetchImages = () => {
    setStart(start + count);
    axios
      .get(`http://localhost:5000/api/photos?count=${count}&start=${start}`)
      .then((res) => setImages(images.concat(res.data)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/photos?count=${count}&start=${start}`)
      .then((res) => setImages(res.data))
      .catch((error) => console.log(error));
  }, [start, count]);

  console.log(images);

  return (
    <div className="images">
      <InfinteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loder={<h4>loading...</h4>}
      >
        {images.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </InfinteScroll>
    </div>
  );
}
