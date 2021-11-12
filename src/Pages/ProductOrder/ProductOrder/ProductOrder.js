import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Purchase from '../Purchase/Purchase';

const ProductOrder = () => {
    const {id} = useParams();
    return (
        <div>
            <Header />
            <Purchase id={id} />
            <Footer />
        </div>
    );
};

export default ProductOrder;