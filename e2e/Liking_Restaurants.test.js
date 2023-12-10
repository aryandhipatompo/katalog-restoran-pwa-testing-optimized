const assert = require('assert');
// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found');
});

// eslint-disable-next-line no-undef
Scenario('liking a restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found');
  I.amOnPage('/#/restaurants');

  // Memastikan ada restoran yang dapat disukai
  I.seeElement('.restaurant-item');

  // Mengambil nama restoran pertama
  const firstRestaurantName = await I.grabTextFrom(
    // eslint-disable-next-line no-undef
    locate('.restaurant-item').first().find('.restaurant-name a'),
  );

  // Mengklik restoran untuk melihat detailnya
  // eslint-disable-next-line no-undef
  I.click(locate('.restaurant-name a').first());

  // Memastikan halaman rincian restoran dimuat
  I.seeElement('#likeButton');

  // Menyukai restoran
  I.click('#likeButton');

  // Kembali ke halaman utama
  I.amOnPage('/');

  // Menuju halaman favorit
  I.click('Favorite');

  // Memastikan restoran yang disukai ada di daftar favorit
  I.seeElement('.restaurant-item');
  // eslint-disable-next-line no-undef
  const likedRestaurantName = await I.grabTextFrom(
    // eslint-disable-next-line no-undef
    locate('.restaurant-item').first().find('.restaurant-name a'),
  );

  assert.strictEqual(
    firstRestaurantName,
    likedRestaurantName,
    'firstRestoName and likedRestoName must have the same value',
  );
});
