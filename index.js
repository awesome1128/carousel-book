document.addEventListener('DOMContentLoaded', function () {

  var carousel_heading_text_h2 = $('.success-stories-carousel-headings .carousel-heading-text h2');
  var carousel_heading_text_h2_idx = 0;

  /*
  $('.success-stories-carousel .carousel-cell .carousel-image.video').magnificPopup({
      type: 'iframe',
      iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>'
      },
      callbacks: {
        markupParse: function(template, values, item) {
      //    values.title = item.el.attr('title');
        }
      }
  });
  */

  function showNextQuote(direction) {
    //console.log(carousel_heading_text_h2[carousel_heading_text_h2_idx]);
    carousel_heading_text_h2.eq(carousel_heading_text_h2_idx).fadeOut(500);
    if ( direction == 'left' ) {
      --carousel_heading_text_h2_idx;
      console.log(carousel_heading_text_h2_idx);
    }
    else if ( direction == 'right' )
      ++carousel_heading_text_h2_idx;
    else 
      carousel_heading_text_h2_idx = 0;

    if ( carousel_heading_text_h2_idx < 0 ) 
      carousel_heading_text_h2_idx = 3;
    else if ( carousel_heading_text_h2_idx > 3 )
      carousel_heading_text_h2_idx = 0;

    
    setTimeout(function() {
      carousel_heading_text_h2.eq(carousel_heading_text_h2_idx % carousel_heading_text_h2.length)
      .fadeIn(500);
    }, 300);
  }

  $('.success-stories-carousel-headings .carousel-navigation .cur-carousel').text('01/04');

  var $success_stories_carousel = $('.success-stories-carousel').flickity({
    draggable: false,
    // autoPlay: 3000,
    pauseAutoPlayOnHover: true,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: false
  });
  //ssc_flickity = $success_stories_carousel.data('flickity');

  $('.success-stories-carousel-headings .carousel-navigation .left').on('click', function() {
    console.log('left');
    $('.success-stories-carousel .flickity-button.previous').click();
    showNextQuote('left');
    
  });
  $('.success-stories-carousel-headings .carousel-navigation .right').on('click', function() {
    console.log('next');
    $('.success-stories-carousel .flickity-button.next').click();
    showNextQuote('right');
  });

  $success_stories_carousel.on('select.flickity', function(event, index) { 
    $('.success-stories-carousel-headings .carousel-navigation .cur-carousel').text('0' + (index + 1) + '/04');
  });

  showNextQuote('intial');
});