import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult.js';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexiblity</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
            star={4.73}
            price="£30 / night"
            total="£117 total" />
             <SearchResult
            img="https://th.bing.com/th/id/OIP.-YYnV3isEqF7pHD9kqo-SAHaE9?pid=Api&rs=1"
            location="Private room in center of London"
            title="Independent luxury studio apartment"
            description="2 guest . 3 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen"
            star={4.3}
            price="£40 / night"
            total="£157 total" />
             <SearchResult
            img="https://skift.com/wp-content/uploads/2013/04/Bedroom-4-v2-rt1.jpg"
            location="Private room in center of London"
            title="London studio Apartments"
            description="4 guest . 4 bedroom . 4 bed . 2 bathrooms . Free parking . Washing Machine"
            star={3.8}
            price="£35 / night"
            total="£207 total" />
            <SearchResult
            img="https://th.bing.com/th/id/OIP.Qc-8aq9aWr2b0wkze8ZnLgHaFj?pid=Api&w=800&h=600&rs=1"
            location="Private room in center of London"
            title="30 mins to Oxford Street, Excel London"
            description="1 guest . 1 bedroom . 1 bed . 1.5 bathrooms . Free parking . Washing Machine"
            star={4.8}
            price="£45 / night"
            total="£ 137 total" />
            <SearchResult
            img="https://i.pinimg.com/736x/df/ce/46/dfce462fbc90eb76a3c85e4d937cc443--residential-windows-window-styles.jpg"
            location="Private room in center of London"
            title="Spacious Peaceful Modern Bedroom"
            description="3 guest . 1 bedroom . 1 bed . 1.5 bathrooms . Wifi . Free parking . Dry Cleaning"
            star={5.0}
            price="£60 / night"
            total="£ 450 total" />
            <SearchResult
            img="https://a0.muscache.com/im/pictures/0d1e38b2-f7b9-4722-aa2d-9c63c5d0092a.jpg?aki_policy=large"
            location="Private room in center of London"
            title="5 Star Luxury Apartment"
            description="2 guest . 1 bedroom . 1 bed . 1.5 bathrooms . Wifi . Washing Machine"
            star={4.23}
            price="£65 / night"
            total="£ 480 total" />
             <SearchResult
            img="https://th.bing.com/th/id/OIP.bwxVGs-EARCTWX07ADkwbQHaE8?w=240&h=180&c=7&o=5&dpr=1.25&pid=1.7"
            location="Private room in center of London"
            title="The Blue Room in London"
            description="3 guest . 1 bedroom . 1 bed . 1.5 bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
            star={3.85}
            price="£90 / night"
            total="£ 650 total" />
        </div>
    )
}

export default SearchPage
