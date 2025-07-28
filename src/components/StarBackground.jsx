import { useEffect } from "react";
import { useStars } from "../hooks/useStars";
import { useMeteors } from "../hooks/useMeteors";
import Meteor from "./Meteor";
import Star from "./Star";

function StarBackground() {
  const { stars, generateStars } = useStars();
  const { meteors, generateMeteors } = useMeteors();

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars;
    };
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {stars.map((star) => (
        <Star key={star.id} star={star} />
      ))}

      {meteors.map((meteor) => (
        <Meteor key={meteor.id} meteor={meteor} />
      ))}
    </div>
  );
}

export default StarBackground;
