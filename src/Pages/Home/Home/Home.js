import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Review from '../Review/Review';
import ReactLoading from 'react-loading';
import axios from 'axios';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // get feature product 
        axios.get('https://sks-watch.herokuapp.com/products')
            .then(res => setFeaturedProducts(res.data.products))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <Header />
            <>
                {loading ?
                    <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                        <ReactLoading type={"spinningBubbles"} color={"#A99577"} height={100} width={100} />
                    </div>
                    :
                    <>
                        <Banner />
                        <FeaturedProducts featuredProducts={featuredProducts} />
                        <Review />
                        <Blog />
                    </>
                }
            </>
            <Footer />
        </div>
    );
};

export default Home;