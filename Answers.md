1. What problem does the context API help solve?

It lets you pass specific forms of data to any component upstream and makes managing a website easier It's aimed at solving the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. 

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

The store stores the state and it is the only place in the app that will be getting state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state can be used more widely and is better for doing multiple things and reducing code. component state is only good for forms or things that can only be used once

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context is easier to write is just as complicated to get working but problem more fun to work with then the alternatives you just don’t have to memorize as much.