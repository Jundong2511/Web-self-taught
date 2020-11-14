{ 'this is treated as JavaScript code' }
# const JSX = <h1>Hello JSX!</h1>;
# use JS syntax can store any html element as value into a variable
# or mutiple lines of html elements, but everything need to be warped in one element like <div>
const JSX = (<div>
  <h1>Heading.</h1>
  <p>Paragraph</p>
 <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
</div>);

# {/* this is how you write comments in JSX */}

===================================================

# render html elements to the DOM

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX, document.getElementById("challenge-node"))
# syntax ReactDOM.render(componentToRender, targetNode)
# if componentToRender is a component, use as ReactDOM.render(<componentToRender />, targetNode)


===================================================

# in JSX, when add a class to element, can not use class because class is a reserved word in JavaScript
# instead JSX use className
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

===================================================

# in JSX, all the elements need to be closed for self closed element, will be like <br />
<br /> <hr /> <div></div> or just <div />

===================================================

# create a stateless functional component
const MyComponent = function() {
    return (
        <div>whatever this is</div>
    );
};
===================================================

# create a React component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (<div><h1>Hello React!</h1></div>);
  }
};

===================================================

# create a component with composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />   !!!!!!!!!! right here, this just like how do you call a function in another
      </div>                            function .
    );
  }
};

===================================================

# React comonent from scratch
class MyComponent extends React.Component{
    constructor(props){super(props);}
    render(){return (<div><h1>My First React Component!</h1></div>)}
}
ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));



===================================================

# how to pass props to a stateless functional component

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p> # print current date
      <p>The current light is" {props.day}</p> # print sun
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} day={sun} /> # date and day is props that pass to CurrentDate
      </div>
    );
  }
};



===================================================

# pass array as props
const List = (props) => {
  return <p>{props.tasks.join(",")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["lunch ","dinner"]} />
        <h2>Tomorrow</h2>
        <List tasks={["crab  ", " ice cream ", " beef"]} />
      </div>
    );
  }
};




===================================================

# make props a default value
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>items now: {props.items}</p>   # print items now: 0
    </div>
  )
};
ShoppingCart.defaultProps = {items:0}


===================================================

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> # now print out 10
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10}/>
  }
};


===================================================

# propTypes to define the props kind

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes= { quantity: PropTypes.number.isRequired } # this check if quantity is a number
Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};



================================================

#access props use this.props

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>                                   # this is how you call parameter
    );
  }
};
# this is like a function that print a str with {this.props.tempPassword} variable


class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
            <ReturnTempPassword tempPassword={"12345678"} />
        </div>
    );
  }
}; # this like a function called super function then pass a parameter tempPassword={"12345678"} to it


=====================================================


# make a stateless functional componet and pass it to component
# with defaultprops value and proptypes check

class CampSite extends React.Component {
  constructor(props) {super(props);}
  render() {return ( <div> <Camper/> </div>);}
};
const Camper=(props)=>{return (<p>{props.name}</p>);}
Camper.defaultProps = {name:'CamperBot'};
Camper.propTypes = {name: PropTypes.string.isRequired};


=====================================================

# stateful component

class StatefulCompoonent extends React.Component{ # stateful component must enxtends from React.Component
    constructor(props){
        super(props);
        this.state = {name:"string"};
    }

    render(
        const newStr = "new string";   # write some code for return here
        ){
        return (
            <div>
            <h1>{this.state.name}</h1>     # print "string"
            <h2>{newStr}</h2>              # print "new string"
            </div>
        );
        }
}



========================================================

# set state with this.setState

class MyComponent extends React.Component { # this is a class, when need call function in this class,
  constructor(props) {                      # need call like this.fucntionName
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);  # this is kind define "this"
  }
  handleClick() {  # this is define a fucntion called handleClick, when user click the button, call this
    this.setState({          # this function just rewrite this.state.name to a new value
      name: "React Rocks!"
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>  # then can use "this" here after line 304
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}; # handleClick could be any other name, but need to be the same




========================================================


# use state to toggle an element


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility(){
    this.setState(                        # here
      state => {
      if (state.visibility===false){
        return {visibility:true}
        }else{
        return {visibility:false}
        };
    })}
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}



==================================================


# write counter


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
this.increment = this.increment.bind(this);
this.decrement = this.decrement.bind(this);
this.reset = this.reset.bind(this);
  }
increment(){
  this.setState(state =>({
  count: state.count + 1
  }));
};
decrement(){
  this.setState(state =>({
  count: state.count - 1
  }));
};
reset(){
  this.setState({
    count: 0
  });
}
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};



=================================================


# controlled input

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange=this.handleChange.bind(this);
  }
handleChange(event){
  this.setState(state =>({
    input: event.target.value
  }));
}
  render() {
    return (
      <div>
<input value={this.state.input} onChange={this.handleChange}></input>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};




=================================================


# create controlled form with input form and show it on the web

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}></input>
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}



========================================

# pass state as props to child component


class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>  # the 'name'=... here is Navbar's this.props.'name'
       </div>   # same as i={this.state.name}
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>         # same as {this.props.i}
    );
  }
};


========================================


# pass a callback as prop

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
      <GetInput input={this.state.inputValue}  handleChange={this.handleChange}/>  #### here
      <RenderInput input={this.state.inputValue}/>  #### here
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};



=============================================

# lifecycle method
componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount()

===================componentWillMount

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
<div>console.log(123)</div>
  }
  render() {
    return <div />
  }
};



=========== componentDidMount

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
  }, 2500);  # show activeUsers after 2.5 sec.
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}


==========================================

# re-render conponment

class OnlyEvens extends React.Component { # step 3 Controller called OnlyEvens componment with props as value={Controller.state.value}
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {  # step 4 this method recived value as nextProps
    console.log('Should I update?');
    // Change code below this line
   return nextProps.value % 2 == 0 ? true : false;  # step 5 check nextProps.value if its even, update it into Controller.state.value
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.'); # step 6 if Controller.state.value did updated, console.log"Component re-rendered"
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>  # step 1 when user click this button, call {this.addValue} method.
        <OnlyEvens value={this.state.value} />  # step 2 also return OnlyEvens componment with this.state.value
      </div>
    );
  }
}


==========================================


# style inline with JSX
# write style like a JavaScript Object with double curly braces and no dash sign and camel case

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 16}}>Big Red</div>
    );
  }
};


# const a style before return to keep code clean and organized

const styles = {color: "purple", fontSize:40, border:"2px solid purple",};
class Colorful extends React.Component {
  render() {
      # any conditions goes here, if/else while ...
    return (
      <div style={styles}>Style Me!</div>
       {this.state.display == true &&  <h1>Displayed!</h1>}     ### this is how to if/else little elements.
    );
  }
};




==========================================

# ternary expression
# syntax:   condition ? expressionIfTrue : expressionIfFalse;

const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      input:"",
      userAge:"",
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge==""
        ? buttonOne
        : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}



=================================================

# render conditionally from props

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty? "You Win!":"You Lose!"}</h1>;
#### this.props.fiftyFifty is point at fiftyFifty on line 792, which is pointing to expression on line 788
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1  // Change this line
    });
  }
  render() {
    const expression = Math.random(0,1)>=0.5; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
<Results fiftyFifty={expression}/> #fiftyFifty is called one of the props, so it called this.props.fiftyFifty
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }




  =================================================



# use array.map() to dynamically render elements

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
  this.state ={
  toDoList:[],
  userInput:""
}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(item=><li>{item}</li>);
    # for return a JSX, like <li>{item}</li>, need use {}, because its in JSX not JS anymore
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}


=======================================

# give sibling elements a unique key attribute
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(x=><li key={x+1}>{x}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};



===================================

# use Array.filter() to dynamically filter an array

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = (this.state.users.filter(x => x.online == true));
    console.log(usersOnline)
    const renderOnline =usersOnline.map(x=><li key={x.username+1}>{x.username}</li>);
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}



=============================================

# render react to the server with renderToString

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};
ReactDOMServer.renderToString(<App/>);



=============================================
=============================================
=============================================
=============================================
=============================================
=============================================


# React and Redux

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '',   messages: []}}
  // Add handleChange() and submitMessage() methods here
  handleChange(event){ this.setState({ input:event.target.value , messages:this.state.messages  }) };
  submitMessage(){this.setState({ input:"",  messages:[...this.state.messages,this.state.input]  })  }
  render() { return (   <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.submitMessage.bind(this)}>Add message</button>
        <ul> {this.state.messages.map((x, i)=><li key={i}>{x}</li> )} </ul
        # x is element in messages, i is index of x
          </div>   );}};


==============================================


# extract state logic to Redux

const ADD = "ADD";
const addMessage=(message)=>{
    return { type:ADD,  message: message,}}
const messageReducer = (state=[],action)=>{
    switch (action.type){
        case ADD: return state.concat(action.message)
        default:  return state }}
const store = Redux.createStore(messageReducer)


===============================================


# user Provider to connect Redux to React


// Redux:
const ADD = 'ADD';
const addMessage = (message) => {return { type: ADD, message}};
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD: return [  ...state, action.message      ];
    default: return state;  }};
const store = Redux.createStore(messageReducer);
// React:
class DisplayMessages extends React.Component {
  constructor(props) { super(props);
    this.state = { input: '',  messages: [] }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);  }
  handleChange(event) { this.setState({input: event.target.value });  }
  submitMessage() {  this.setState((state) => { const currentMessage = state.input;
      return { input: '', messages: state.messages.concat(currentMessage)  };   });  }
  render() { return (  <div>
        <h2>Type in a new Message:</h2>
        <input  value={this.state.input} onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>  {this.state.messages.map( (message, idx) => {  return ( <li key={idx}>{message}</li>  )}) }  </ul>  </div> ); }};

const Provider = ReactRedux.Provider;
class AppWrapper extends React.Component {
  constructor(props) {super(props);} render() { return (<Provider store={store}><DisplayMessages/></Provider>)}};




==============================================


# map state and props
# mapStateToProps()  mapDispatchToProps()


const state = [];
function mapStateToProps(state){  return {messages:state}}



==============================================


# map dispatch to props

const addMessage = (message) => { return {   type: 'ADD',   message: message  }};
function mapDispatchToProps(dispatch){ return {   submitNewMessage(message){  return dispatch(addMessage(message))  }}}


=================================================

# connect Redux to React

const addMessage = (message) => {return {type: 'ADD',  message: message }};
const mapStateToProps = (state) => { return {  messages: state };
const mapDispatchToProps = (dispatch) => { return {  submitNewMessage: (message) => {  dispatch(addMessage(message));   } }};
class Presentational extends React.Component {
  constructor(props) {super(props);  }
  render() { return <h3>This is a Presentational Component</h3> }};
const connect = ReactRedux.connect;
// Change code below this line
const ConnectedComponent=connect(mapStateToProps, mapDispatchToProps)(Presentational)


==============================================


# connect Redux to the message app

// Redux:
const ADD = 'ADD';
const addMessage = (message) => {return { type: ADD,  message: message}};
const messageReducer = (state = [], action) => {switch (action.type) {
    case ADD: return [ ...state,  action.message ];
    default:  return state; }};
const store = Redux.createStore(messageReducer);
// React:
class Presentational extends React.Component {
  constructor(props) {super(props);
    this.state = {  input: '', messages: []    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);  }
  handleChange(event) { this.setState({ input: event.target.value    }); }
  submitMessage() {
    this.setState((state) => {  const currentMessage = state.input;
      return {input: '', messages: state.messages.concat(currentMessage)};}); }
  render() {return ( <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul> {this.state.messages.map( (message, idx) => {
              return (<li key={idx}>{message}</li> )}) } </ul> </div>);}};
// React-Redux:
const mapStateToProps = (state) => { return { messages: state }};
const mapDispatchToProps = (dispatch) => {
  return {submitNewMessage: (newMessage) => {dispatch(addMessage(newMessage)) }
  }};
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container=connect(mapStateToProps,mapDispatchToProps)(Presentational)
class AppWrapper extends React.Component {
  constructor(props) {super(props);}
  render() {
    // Complete the return statement:
    return (<Provider store={store}><Container /></Provider>);
  }
};



====================================================

# extract local state into Redux


// Redux:
const ADD = 'ADD';
const addMessage = (message) => {return {type: ADD, message: message }};
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD: return [ ...state, action.message];
    default:return state;}};
const store = Redux.createStore(messageReducer);
// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;
// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '',    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);  }
  handleChange(event) {
    this.setState({ input: event.target.value });  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({input: '',});}
  render() {return (<div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>{this.props.messages.map( (message, idx) => {
              return ( <li key={idx}>{message}</li>)})}</ul></div>);}};
// Change code above this line

const mapStateToProps = (state) => {return {messages: state}};
const mapDispatchToProps = (dispatch) => {return {submitNewMessage: (message) => {dispatch(addMessage(message))}}};
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
class AppWrapper extends React.Component {render() {return (<Provider store={store}> <Container/></Provider>);}};
