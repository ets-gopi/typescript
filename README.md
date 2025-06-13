# typescript

| With `tsconfig.json`                   | Without `tsconfig.json`                  |
| -------------------------------------- | ---------------------------------------- |
| ts-node knows exactly how to compile   | ts-node guesses settings (often wrong)   |
| Fewer runtime errors                   | Errors like “Unknown file extension .ts” |
| Works with imports, strict types, etc. | May fail with modern syntax              |

# Syntax + Features

1. Understanding basic types in TS
2. Function Typing + annotations
3. Type definition files
4. Arrays in TS
5. Modules systems
6. Classes + Refresher on OOP

# Design Patterns with TS

1. projects

# Types

- easy way to refer to the different properties + functions that a value has
- Types are used by the ts compiler to analyze our code of errors
- 2 Categories
- Primary Types
  - number
  - string
  - boolean
  - void
  - undefined
  - null
  - symbol
- Object Types
  - Arrays
  - functions
  - objects
  - classes

# Type Annotations and Inference

# Type annotations

- code we add to tell typescript what type of value a variable will refer to
- we tell typescript the about type

# Type Inference

- Typescript tries to figure out whaht type of value a variable refers to
- Typescript guesses the type
- if declaration and initilization are on the same line typescript will figure out the type of variable

# any Type
- A type just as string or boolean
- means TS has no idea what this is 
- Avoid variables with any at all costs.