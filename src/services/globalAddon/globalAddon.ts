// In strict mode this is always undefined inside and outside functions
// In non strinct mode this is equivalent to the local module.exports and inside functions depends on how the function is called
// global and globalThis are the same in value
// To modify the global object for the whole application we can add a global.d.ts file otherwise its value will be local to the module itself.

var myGlobalCopy = global;

const alterGlobal = () => {
  global.ll = 'new value';
  return global;
}

export const globalAddon = () => { return { myGlobalCopy, global, globalThis, alterGlobal: alterGlobal() } };