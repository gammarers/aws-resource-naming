import * as crypto from 'crypto';

// Default
// None (stack auto generate)
// string

// export interface Xxx {
//   readonly naming: Naming | {functionName: string, roleName: string};
// }

export namespace ResourceNaming {
  export enum NamingType {
    DEFAULT,
    NONE,
  }

  export function createRandomString(value: crypto.BinaryLike, length: number = 8) {
    return crypto.createHash('shake256', { outputLength: (length / 2) })
      .update(value)
      .digest('hex');
  }
}
