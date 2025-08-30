import { useEffect, useState } from "react";

export const useCachedImage = ({
  src,
  defaultSrc = '/vite.svg',
  fallback = '/vite.svg',
  cache = true,
}) => {
  const [imageSrc, setImageSrc] = useState(defaultSrc);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!src) {
      setImageSrc(fallback);
      setLoading(false);
      return;
    }

    const loadImage = async () => {
      try {
        // Check cache
        if (cache) {
          const cached = localStorage.getItem(src);
          if (cached) {
            setImageSrc(cached);
            setLoading(false);
            return;
          }
        }

        // Fetch image
        const res = await fetch(src);
        if (!res.ok) throw new Error("Image fetch failed");

        const blob = await res.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64 = reader.result;
          if (cache) localStorage.setItem(src, base64);
          setImageSrc(base64);
          setLoading(false);
        };

        reader.readAsDataURL(blob);
      } catch (err) {
        console.error("Image load error:", err);
        setImageSrc(fallback);
        setLoading(false);
      }
    };

    loadImage();
  }, [src, fallback, cache]);

  return { imageSrc, loading };
};
