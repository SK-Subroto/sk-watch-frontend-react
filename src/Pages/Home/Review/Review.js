import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import blankImg from '../../../images/blank-profile.png';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://sks-watch.herokuapp.com/reviews')
            .then(res => setReviews(res.data))
            .catch(err => console.log(err))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <Container style={{ marginTop: 50 }}>
            <div className="text-center mt-5 pt-5 mb-3">
                <p className="secondary-color fw-light">WHAT CUSTOMER SAY ABOUT US</p>
                <h1 className="" style={{ fontWeight: 900 }}> <span className="primary-color">CUSTOMER </span>REVIEW</h1>
            </div>
            <Slider {...settings}>
                {
                    reviews.map(r => {
                        return (
                            <div key={r._id} className="py-5 px-lg-4 px-md-2 text-center">
                                <Card className="p-4 border-0 shadow h-100">
                                    <Card.Img className="rounded-circle mx-auto" src={r.photo || blankImg} style={{ height: 70, width: 70 }} />
                                    <Card.Body>
                                        <Card.Title className="fw-bold">{r.name}</Card.Title>
                                        <Card.Text>
                                            <StarRatings
                                                rating={parseFloat(r.rating)}
                                                starRatedColor="goldenrod"
                                                starDimension="20px"
                                                starSpacing="2px"
                                            />
                                            <div>{r.comment}</div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </Slider>
        </Container>
    );
};

export default Review;