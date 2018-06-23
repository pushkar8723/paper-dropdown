import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/paper-item/paper-item';
import '@polymer/polymer/lib/elements/dom-bind';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';
import '@polymer/paper-styles/demo-pages';
import '@polymer/iron-input/iron-input';
import '@polymer/paper-input/paper-input';
import '@polymer/iron-form/iron-form';
import '../paper-dropdown';

class DemoElement extends PolymerElement {
    static get template() {
        return html`
            <style is="custom-style" include="demo-pages-shared-styles">
                .container {
                    margin: 0 auto;
                    width: 600px;
                    max-width: 90%;
                }
            </style>
            <div class="container">
                <h3>2-way Binding on Value</h3>
                <demo-snippet>
                    <dom-bind>
                        <template>
                            <paper-dropdown label="Fruit" value="{{value}}">
                                <paper-item>Apple</paper-item>
                                <paper-item>Banana</paper-item>
                                <paper-item>Mango</paper-item>
                                <paper-item>Orange</paper-item>
                                <paper-item>Tomato</paper-item>
                            </paper-dropdown>
            
                            <select value="{{value::change}}">
                                <option>Apple</option>
                                <option>Banana</option>
                                <option>Mango</option>
                                <option>Orange</option>
                                <option>Tomato</option>
                            </select>
                        </template>
                    </dom-bind>
                    <template is="dom-bind">
                        <paper-dropdown label="Fruit" value="{{value}}">
                            <paper-item>Apple</paper-item>
                            <paper-item>Banana</paper-item>
                            <paper-item>Mango</paper-item>
                            <paper-item>Orange</paper-item>
                            <paper-item>Tomato</paper-item>
                        </paper-dropdown>

                        <select value="{{value::change}}">
                            <option>Apple</option>
                            <option>Banana</option>
                            <option>Mango</option>
                            <option>Orange</option>
                            <option>Tomato</option>
                        </select>
                    </template>
                </demo-snippet>

                <h3>Key Value pair</h3>
                <demo-snippet>
                    <dom-bind>
                        <template>
                            <paper-dropdown label="Fruit" value="{{value}}">
                                <paper-item value="apple">Apple</paper-item>
                                <paper-item value="banana">Banana</paper-item>
                                <paper-item value="mango">Mango</paper-item>
                                <paper-item value="orange">Orange</paper-item>
                                <paper-item value="tomato">Tomato</paper-item>
                            </paper-dropdown>
            
                            <select value="{{value::change}}">
                                <option value="apple">Apple</option>
                                <option value="banana">Banana</option>
                                <option value="mango">Mango</option>
                                <option value="orange">Orange</option>
                                <option value="tomato">Tomato</option>
                            </select>
            
                            <p>
                                <b>Selected Fruit Key:</b> {{value}}
                            </p>
                        </template>
                    </dom-bind>
                    <template is="dom-bind">
                        <paper-dropdown label="Fruit" value="{{value}}">
                            <paper-item value="apple">Apple</paper-item>
                            <paper-item value="banana">Banana</paper-item>
                            <paper-item value="mango">Mango</paper-item>
                            <paper-item value="orange">Orange</paper-item>
                            <paper-item value="tomato">Tomato</paper-item>
                        </paper-dropdown>

                        <select value="{{value::change}}">
                            <option value="apple">Apple</option>
                            <option value="banana">Banana</option>
                            <option value="mango">Mango</option>
                            <option value="orange">Orange</option>
                            <option value="tomato">Tomato</option>
                        </select>

                        <p>
                            <b>Selected Fruit Key:</b> {{value}}
                        </p>
                    </template>
                </demo-snippet>

                <h3>Filter / Search for an item</h3>
                <demo-snippet>
                    <dom-bind>
                        <template>
                            <paper-dropdown label="Fruit" value="{{value}}" searchable="true">
                                <paper-item value="apple">Apple</paper-item>
                                <paper-item value="banana">Banana</paper-item>
                                <paper-item value="mango">Mango</paper-item>
                                <paper-item value="orange">Orange</paper-item>
                                <paper-item value="tomato">Tomato</paper-item>
                            </paper-dropdown>
            
                            <select value="{{value::change}}">
                                <option value="apple">Apple</option>
                                <option value="banana">Banana</option>
                                <option value="mango">Mango</option>
                                <option value="orange">Orange</option>
                                <option value="tomato">Tomato</option>
                            </select>
            
                            <p>
                                <b>Selected Fruit Key:</b> {{value}}
                            </p>
                        </template>
                    </dom-bind>
                    <template is="dom-bind">
                        <paper-dropdown label="Fruit" value="{{value}}" searchable="true">
                            <paper-item value="apple">Apple</paper-item>
                            <paper-item value="banana">Banana</paper-item>
                            <paper-item value="mango">Mango</paper-item>
                            <paper-item value="orange">Orange</paper-item>
                            <paper-item value="tomato">Tomato</paper-item>
                        </paper-dropdown>

                        <select value="{{value::change}}">
                            <option value="apple">Apple</option>
                            <option value="banana">Banana</option>
                            <option value="mango">Mango</option>
                            <option value="orange">Orange</option>
                            <option value="tomato">Tomato</option>
                        </select>

                        <p>
                            <b>Selected Fruit Key:</b> {{value}}
                        </p>
                    </template>
                </demo-snippet>

                <h3>Multiple Select (showcasing 2-way binding using 2 paper-dropdowns)</h3>
                <demo-snippet>
                    <dom-bind>
                        <template>
                            <paper-dropdown label="Fruit" value="{{value}}" searchable="true" multi="true"
                                search-placeholder="Search for a fruit."
                            >
                                <paper-item value="apple">Apple</paper-item>
                                <paper-item value="banana">Banana</paper-item>
                                <paper-item value="mango">Mango</paper-item>
                                <paper-item value="orange">Orange</paper-item>
                                <paper-item value="tomato">Tomato</paper-item>
                            </paper-dropdown>
            
                            <paper-dropdown label="Fruit" value="{{value}}" searchable="true" multi="true"
                                selected-placeholder="fruits selected"
                            >
                                <paper-item value="apple">Apple</paper-item>
                                <paper-item value="banana">Banana</paper-item>
                                <paper-item value="mango">Mango</paper-item>
                                <paper-item value="orange">Orange</paper-item>
                                <paper-item value="tomato">Tomato</paper-item>
                            </paper-dropdown>
            
                            <p>
                                <b>Selected Fruit Key(s):</b> {{value}}
                            </p>
                        </template>
                    </dom-bind>
                    <template is="dom-bind">
                        <paper-dropdown label="Fruit" value="{{value}}" searchable="true" multi="true"
                            search-placeholder="Search for a fruit."
                        >
                            <paper-item value="apple">Apple</paper-item>
                            <paper-item value="banana">Banana</paper-item>
                            <paper-item value="mango">Mango</paper-item>
                            <paper-item value="orange">Orange</paper-item>
                            <paper-item value="tomato">Tomato</paper-item>
                        </paper-dropdown>

                        <paper-dropdown label="Fruit" value="{{value}}" searchable="true" multi="true"
                            selected-placeholder="fruits selected"
                        >
                            <paper-item value="apple">Apple</paper-item>
                            <paper-item value="banana">Banana</paper-item>
                            <paper-item value="mango">Mango</paper-item>
                            <paper-item value="orange">Orange</paper-item>
                            <paper-item value="tomato">Tomato</paper-item>
                        </paper-dropdown>

                        <p>
                            <b>Selected Fruit Key(s):</b> {{value}}
                        </p>
                    </template>
                </demo-snippet>

                <h3>Form Validation</h3>
                <demo-snippet>
                    <dom-bind>
                        <template>
                            <iron-form id="form1">
                                <form>
                                    <paper-dropdown required label="Fruit" name="fruit" error-message="Please select a fruit">
                                        <paper-item value="apple">Apple</paper-item>
                                        <paper-item value="banana">Banana</paper-item>
                                        <paper-item value="mango">Mango</paper-item>
                                        <paper-item value="orange">Orange</paper-item>
                                        <paper-item value="tomato">Tomato</paper-item>
                                    </paper-dropdown><br/>
                                    <paper-dropdown multi required label="Fruit" name="fruits" error-message="Please select at least one fruit">
                                        <paper-item value="apple">Apple</paper-item>
                                        <paper-item value="banana">Banana</paper-item>
                                        <paper-item value="mango">Mango</paper-item>
                                        <paper-item value="orange">Orange</paper-item>
                                        <paper-item value="tomato">Tomato</paper-item>
                                    </paper-dropdown><br/>
                                    <paper-dropdown multi label="Fruit" name="fruits_min2" min-length="2" error-message="Please select at least 2 fruits">
                                        <paper-item value="apple">Apple</paper-item>
                                        <paper-item value="banana">Banana</paper-item>
                                        <paper-item value="mango">Mango</paper-item>
                                        <paper-item value="orange">Orange</paper-item>
                                        <paper-item value="tomato">Tomato</paper-item>
                                    </paper-dropdown><br/>
                                    <paper-dropdown multi label="Fruit" name="fruits_min2_max2" min-length="2" max-length="4" error-message="You can select 2-4 fruits">
                                        <paper-item value="apple">Apple</paper-item>
                                        <paper-item value="banana">Banana</paper-item>
                                        <paper-item value="mango">Mango</paper-item>
                                        <paper-item value="orange">Orange</paper-item>
                                        <paper-item value="tomato">Tomato</paper-item>
                                    </paper-dropdown><br/><br/>
                                    <button type="submit">Submit</button>
                                </form>
                            </iron-form>
                        </template>
                        <script>
                            (function() {
                                console.log('adasf');
                                var form = document.getElementById('form1');
                                form.addEventListener('submit', function() {
                                    var valid = form.validate();
                                    if (valid) {
                                        console.log(form.serializeForm());
                                    }
                                });
                            })()
                        </script>
                    </dom-bind>
                </demo-snippet>
            </div>
        `;
    }
}

customElements.define('demo-element', DemoElement);
