import { useEffect, useState } from "react";
import { getPixels } from "../services/pixelService";
import "./PixelGrid.css";

function PixelGrid() {
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    const fetchPixels = async () => {
      try {
        const data = await getPixels();
        setPixels(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPixels();
  }, []);

  return (
    <div className="grid-container">
      <h2>Purchased Pixels</h2>

      <div className="pixel-list">
        {pixels.map((pixel) => (
          <div
            key={pixel._id}
            className="pixel-card"
          >
            <h3>{pixel.title}</h3>

            <p>
              Owner: {pixel.owner?.name}
            </p>

            <p>
              Size: {pixel.width} × {pixel.height}
            </p>

            <a
              href={pixel.websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PixelGrid;