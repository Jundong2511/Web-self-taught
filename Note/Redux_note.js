# create a Redux store
const reducer = (state = 5) => {
  return state;
}
// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store= Redux.createStore(reducer);
or

const store = Redux.createStore(
  (state = 5) => state
);

# state = 5 is initial value

===================================

# get state from the Redux store

const store = Redux.createStore(
  (state = 5) => state
);
const currentState = store.getState();

===================================


# define a redux action

const action={type:"LOGIN"}



===================================

# define a action creator

const action = {
  type: 'LOGIN'
}

function actionCreator(){
  return action
}



===================================


# dispatch an action event

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction())
or
store.dispatch({ type: 'LOGIN' });


===================================


# handle an action in the store

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  return action.type == 'LOGIN'    # reducer always return a new state copy, and never modify state directly
        ? {login:true}
        : state
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }



===================================


# handle multiple actions with switch
# don't forget default

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
    switch (action.type){
      case 'LOGIN' : return {authenticated: true};
      case 'LOGOUT' : return {authenticated: false};
      default: return state;
    }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};


===================================

# use const fo action types

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
# put const once, use forever!


const defaultState = {authenticated: false};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN: return { authenticated: true }
    case LOGOUT: return { authenticated: false }
    default: return state;}};

const store = Redux.createStore(authReducer);
const loginUser = () => {  return { type: LOGIN}};
const logoutUser = () => {return { type: LOGOUT }};



===================================

# register a store listener by using store.subscribe()
# this method called whenever something dispatch store.


const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

let count = 0;

const addOne=()=>{count+=1}
store.subscribe(addOne)


store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);


===================================


# combine multiple reducers with Redux.combineReducers()

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:   return state + 1;
    case DECREMENT:   return state - 1;
    default:      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
      case LOGIN:  return {    authenticated: true  }
    case LOGOUT:  return {   authenticated: false   }
    default:   return state; }};
const rootReducer = Redux.combineReducers({
  auth:authReducer,
  count:counterReducer,
})
const store = Redux.createStore(rootReducer);



===================================



# send action data to the store

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {  # step 3 take addNoteText's return as action
  switch(action.type) {       # step 4, pass action's type to condition
      case ADD_NOTE: return action.text    # step 5, if action's type is ADD_NOTE, return action.text as state
      default: return state;
  }
};

const addNoteText = (note) => {    # step 2, take "Hello!" as note, return to notesReducer function
return {type:ADD_NOTE,text:note}
};

const store = Redux.createStore(notesReducer)  # step 6, Redux.createStore save notesReducer into store

console.log(store.getState()); # print Initial State
store.dispatch(addNoteText('Hello!')); # step 1,  call addNoteText function
console.log(store.getState()); # print Hello!




============================================

# use middleware to handle asynchronous actions

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) { # with parameter dispatch, we can dispatch action and perform asynchronous
    dispatch(requestingData());
    setTimeout(function() {
      let data = { users: ['Jeff', 'William', 'Alice'] }
      dispatch(receivedData(data));
  }, 2500);}};

const defaultState = {fetching: false,users: []};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA: return { fetching: true, users: [] }
    case RECEIVED_DATA: return { fetching: false, users: action.users }
    default: return state;}};

const store = Redux.createStore(asyncDataReducer, Redux.applyMiddleware(ReduxThunk.default));



============================================

# counter with redux from scratch

const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0,action)=>{
    return action.type == INCREMENT
    ? state += 1
    : action.type == DECREMENT
    ? state -= 1
    : state
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = ()=>{return {type:INCREMENT};} // Define an action creator for incrementing

const decAction = ()=>{return {type:DECREMENT};}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

===============================================




# never mutate state
# when return a new state, don't use .push() or .splice(), they will modify the original array
# use .concat(), .slice(),[...array], they don't modify array


const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      # if use .push() or .splice() here, it wil change todos too
      return state.concat(action.todo)
      or     [...state,action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);




=============================================


# copy object with Object.assign
# syntax:  const newObject = Object.assign({},objYouWant1,objYouWant2,...);
# if obj2 has same key with obj1, obj1 ganna be updated

const defaultState = { user: 'CamperBot', status: 'offline', friends: '732,982', community: 'freeCodeCamp'};
const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':   return Object.assign({},state,{status:'online'})
    default:   return state;  }};
const wakeUp = () => { return {  type: 'ONLINE' };
const store = Redux.createStore(immutableReducer);
