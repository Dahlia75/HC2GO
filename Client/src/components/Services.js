import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


import '../scss/main.scss';
// import '../scss/pages/providers.scss';

function ServicesCard(props) {
  const descriptions = props.descriptions.map((description, index) => {
    return <li key={props.id + '_' + index} >{ description }</li>
  });

  const path = `/services/${props.id}/providers`


  return (
    <div className="col-1-of-3">
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">{ props.title }</span>
                </h4>
                <div className="card__details">
                    <ul>
                        { descriptions }
                    </ul>
                </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                    <div className="card__price_box">
                        <p className="card__price-only">From</p>
                        <p className="card__price-value">{ props.price }</p>
                    </div>
                    <Link to={path} className="btn btn--white">Book now!
                    </Link>
                    <a href="#" className="btn btn--white">Book now!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
            {title: 'Nurse',
            price: '50/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description'],
            id: '1'
            },
            {title: 'Physical Therapy',
            price: '60/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description'],
            id: '2'
            },
            {title: 'Mental Wellness',
            price: '30/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description'],
            id: '3'
            },
            {title: 'Nurse',
            price: '20/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description'],
            id: '4'
            },
            {title: 'Physical Therapy',
            price: '70/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description'],
            id: '5'
            },{title: 'Mental Wellness',
            price: '80/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description'],
            id: '6'
            }]
        }
    }

    componentDidMount() {
        // make request to server for services data
        // take response and set state to replace the array of cards
    }

    render() {
        const cards = this.state.cards.map(card => {
            return <ServicesCard key={card.id} id={card.id} title={ card.title } price={ card.price } descriptions={ card.descriptions } />
        })

        return (
            <section id="services" className="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">Our Services</h2>
                </div>
                <div className="row">
                    { cards }
                </div>
            </section>
        );
    }
};

export default Services;