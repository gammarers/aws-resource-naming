import { ResourceNaming } from '../src';

describe('ResouceNaming Testing', () => {

  const naming = ((namingType: ResourceNaming.NamingType): string | undefined => {
    switch (namingType) {
      case ResourceNaming.NamingType.DEFAULT:
        const random = ResourceNaming.createRandomString('ResourceName');
        return `resource-name-${random}`;
      case ResourceNaming.NamingType.NONE:
        return undefined;
    }
  });

  it('Is Naming Randmon String', () => {
    expect(typeof naming(ResourceNaming.NamingType.DEFAULT)).toBe('string');
  });

  it('Is Naming undefined', () => {
    expect(naming(ResourceNaming.NamingType.NONE)).toBeUndefined();
  });
});