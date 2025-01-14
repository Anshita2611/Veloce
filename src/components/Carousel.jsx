import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css"; // Ensure this file exists and is linked properly
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
  };

  const images = [
    "/public/car1.jpg",
    "/public/car2.jpeg",
    "/public/car3.jpeg",
  ];

  return (
    <>
      {/* Carousel Section */}
      <section id="carousel" className="carousel-container">
  <Slider {...settings}>
    {images.map((img, index) => (
      <div key={index} className="carousel-slide">
        <img
          src={img}
          alt={`Slide ${index + 1}`}
          className="carousel-image"
        />
        <div className="carousel-caption">
          <h5>Slide {index + 1}</h5>
          <p>Description of Slide {index + 1}</p>
        </div>
      </div>
    ))}
  </Slider>
</section>

    </>
  );
};

export default Carousel;
