import { ResourceNaming } from '../src';

interface Names {
  readonly functionName: string;
  readonly roleName: string;
}

interface TestNamingProps {
  readonly naming: ResourceNaming.NamingType | Names;
}

describe('ResouceNaming Testing', () => {

  const naming = ((props: TestNamingProps): string | undefined | Names => {
    if (ResourceNaming.isNamingType(props.naming)) {
      switch (props.naming) {
        case ResourceNaming.NamingType.DEFAULT:
          const random = ResourceNaming.createRandomString('ResourceName');
          return `resource-name-${random}`;
        case ResourceNaming.NamingType.NONE:
          return undefined;
      }
    }
    return props.naming;
  });

  it('Is Naming Randmon String', () => {
    const props = {
      naming: ResourceNaming.NamingType.DEFAULT,
    };
    expect(typeof naming(props)).toBe('string');
  });

  it('Is Naming undefined', () => {
    const props = {
      naming: ResourceNaming.NamingType.NONE,
    };
    expect(naming(props)).toBeUndefined();
  });

  it('Is Namings', () => {
    const props = {
      naming: {
        functionName: 'example-function',
        roleName: 'example-role',
      },
    };
    expect(naming(props)).toEqual({
      functionName: 'example-function',
      roleName: 'example-role',
    });
  });
});