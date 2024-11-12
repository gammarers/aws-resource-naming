import * as crypto from 'crypto';

// Default
// None (stack auto generate)
// string

// export interface Xxx {
//   readonly naming: Naming | {functionName: string, roleName: string};
// }

export namespace ResourceNaming {
  export enum NamingType {
    DEFAULT = 'Defalut',
    AUTO = 'Auto',
    CUSTOM = 'Custom',
  }

  //export interface Naming {}
  //  export interface Naming {
  //    [key: string]: string;
  //  }

  export interface AutoNaming {
    readonly type: NamingType.AUTO;
  }

  export interface DefaultNaming {
    readonly type: NamingType.DEFAULT;
  }

  //  export interface CustomNaming {
  //    // [key: string]: string; jsii error
  //    readonly type: NamingType.CUSTOM;
  //    readonly names: {
  //      [key: string]: string;
  //    };
  //  }

  //  // jsii error JSII1006
  //  export interface NamingOptions<T extends string> {
  //    // jsii error JSII1003
  //    readonly naming: ResourceNaming.NamingType | {
  //      // [key: string]: string;
  //      [K in T]: string;
  //    };
  //  }

  //  export interface Txx {
  //    readonly namingOption: NamingOptions<'a'|'b'>;
  //  }

  //  export function isNamingType(value: NamingType | {[key: string]: string}): value is NamingType {
  //    return Object.values(NamingType).includes(value as NamingType);
  //  }

  export function createRandomString(value: crypto.BinaryLike, length: number = 8) {
    return crypto.createHash('shake256', { outputLength: (length / 2) })
      .update(value)
      .digest('hex');
  }

  // const value = getValueByKey(originalObject, key as keyof MyObject);
  //  function getValueByKey<K extends keyof MyObject>(obj: MyObject, key: K): MyObject[K] {
  //    return obj[key];
  //  }

  //  export type NamingOptions = {
  //    naming: ResourceNaming.AutoNaming | ResourceNaming.DefaultNaming | {type: ResourceNaming.NamingType.CUSTOM; names: {[key: string]: string}};
  //  };
  //  export type NamingOptions =
  //    ResourceNaming.AutoNaming | ResourceNaming.DefaultNaming | {type: ResourceNaming.NamingType.CUSTOM; names: {[key: string]: string}};

  export type NamingOptions =
    AutoNaming | DefaultNaming | {type: NamingType.CUSTOM; [key: string]: string};

  //export function naming<T extends string>(resourceNaming: NamingOptions<T>, defaultNaming: {[p: string]: string | undefined}) {
  // ResourceNaming.AutoNaming | ResourceNaming.DefaultNaming | {type: ResourceNaming.NamingType.CUSTOM; names: {[key: string]: string}}
  //export function naming(autoNaming: {[p: string]: string}, resourceNaming?: NamingOptions) {
  export function naming(
    autoNaming: {[p: string]: string},
    //    resourceNaming?: {
    //      naming: ResourceNaming.AutoNaming | ResourceNaming.DefaultNaming | {type: ResourceNaming.NamingType.CUSTOM; names: {[key: string]: string}};
    //    }) {
    resourceNaming?: NamingOptions) {
    return Object.fromEntries(
      Object.entries(autoNaming).map(([name, value]) => {
        return [name, (() => {
          switch (resourceNaming?.type) {
            case NamingType.CUSTOM:
              // return resourceNaming.[name as keyof {[key: string]: string}];
              // return resourceNaming.names[name as keyof {[key: string]: string}];
              return resourceNaming[name as keyof { [key: string]: string }];
            case NamingType.AUTO:
              return value;
            default:
            case NamingType.DEFAULT:
              return undefined;
          }
          //          if (ResourceNaming.isNamingType(resourceNaming.naming.type)) {
          //            if (resourceNaming.naming.type === ResourceNaming.NamingType.DEFAULT) {
          //              return value;
          //            }
          //            if (resourceNaming.naming.type === ResourceNaming.NamingType.NO) {
          //              return undefined;
          //            }
          //            return resourceNaming.naming.names[name as keyof {[key: string]: string}];
          //          }
          // return resourceNaming.naming[name as keyof {[K in T]: string}];
          // return resourceNaming.naming.names[name as keyof {[key: string]: string}];

          // return undefined;
        })()];
      }),
    );
  }
}

//interface NamingOptions {
//  readonly naming: ResourceNaming.AutoNaming | ResourceNaming.DefaultNaming | {
//    readonly type: ResourceNaming.NamingType.CUSTOM;
//    readonly names: {[key: string]: string};
//  };
//}