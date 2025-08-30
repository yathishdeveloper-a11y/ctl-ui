import React from "react";
import { useCachedImage } from "./useCatchImagehook";

const Avatar = ({ src }) => {
  const { imageSrc, loading } = useCachedImage({
    src,
    defaultSrc: "/vite.svg",
    fallback: "/vite.svg",
    cache: true,
  });

  return (
    <div style={{ width: 100, height: 100, borderRadius: "50%", overflow: "hidden" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={imageSrc}
          alt="avatar"
          width="100"
          height="100"
          style={{ objectFit: "cover" }}
        />
      )}
    </div>
  );
};

export default Avatar;
