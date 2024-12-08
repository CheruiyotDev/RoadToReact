# Fundamentals of React

## Interview Questions

### Question: What is JSX in React?

– Answer: JSX is a syntax extension for JavaScript recommended by React for describing
what the UI should look like.

### Question: Can JSX be directly rendered by browsers?

– Answer: No, browsers can’t understand JSX. It needs to be transpiled to regular JavaScript
using tools like Babel.

### Question: Is JSX mandatory in React?

– Answer: No, JSX is not mandatory, but it’s a widely used and convenient way to write
React components.

### Question: How do you render a variable in JSX?

– Answer: Use curly braces {} to embed variables in JSX, like {myVariable}.

### Question: How to render a list of items in JSX?

– Answer: Use map() to iterate over the array and return JSX elements for each item.

### Question: What happens if you return null instead of the JSX?

– Answer: Returning null in JSX is allowed. It’s always used if you want to render nothing.

### Question: What does the term “JSX expressions” refer to?

– Answer: JSX expressions are JavaScript expressions embedded within curly braces in JSX,
allowing dynamic content.

### Question: Can you embed HTML directly within JSX?

– Answer: Yes, you can embed HTML directly within JSX, but it’s generally discouraged
due to security risks. Use dangerouslySetInnerHTML cautiously.

### Question: How do you comment in JSX?

– Answer: Use curly braces for JavaScript comments, like {/_ Your comment here _/}.

### Question: Why is it beneficial to extract components in React?

– Answer: Extracting components promotes reusability, maintainability, and a cleaner
component structure.

### Question: How do you decide when to extract a component?

– Answer: Extract a component when you find repeated UI patterns or functionality within
your code.

### Question: What is the process of extracting a component called in React?

– Answer: It’s called refactoring, specifically extracting a component to improve code
organization.

### Question: Is it possible to extract components across different files?

– Answer: Yes, extracting components into separate files promotes better file organization
and modularity.

### Question: How do you declare a function component using a function declaration?

– Answer: Use the function keyword, like function MyComponent() {...}.

### Question: How do you declare a function component using an arrow function expression?

– Answer: Use the arrow function syntax, like const MyComponent = () => {...};.

### Question: How do you define an event handler in React?

– Answer: Create a function that handles the event, like function handleClick() {...}.

### Question: How do you attach an event handler in JSX?

– Answer: Use the appropriate attribute, like onClick={handleClick}.

### Question: What is the common pattern for naming event handler functions?

– Answer: Prefix the function name with “handle” followed by the event name, like
handleClick for a click event.

### Question: Can you use arrow functions directly in the JSX for event handlers?

– Answer: Yes, using arrow functions directly in JSX is a common pattern for concise event
handlers.

### Question: How do you pass arguments to an event handler in JSX?

– Answer: Use an arrow function to call the handler with arguments, like onClick={() =>
handleClick(arg)}.

### Question: Can you reuse event handlers across multiple elements?

– Answer: Yes, event handlers can be reused for multiple elements with the same event type.

### Question: What is the purpose of the e.target property in an event handler?

– Answer: It refers to the DOM element that triggered the event, allowing you to access its
properties or manipulate it.

### Question: How do you access the event object in an event handler?

– Answer: Include (event) as a parameter in the handler function, like function handleClick(event)
{...}.

### Question: What does event.preventDefault() do in an event handler?

– Answer: It prevents the default behavior of the event, such as submitting a form or
following a link.

### Question: What is the purpose of the e.stopPropagation() method in an event handler?

– Answer: It stops the event from propagating up or down the DOM tree, preventing parent
or child elements from handling the same event.

### Question: What are props in React?

– Answer: Props (short for properties) are a mechanism for passing data from a parent
component to a child component.

### Question: How do you pass props to a component in JSX?

– Answer: Include them as attributes, like <MyComponent prop1={value1} prop2={value2}
/>.

### Question: How do you access props in a function component?

– Answer: Use the function parameters to access props, like function MyComponent(props)
{...}.

### Question: Can you modify the value of props inside a component?

– Answer: No, props are immutable. They should be treated as read-only.

## React State

- While it is not allowed to mutate React props as a developer, because they are only there to pass
  information from parent to child components, React state introduces a mutable data structure (read:
  stateful values). These stateful values get instantiated in a React component as state, can be passed
  with props as vehicle down to child components, but can also get mutated by using a function to
  modify the state. When a state gets mutated, the component with the state and all child components
  will re-render.
- While props are used to pass
  information down the component hierarchy, state is used to modify information over time.
- React’s useState method takes an initial state as an argument – in our case it is an empty string.
  Furthermore, calling this method will return an array with two entries: The first entry (searchTerm)
  represents the current state. The second entry (setSearchTerm) is a function to update this state.

## Interview Questions:

### Question: What is useState in React?

– Answer: useState is a React hook that allows function components to manage and update
state.

### Question: How do you use useState to declare state in a function component?

– Answer: const [state, setState] = useState(initialState);

### Question: What triggers a re-render in React?

– Answer: State changes or prop updates can trigger a re-render in React.

### Question: What is the purpose of the initial state in useState?

– Answer: It sets the initial value of the state variable and only applies during the first render.

### Question: How do you update state using useState?

– Answer: Use the second entry returned by useState to update the state.

### Question: Does calling setState trigger an immediate re-render?

– Answer: No, React batches state updates and performs re-renders asynchronously for
performance reasons.

### Question: What is the difference between using multiple useState calls and a single useState

call with an object?
– Answer: Using multiple calls creates independent state variables, while a single call with
an object allows you to manage multiple state values within one variable.

### Question: Can you directly mutate the state variable obtained from useState?

– Answer: No, you should always use the setState function to update the state in a immutable
way.

### Question: Does updating state always trigger a re-render?

– Answer: Yes, updating state with setState triggers a re-render of the component.

## Callback Handlers in JSX

- A callback handler gets
  introduced as event handler (A), is passed as function in props to another component (B), is executed
  there as handler (C), and calls back to the place it was introduced (D):
- In other
  words, when an (event) handler is passed as props from a parent component to its child component,
  it becomes a callback handler. React props are always passed down the component tree and therefore
  functions that are passed down as callback handlers in props can be used to communicate up the

## Interview Questions:

### Question: What is a callback handler in React?

– Answer: A callback handler is a function passed as a prop to a child component, allowing
the child to communicate with the parent.

### Question: How do you pass a callback handler to a child component?

– Answer: Include it as a prop, like <ChildComponent callback={handleCallback} />.

### Question: How do you define a callback handler in a parent component?

– Answer: Create a function in the parent component, e.g., function handleCallback(data)
{...}.

### Question: Can a callback handler receive parameters?

– Answer: Yes, callback handlers can receive parameters passed by the child component.

### Question: Can callback handlers be asynchronous?

– Answer: Yes, callback handlers can be asynchronous, allowing for handling asynchronous
operations.

### Question: Can you pass a callback handler through multiple layers of components?

– Answer: Yes, you can pass callback handlers through multiple layers of components.

### Question: Can a child component have multiple callback handlers from the same parent?

– Answer: Yes, a child component can receive and use multiple callback handlers passed
from the same parent component.

### Question: Is it common to use callback handlers for form submissions in React?

– Answer: Yes, callback handlers are com

## Lifting State in React

- The process of moving state from one component
  to another, is called lifting state.
- Rule of thumb: Always manage state at a component level where every component that’s interested
  in it is one that either manages the state (using information directly from state, e.g. App component)
  or a component below the state managing component (using information from props, e.g. List or
  Search components)
  ![alt text](image.png)
- knowing where to instantiate state in React turns out to be an important skill in every React
  developer’s career. The state should always be there where all components which depend on the state
  can read (via props) and update (via callback handler) it. These are all descendant components of
  the component which instantiates the state.

## Interview Questions:

### Question: What is lifting state in React?

– Answer: Lifting state refers to the practice of moving the state from a child component to
its parent component.

### Question: Why would you lift state in React?

– Answer: To share and manage state at a higher level, making it accessible to multiple child
components.

### Question: How do you lift state in React?

– Answer: Move the state and related functions to a common ancestor (usually a parent)
component.

### Question: Can multiple child components share the same lifted state?

– Answer: Yes, lifting state allows multiple child components to share the same state.

### Question: What’s the advantage of lifting state over using local state in a component?

– Answer: Lifting state promotes sharing state among components.

### Question: What is the role of callbacks in lifting state?

– Answer: Callback functions are used to pass data from child to parent components when
lifting state.

### Question: Can a child component modify the state of a parent component directly through a

callback handler?
– Answer: No, the child component can invoke the callback to notify the parent, and the
parent can decide how to update its state.

### Question: Is it necessary to lift all state to the top-level parent component?

– Answer: No, only lift state to a level where it needs to be shared among multiple
components.

### Question: How does lifting state contribute to better component reusability?

– Answer: Lifting state allows stateful logic to be concentrated in a common ancestor,
making components more reusable.

## React Controlled Components

- HTML elements come with their internal state which is not coupled to React.
- While
  we provide essential attributes like id and type in addition to a handler (here: onChange), we do not
  tell the element its value. However, it does show the correct value when a user types into it.
- if we want to get things right, the HTML should know
  about the React state. Therefore, we need to provide the current state as value to it:
- Now both states are synchronized. Instead of giving the HTML element the freedom of keeping
  track of its internal state, it uses React’s state by leveraging the element’s value attribute instead.
  Whenever the HTML element emits a change event, the new value is written to React’s state and
  re-renders the components. Then the HTML element uses the recent state as value again.

## Interview Questions:

### Question: What is a controlled component in React?

– Answer: A controlled component is a component whose form elements are controlled by
React state.

### Question: How do you create a controlled input in React?

– Answer: Set the input value attribute to a state variable and provide an onChange handler
to update the state.

### Question: What is the role of the value prop in a controlled input element?

– Answer: The value prop sets the current value of the input, making it a controlled
component.

### Question: How do you handle a controlled checkbox in React?

– Answer: Use the checked attribute and provide an onChange handler to update the
corresponding state.

### Question: How do you clear the value of a controlled component?

– Answer: Set the state variable to an empty or null value to clear the value of a controlled
component.

### Question: What are the potential downsides of using controlled components?

– Answer: Controlled components can lead to verbose code, especially in forms with many
input elements.
