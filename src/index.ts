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

  //export interface Naming {}
  //  export interface Naming {
  //    [key: string]: string;
  //  }

  //  export interface CustomNaming {
  //    // [key: string]: string; jsii error
  //    readonly type: NamingType.CUSTOM;
  //    readonly names: {
  //      [key: string]: string;
  //    };
  //  }
  export interface NamingOptions {
    readonly naming: ResourceNaming.NamingType | {
      [key: string]: string;
    };
  }

  export function isNamingType(value: NamingType | {[key: string]: string}): value is NamingType {
    return Object.values(NamingType).includes(value as NamingType);
  }

  export function createRandomString(value: crypto.BinaryLike, length: number = 8) {
    return crypto.createHash('shake256', { outputLength: (length / 2) })
      .update(value)
      .digest('hex');
  }

  // const value = getValueByKey(originalObject, key as keyof MyObject);
  //  function getValueByKey<K extends keyof MyObject>(obj: MyObject, key: K): MyObject[K] {
  //    return obj[key];
  //  }

  export function naming (resourceNaming: NamingOptions, defaultNaming: {[p: string]: string | undefined}) {
    const names = Object.fromEntries(
      Object.entries(defaultNaming).map(([name, value]) => {
        return [name, (() => {
          if (ResourceNaming.isNamingType(resourceNaming.naming)) {
            if (resourceNaming.naming === ResourceNaming.NamingType.DEFAULT) {
              return value;
            }
            if (resourceNaming.naming === ResourceNaming.NamingType.NONE) {
              return undefined;
            }
          }
          return resourceNaming.naming[name as keyof {[key: string]: string}];
        })()];
      }),
    );
    return { naming: names };
  }
}
