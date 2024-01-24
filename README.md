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

### Using array to build the rolodex

In the rolodex, we'll gonna have a lot of monsters, and let's see how we can
handle that using array.

```ts
const App = () => {
  // store the monsters in a array
  const monsters = [
    {
      id: '1',
      name: 'Linda',
    },
    {
      id: '2',
      name: 'Frank',
    },
    {
      id: '3',
      name: 'Jacky',
    },
  ];

  return (
    <div className='App'>
      // map will return a new array which in this case will be
      // an array of <div> and <h1> tag element
      {monsters.map((monster) => {
        return (
         // do make sure set the unique key for each element
         // to differentiating each element for react to optimize
         // the code
         <div key={monster.id}>
           <h1>{monster.name}</h1>
         </div>
        );
      })}
    </div>
  );
};
```

### Fetch monsters by calling API

In the real world, data will not be hard coded most of time, so we need to
fetch the data by calling APIs, and here's how we can do it.

```ts
type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  // create a state to store and manage monsters
  const [monsters, setMonsters] = React.useState<Monster[]>([]);

  // use useEffect hook to make sure this action is under react lifecycle
  React.useEffect(() => {
    // fetch users data from API
    fetch('https://jsonplaceholder.typicode.com/users')
      // convert it to json
      .then((response) => response.json())
      // using setMonsters to actually update monsters array
      .then((users: Monster[]) => setMonsters(users));
  }, []);

  return (
    <div className='App'>
      {monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
      })}
    </div>
  );
};
```
