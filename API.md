# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### CustomNaming <a name="CustomNaming" id="@gammarers/aws-resource-naming.ResourceNaming.CustomNaming"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-resource-naming.ResourceNaming.CustomNaming.Initializer"></a>

```typescript
import { ResourceNaming } from '@gammarers/aws-resource-naming'

const customNaming: ResourceNaming.CustomNaming = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-resource-naming.ResourceNaming.CustomNaming.property.names">names</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@gammarers/aws-resource-naming.ResourceNaming.CustomNaming.property.type">type</a></code> | <code>@gammarers/aws-resource-naming.ResourceNaming.NamingType</code> | *No description.* |

---

##### `names`<sup>Required</sup> <a name="names" id="@gammarers/aws-resource-naming.ResourceNaming.CustomNaming.property.names"></a>

```typescript
public readonly names: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@gammarers/aws-resource-naming.ResourceNaming.CustomNaming.property.type"></a>

```typescript
public readonly type: NamingType;
```

- *Type:* @gammarers/aws-resource-naming.ResourceNaming.NamingType

---

### DefaultNaming <a name="DefaultNaming" id="@gammarers/aws-resource-naming.ResourceNaming.DefaultNaming"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-resource-naming.ResourceNaming.DefaultNaming.Initializer"></a>

```typescript
import { ResourceNaming } from '@gammarers/aws-resource-naming'

const defaultNaming: ResourceNaming.DefaultNaming = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-resource-naming.ResourceNaming.DefaultNaming.property.type">type</a></code> | <code>@gammarers/aws-resource-naming.ResourceNaming.NamingType</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@gammarers/aws-resource-naming.ResourceNaming.DefaultNaming.property.type"></a>

```typescript
public readonly type: NamingType;
```

- *Type:* @gammarers/aws-resource-naming.ResourceNaming.NamingType

---

### NamingOptions <a name="NamingOptions" id="@gammarers/aws-resource-naming.ResourceNaming.NamingOptions"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-resource-naming.ResourceNaming.NamingOptions.Initializer"></a>

```typescript
import { ResourceNaming } from '@gammarers/aws-resource-naming'

const namingOptions: ResourceNaming.NamingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-resource-naming.ResourceNaming.NamingOptions.property.naming">naming</a></code> | <code>@gammarers/aws-resource-naming.ResourceNaming.NoNaming \| @gammarers/aws-resource-naming.ResourceNaming.DefaultNaming \| @gammarers/aws-resource-naming.ResourceNaming.CustomNaming</code> | *No description.* |

---

##### `naming`<sup>Required</sup> <a name="naming" id="@gammarers/aws-resource-naming.ResourceNaming.NamingOptions.property.naming"></a>

```typescript
public readonly naming: NoNaming | DefaultNaming | CustomNaming;
```

- *Type:* @gammarers/aws-resource-naming.ResourceNaming.NoNaming | @gammarers/aws-resource-naming.ResourceNaming.DefaultNaming | @gammarers/aws-resource-naming.ResourceNaming.CustomNaming

---

### NoNaming <a name="NoNaming" id="@gammarers/aws-resource-naming.ResourceNaming.NoNaming"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-resource-naming.ResourceNaming.NoNaming.Initializer"></a>

```typescript
import { ResourceNaming } from '@gammarers/aws-resource-naming'

const noNaming: ResourceNaming.NoNaming = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-resource-naming.ResourceNaming.NoNaming.property.type">type</a></code> | <code>@gammarers/aws-resource-naming.ResourceNaming.NamingType</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@gammarers/aws-resource-naming.ResourceNaming.NoNaming.property.type"></a>

```typescript
public readonly type: NamingType;
```

- *Type:* @gammarers/aws-resource-naming.ResourceNaming.NamingType

---



## Enums <a name="Enums" id="Enums"></a>

### NamingType <a name="NamingType" id="@gammarers/aws-resource-naming.ResourceNaming.NamingType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-resource-naming.ResourceNaming.NamingType.NO">NO</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-resource-naming.ResourceNaming.NamingType.DEFAULT">DEFAULT</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-resource-naming.ResourceNaming.NamingType.CUSTOM">CUSTOM</a></code> | *No description.* |

---

##### `NO` <a name="NO" id="@gammarers/aws-resource-naming.ResourceNaming.NamingType.NO"></a>

---


##### `DEFAULT` <a name="DEFAULT" id="@gammarers/aws-resource-naming.ResourceNaming.NamingType.DEFAULT"></a>

---


##### `CUSTOM` <a name="CUSTOM" id="@gammarers/aws-resource-naming.ResourceNaming.NamingType.CUSTOM"></a>

---

