$(`.nav__link`).on(`click`, function(e) {
  e.preventDefault()

  const id = $(this).attr(`href`)

  $(`body, html`).animate({
    scrollTop: $(id).offset().top - 10
  }, 500)
})