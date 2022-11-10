import React from "react";
import Slider from "react-slick";
import "./Slide.scss";
import img1 from "../../img/img-1920x1200.jpg";
import img2 from "../../img/img-1280x800.jpg";
import img3 from "../../img/img-800x368.jpg";

const Slide = ({ videoUrl, header, content, onClick, isLast }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className="section">
            {videoUrl ? (
                <>
                    <div className="video_overlay"></div>
                    <video data-autoplay muted loop data-keepplaying>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="section__video__text container">
                        <h1 className="animate__animated animate__fadeInDown animate__slower">{header}</h1>
                        {content.txt.map((el) => (
                            <p className="animate__animated animate__fadeInDown animate__slower" key={el}>
                                {el}
                            </p>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <img data-src={img1} srcSet={`${img1} 1920w, ${img2} 1280w, ${img3} 800w`} />
                    <div className="section__static__text container">
                        <h1>{header}</h1>
                        <Slider {...settings}>
                            {content.txt.map((el, index) => (
                                <div key={el} className="text__item">
                                    <div>
                                        <h3>Lorem ipsum #{index + 1}</h3>
                                        <p>{el}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </>
            )}
            {!isLast && <button className="section__arrow animate__animated animate__bounce animate__slow animate__infinite" onClick={onClick}></button>}
        </div>
    );
};

export default Slide;
