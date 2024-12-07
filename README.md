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
