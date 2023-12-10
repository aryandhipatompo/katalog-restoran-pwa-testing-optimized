import Restaurants from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/like';

const routes = {
  '/': Restaurants, // default page
  '/restaurants': Restaurants,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
