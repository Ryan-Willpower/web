$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['home', 'review', 'recommend', ],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['home', 'review', 'recommend', ],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 1000,
        responsiveHeight: 500,
        responsiveSlides: false,
        parallax: true,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        lazyLoading: true,
    });
});
