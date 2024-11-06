import { ResourceNaming } from '../src';

interface Names extends ResourceNaming.Naming {
  readonly functionName: string;
  readonly roleName: string;
}

interface TestNamingProps {
  readonly naming: ResourceNaming.NamingType | Names;
}

describe('ResouceNaming Testing', () => {

  const random = ResourceNaming.createRandomString('ResourceName');

  const createName = ((props?: TestNamingProps) => {

    const resourceNaming = props?.naming ?? ResourceNaming.NamingType.DEFAULT;
    return {
      naming: {
        functionName: (() => {
          if (ResourceNaming.isNamingType(resourceNaming)) {
            if (resourceNaming === ResourceNaming.NamingType.DEFAULT) {
              return `${random}-func`;
            }
            if (resourceNaming === ResourceNaming.NamingType.NONE) {
              return undefined;
            }
          }
          return resourceNaming.functionName;
        })(),
        roleName: (() => {
          if (ResourceNaming.isNamingType(resourceNaming)) {
            if (resourceNaming === ResourceNaming.NamingType.DEFAULT) {
              return `${random}-func-exc-role`;
            }
            if (resourceNaming === ResourceNaming.NamingType.NONE) {
              return undefined;
            }
          }
          return resourceNaming.roleName;
        })(),
      },
    };
  });

  it('Is Naming Randmon String', () => {
    const naming = createName({
      naming: ResourceNaming.NamingType.DEFAULT,
    });
    expect(naming).toEqual({
      naming: {
        functionName: `${random}-func`,
        roleName: `${random}-func-exc-role`,
      },
    });
  });

  it('Is Naming undefined', () => {
    const naming = createName({
      naming: ResourceNaming.NamingType.NONE,
    });
    expect(naming).toEqual({
      naming: {
        functionName: undefined,
        roleName: undefined,
      },
    });
  });

  it('Is Namings', () => {
    const naming = createName({
      naming: {
        functionName: 'example-function',
        roleName: 'example-role',
      },
    });
    expect(naming).toEqual({
      naming: {
        functionName: 'example-function',
        roleName: 'example-role',
      },
    });
  });
});