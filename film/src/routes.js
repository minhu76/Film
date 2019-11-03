import HomePage from './Pages/HomePage';
import ListMovies from './Pages/ListMovies/ListMovies';
import ListCinemas from './Pages/Cinemas/ListCinemas';
import NewsApp from './Pages/News/NewsApp';
import ListMember from './Pages/Member/ListMember';
import DetailCinema from './components/DetailCinema';
import DetailMovie from './components/DetailMovie';
import ListShowtimes from './Pages/Showtimes/ListShowtimes';

//import PageNotFound from './Pages/PageNotFound/PageNotFound';

const routesHome = [
    {
        path:"/",
        exact: true,
        component: HomePage
    },
    {
        path:"/list-movie",
        exact: false,
        component: ListMovies
    },
    {
        path:"/cinemas",
        exact: false,
        component: ListCinemas
    },
    {
        path:"/news",
        exact: false,
        component: NewsApp
    },
    {
        path:"/member",
        exact: false,
        component: ListMember
    },
    {
        path:"/detail-movie/:id",
        exact:false,
        component: DetailMovie
    },
    {
        path:"/detail-cinema/:id",
        exact:false,
        component: DetailCinema
    },
    {
        path:"/detail-showtime/:id",
        exact:false,
        component: ListShowtimes
    }
    // {
    //     path:"",
    //     exact:false,
    //     component: PageNotFound,
        
    // }
];
export {routesHome};