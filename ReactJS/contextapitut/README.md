
### State Management - ReactJS

There are different approaches - Redux, Context API, Zustand 


#### **1. Redux**

- widely used state management library, useful for large-scale application (where the state is shared across multiple components). 

##### 🔹 **Key Concepts**

- **Store** → A central place to store the application state.

- **Actions** → JavaScript objects that describe state changes (e.g., `{ type: "INCREMENT" }`).

- **Reducers** → Functions that take the current state and an action, then return a new state.

- **Dispatch** → A function to send actions to update the state.

- **Selectors** → Functions to access specific parts of the state.

##### ✅ **Pros**

✔️ Predictable state management.  
✔️ Easy debugging with Redux DevTools.  
✔️ Works well with large applications.  

##### ❌ **Cons**

❌ Boilerplate-heavy (reducers, actions, store setup).  
❌ Requires external dependencies (`redux`, `react-redux`, `@reduxjs/toolkit`).  

### 🛠 **Example**
```jsx
// store.js (Redux Toolkit)
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; }
  }
});

export const { increment, decrement } = counterSlice.actions;
export const store = configureStore({ reducer: counterSlice.reducer });
```
```jsx
// CounterComponent.jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

---

### **2. Context API**

Built-in React feature that allows to share state without prop drilling.

##### 🔹 **Key Concepts**
- **React.createContext()** → Creates a context object.
- **Provider** → Supplies state to consuming components.
- **useContext()** → Allows components to access the state.

##### ✅ **Pros**
✔️ No external dependencies.  
✔️ Simple and easy to set up.  
✔️ Works well for small-to-medium applications.  

##### ❌ **Cons**
❌ Re-renders all consumers when the state updates.  
❌ Not optimized for performance-heavy applications.  

##### **Performance Issue**

- **Unnecessary re-renders** : Every component consuming the context re-renders whenever any value in the provider changes, even if the component doesn't use the changed value. When a context value is changed, all components that use Context will re-render. 

- **Mitigation/Solution** : 

  - Avoid storing frequently changing state in Context. (like form inputs, animations)

  - Split context into multiple providers 

  - Memoization with useMemo or useCallback

  - npm i use-context-selector: great library to optimize React Context API by allowing components to subscribe only to the necessary parts of the context, reducing unnecessary re-renders.

##### 🛠 **Example**
```jsx
// CounterContext.js
import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
```
```jsx
// CounterComponent.jsx
import { useCounter } from "./CounterContext";

export default function Counter() {
  const { count, setCount } = useCounter();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
```
```jsx
// App.jsx
import { CounterProvider } from "./CounterContext";
import Counter from "./CounterComponent";

export default function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
```

---

### **3. Zustand**
Zustand is a lightweight and fast state management library with a much simpler API compared to Redux.

##### 🔹 **Key Concepts**
- **create()** → Defines a store.
- **useStore()** → Allows components to access state.

##### ✅ **Pros**
✔️ Minimal boilerplate.  
✔️ Supports **actions**, **selectors**, and **middleware** like Redux.  
✔️ Faster than Context API and Redux.  
✔️ Only re-renders the component that uses the state.  

##### ❌ **Cons**
❌ Not as widely used as Redux.  
❌ Lacks built-in DevTools support (but can be integrated).  

### 🛠 **Example**
```jsx
// store.js
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
```
```jsx
// CounterComponent.jsx
import useCounterStore from "./store";

export default function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

---

### npm i use-context-selector:

- great library to optimize React Context API by allowing components to subscribe only to the necessary parts of the context, reducing unnecessary re-renders.

- Only relevant components re-render when their selected data changes 

- Avoids unnecessary renders from changes in unrelated parts of context 

- The issue with useContext (Context API) is that whenever any value in the context changes, all consuming components re-render, even if they only need a part of the context. 

- 'use-context-selector' selectively listens to only the necessary parts. This reduces unnecessary re-renders and improves performance. 