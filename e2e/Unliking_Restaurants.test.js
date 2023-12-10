// eslint-disable-next-line no-undef
Feature('Unliking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/restaurants');
});

// eslint-disable-next-line no-undef
Scenario('unliking a restaurant', async ({ I }) => {
  I.seeElement('.restaurant-item');
  // eslint-disable-next-line no-undef
  const likedRestaurantName = await I.grabTextFrom(
    // eslint-disable-next-line no-undef
    locate('.restaurant-item').first().find('.restaurant-name a'),
  );

  // liking the restaurant
  I.click('.restaurant-item a'); // Mengklik restoran untuk melihat detailnya
  I.seeElement('#likeButton');
  I.click('#likeButton');
  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');
  // eslint-disable-next-line no-undef
  I.seeElement(locate('.restaurant-item').withText(likedRestaurantName));

  // Unliking the restaurant
  I.click('.restaurant-item a'); // Mengklik restoran untuk melihat detailnya
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');

  // Pastikan restoran tersebut tidak lagi ada dalam daftar kesukaan
  // eslint-disable-next-line no-undef
  I.dontSeeElement(locate('.restaurant-item').withText(likedRestaruantName));
});
