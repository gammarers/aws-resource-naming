import { ResourceNaming } from '../src';

//interface Names extends ResourceNaming.Naming {
//  readonly functionName: string;
//  readonly roleName: string;
//}

//interface TestNamingProps {
//  readonly naming: ResourceNaming.NamingType | Names;
//}

describe('ResouceNaming Testing', () => {

  const random = ResourceNaming.createRandomString('ResourceName');

  const defaultNaming = {
    functionName: `${random}-func`,
    roleName: `${random}-func-exc-role`,
  };

  // type Names = 'functionName' | 'roleName';

  it('Is Naming Default include Randmon String', () => {
    const options: ResourceNaming.NamingOptions = {
      naming: {
        type: ResourceNaming.NamingType.DEFAULT,
      },
    };
    const naming = ResourceNaming.naming(options, defaultNaming);
    expect(naming).toEqual({
      naming: defaultNaming,
    });
  });

  it('Is Naming undefined', () => {
    const options: ResourceNaming.NamingOptions = {
      naming: {
        type: ResourceNaming.NamingType.NO,
      },
    };
    const naming = ResourceNaming.naming(options, defaultNaming);
    expect(naming).toEqual({
      naming: {
        functionName: undefined,
        roleName: undefined,
      },
    });
  });

  it('Is Namings', () => {
    const options: ResourceNaming.NamingOptions = {
      naming: {
        type: ResourceNaming.NamingType.CUSTOM,
        names: {
          functionName: 'example-function',
          roleName: 'example-role',
        },
      },
    };
    const naming = ResourceNaming.naming(options, defaultNaming);
    expect(naming).toEqual({
      naming: {
        functionName: 'example-function',
        roleName: 'example-role',
      },
    });
  });
});