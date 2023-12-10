import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantIDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <style>
        .hero { display: none; }
      </style>
      <div style="padding-top: 100px; text-align:center;" id="loading-text">Loading...</div>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const loadingText = document.querySelector('#loading-text');

    try {
      loadingText.style.display = 'block';

      const restaurant = await RestaurantSource.restaurantDetail(url.id);
      console.log(url.id);
      restaurantContainer.innerHTML = createRestaurantIDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          address: restaurant.address,
          city: restaurant.city,
          rating: restaurant.rating,
          description: restaurant.description,
        },
      });
      loadingText.style.display = 'none';
    } catch (error) {
      console.error('Mohon maaf, terjadi kesalahan pengambilan data:', error);

      loadingText.textContent = 'Mohon maaf, sedang terjadi kesalahan. Silahkan coba lagi nanti :)';
    }
  },
};

export default Detail;
