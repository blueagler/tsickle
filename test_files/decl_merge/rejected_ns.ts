/**
 * @fileoverview Test namespace transformations that are not supported
 *   and result in compiler errors.
 *
 * @suppress {uselessCode,checkTypes}
 */

// Namespace that is not merging with a class is not supported.
namespace notMerging {}

// Declaration merging with function is not supported.
function funcToBeMerged() {}
namespace funcToBeMerged {}

// Declaration merging with enums is not supported.
enum Colors {
  red,
  green,
  blue
}
namespace Colors {}

// Adding const values is only allowed on interfaces.
class Cabbage {}
namespace Cabbage {
  export const C = 0;
}

const o = {
  a: 0,
  b: ''
};

interface Inbetween {}
namespace Inbetween {
  export enum WHAT_FISH {RED_FISH, BLUE_FISH}
  // Merged values must be const.
  export var v = 0;
  // Merged const values must be exported.
  const K = 0;
  // Namespace references must be fully qualified.
  export const FISH = WHAT_FISH.BLUE_FISH;
  // Destructuring declarations are not allowed.
  export const {a, b} = o;
}