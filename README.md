# Angular Directive Tabs

### Sample Structure
```html
   <tabset>
    <tab header-title="Tab1">
      1 This is my first tab
    </tab>
    <tab header-title="Tab2">
      2 Second tab is shown
    </tab>
  </tabset>
```

### Attributes

| Attribute | Description                       | Type      | Default     |Required|
|-----------|-----------------------------------|-----------|-------------|--------|
| `header-title` | *sets the header of the tab*       | `string` | `none`     | `false` |
| `glyphicon-class`  | *can be used when you wanter an icon be a header (bootstrap glyphicon only)*      | `string`  | `none` | `false` |