import CarouselContainerPage from "../src/components/commons/carousel/Carousel.container";
import LandingContainerPage from "../src/components/unit/landing/Landing.container";
export default function LandingPage() {
  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <CarouselContainerPage />
      </div>
      <LandingContainerPage />
    </>
  );
}
