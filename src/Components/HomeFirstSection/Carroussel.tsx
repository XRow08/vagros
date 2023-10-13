import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Next({
  back,
  onClick,
  className,
}: {
  back?: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <svg
      onClick={onClick}
      className={`${back && "rotate-180"} cursor-pointer ${className}`}
      width="15"
      height="29"
      viewBox="0 0 15 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5685 0.768959C14.3636 1.40507 14.4925 2.56533 13.8564 3.36047L4.94449 14.5004L13.8564 25.6402C14.4925 26.4354 14.3636 27.5956 13.5685 28.2318C12.7733 28.8679 11.6131 28.7389 10.977 27.9438L1.14362 15.6521C0.604917 14.9788 0.604917 14.0219 1.14362 13.3486L10.977 1.0569C11.6131 0.261765 12.7733 0.132848 13.5685 0.768959Z"
        fill="black"
      />
    </svg>
  );
}

export function Carroussel() {
  const [state, setState] = useState(0);
  const videos = [
    "/videos/corte1.mp4",
    "/videos/corte2.mp4",
    "/videos/corte3.mp4",
    "/videos/corte4.mp4",
    "/videos/corte5.mp4",
  ];

  async function next() {
    setState(state + 1);
  }

  async function prev() {
    setState(state - 1);
  }

  async function updateCurrentSlide(index: number) {
    if (state !== index) {
      setState(index);
    }
  }

  const carouselConfig = {
    showThumbs: false,
    showIndicators: false,
    showStatus: false,
    showArrows: false,
    infiniteLoop: true,
  };

  return (
    <div className="h-[485px] w-full gap-8 bg-white drop-shadow-2xl shadow-black hidden lg:flex items-center justify-between px-8 rounded-lg relative">
      <Next onClick={() => prev()} />
      <Carousel
        {...carouselConfig}
        onChange={(n) => updateCurrentSlide(n)}
        selectedItem={state}
        className="w-full overflow-hidden"
      >
        {videos.map((e) => (
          <video
            key={e}
            loop
            controls
            className="w-full h-[400px] rounded-lg object-cover object-center"
          >
            <source src={e} type="video/mp4" />
          </video>
        ))}
      </Carousel>
      <Next back onClick={() => next()} />
    </div>
  );
}
