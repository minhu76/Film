import * as ActionType from './../constants/ActionType';

const actOnSaveListMovie = (listMovie) => {
    return {    
        type: ActionType.ON_SAVE_LIST_MOVIE,
        listMovie
    },

    {
        type: ActionType.ON_SAVE_LIST_CAROUSEL,
        listMovie
    }
}

export {actOnSaveListMovie};
