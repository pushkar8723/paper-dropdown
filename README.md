[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/pushkar8723/paper-dropdown)

## &lt;paper-dropdown&gt;

`paper-dropdown` is a wrapper for `paper-dropdown-menu` to enable various features like multi-select, search / filter of
items, key value pair and 2-way binding on value.

Values can be bound using `value` attribute.

**Example**
<!--
```
<custom-element-demo>
    <template>
        <link rel="import" href="paper-dropdown.html">
        <link rel="import" href="../paper-item/paper-item.html">
        <link rel="import" href="../iron-demo-helpers/demo-pages-shared-styles.html">
        <style is="custom-style" include="demo-pages-shared-styles">
            paper-dropdown {
                height: 300px;
            }
        </style>
        <next-code-block></next-code-block>
    </template>
</custom-element-demo>
```
-->
```html
<paper-dropdown label="Fruit" value="{{value}}">
    <paper-item>Apple</paper-item>
    <paper-item>Banana</paper-item>
    <paper-item>Carrot</paper-item>
    <paper-item>Mango</paper-item>
    <paper-item>Orange</paper-item>
</paper-dropdown>
```

Each item can have a key-label pair where key is what stored in the model but
label is what user sees. This can be done using `value` attribute for `paper-item`

**Example**
<!--
```
<custom-element-demo>
    <template>
        <link rel="import" href="paper-dropdown.html">
        <link rel="import" href="../paper-item/paper-item.html">
        <link rel="import" href="../iron-demo-helpers/demo-pages-shared-styles.html">
        <style is="custom-style" include="demo-pages-shared-styles">
            paper-dropdown {
                height: 300px;
            }
        </style>
        <next-code-block></next-code-block>
    </template>
</custom-element-demo>
```
-->
```html
<paper-dropdown label="Fruit" value="{{value}}">
    <paper-item value="apple">Apple</paper-item>
    <paper-item value="banana">Banana</paper-item>
    <paper-item value="carrot">Carrot</paper-item>
    <paper-item value="mango">Mango</paper-item>
    <paper-item value="orange">Orange</paper-item>
</paper-dropdown>
```

It also has an optional parameter named `searchable`, which when set to true
will add a text field at the start of the dropdown which users can use to filter
out the items in the dropdown.

**Example**
<!--
```
<custom-element-demo>
    <template>
        <link rel="import" href="paper-dropdown.html">
        <link rel="import" href="../paper-item/paper-item.html">
        <link rel="import" href="../iron-demo-helpers/demo-pages-shared-styles.html">
        <style is="custom-style" include="demo-pages-shared-styles">
            paper-dropdown {
                height: 300px;
            }
        </style>
        <next-code-block></next-code-block>
    </template>
</custom-element-demo>
```
-->
```html
<paper-dropdown label="Fruit" value="{{value}}" searchable="true">
    <paper-item value="apple">Apple</paper-item>
    <paper-item value="banana">Banana</paper-item>
    <paper-item value="carrot">Carrot</paper-item>
    <paper-item value="mango">Mango</paper-item>
    <paper-item value="orange">Orange</paper-item>
</paper-dropdown>
```

For multi-select, set `mutli` parameter to true.  In this case however, paper-item's `value` attribute must be set.

**Example**
<!--
```
<custom-element-demo>
    <template>
        <link rel="import" href="paper-dropdown.html">
        <link rel="import" href="../paper-item/paper-item.html">
        <link rel="import" href="../iron-demo-helpers/demo-pages-shared-styles.html">
        <style is="custom-style" include="demo-pages-shared-styles">
            paper-dropdown {
                height: 300px;
            }
        </style>
        <next-code-block></next-code-block>
    </template>
</custom-element-demo>
```
-->
```html
    <paper-dropdown label="Fruit" value="{{value}}" multi="true" searchable="true">
        <paper-item value="apple">Apple</paper-item>
        <paper-item value="banana">Banana</paper-item>
        <paper-item value="carrot">Carrot</paper-item>
        <paper-item value="mango">Mango</paper-item>
        <paper-item value="orange">Orange</paper-item>
    </paper-dropdown>
```