import React from 'react';
import './products.sass';
import MediaCard from './card/card';
import tripImage from './card/productImages/mars.jpg';


export default function Products(props) {
    return (
      <section className="products">
        <div className="">
          <MediaCard
            images={tripImage}
            tripTitle="Trip to Mars"
            description="Enjoy a 6 months round trip to the red planet"
          />
        </div>
      </section>
    );
}
