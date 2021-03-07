(function ($) {

    $(window).on('load', function () { // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(500).css({ 'overflow': 'visible' });

        // ------------------------- init cubeportfolio
        if ($(".cube-port").length) {
            $('#js-grid-full-width').cubeportfolio({
                filters: '#js-filters-full-width',
                layoutMode: 'mosaic',
                sortByDimension: true,
                defaultFilter: '*',
                animationType: 'fadeOutTop',
                gapHorizontal: 20,
                gapVertical: 20,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                    width: 992,
                    cols: 3,
                }, {
                    width: 800,
                    cols: 2,
                }, {
                    width: 480,
                    cols: 1,
                    options: {
                        caption: '',
                        gapHorizontal: 10,
                        gapVertical: 10,
                    }
                }],
                caption: 'zoom',
                displayType: 'fadeIn',
                displayTypeSpeed: 100,

                // lightbox
                lightboxDelegate: '.cbp-lightbox',
                lightboxGallery: true,
                lightboxTitleSrc: 'data-title',
                lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

                plugins: {
                    loadMore: {
                        element: '#js-loadMore-full-width',
                        action: 'auto',
                        loadItems: 3,
                    }
                },
            }); (jQuery, window, document);
        }

        /* Random banner loader */
        var banners = ['imgConvert/1097_Cat_Browse_Header_Desktop_trios.webp', 'imgConvert/_Homepage_Morganite_Header_Banner_2x.webp'];
        var banner = banners[Math.floor(Math.random() * 2)];
        var $banner = $('.one-page-banner');
        $banner.attr('src', banner);
        /* ^^ */

    });

})(jQuery);
