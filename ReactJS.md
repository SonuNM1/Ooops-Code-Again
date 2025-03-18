# 🚀 ReactJS Hooks  

React 19 introduces new hooks: `useFormStatus`, `useFormState`, `useOptimistic`, and `use`.  

## 📌 Core Hooks  

### 1. 🧠 useState  
- Adds state to functional components.  
- Returns an array with two values: the **state** and a function to **update** it.  

---

### 2. ⚙️ useEffect  
- Runs **after the component renders**.  
- Used for:  
  - Fetching data  
  - Updating the DOM  
  - Setting timers  

---

### 3. 🌐 useContext  
- **Avoids prop drilling** by providing global access to shared data.  
- Accesses global data without passing props down manually.  

---

### 4. 🔍 useRef  
- **Accesses DOM elements** directly.  
- Keeps a **mutable value** across renders without triggering re-renders.  

---

### 5. ⚡ useReducer  
- Manages **complex state logic**.  
- Alternative to `useState()` for handling **multiple actions**.  

---

### 6. 🏎️ useMemo  
- **Optimizes performance** by memorizing expensive calculations.  
- Prevents unnecessary re-renders.  

---

### 7. 🔒 useCallback  
- **Optimizes functions** by memorizing them so they don’t get recreated on every render.  

---

### 8. ⏩ useLayoutEffect  
- Handles **synchronous side effects**.  
- Similar to `useEffect` but fires synchronously **after DOM updates** and **before the browser paints**.  




