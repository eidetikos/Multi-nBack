import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { user } from './auth/reducer';
<<<<<<< HEAD
import  game  from './game/reducer/game.reducer';
=======
import game from './game/reducer/game.reducer';
>>>>>>> c90a438c4dbbf81fc8a22db5b3d5b8bb6b20f03b

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user, game
});

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

