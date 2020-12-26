import JustValidate from 'just-validate/dist/js/just-validate.min'
import IMask from 'imask/esm/imask'
import 'imask/esm/masked/number'

const telInput = document.querySelector('.feedback [data-input="tel"]')
const telMask = IMask(telInput, {
  mask: '+375 (00) 000-00-00'
})

let formOptions = {
  rules: {
    city: {
      required: true,
      minLength: 3,
      function: (name, value) => {
        const letters = /^[a-z, а-я, A-Z, А-Я, " "]+$/
        return value.match(letters)
      },
    },
    date: {
      required: true
    },
    nights: {
      required: true
    },
    name: {
      required: true,
      minLength: 3,
      function: (name, value) => {
        const letters = /^[a-z, а-я, A-Z, А-Я, " "]+$/
        return value.match(letters)
      },
    },
    phone: {
      required: true,
      function: (name, value) => {

        if (telMask.unmaskedValue) {
          return telMask.unmaskedValue.length === 9
        }
      },
    },
    text: {
      required: true,
      minLength: 10,
    },
  },
  messages: {
    city: {
      required: 'Поле обязательно для заполнения',
      minLength: 'Минимальная длина имени: 3 символа',
      function: 'Имя может содержать только буквы'
    },
    date: {
      required: 'Поле обязательно для заполнения',
    },
    nights: {
      required: 'Поле обязательно для заполнения',
    },
    name: {
      required: 'Поле обязательно для заполнения',
      minLength: 'Минимальная длина имени: 3 символа',
      function: 'Имя может содержать только буквы'
    },
    phone: {
      required: 'Поле обязательно для заполнения',
      function: 'Введите полный номер'
    },
    text: {
      required: 'Поле обязательно для заполнения',
      minLength: 'Минимум  10 символов',
    },
  },
  tooltip: {
    selectorWrap: '.input-wrap',
    fadeOutTime: 6000
  },
  submitHandler: function (form, values, ajax) {
    return
  }
}

new window.JustValidate('.first__booking', formOptions)
new window.JustValidate('.contacts__feedback', formOptions)
