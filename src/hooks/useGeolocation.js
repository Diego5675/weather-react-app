import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation disable");
    }
  }, []);

  return position;
};
