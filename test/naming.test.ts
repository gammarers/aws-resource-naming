import { ResourceNaming } from '../src';

//interface Names extends ResourceNaming.Naming {
//  readonly functionName: string;
//  readonly roleName: string;
//}

//interface TestNamingProps {
//  readonly naming: ResourceNaming.NamingType | Names;
//}

export interface NamingOptions {
  readonly naming: ResourceNaming.NoNaming | ResourceNaming.DefaultNaming | {
    type: ResourceNaming.NamingType.CUSTOM;
    names: {
      functionName: string;
      functionRoleName: string;
    };
  };
}

describe('ResouceNaming Testing', () => {

  const random = ResourceNaming.createRandomString('ResourceName');

  const defaultNaming = {
    functionName: `${random}-func`,
    functionRoleName: `${random}-func-exc-role`,
  };

  // type Names = 'functionName' | 'roleName';

  it('Is Naming Default include Randmon String', () => {
    const options: NamingOptions = {
      naming: {
        type: ResourceNaming.NamingType.DEFAULT,
      },
    };
    const naming = ResourceNaming.naming(options, defaultNaming);
    expect(naming).toEqual({
      names: defaultNaming,
    });
  });

  it('Is Naming undefined', () => {
    const options: NamingOptions = {
      naming: {
        type: ResourceNaming.NamingType.NO,
      },
    };
    const naming = ResourceNaming.naming(options, defaultNaming);
    expect(naming).toEqual({
      names: {
        functionName: undefined,
        roleName: undefined,
      },
    });
  });

  it('Is Namings', () => {
    const options: NamingOptions = {
      naming: {
        type: ResourceNaming.NamingType.CUSTOM,
        names: {
          functionName: 'example-function',
          functionRoleName: 'example-role',
        },
      },
    };
    const naming = ResourceNaming.naming(options, defaultNaming);
    expect(naming).toEqual({
      names: {
        functionName: 'example-function',
        functionRoleName: 'example-role',
      },
    });
  });
});