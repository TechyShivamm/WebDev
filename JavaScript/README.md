JavaScript interview Question
----------
# Closure 
- A Closure is a function that reference variable in outer scope from its inner scope.
- A closure is the combination of a function bundled together(enclosed) with the reference 
  its Surrounding state(In lexical environment).
- In Other word A closure give you access to an outer function scope from your inner function
- In JavaScript  Closure are created every time a function is created at function creation time
- Use :-  Like to make a private variable

# Lexical Scope
- A scope refer to the current context of your code it can be either globally or locally defined
- A lexical Scope in js means that a variable defined outside a function can be accessible inside of another function defined after variable declaration but opposite is not true.
- The variable defined inside the function will not be accessible outside the function

# Closure Scope Chain
- Every closure has three step
        - Local scope
        - Outer function scope
        - Global Scope
# Difference between closure & Scope
Whenever you created a function with in another function there inner function is called closure.This closure is usually return, so we can use outer function variable at a later time
 where scope is a defined what variable you have access to.
 there are two kind of scope
 global & Local
 in case of closure - global, outer local scope







