# @almuz/vue-tel-input

Improved International Telephone Input with Vue.

**Useful Links**

- [Changelog](https://github.com/AlMuz/vue-tel-input/releases)

**Table of Contents**

- [Getting started](#getting-started)
- [Installation](#installation)
  - [npm](#npm)
  - [Browser](#browser)
- [Usage](#usage)
  - [Props](#props)
  - [Events](#events)
  - [Slots](#slots)
- [Typescript Support](#typescript-support)
- [Credits & Contributors](#credits-&-contributors)

## Installation

- **yarn**:
  ```bash
    yarn add @almuz/vue-tel-input
  ```
- **npm**:
  ```bash
    npm i --save @almuz/vue-tel-input
  ```

## Usage

- Import default `CSS` to your project:

  ```js
  import '@almuz/vue-tel-input/dist/vue-tel-input.css'
  ```

- In your component:

  ```html
  <template>
    ...
    <vue-tel-input v-model="phone"></vue-tel-input>
    ...
    <template>
      <script>
        import VueTelInput from 'vue-tel-input'

        export default {
          components: {
            VueTelInput
          },
          data() {
            return {
              phone: ''
            }
          }
        }
      </script>
    </template>
  </template>
  ```

### Props

| Property              | Type                                    | Default value                              | Description                                                                                                                                             |
| --------------------- | --------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultCountry`      | `String`                                | `''`                                       | Default country                                                                                                                                         |
| `disabled`            | `Boolean`                               | `false`                                    | Disable input field                                                                                                                                     |
| `disabledFormatting`  | `Boolean`                               | `false`                                    | Disable formatting the phone number in the input, the formatted result still be accessible by `formattedNumber` returned from `onInput` event           |
| `placeholder`         | `String`                                | Enter a phone number                       | Placeholder for the input                                                                                                                               |
| `required`            | `Boolean`                               | `false`                                    | Required property for HTML5 required attribute                                                                                                          |
| `enabledCountryCode`  | `Boolean`                               | `false`                                    | Enable country code in the input                                                                                                                        |
| `enabledFlags`        | `Boolean`                               | `true`                                     | Enable flags in the input                                                                                                                               |
| `preferredCountries`  | `Array`                                 | `[]`                                       | Preferred countries list, will be on top of the dropdown. ie `['AU', 'BR']`                                                                             |
| `onlyCountries`       | `Array`                                 | `[]`                                       | List of countries will be shown on the dropdown. ie `['AU', 'BR']`                                                                                      |
| `ignoredCountries`    | `Array`                                 | `[]`                                       | List of countries will NOT be shown on the dropdown. ie `['AU', 'BR']`                                                                                  |
| `autocomplete`        | `String`                                | `'on'`                                     | Native input 'autocomplete' attribute                                                                                                                   |
| `name`                | `String`                                | `'telephone'`                              | Native input 'name' attribute                                                                                                                           |
| `maxLen`              | `Number`                                | `25`                                       | Native input 'maxlength' attribute                                                                                                                      |
| `wrapperClasses`      | `String` &#124; `Array` &#124; `Object` | `''`                                       | Custom classes for the wrapper                                                                                                                          |
| `inputClasses`        | `String` &#124; `Array` &#124; `Object` | `''`                                       | Custom classes for the `input`                                                                                                                          |
| `inputId`             | `String`                                | `''`                                       | Custom 'id' for the `input`                                                                                                                             |
| `dropdownOptions`     | `Object`                                | `{ disabledDialCode: false, tabindex: 0 }` | Options for dropdown, supporting `disabledDialCode` and `tabindex`                                                                                      |
| `inputOptions`        | `Object`                                | `{ showDialCode: false, tabindex: 0 }`     | Options for input, supporting `showDialCode` (always show dial code in the input) and `tabindex`                                                        |
| `validCharactersOnly` | `Boolean`                               | `false`                                    | Only allow valid characters in a phone number (will also verify in `mounted`, so phone number with invalid characters will be shown as an empty string) |

### Events

| Event             | Arguments          | Description                                                                                                                                                    | Notes                   |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `input`           | `String`, `Object` | Fires when the input changes with the argument is the object includes `{ number, isValid, country }`                                                           | `onInput` deprecated    |
| `validate`        | `Object`           | Fires when the correctness of the phone number changes (from `true` to `false` or vice-versa) and when the component is mounted `{ number, isValid, country }` | `onValidate` deprecated |
| `blur`            |                    | Fires on blur event                                                                                                                                            | `onBlur` deprecated     |
| `space`           |                    | Fires on keyup.space event                                                                                                                                     | `onSpace` deprecated    |
| `enter`           |                    | Fires on keyup.enter event                                                                                                                                     | `onEnter` deprecated    |
| `open`            |                    | Fires when the flags dropdown opens                                                                                                                            |                         |
| `close`           |                    | Fires when the flags dropdown closes                                                                                                                           |                         |
| `country-changed` | `Object`           | Fires when country changed (even for the first time)                                                                                                           | Available from `v2.4.2` |

### Slots

| Slot         | Description                                                        | Notes |
| ------------ | ------------------------------------------------------------------ | ----- |
| `arrow-icon` | Replace the arrow next to the flag with a component of your choice |       |

## Demo Usage

```bash

# install dependencies
$ yarn/npm install

# compile demo for development
$ yarn/npm dev

# open Browser and start serving in demo
$ yarn/npm demo:open

# compile dist demo
$ yarn/npm dist:demo

# compile dist
$ yarn/npm dist

```

## Typescript Support

If you working with typescript will need declaration requirements.

```bash
npm install --save-dev @types/vue-tel-input
```
