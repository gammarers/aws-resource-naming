import { ResourceNaming, ResourceNamingOptions, ResourceNamingType } from '../src';

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
    const options: ResourceNamingOptions = {
      type: ResourceNamingType.AUTO,
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
    const options: ResourceNamingOptions = {
      type: ResourceNamingType.DEFAULT,
    };
    const naming = ResourceNaming.naming(autoNaming, options);
    expect(naming).toEqual({
      functionName: undefined,
      roleName: undefined,
    });
  });

  it('Is Namings', () => {
    const options: ResourceNamingOptions = {
      type: ResourceNamingType.CUSTOM,
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