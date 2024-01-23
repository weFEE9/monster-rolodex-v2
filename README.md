# React Basic

## React Key Concepts

1. Don't touch DOM, I'll do it.
   - Declarative - Just focus on how your APP will look like, react will handle DOM for you.
2. Build website like lego blocks.
   - Component - You can reuse it anywhere.
3. Unidirectional data flow.
   - Data can never move up.
4. UI, the rest is up to you.
   - Learn once, use it on any platform.

### How to be a great react developer

1. Decide on component
2. Decide the state and where it lives
3. What changes when state changes

## Monster rolodex - our first react project

### npx and create-react-app

We'll use `npx` and `create-react-app` to create out react project

```sh
# install npx
$ npm install -g npx
...

# then use npx to run create-react-app to create out `monster-rolodex` project
$ npx create-react-app monster-rolodex --template typescript # using typescript
...
```

### Play with our first state

Before we dive into detail of the project, let't take a look of 'state'. State is
a way how we can manage and store data that can change over time.

In the functional component, we can use the `useState` - a **Hooks** to manage state.

```ts
const App = () => {
  const [name, setName] = React.useState('Angus');

  const changeNameToBoB = () => {
    // use the setName function to change actually change the value of name
    setName('Bob');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hi {name}!</p>
        <button onClick={changeNameToBoB}>Change Name</button>
      </header>
    </div>
  );
};
```
