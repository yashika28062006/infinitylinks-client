import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    const fetchPixels = async () => {
      try {
        const response = await API.get("/pixels");
        setPixels(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPixels();
  }, []);

  return (
    <div>
      <h1>InfinityLinks</h1>
      <p>Own a piece of the internet.</p>

      <h2>Purchased Pixels</h2>

      {pixels.map((pixel) => (
        <div key={pixel._id}>
          <h3>{pixel.title}</h3>
          <p>{pixel.websiteUrl}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;