# Pylon - Declarative layout primitives for CSS & HTML

Pylon encapsulates Flexbox logic into a set of simple tags and attributes which, when combined, can form robust user interfaces using a declarative and expressive API.

### Stacks
Pylon has two stack elements:
* `<hstack>...` – For stacking things horizontally
* `<vstack>...` - For stacking things vertically

#### Stack attributes
Attributes can be added to stack elements to configure their behaviour.
* `spacing=` – Add spacing between elements in a stack
  * `xxs, xs, s, m, l, xl` – Defines the spacing size
* `alignment=` – Aligns items along the axis
  * `leading`
  * `center`
  * `trailing`
* `justify=` - Aligns items along the cross-axis
  * `leading`
  * `center`
  * `trailing`

Example:
```html
<vstack spacing=s>
  <input type="text" placeholder="Your name"/>
  <input type="email" placeholder="Your email"/>
  <button>Submit</button>
</vstack>
```


### Lists
Lists are similar to a `<vstack>` but have some built in conveniences. The List element will assume its immediate children are row elements and draw borders between them while omitting the last row.

Example:

```html
<list>
  <text>Red</text>
  <text>Yellow</text>
  <text>Green</text>
  <text>Pink</text>
  <text>Blue</text>
</list>
```

Lists combined with stacks become simple ways to build more complex UIs:
```html
<list spacing=s>
  <hstack spacing=s>
    <text>Alasdair Monk</text>
    <text>@almonk</text>
    <spacer></spacer>
    <text>User Experience Architect</text>
  </hstack>
  <hstack spacing=s>
    <text>Tom Cavill</text>
    <text>@cavill</text>
    <spacer></spacer>
    <text>Co-founder, Bricklane</text>
  </hstack>
</list>
```

### Dividers
Dividers are used to visually divide items in a stack.

Example:

```html
<hstack spacing=xs>
  <input stretch type="text"/>
  <button>Submit</button>
  <divider></divider>
  <button>Cancel</button>
</hstack>
```

### Spacers
Spacers stretch to fill available space.

Example:
```html
<hstack>
  <button>Cancel</button>
  <spacer></spacer>
  <button>Submit</button>
</hstack>
```

### Helpers
Helpers are attributes that can be applied to any element to aid with layout.

#### `stretch` – Instructs the element to fill available space
Example:
```html
<hstack spacing=xs>
  <input stretch type="text"/>
  <button>Submit</button>
</hstack>
```

#### `debug` – Outlines all child elements to visually see boundaries
Example:
```html
<vstack debug>
  ...
</vstack>
```

## Building locally
```
$ npm install
$ gulp pylon
```