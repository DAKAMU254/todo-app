import { createStore } from './Reducers';
import taskReducer from './Reducers';

const store = createStore(taskReducer);

export default store;
