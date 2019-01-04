import validators from './validators'

export function checkForm (arr) {
  arr.forEach(element => {
    validators[element.validator](element.value, element.msg)
  })
}
