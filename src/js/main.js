$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'],
        menu: '#menu',
        animateAnchor: true,
        autoScrolling: true,
        scrollHorizontally: false,
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        paddingTop: '90px',
        verticalCentered: false
    });
});