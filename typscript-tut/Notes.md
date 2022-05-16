# NOTES

## What is Typescript?

- Typescript is an open source programming language that was developed and is maintained by microsoft.
- It is a typed superset of JavaScript that compiles to plain javascript which is understood by the browser

## Why Typescript?

- Typescript is directional related to javascript and is superior to Dart and Coffeescript
- Optional static typing and type inference. Identifying variable types and checking errors before compilation
- IDE support
- Rapid growth and use
- It is the main programming language of Angular

## Variables Types

- The basic variable types available in typescript include number, string, and boolean
- null and undefined are considered secondary variable types
- A variable of type string, boolean, or number can have null or undefined assigned to it
- When defining a list variable of type tuple, the order at which the values are assigned **must** match the order at which the tuple is defined
- TypeScript also has the `any` variable type which can be used to initialize variable without a specific type
- TypeScript also has the `unknown` variable type
- It also includes type casting

### Type Inference

- When a variable is declared in typescript without a type specified, typescript automatically infers a type to it depending on the value assigned to the variable. However, this inference only works when a value is assigned to a variable on initialization

- Multiple types are a thing in Typescript. This is the case where on variable declaration, you can specify the variable to have more than one type, say `string` and or `number`. This is different from using `any` because here, the variable is restricted to only contain data of specified types whereas `any` type has no restrictions. Also, this method provides intellisence support to the variable

## Access Modifiers

- Access Modifiers are keywords such as `public`, `protected`, and `private` and used to set the accessibility of methods and properties / attributes of a class
- - `public` gives methods and properties permission to be accessed from outside of the class. This is default modifier set to any method or attribute inside a class
- - `private` restricts accessibility of methods and attributes to be only within the base class
- - `protected` restricts accessibility of methods to only outside of the class but not to a derived class
-
- #### The `static` class method
- A static class method is a method that belongs to class itself only and not to the instance of the class. This means they can be directly invoked on the class itself. Typescript also allows us to encapsulate static methods with access modifiers
