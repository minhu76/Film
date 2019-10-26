import HomePage from './Pages/HomePage';
import ListMovies from './Pages/ListMovies/ListMovies';
import ListCinemas from './Pages/Cinemas/ListCinemas';
import BookNow from './Pages/Booknow/Booknow';
import NewsApp from './Pages/News/NewsApp';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

const routesHome = [
    {
        path:"/",
        exact: true,
        component: HomePage
    },
    {
        path:"/list-movie",
        exact: true,
        component: ListMovies
    },
    {
        path:"/cinemas",
        exact: true,
        component: ListCinemas
    },
    {
        path:"/news",
        exact: true,
        component: NewsApp
    },
    {
        path: "/book-now",
        exact: true,
        component: BookNow
    },
    {
        path:"",
        exact:false,
        component: PageNotFound,
        
    }
];
export {routesHome};