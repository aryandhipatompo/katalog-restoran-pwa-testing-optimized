import RestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <div class="content">
      <h2 class="content-heading">:: Explore Restaurants ::</h2>
      <div id="restaurants" class="restaurants">
        <p id="loading-text">Loading......</p>
      </div>
      <p id="error-text" style="color: red;"></p>
    </div>
      `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const loadingText = document.querySelector('#loading-text');
    const errorText = document.querySelector('#error-text');

    try {
      loadingText.style.display = 'block';
      errorText.textContent = '';
      const restaurants = await RestaurantSource.restaurantList();

      loadingText.style.display = 'none';

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error('Mohon maaf, terjadi kesalahan pengambilan data:', error);

      loadingText.style.display = 'none';
      errorText.textContent = 'Mohon maaf, sedang terjadi kesalahan. Silahkan coba lagi nanti :)';
    }
  },
};

export default Restaurants;
