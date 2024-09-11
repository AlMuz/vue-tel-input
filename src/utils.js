import allCountries from './assets/all-countries'

// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
export function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus()
    ctrl.setSelectionRange(pos, pos)

    // IE8 and below
  } else if (ctrl.createTextRange) {
    const range = ctrl.createTextRange()
    range.collapse(true)
    range.moveEnd('character', pos)
    range.moveStart('character', pos)
    range.select()
  }
}

export const defaultOptions = {
  allCountries,
  autocomplete: 'on',
  autofocus: false,
  customValidate: false,
  defaultCountry: '',
  disabled: false,
  dropdownOptions: {},
  enabledCountryCode: false,
  enabledFlags: true,
  ignoredCountries: [],
  inputClasses: '',
  inputId: '',
  inputOptions: {},
  invalidMsg: '',
  maxLen: 25,
  mode: '',
  name: 'telephone',
  onlyCountries: [],
  placeholder: 'Enter a phone number',
  preferredCountries: [],
  readonly: false,
  required: false,
  validCharactersOnly: false,
  wrapperClasses: ''
}

export default {
  options: { ...defaultOptions }
}
