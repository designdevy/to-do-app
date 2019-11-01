import React from 'react';
import ToDoListContainer from './components/ToDoListContainer'

const initialGlobalState = {
  toDos: [{title: "Make an app", id: "26872648"}],
  title: "",
  checked: []
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
  return <Global Root={() => <ToDoListContainer />} />;
}

// Expose the GlobalState object to the window (allowingGlobalState.set({ count: 'new' }) from anywhere in the code (or even your console))
window.GlobalState = GlobalState;