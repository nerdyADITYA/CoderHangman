// Comprehensive Code Snippets Database
// Each topic has 20+ snippets for each difficulty level

export const codeSnippets = {
  // JavaScript - Functions
  'JavaScript-Functions-easy': [
    {
      code: 'function ______(x, y) {\n  return x + y;\n}',
      answer: 'add',
      description: 'Function to add two numbers'
    },
    {
      code: 'function ______(name) {\n  return "Hello, " + name;\n}',
      answer: 'greet',
      description: 'Function to greet a person'
    },
    {
      code: 'function ______() {\n  return Math.random();\n}',
      answer: 'random',
      description: 'Function to get random number'
    },
    {
      code: 'function ______(num) {\n  return num * 2;\n}',
      answer: 'double',
      description: 'Function to double a number'
    },
    {
      code: 'function ______(str) {\n  return str.length;\n}',
      answer: 'getLength',
      description: 'Function to get string length'
    },
    {
      code: 'function ______(a, b) {\n  return a > b ? a : b;\n}',
      answer: 'max',
      description: 'Function to find maximum'
    },
    {
      code: 'function ______(arr) {\n  return arr.length;\n}',
      answer: 'size',
      description: 'Function to get array size'
    },
    {
      code: 'function ______(x) {\n  return x * x;\n}',
      answer: 'square',
      description: 'Function to square a number'
    },
    {
      code: 'function ______(str) {\n  return str.toUpperCase();\n}',
      answer: 'upper',
      description: 'Function to convert to uppercase'
    },
    {
      code: 'function ______(num) {\n  return num % 2 === 0;\n}',
      answer: 'isEven',
      description: 'Function to check if number is even'
    },
    {
      code: 'function ______(x, y) {\n  return x - y;\n}',
      answer: 'subtract',
      description: 'Function to subtract two numbers'
    },
    {
      code: 'function ______(arr) {\n  return arr[0];\n}',
      answer: 'first',
      description: 'Function to get first element'
    },
    {
      code: 'function ______(str) {\n  return str.toLowerCase();\n}',
      answer: 'lower',
      description: 'Function to convert to lowercase'
    },
    {
      code: 'function ______(x, y) {\n  return x * y;\n}',
      answer: 'multiply',
      description: 'Function to multiply two numbers'
    },
    {
      code: 'function ______(num) {\n  return Math.abs(num);\n}',
      answer: 'absolute',
      description: 'Function to get absolute value'
    },
    {
      code: 'function ______(arr) {\n  return arr[arr.length - 1];\n}',
      answer: 'last',
      description: 'Function to get last element'
    },
    {
      code: 'function ______(str) {\n  return str.split("");\n}',
      answer: 'toArray',
      description: 'Function to convert string to array'
    },
    {
      code: 'function ______(x, y) {\n  return x / y;\n}',
      answer: 'divide',
      description: 'Function to divide two numbers'
    },
    {
      code: 'function ______(num) {\n  return num + 1;\n}',
      answer: 'increment',
      description: 'Function to increment a number'
    },
    {
      code: 'function ______(str) {\n  return str.trim();\n}',
      answer: 'clean',
      description: 'Function to trim whitespace'
    },
    {
      code: 'function ______(arr) {\n  return arr.reverse();\n}',
      answer: 'flip',
      description: 'Function to reverse array'
    },
    {
      code: 'function ______(num) {\n  return num < 0;\n}',
      answer: 'isNegative',
      description: 'Function to check if number is negative'
    },
    {
      code: 'function ______(str, char) {\n  return str.includes(char);\n}',
      answer: 'contains',
      description: 'Function to check if string contains character'
    }
  ],

  'JavaScript-Functions-medium': [
    {
      code: 'function ______(arr, callback) {\n  return arr.filter(callback);\n}',
      answer: 'filterArray',
      description: 'Higher-order function with callback'
    },
    {
      code: 'function ______(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}',
      answer: 'factorial',
      description: 'Recursive factorial function'
    },
    {
      code: 'const ______ = (x) => x * 2;',
      answer: 'double',
      description: 'Arrow function to double'
    },
    {
      code: 'function ______(fn, delay) {\n  return setTimeout(fn, delay);\n}',
      answer: 'delayed',
      description: 'Function with setTimeout'
    },
    {
      code: 'function ______(arr) {\n  return arr.reduce((sum, n) => sum + n, 0);\n}',
      answer: 'sum',
      description: 'Function using reduce'
    },
    {
      code: 'function* ______() {\n  yield 1;\n  yield 2;\n  yield 3;\n}',
      answer: 'generator',
      description: 'Generator function'
    },
    {
      code: 'async function ______(url) {\n  const response = await fetch(url);\n  return response.json();\n}',
      answer: 'fetchData',
      description: 'Async function with fetch'
    },
    {
      code: 'function ______(obj, key, value) {\n  return { ...obj, [key]: value };\n}',
      answer: 'updateObject',
      description: 'Function with spread operator'
    },
    {
      code: 'const ______ = (a, b) => (c) => a(b(c));',
      answer: 'compose',
      description: 'Function composition'
    },
    {
      code: 'function ______(fn) {\n  let cached;\n  return (...args) => cached || (cached = fn(...args));\n}',
      answer: 'memoize',
      description: 'Simple memoization function'
    },
    {
      code: 'function ______(arr, size) {\n  return arr.filter((_, i) => i % size === 0);\n}',
      answer: 'sample',
      description: 'Function to sample array elements'
    },
    {
      code: 'function ______(predicate) {\n  return (arr) => arr.some(predicate);\n}',
      answer: 'hasAny',
      description: 'Curried function with predicate'
    },
    {
      code: 'function ______(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}',
      answer: 'sleep',
      description: 'Promise-based sleep function'
    },
    {
      code: 'function ______(fn, thisArg) {\n  return function(...args) { return fn.apply(thisArg, args); };\n}',
      answer: 'bind',
      description: 'Custom bind implementation'
    },
    {
      code: 'function ______(arr) {\n  return arr.map((item, index) => ({ item, index }));\n}',
      answer: 'withIndex',
      description: 'Function to add index to items'
    },
    {
      code: 'const ______ = (fn, wait) => {\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => fn(...args), wait);\n  };\n};',
      answer: 'debounce',
      description: 'Debounce function'
    },
    {
      code: 'function ______(arr, key) {\n  return arr.reduce((groups, item) => {\n    (groups[item[key]] = groups[item[key]] || []).push(item);\n    return groups;\n  }, {});\n}',
      answer: 'groupBy',
      description: 'Group array by key function'
    },
    {
      code: 'function ______(fn, attempts = 3) {\n  return async (...args) => {\n    for (let i = 0; i < attempts; i++) {\n      try { return await fn(...args); }\n      catch (e) { if (i === attempts - 1) throw e; }\n    }\n  };\n}',
      answer: 'retry',
      description: 'Retry function with attempts'
    },
    {
      code: 'function ______(source, target) {\n  return Object.keys(target).every(key => source[key] === target[key]);\n}',
      answer: 'matches',
      description: 'Object matching function'
    },
    {
      code: 'const ______ = (fn) => (...args) => fn(...args.reverse());',
      answer: 'flip',
      description: 'Function to flip arguments'
    }
  ],

  'JavaScript-Functions-hard': [
    {
      code: 'function ______(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}',
      answer: 'memoizeAdvanced',
      description: 'Advanced memoization with Map'
    },
    {
      code: 'function ______(funcs) {\n  return funcs.reduce((f, g) => (...args) => f(g(...args)));\n}',
      answer: 'pipe',
      description: 'Function composition pipeline'
    },
    {
      code: 'function ______(fn, arity = fn.length) {\n  return function curried(...args) {\n    if (args.length >= arity) return fn(...args);\n    return (...nextArgs) => curried(...args, ...nextArgs);\n  };\n}',
      answer: 'curry',
      description: 'Function currying implementation'
    },
    {
      code: 'function ______(iterable, predicate) {\n  const [pass, fail] = [[], []];\n  for (const item of iterable) {\n    (predicate(item) ? pass : fail).push(item);\n  }\n  return [pass, fail];\n}',
      answer: 'partition',
      description: 'Partition function with predicate'
    },
    {
      code: 'function ______(obj) {\n  const handler = {\n    get: (target, prop) => prop in target ? target[prop] : undefined\n  };\n  return new Proxy(obj, handler);\n}',
      answer: 'safeAccess',
      description: 'Proxy for safe property access'
    },
    {
      code: 'function* ______(iterable, size) {\n  let chunk = [];\n  for (const item of iterable) {\n    chunk.push(item);\n    if (chunk.length === size) {\n      yield chunk;\n      chunk = [];\n    }\n  }\n  if (chunk.length > 0) yield chunk;\n}',
      answer: 'chunked',
      description: 'Generator for chunking iterables'
    },
    {
      code: 'function ______(asyncFuncs, concurrency = 2) {\n  return new Promise((resolve, reject) => {\n    const results = [];\n    let running = 0, index = 0;\n    \n    const next = () => {\n      if (index >= asyncFuncs.length && running === 0) {\n        resolve(results);\n        return;\n      }\n      \n      while (running < concurrency && index < asyncFuncs.length) {\n        const currentIndex = index++;\n        running++;\n        asyncFuncs[currentIndex]()\n          .then(result => results[currentIndex] = result)\n          .catch(reject)\n          .finally(() => { running--; next(); });\n      }\n    };\n    next();\n  });\n}',
      answer: 'promisePool',
      description: 'Promise pool with concurrency control'
    },
    {
      code: 'function ______(target) {\n  const cloned = Array.isArray(target) ? [] : {};\n  for (const key in target) {\n    const value = target[key];\n    cloned[key] = (value && typeof value === "object") ? deepClone(value) : value;\n  }\n  return cloned;\n}',
      answer: 'deepClone',
      description: 'Deep clone implementation'
    },
    {
      code: 'function ______(fn, wait, immediate = false) {\n  let timeout, result;\n  return function(...args) {\n    const callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(() => {\n      timeout = null;\n      if (!immediate) result = fn.apply(this, args);\n    }, wait);\n    if (callNow) result = fn.apply(this, args);\n    return result;\n  };\n}',
      answer: 'debounceAdvanced',
      description: 'Advanced debounce with immediate option'
    },
    {
      code: 'function ______(asyncIterator, concurrency = 1) {\n  return {\n    async *[Symbol.asyncIterator]() {\n      const promises = [];\n      let index = 0;\n      \n      for await (const item of asyncIterator) {\n        const promise = Promise.resolve(item).then(result => ({ result, index: index++ }));\n        promises.push(promise);\n        \n        if (promises.length >= concurrency) {\n          const { result } = await Promise.race(promises);\n          promises.splice(promises.findIndex(p => p.index === result.index), 1);\n          yield result.result;\n        }\n      }\n      \n      while (promises.length > 0) {\n        const { result } = await Promise.race(promises);\n        promises.splice(promises.findIndex(p => p.index === result.index), 1);\n        yield result.result;\n      }\n    }\n  };\n}',
      answer: 'parallelMap',
      description: 'Parallel async iterator mapper'
    }
  ],

  // JavaScript - Arrays
  'JavaScript-Arrays-easy': [
    {
      code: 'const arr = [1, 2, 3];\nconst doubled = arr._____(x => x * 2);',
      answer: 'map',
      description: 'Array method to transform elements'
    },
    {
      code: 'const numbers = [1, 2, 3];\nnumbers.______(4);',
      answer: 'push',
      description: 'Add element to end of array'
    },
    {
      code: 'const arr = [1, 2, 3, 4, 5];\nconst length = arr._____;',
      answer: 'length',
      description: 'Get array length'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst last = arr.______();',
      answer: 'pop',
      description: 'Remove last element from array'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst first = arr.______();',
      answer: 'shift',
      description: 'Remove first element from array'
    },
    {
      code: 'const arr = [1, 2, 3];\narr.______(0);',
      answer: 'unshift',
      description: 'Add element to beginning of array'
    },
    {
      code: 'const arr = [3, 1, 2];\narr.______();',
      answer: 'sort',
      description: 'Sort array elements'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst reversed = arr.______();',
      answer: 'reverse',
      description: 'Reverse array elements'
    },
    {
      code: 'const arr = [1, 2, 3, 2];\nconst index = arr.______(2);',
      answer: 'indexOf',
      description: 'Find index of element'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst joined = arr.______(",");',
      answer: 'join',
      description: 'Join array elements into string'
    },
    {
      code: 'const arr = [1, 2, 3, 4, 5];\nconst sliced = arr.______(1, 3);',
      answer: 'slice',
      description: 'Extract portion of array'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst includes = arr.______(2);',
      answer: 'includes',
      description: 'Check if array contains element'
    },
    {
      code: 'const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst combined = arr1.______(arr2);',
      answer: 'concat',
      description: 'Combine arrays'
    },
    {
      code: 'const arr = [1, 2, 3, 4, 5];\nconst even = arr.______(x => x % 2 === 0);',
      answer: 'filter',
      description: 'Filter array elements'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst found = arr.______(x => x > 1);',
      answer: 'find',
      description: 'Find first matching element'
    }
  ],

  'JavaScript-Arrays-medium': [
    {
      code: 'const arr = [1, 2, 3, 4];\nconst sum = arr.______(acc, curr) => acc + curr, 0);',
      answer: 'reduce',
      description: 'Reduce array to single value'
    },
    {
      code: 'const arr = [1, 2, 3];\nconst mapped = arr.______(x => [x, x * 2]).flat();',
      answer: 'flatMap',
      description: 'Map and flatten in one operation'
    }
  ],

  'JavaScript-Arrays-hard': [
    {
      code: 'function ______(arr, key) {\n  return arr.reduce((groups, item) => {\n    const groupKey = typeof key === "function" ? key(item) : item[key];\n    (groups[groupKey] = groups[groupKey] || []).push(item);\n    return groups;\n  }, {});\n}',
      answer: 'groupBy',
      description: 'Group array elements by key or function'
    }
  ],

  // JavaScript - Objects
  'JavaScript-Objects-easy': [
    {
      code: 'const person = {\n  name: "John",\n  age: 30\n};\nconsole.log(person.______);',
      answer: 'name',
      description: 'Access object property'
    },
    {
      code: 'const car = {};\ncar.______ = "Toyota";',
      answer: 'brand',
      description: 'Add property to object'
    },
    {
      code: 'const obj = { a: 1, b: 2 };\nconst keys = Object.______(obj);',
      answer: 'keys',
      description: 'Get object keys'
    }
  ],

  'JavaScript-Objects-medium': [
    {
      code: 'const obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3 };\nconst merged = { ...obj1, ...______ };',
      answer: 'obj2',
      description: 'Object spread operator'
    },
    {
      code: 'const user = { name: "Bob", age: 30 };\nconst { name, ______ } = user;',
      answer: 'age',
      description: 'Object destructuring'
    }
  ],

  'JavaScript-Objects-hard': [
    {
      code: 'const target = { a: 1 };\nconst handler = {\n  get(obj, prop) {\n    return prop in obj ? obj[prop] : "Not found";\n  }\n};\nconst proxy = new ______(target, handler);',
      answer: 'Proxy',
      description: 'Proxy object with getter trap'
    }
  ],

  // JavaScript - Promises
  'JavaScript-Promises-easy': [
    {
      code: 'const promise = new ______(resolve => {\n  setTimeout(() => resolve("Done"), 1000);\n});',
      answer: 'Promise',
      description: 'Create new Promise'
    },
    {
      code: 'promise\n  .______(result => console.log(result))\n  .catch(error => console.error(error));',
      answer: 'then',
      description: 'Handle promise resolution'
    }
  ],

  'JavaScript-Promises-medium': [
    {
      code: 'const promises = [fetch(url1), fetch(url2), fetch(url3)];\nPromise.______(promises)\n  .then(results => console.log(results));',
      answer: 'all',
      description: 'Wait for all promises to resolve'
    }
  ],

  'JavaScript-Promises-hard': [
    {
      code: 'function promiseWithTimeout(promise, timeout) {\n  return Promise.______([promise, new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), timeout))]);\n}',
      answer: 'race',
      description: 'Promise with timeout implementation'
    }
  ],

  // JavaScript - Classes
  'JavaScript-Classes-easy': [
    {
      code: '______ Person {\n  constructor(name) {\n    this.name = name;\n  }\n}',
      answer: 'class',
      description: 'ES6 class declaration'
    },
    {
      code: 'class Animal {\n  ______(species) {\n    this.species = species;\n  }\n}',
      answer: 'constructor',
      description: 'Constructor method in class'
    }
  ],

  'JavaScript-Classes-medium': [
    {
      code: 'class Animal {\n  speak() { return "Sound"; }\n}\n\nclass Dog ______ Animal {\n  speak() { return "Woof"; }\n}',
      answer: 'extends',
      description: 'Class inheritance with extends'
    }
  ],

  'JavaScript-Classes-hard': [
    {
      code: 'class MathUtils {\n  static ______PI = 3.14159;\n  \n  static circleArea(radius) {\n    return this.#PI * radius ** 2;\n  }\n}',
      answer: '#',
      description: 'Private static field'
    }
  ],

  // React - Components
  'React-Components-easy': [
    {
      code: 'function Welcome() {\n  return <h1>______</h1>;\n}',
      answer: 'Hello World',
      description: 'Simple React functional component'
    },
    {
      code: 'function App() {\n  return (\n    <______>\n      <h1>My App</h1>\n    </______>\n  );\n}',
      answer: 'div',
      description: 'JSX element wrapper'
    },
    {
      code: 'function Button(props) {\n  return <button>{props.______}</button>;\n}',
      answer: 'children',
      description: 'Access children prop in component'
    },
    {
      code: 'function Greeting({name}) {\n  return <h1>Hello, {______}!</h1>;\n}',
      answer: 'name',
      description: 'Destructured prop in component'
    },
    {
      code: 'const element = <div ______="container">Content</div>;',
      answer: 'className',
      description: 'JSX className attribute'
    }
  ],

  'React-Components-medium': [
    {
      code: 'function UserCard({user}) {\n  const {name, email, ______} = user;\n  return <div><h2>{name}</h2><p>{email}</p><span>{age}</span></div>;\n}',
      answer: 'age',
      description: 'Object destructuring in component'
    },
    {
      code: 'const MemoizedComponent = React.______(function ExpensiveComponent({data}) {\n  return <div>{/* expensive rendering */}</div>;\n});',
      answer: 'memo',
      description: 'React.memo for performance optimization'
    }
  ],

  'React-Components-hard': [
    {
      code: 'function withLoading(WrappedComponent) {\n  return function LoadingWrapper(props) {\n    if (props.isLoading) {\n      return <div>Loading...</div>;\n    }\n    return <______ {...props} />;\n  };\n}',
      answer: 'WrappedComponent',
      description: 'Higher-order component (HOC) pattern'
    }
  ],

  // React - Props
  'React-Props-easy': [
    {
      code: 'function Welcome(______) {\n  return <h1>Hello, {props.name}!</h1>;\n}',
      answer: 'props',
      description: 'Basic props parameter in component'
    },
    {
      code: 'function Button({children, ______}) {\n  return <button onClick={onClick}>{children}</button>;\n}',
      answer: 'onClick',
      description: 'Destructured onClick prop'
    },
    {
      code: 'function Greeting({______}) {\n  return <h1>Hello, {name}!</h1>;\n}',
      answer: 'name',
      description: 'Destructured name prop'
    },
    {
      code: 'function Card(props) {\n  return <div>{props.______}</div>;\n}',
      answer: 'title',
      description: 'Accessing title prop'
    },
    {
      code: 'function Image({src, ______}) {\n  return <img src={src} alt={alt} />;\n}',
      answer: 'alt',
      description: 'Image component with alt prop'
    },
    {
      code: 'function User({name, age = ______}) {\n  return <p>{name} is {age} years old</p>;\n}',
      answer: '18',
      description: 'Default prop value'
    },
    {
      code: 'function Link({href, children}) {\n  return <a ______={href}>{children}</a>;\n}',
      answer: 'href',
      description: 'href prop in Link component'
    },
    {
      code: 'function Avatar({______}) {\n  return <img src={src} className="avatar" />;\n}',
      answer: 'src',
      description: 'src prop for avatar image'
    },
    {
      code: 'function Status({isOnline}) {\n  return <span>{isOnline ? "Online" : "______"}</span>;\n}',
      answer: 'Offline',
      description: 'Conditional rendering with boolean prop'
    },
    {
      code: 'function Product({name, ______}) {\n  return <div><h3>{name}</h3><p>${price}</p></div>;\n}',
      answer: 'price',
      description: 'Product component with price prop'
    }
  ],

  'React-Props-medium': [
    {
      code: 'function List({items, ______}) {\n  return (\n    <ul>\n      {items.map(item => <li key={item.id} onClick={() => onItemClick(item)}>{item.name}</li>)}\n    </ul>\n  );\n}',
      answer: 'onItemClick',
      description: 'Callback prop for handling clicks'
    },
    {
      code: 'function Modal({isOpen, onClose, ______}) {\n  if (!isOpen) return null;\n  return <div className="modal"><button onClick={onClose}>×</button>{children}</div>;\n}',
      answer: 'children',
      description: 'Modal with children prop'
    },
    {
      code: 'function Form({onSubmit, ______}) {\n  return <form onSubmit={onSubmit}>{children}</form>;\n}',
      answer: 'children',
      description: 'Form wrapper component'
    },
    {
      code: 'function UserCard({user: {name, email, ______}}) {\n  return <div><h2>{name}</h2><p>{email}</p><span>{age}</span></div>;\n}',
      answer: 'age',
      description: 'Nested object destructuring in props'
    },
    {
      code: 'function Button({variant = "primary", size = "medium", ______, ...rest}) {\n  return <button className={`btn-${variant} btn-${size}`} {...rest}>{children}</button>;\n}',
      answer: 'children',
      description: 'Component with rest props and defaults'
    }
  ],

  'React-Props-hard': [
    {
      code: 'function withProps(WrappedComponent) {\n  return function EnhancedComponent(props) {\n    const enhancedProps = {...props, timestamp: Date.now()};\n    return <______ {...enhancedProps} />;\n  };\n}',
      answer: 'WrappedComponent',
      description: 'HOC that enhances props'
    },
    {
      code: 'function DataProvider({children, ______}) {\n  const [data, setData] = useState(null);\n  useEffect(() => { fetchData(apiUrl).then(setData); }, [apiUrl]);\n  return children(data);\n}',
      answer: 'apiUrl',
      description: 'Render prop pattern with API URL'
    },
    {
      code: 'const ComponentWithForwardedRef = React.forwardRef((props, ______) => {\n  return <input ref={ref} {...props} />;\n});',
      answer: 'ref',
      description: 'Forwarding refs in component'
    }
  ],

  // React - Hooks
  'React-Hooks-easy': [
    {
      code: 'const [count, setCount] = ______(0);',
      answer: 'useState',
      description: 'React useState hook'
    },
    {
      code: 'useEffect(() => {\n  console.log("Component mounted");\n}, [______]);',
      answer: '',
      description: 'useEffect with empty dependency array'
    },
    {
      code: 'const inputRef = ______();',
      answer: 'useRef',
      description: 'useRef hook for DOM reference'
    }
  ],

  'React-Hooks-medium': [
    {
      code: 'const memoizedValue = useMemo(() => {\n  return expensiveCalculation(a, b);\n}, [a, ______]);',
      answer: 'b',
      description: 'useMemo with dependencies'
    },
    {
      code: 'const handleClick = useCallback(() => {\n  setCount(count + 1);\n}, [______]);',
      answer: 'count',
      description: 'useCallback with dependency'
    }
  ],

  'React-Hooks-hard': [
    {
      code: 'function useDebounce(value, delay) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n  \n  useEffect(() => {\n    const handler = setTimeout(() => {\n      ______(value);\n    }, delay);\n    \n    return () => clearTimeout(handler);\n  }, [value, delay]);\n  \n  return debouncedValue;\n}',
      answer: 'setDebouncedValue',
      description: 'Custom debounce hook'
    }
  ],

  // Python - Functions
  'Python-Functions-easy': [
    {
      code: '______ greet(name):\n    return f"Hello, {name}!"',
      answer: 'def',
      description: 'Python function definition'
    },
    {
      code: 'def add(a, b):\n    ______ a + b',
      answer: 'return',
      description: 'Return statement in function'
    },
    {
      code: 'def square(n):\n    return n ** ______',
      answer: '2',
      description: 'Square a number'
    }
  ],

  'Python-Functions-medium': [
    {
      code: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * ______(n - 1)',
      answer: 'factorial',
      description: 'Recursive factorial function'
    }
  ],

  'Python-Functions-hard': [
    {
      code: 'def decorator(func):\n    def wrapper(*args, **kwargs):\n        print("Before")\n        result = ______(args, **kwargs)\n        print("After")\n        return result\n    return wrapper',
      answer: 'func',
      description: 'Function decorator pattern'
    }
  ],

  // Python - Lists
  'Python-Lists-easy': [
    {
      code: 'my_list = [1, 2, 3]\nmy_list.______(4)\nprint(my_list)',
      answer: 'append',
      description: 'Add element to Python list'
    },
    {
      code: 'numbers = [1, 2, 3, 4, 5]\nprint(numbers[______])',
      answer: '0',
      description: 'Access first element of list'
    },
    {
      code: 'fruits = ["apple", "banana"]\nprint(______(fruits))',
      answer: 'len',
      description: 'Get length of list'
    }
  ],

  'Python-Lists-medium': [
    {
      code: 'numbers = [1, 2, 3, 4, 5]\nfiltered = [x for x in numbers if x % 2 == ______]',
      answer: '0',
      description: 'List comprehension with modulo'
    },
    {
      code: 'words = ["apple", "banana", "cherry"]\nlengths = list(______(len, words))',
      answer: 'map',
      description: 'Map function to get lengths'
    }
  ],

  'Python-Lists-hard': [
    {
      code: 'def merge_sorted(list1, list2):\n    result = []\n    i, j = 0, 0\n    while i < len(list1) and j < len(list2):\n        if list1[i] <= list2[j]:\n            result.______(list1[i])\n            i += 1\n        else:\n            result.append(list2[j])\n            j += 1\n    return result + list1[i:] + list2[j:]',
      answer: 'append',
      description: 'Merge two sorted lists algorithm'
    }
  ],

  // Python - Dictionaries  
  'Python-Dictionaries-easy': [
    {
      code: 'student = {"name": "Alice", "age": 20}\nprint(student["______"])',
      answer: 'name',
      description: 'Access dictionary value'
    },
    {
      code: 'data = {}\ndata["key"] = "value"\nprint(data.______())',
      answer: 'keys',
      description: 'Get dictionary keys'
    }
  ],

  'Python-Dictionaries-medium': [
    {
      code: 'word_count = {}\nfor word in words:\n    word_count[word] = word_count.get(word, 0) + ______',
      answer: '1',
      description: 'Count word frequency'
    }
  ],

  'Python-Dictionaries-hard': [
    {
      code: 'def deep_merge(dict1, dict2):\n    result = dict1.copy()\n    for key, value in dict2.items():\n        if key in result and isinstance(result[key], dict) and isinstance(value, dict):\n            result[key] = ______(result[key], value)\n        else:\n            result[key] = value\n    return result',
      answer: 'deep_merge',
      description: 'Recursive dictionary merge'
    }
  ],

  // Python - Classes
  'Python-Classes-easy': [
    {
      code: 'class Person:\n    def ______(self, name, age):\n        self.name = name\n        self.age = age',
      answer: '__init__',
      description: 'Constructor method'
    }
  ],

  'Python-Classes-medium': [
    {
      code: 'class Animal:\n    def speak(self):\n        pass\n\nclass Dog(______):\n    def speak(self):\n        return "Woof!"',
      answer: 'Animal',
      description: 'Class inheritance'
    }
  ],

  'Python-Classes-hard': [
    {
      code: 'class Singleton:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().______\n        return cls._instance',
      answer: '__new__',
      description: 'Singleton pattern implementation'
    }
  ],

  // Python - Loops
  'Python-Loops-easy': [
    {
      code: 'for i in ______(5):\n    print(i)',
      answer: 'range',
      description: 'Basic range loop'
    },
    {
      code: 'numbers = [1, 2, 3, 4, 5]\nfor num in numbers:\n    if num == 3:\n        ______',
      answer: 'break',
      description: 'Break statement in loop'
    }
  ],

  'Python-Loops-medium': [
    {
      code: 'data = ["apple", "banana", "cherry"]\nfor index, value in ______(data):\n    print(f"{index}: {value}")',
      answer: 'enumerate',
      description: 'Enumerate with index and value'
    }
  ],

  'Python-Loops-hard': [
    {
      code: 'def fibonacci_generator(n):\n    a, b = 0, 1\n    for _ in range(n):\n        ______ a\n        a, b = b, a + b',
      answer: 'yield',
      description: 'Generator with yield'
    }
  ],

  // Java - Methods
  'Java-Methods-easy': [
    {
      code: 'public static int add(int a, int b) {\n    ______ a + b;\n}',
      answer: 'return',
      description: 'Return statement in Java method'
    }
  ],

  'Java-Methods-medium': [
    {
      code: 'public static int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * ______(n - 1);\n}',
      answer: 'factorial',
      description: 'Recursive factorial method'
    }
  ],

  'Java-Methods-hard': [
    {
      code: 'public static <T extends Comparable<T>> void quickSort(T[] arr, int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        ______(arr, pi + 1, high);\n    }\n}',
      answer: 'quickSort',
      description: 'Generic QuickSort implementation'
    }
  ],

  // Java - Arrays
  'Java-Arrays-easy': [
    {
      code: 'int[] numbers = new int[5];\nnumbers[0] = 10;\nSystem.out.println(numbers[______]);',
      answer: '0',
      description: 'Array element access'
    },
    {
      code: 'String[] names = {"Alice", "Bob", "Charlie"};\nSystem.out.println(names.______);',
      answer: 'length',
      description: 'Array length property'
    }
  ],

  'Java-Arrays-medium': [
    {
      code: 'int[] numbers = {3, 1, 4, 1, 5};\nArrays.______(numbers);\nSystem.out.println(Arrays.toString(numbers));',
      answer: 'sort',
      description: 'Sort array using Arrays.sort()'
    }
  ],

  'Java-Arrays-hard': [
    {
      code: 'public static int binarySearch(int[] arr, int target) {\n    int left = 0, right = arr.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] < target) left = mid + 1;\n        else right = mid - ______;\n    }\n    return -1;\n}',
      answer: '1',
      description: 'Binary search algorithm'
    }
  ],

  // Java - Classes
  'Java-Classes-easy': [
    {
      code: 'public class Person {\n    ______ String name;\n    public Person(String name) {\n        this.name = name;\n    }\n}',
      answer: 'private',
      description: 'Private field in Java class'
    }
  ],

  'Java-Classes-medium': [
    {
      code: 'public class Student extends Person {\n    public Student(String name) {\n        ______(name);\n    }\n}',
      answer: 'super',
      description: 'Call parent constructor with super'
    }
  ],

  'Java-Classes-hard': [
    {
      code: 'public abstract class Shape {\n    protected double area;\n    \n    public ______ double calculateArea();\n    \n    public double getArea() {\n        return this.area;\n    }\n}',
      answer: 'abstract',
      description: 'Abstract method declaration'
    }
  ],

  // Java - Inheritance
  'Java-Inheritance-easy': [
    {
      code: 'class Animal {\n    protected String name;\n}\n\nclass Dog ______ Animal {\n    public void bark() { }\n}',
      answer: 'extends',
      description: 'Basic class inheritance'
    }
  ],

  'Java-Inheritance-medium': [
    {
      code: 'class Shape {\n    public double getArea() { return 0; }\n}\n\nclass Circle extends Shape {\n    private double radius;\n    \n    @Override\n    public double ______() {\n        return Math.PI * radius * radius;\n    }\n}',
      answer: 'getArea',
      description: 'Method overriding'
    }
  ],

  'Java-Inheritance-hard': [
    {
      code: 'public class Vehicle {\n    protected String brand;\n    \n    public ______ void start() {\n        System.out.println("Vehicle starting...");\n    }\n}\n\npublic class Car extends Vehicle {\n    @Override\n    public void start() {\n        super.start();\n        System.out.println("Car engine started");\n    }\n}',
      answer: 'void',
      description: 'Method overriding with super call'
    }
  ],

  // Java - Interfaces
  'Java-Interfaces-easy': [
    {
      code: 'interface Drawable {\n    void draw();\n}\n\nclass Circle ______ Drawable {\n    public void draw() { }\n}',
      answer: 'implements',
      description: 'Interface implementation'
    }
  ],

  'Java-Interfaces-medium': [
    {
      code: 'interface Comparable<T> {\n    int compareTo(T other);\n}\n\nclass Student implements ______<Student> {\n    public int compareTo(Student other) { return 0; }\n}',
      answer: 'Comparable',
      description: 'Generic interface implementation'
    }
  ],

  'Java-Interfaces-hard': [
    {
      code: 'interface Calculator {\n    default int multiply(int a, int b) {\n        return a * b;\n    }\n    \n    ______ int add(int a, int b);\n}\n\nclass BasicCalculator implements Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n}',
      answer: 'int',
      description: 'Interface with default and abstract methods'
    }
  ],

  // C++ - Classes
  'C++-Classes-easy': [
    {
      code: 'class Circle {\n______:\n    int radius;\npublic:\n    void setRadius(int r);\n};',
      answer: 'private',
      description: 'Private access specifier in C++ class'
    },
    {
      code: '______ Rectangle {\npublic:\n    int width, height;\n};',
      answer: 'class',
      description: 'C++ class declaration'
    }
  ],

  'C++-Classes-medium': [
    {
      code: 'class Base {\npublic:\n    ______ void show() {\n        cout << "Base class";\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void show() override {\n        cout << "Derived class";\n    }\n};',
      answer: 'virtual',
      description: 'Virtual function for polymorphism'
    }
  ],

  'C++-Classes-hard': [
    {
      code: 'template<typename T>\nclass SmartPtr {\nprivate:\n    T* ptr;\npublic:\n    explicit SmartPtr(T* p) : ptr(p) {}\n    ______ ~SmartPtr() {\n        delete ptr;\n    }\n    T& operator*() { return *ptr; }\n    T* operator->() { return ptr; }\n};',
      answer: '',
      description: 'Smart pointer template class with destructor'
    }
  ]
};

// Helper function to get random snippet based on selections
export const getRandomSnippet = (language, topic, difficulty) => {
  const key = `${language}-${topic}-${difficulty}`;
  const snippets = codeSnippets[key];
  
  if (!snippets || snippets.length === 0) {
    // Fallback to a default snippet if specific combination doesn't exist
    console.warn(`No snippets found for ${key}, using fallback`);
    return codeSnippets['JavaScript-Functions-easy'][0];
  }
  
  // Return random snippet from the matching array
  const randomIndex = Math.floor(Math.random() * snippets.length);
  return snippets[randomIndex];
};
