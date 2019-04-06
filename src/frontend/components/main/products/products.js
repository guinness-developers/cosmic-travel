import React, { Component } from 'react';
import '../../../App.sass';
import MediaCard from './card/card';
import Destinations from '../../../../data/cardsData/cardsData';


class Products extends Component {
  render() {
    return (
      <section className="products container" id="products">
        <div className="products-layout">
          {
            Destinations.map((cards, index) => (
              <div className="card-wrapper">
                <MediaCard
                  key={index}
                  img={cards.image}
                  theTitle={cards.tripTitle}
                  tripDescription={cards.description}
                />
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Products;
