[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@pushkar8723/paper-dropdown)
[![npm version](https://badge.fury.io/js/%40pushkar8723%2Fpaper-dropdown.svg)](https://badge.fury.io/js/%40pushkar8723%2Fpaper-dropdown)
[![Build Status](https://travis-ci.org/pushkar8723/paper-dropdown.svg?branch=master)](https://travis-ci.org/pushkar8723/paper-dropdown)

## &lt;paper-dropdown&gt;

`paper-dropdown` is a wrapper for `paper-dropdown-menu` to enable various features like multi-select, search / filter of
items, key value pair and 2-way binding on value.

[Documentation](https://paper-dropdown.netlify.com/#/elements/paper-dropdown)
[Demo](https://paper-dropdown.netlify.com/#/elements/paper-dropdown/demos/demo/index.html)


## Usage

### Installation
```
npm install --save @pushkar8723/paper-dropdown
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@pushkar8723/paper-dropdown/paper-dropdown.js';
      import '@polymer/paper-item/paper-item.js';
    </script>
  </head>
  <body>
    <paper-dropdown label="Fruit">
        <paper-item>Apple</paper-item>
        <paper-item>Banana</paper-item>
        <paper-item>Mango</paper-item>
        <paper-item>Orange</paper-item>
        <paper-item>Tomato</paper-item>
    </paper-dropdown>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@pushkar8723/paper-dropdown/paper-dropdown.js';
import '@polymer/paper-item/paper-item.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <paper-dropdown label="Fruit">
        <paper-item>Apple</paper-item>
        <paper-item>Banana</paper-item>
        <paper-item>Mango</paper-item>
        <paper-item>Orange</paper-item>
        <paper-item>Tomato</paper-item>
      </paper-dropdown-menu>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Use Cases

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
    <paper-item>Mango</paper-item>
    <paper-item>Orange</paper-item>
    <paper-item>Tomato</paper-item>
</paper-dropdown>
```

Each item can have a key-value pair where key is what stored in the model but
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
    <paper-item value="mango">Mango</paper-item>
    <paper-item value="orange">Orange</paper-item>
    <paper-item value="tomato">Tomato</paper-item>
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
    <paper-item value="mango">Mango</paper-item>
    <paper-item value="orange">Orange</paper-item>
    <paper-item value="tomato">Tomato</paper-item>
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
    <paper-item value="mango">Mango</paper-item>
    <paper-item value="orange">Orange</paper-item>
    <paper-item value="tomato">Tomato</paper-item>
</paper-dropdown>
```

A very common usecase for dropdown is where items are dynamic. Following example shows how to use paper-dropdown with template repeat.

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
<dom-bind>
    <template>
        <paper-dropdown label="Select an item" value="{{value}}" searchable multi>
            <template is="dom-repeat" items="{{items}}">
      	        <paper-item value$="{{item.key}}">{{item.value}}</paper-item>
            </template>
        </paper-dropdown><br/>
        <strong>Seleted Item:</strong> {{value}}
    </template>
    <script>
        var domBind = document.querySelector('dom-bind');
        domBind.items = [
            {key: 'item1', value: 'First Item'},
            {key: 'item2', value: 'Second Item'},
            {key: 'item3', value: 'Third Item'},
            {key: 'item4', value: 'Fourth Item'},
            {key: 'item5', value: 'Fifth Item'},
        ];
    </script>
</dom-bind>
```

### Styling

Since `paper-dropdown` is wrapper around `paper-dropdown-menu`, you can use any of the `paper-dropdown-menu`, `paper-input-container` and `paper-menu-button` style mixins and custom properties to style the internal input and menu button respectively.
