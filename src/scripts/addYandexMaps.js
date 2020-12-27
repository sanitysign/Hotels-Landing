const map = document.querySelector('.map')
const clientHieght = document.documentElement.clientHeight
let mapLoaded = false

loadMap()

window.onscroll = () => {
  if (mapLoaded) return
  loadMap()
}

function loadMap() {

  if (map.getBoundingClientRect().top - clientHieght < 1000) {

    const script = document.createElement('script')
    script.defer = true
    script.src = "https://api-maps.yandex.ru/2.1/?&lang=ru_RU"
    document.head.append(script)

    script.onload = () => ymaps.ready(init)
    mapLoaded = true
  }
}

function init(){

    const myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7,
        controls: ['zoomControl', 'geolocationControl']
    }, {

      suppressMapOpenBlock: true,

      geolocationControlPosition: {
        top: '315px',
        right: '10px'
      },

      zoomControlSize: 'small',

      zoomControlPosition: {
        top: '250px',
        right: '10px'
      },
    })

    myMap.behaviors.disable('scrollZoom')
}