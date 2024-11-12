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

  const autoNaming = {
    functionName: `${random}-func`,
    functionRoleName: `${random}-func-exc-role`,
  };

  // type Names = 'functionName' | 'roleName';

  it('Is Naming Auto generate include Randmon String', () => {
    const options: ResourceNaming.NamingOptions = {
      type: ResourceNaming.NamingType.AUTO,
    };
    const naming = ResourceNaming.naming(autoNaming, options);
    expect(naming).toEqual(autoNaming);
  });

  it('Is Naming none', () => {
    expect(ResourceNaming.naming(autoNaming)).toEqual({
      functionName: undefined,
      roleName: undefined,
    });
  });

  it('Is Naming Default(undefined)', () => {
    const options: ResourceNaming.NamingOptions = {
      type: ResourceNaming.NamingType.DEFAULT,
    };
    const naming = ResourceNaming.naming(autoNaming, options);
    expect(naming).toEqual({
      functionName: undefined,
      roleName: undefined,
    });
  });

  it('Is Namings', () => {
    const options: ResourceNaming.NamingOptions = {
      type: ResourceNaming.NamingType.CUSTOM,
      functionName: 'example-function',
      functionRoleName: 'example-role',
    };
    const naming = ResourceNaming.naming(autoNaming, options);
    expect(naming).toEqual({
      functionName: 'example-function',
      functionRoleName: 'example-role',
    });
  });
});