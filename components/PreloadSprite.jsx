import ReactDOM from "react-dom";

export function PreloadSprite() {
  ReactDOM.preload("/icons/sprite.svg", {
    as: "image",
  });

  return null;
}
