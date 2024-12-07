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
