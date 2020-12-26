ymaps.ready(init)

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