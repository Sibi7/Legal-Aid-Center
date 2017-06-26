$(document).ready(function () {

    /*reviews slider*/
    if($('#reviews-slider').length > 0){       

        $('#reviews-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: true,
            navigation: true,
            /*navigationText: true,*/
            pagination: true,
            autoplay: true,
            autoplayTimeout: 9000,
            items: 1,
            dots: true,
            singleItem: false,
            mouseDrag: false,
            touchDrag: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                1200: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });
    }
    /*close reviews slider*/

    /*footer map*/
    if($('#find-us-map').length > 0){

        function initialize() {//инициализация кары

            var mapCanvas = document.getElementById('find-us-map');//получаем наш div куда будем карту добавлять

            var styleArray = [// задаем стили карты
                {
                    featureType: "all",//для всех элементов
                    stylers: [
                        { hue: "#17344f" },//базовый цвет
                        { saturation: 100 },//изменение интенсивности базового цвета элемента в процентах
                        { lightness: 0 },//процентное изменение яркости элемента
                        { gamma: 1 }//гамма
                    ]
                },{
                    featureType: "road.arterial",//для дорог
                    elementType: "geometry",
                    stylers: [
                        { visibility: "on" }//видимость
                    ]
                },{
                    featureType: "poi.business",//для бизнесс-меток
                    elementType: "labels",
                    stylers: [
                        { visibility: "off" }//видимость
                    ]
                }
            ];
            var mapOptions = {//параметры карты
                center: new google.maps.LatLng(55.749834, 37.605657), //Это центр куда спозиционируется наша карта при загрузке
                zoom: 17,//увеличение 0 - 18
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: styleArray //подключаем стили
            };

            var map = new google.maps.Map(mapCanvas, mapOptions);//Инициализируем карту
           /* var dir = directory.url;//абсолютный путь для WP*/
            var image = /*dir + */'img/icon/placeholder-map-icon.png';//путь к картирке маркера
            marker = new google.maps.Marker({//добавляем маркер на карту
                map: map,
                position: {lat: 55.749834, lng: 37.605657},//центр маркера
                icon: image//тип маркера
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    }
    /*close footer map*/
    
});