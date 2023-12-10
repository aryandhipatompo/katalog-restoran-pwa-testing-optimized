import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <style>
        .hero { display: none; }
    </style>
    <div class="content">
    <h2 class="content-heading">:: Your Favorite Restaurants ::</h2>
    <div id="restaurants" class="restaurants">
    </div>
  </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<h2 class="restaurant-item-not-found">Tidak ada restoran untuk ditampilkan</h2>';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
