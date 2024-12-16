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

## Props Handling (Advanced)

- Props are passed from parent to child down the component tree. Since we use props to transport
  information from component to component frequently, and sometimes via other components which
  are in between, it is useful to know a few tricks to make passing props more convenient.

### Props Destructuring via Object Destructuring

- React props are just a JavaScript object, otherwise we couldn’t access props.list or props.onSearch
  in our React components. Since props is an object which just passes information from one component
  to another component.
- React’s props are rarely used in components by themselves; rather, all the information that
  is contained in the props object is used. By destructuring the props object right away in the
  component’s function signature, we can conveniently access all information without dealing with
  its props container.
- The use of object destructuring aligns with JavaScript’s best practices and promotes a cleaner and
  more efficient React component structure. It allows for a more straightforward extraction of the
  required properties, enhancing both the clarity of the code and the overall development experience
  in React applications.
- The nested destructuring helps us to gather all the needed information of the item object in the
  function signature for its immediate usage in the component’s elements.
- In summary, nested destructuring in React proves to be a powerful and efficient technique when
  dealing with complex data structures, especially within nested objects or arrays in props or state.
  This approach simplifies the extraction of deeply nested values, making the code more concise
  and readable. However, nested destructuring introduces lots of clutter through indentations in the
  function signature. While here it’s not the most readable option, it can be useful in other scenarios
  though.

## Spread and Rest Operators

- JavaScript’s spread operator allows us to literally spread all key/value pairs of an object to another
  object. This can also be done in React’s JSX. Instead of passing each property one at a time via
  props from List to Item component as before, we can use JavaScript’s spread operator to pass all the
  object’s key/value pairs as attribute/value pairs to a JSX element:
- Even though both have the same syntax (three dots), the rest operator shouldn’t be mistaken with
  the spread operator. Whereas the rest operator happens on the left side of an assignment, the spread operator happens on the right side. The rest operator is always used to separate an object from some
  of its properties.
- Almost always use object destructuring for props in a function component’s function signature,
  because props are rarely used themselves. Exception: When props are only passed through the
  component to the next child component (see when to use spread operator).
- Use the spread operator when you want to pass all key/value pairs of an object to a child
  component in JSX. For example, often props themselves are not used in a component but
  only passed along to the next component. Then it makes sense to just spread the props object
  {...props} to the next component.
- Use the rest operator when you only want to split out certain properties from your props object.
- Use nested destructuring only when it improves readability.

## Interview Questions:

### Question: How do you destructure props in a function component’s parameters?

- Answer: You can destructure props directly in the function parameters, like this: function
  MyComponent({ prop1, prop2 }) {…}.

### Question: Can you provide a default value while destructuring props?

- Answer: Yes, you can provide default values during destructuring, such as { prop1 =
  ‘default’, prop2 }.

### Question: Is it necessary to destructure all props, or can you choose specific ones?

- Answer: You can choose to destructure specific props based on your component’s needs,
  leaving others untouched.

### Question: How is the spread operator (…) used in React props?

- Answer: The spread operator is used to pass all properties of an object as separate props
  to a React component, like <MyComponent {…obj} />.

### Question: Can you use the spread operator to combine props with additional ones?

- Answer: Yes, you can combine existing props with additional ones using the spread
  operator, like <MyComponent {…props} newProp={value} />.

### Question: Does the spread operator create a shallow or deep copy of an object?

- Answer: The spread operator creates a shallow copy of an object, meaning nested objects
  are still references to the original.

### Question: What is the purpose of the rest operator (…rest) in React?

- Answer: The rest operator is used to collect remaining properties into a new object, often
  used in combination with props destructuring.

### Question: Why is array destructuring used for React Hooks like useState and object destruc-

turing for props?

- Answer: A React Hook like useState returns an array whereas props are an object; hence
  we need to apply the appropriate operation for the underlying data structure. The benefit
  of having an array returned from useState is that the values can be given any name in
  the destructuring operation.

### Question: What is prop drilling in React?

- Answer: Prop drilling is the process of passing props through multiple layers of compo-
  nents to reach a deeply nested child component.

## React Side-Effects

- A React component’s returned output is defined by its props and state.
- Side-effects can affect this
  output too, because they are used to interact with third-party APIs (e.g. browser’s localStorage API,
  remote APIs for data fetching), with HTML elements for width and height measurements, or with
  built-in JavaScript functions such as timers or intervals.
- React’s useEffect Hook takes two arguments: The first argument is a function that runs our side-
  effect. In our case, the side-effect stores searchTerm into the browser’s local storage. The second
  argument is a dependency array of variables. If one of these variables changes, the function for the
  side-effect is called. In our case, the function is called every time the searchTerm changes (e.g. when
  a user types into the HTML input field). In addition, it’s also called initially when the component
  renders for the first time.
- using React useEffect Hook instead of managing the side-effect in the (event) handler
  has made the application more robust. Whenever and wherever the searchTerm state is updated via
  setSearchTerm, the browser’s local storage will always be in sync with it.

## Interview Questions:

### Question: What is useEffect in React?

- Answer: useEffect is a hook in React that allows function components to perform side
  effects.

### Question: Can you use multiple useEffect hooks in one component?

- Answer: Yes, you can use multiple useEffect hooks in a single component.

### Question: What does the second argument in useEffect represent?

- Answer: The second argument is an array of dependencies. The effect runs when any of
  these dependencies change.

### Question: How do you run useEffect only once (on mount)?

- Answer: Pass an empty dependency array ([]) as the second argument.

### Question: Can useEffect return a cleanup function?

- Answer: Yes, the function returned from useEffect serves as a cleanup function.

### Question: What is the purpose of the cleanup function in useEffect?

- Answer: It handles the cleanup or teardown of resources when the component unmounts
  or when the dependencies change.

### Question: How do you perform cleanup in useEffect for each render?

- Answer: Return a function inside the useEffect with the cleanup logic.

### Question: Can you conditionally run useEffect based on a certain condition?

- Answer: Yes, you can use conditional statements inside useEffect to control when it should
  run.

### Question: What happens if you omit the second argument in useEffect?

- Answer: It runs the effect after every render, leading to potential performance issues.

### Question: How does useEffect contribute to avoiding race conditions in React?

- Answer: It allows you to handle asynchronous operations and avoid race conditions by
  managing the order of execution.

## React Custom Hooks

- It involves the creation of our own hooks tailored to specific requirements
- The primary objective of this custom hook is to ensure the synchronization of a component's state with local strage of the browser.
- With this custom hook, we can use it in a manner akin to React’s native useState Hook. It provides
  both a state variable and a function for updating the state, taking an initial state as an argument.
  The underlying functionality of this hook will be designed to ensure the synchronization of the state
  with the local storage of the browser. If you look closely at the App component in the previous code
  snippet, you can see that none of the previously introduced local storage features are there anymore.
- A custom hook can
  encapsulate non-trivial implementation details that should be kept away from a component, can
  be used in more than one React component, can be a composition of other hooks, and can even
  be open-sourced as an external library.

## Interview Questions:

### Question: What are React custom hooks?

- Answer: Custom hooks are JavaScript functions that utilize React hooks to encapsulate
  and reuse logic in function components.

### Question: How do you create a custom hook in React?

- Answer: Create a function starting with “use” and use existing React hooks or other custom
  hooks within it.

### Question: Can custom hooks have state?

- Answer: Yes, custom hooks can use hooks like useState.

### Question: What naming convention should custom hooks follow?

- Answer: Custom hooks should be named with the prefix “use” to signal their association
  with React hooks.

### Question: Can custom hooks accept parameters?

- Answer: Yes, custom hooks can accept parameters to make them flexible and customizable.

### Question: How do you share stateful logic between components using custom hooks?

- Answer: Extract the shared logic into a custom hook and use it in multiple components.

### Question: Do custom hooks have access to the component’s props?

- Answer: No, custom hooks don’t have direct access to the component’s props. They usually
  accept necessary data through arguments.

### Question: Can you use multiple custom hooks in a single component?

- Answer: Yes, you can use multiple custom hooks in a single component to leverage
  different pieces of reusable logic.

### Question: What’s the key benefit of using custom hooks?

- Answer: Custom hooks promote code reuse, abstraction of complex logic, and maintain-
  ability in React function components.

### Question: Can custom hooks have side effects like data fetching?

- Answer: Yes, custom hooks can encapsulate side effects using hooks like useEffect to
  perform tasks such as data fetching.

### Question: Are custom hooks only for state management?

- Answer: No, while custom hooks can manage state, they can encapsulate any reusable
  logic, including side effects and computations.
