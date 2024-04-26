/** Java script interpreter take all variable declaration and put it on top of the code. Interpreter only take the declaration part.
 * After drag it to the top interpreter initialize the variable as 'undefined'. This is only happen if we declare variable using 'var'. */

/** If we declare as a local variable in a function interpreter take the variable declaration to the top of the function or to the top of the block. */

/** With 'let' and 'const', hoisting is done by js interpreter but interpreter won't initialize them. */

console.log(x);
var x = 100;
