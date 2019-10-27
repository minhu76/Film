import HomePage from './Pages/HomePage';
import ListMovies from './Pages/ListMovies/ListMovies';
import ListCinemas from './Pages/Cinemas/ListCinemas';
import NewsApp from './Pages/News/NewsApp';
import ListMember from './Pages/Member/ListMember';
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
        path:"/member",
        exact: true,
        component: ListMember
    },
    {
        path:"",
        exact:false,
        component: PageNotFound,
        
    }
];
export {routesHome};