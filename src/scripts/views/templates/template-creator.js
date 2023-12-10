import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item-header">
      <img class="restaurant-item-header-poster lazyload" crossorigin="anonymous" alt="${restaurant.name
}" 
 data-src="${
  restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
    : 'https://drive.google.com/file/d/1R1-1V0R0CGFYEHqd5JH1lWdczY5_JKCd/view?usp=drive_link'
}">
      <div class="restaurant-item-header-rating">
        <p>⭐️<span class="restaurant-item-header-rating-score">${
  restaurant.rating
}</span></p>
      </div>
    </div>
    <div class="restaurant-item-content">
      <h3 class="restaurant-name"><a href="/#/detail/${restaurant.id}">${
  restaurant.name
}</a></h3>
    </div>
  </div>
`;

const createRestaurantIDetailTemplate = (restaurant) => `
<h2 class="restaurant-name">${restaurant.name}</h2>
<div class="restaurant-info">
    <div class="img">
        <img class="restaurant-poster" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" />
    </div>
    <div class="information">
        <h3>Information</h3>
        <h4>City</h4>
        <p class="text-primary">${restaurant.city}</p>
        <h4>Rating</h4>
        <p class="text-primary">⭐️ ${restaurant.rating}</p>
        <h4>Address</h4>
        <p class="text-primary"> ${restaurant.address}</p>
    </div>
</div>

<div class="restaurant-meal">
    <div class="restaurant-food">
        <h4>Menu Makanan</h4>
        <p>${restaurant.menus.foods
    .map((foods) => `<li class="text-primary">${foods.name}</li>`)
    .join('')}</p>
    </div>
    <div class="restaurant-drink">
        <h4>Menu Minumanan</h4>
        <p>${restaurant.menus.drinks
    .map((drinks) => `<li class="text-primary">${drinks.name}</li>`)
    .join('')}</p>
    </div>
</div>

<div class="restaurant-description">
  <h3>Overview</h3>
  <p class="text-primary">${restaurant.description}</p>
</div>

<div class="customer-reviews">
  <h3>Customer Reviews</h3>
  <ul>
    ${restaurant.customerReviews
    .map(
      (review) => `
      <li>
        <h4>${review.name}</h4>
        <p>${review.review}</p>
        <p class="date">${review.date}</p>
      </li>
    `,
    )
    .join('')}
  </ul>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantIDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
