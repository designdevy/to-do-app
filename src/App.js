import React from 'react';
import { Route } from 'react-router-dom';
import ToDoListContainer from './components/ToDoListContainer'
import Mock from './components/Mock'
import Mock2 from './components/Mock2'

const initialGlobalState = {
  toDos: [{title: "Make an app", id: "26872648", importance: true}, {title: "Make app design", id: "26872667", importance: false}, {title: "Make README", id: "26872660", importance: false}],
  title: "",
  priority: false,
  checked: ["26872660"],
  titleEdited: {title: "", id: ""},
  menuOpen: false,
  formOpen: false
};

// Create a Context for the (global) State
const GlobalState = React.createContext();

class Global extends React.Component {
  constructor(props) {
    super(props);

	// Set the initial (global) State
    this.state = {
      globals: initialGlobalState || {},
    };
  }

  // Expose the setGlobals function to the Globals object
  componentDidMount() {
    GlobalState.set = this.setGlobalState;
  }

  setGlobalState = (data = {}) => {
    const { globals } = this.state;

    // Loop over the data items by key, only updating those which have changed
    Object.keys(data).forEach((key) => {
      globals[key] = data[key];
    });

    // Update the state with the new State
    this.setState(globals);
  };

  render() {
    const { globals } = this.state;
    const { Root } = this.props;

    return (
      // Pass the current value of GlobalState, based on this components' State, down
      <GlobalState.Provider value={globals}>
        <Root />
      </GlobalState.Provider>
    );
  }
}

// Create a shorthand Hook for using the GlobalState
export const useGlobalState = () => React.useContext(GlobalState);

export default function App() {
  // Note: within the Root function we can return any Component (not just SomeComponent, but also a Router for instance)
  return <Global Root={() => <main>
    <Route exact path="/" component={Mock} />
    <Route exact path="/statistics" component={Mock2} />
    <Route exact path="/todo" component={ToDoListContainer} />
  </main>} />;
}

// Expose the GlobalState object to the window (allowingGlobalState.set({ count: 'new' }) from anywhere in the code (or even your console))
window.GlobalState = GlobalState;