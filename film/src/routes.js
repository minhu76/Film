import HomePage from './Pages/HomePage';
import ListMovies from './Pages/ListMovies/list-movies';
import ListCinemas from './Pages/Cinemas/ListCinemas';
import ListNews from './Pages/News/ListNews';
import ListMember from './Pages/Member/ListMember';
import DetailCinema from './components/DetailCinema';
import DetailMovie from './components/DetailMovie';
import CheckedMovie from './components/Checked/checked-movie';

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
        component: ListNews
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
        path:"/detail-seat/:id",
        exact: false,
        component: CheckedMovie
    }
 
];
export {routesHome};