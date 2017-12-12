// import * as actions from '../app/constants';

const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => async action => {

  if(!isPromise(action.payload)) return next(action);


};