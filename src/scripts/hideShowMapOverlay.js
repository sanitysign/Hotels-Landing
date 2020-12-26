$(`body`).on(`pointerdown`, function(e) {

  if ($(e.target).closest(`.map`).length === 0) {

    $(`.contacts__feedback-wrap`).fadeIn(`quick`)

  } else {

    $(`.contacts__feedback-wrap`).fadeOut(`quick`)
  }
})