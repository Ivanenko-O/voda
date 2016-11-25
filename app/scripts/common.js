;(function ($, window) {

	'use strict';

	$(function() {

		$(".header__wrapp").load( "header.html" );
		$(".footer__inner").load('footer.html');

		// bonuses page, tabs toggle event handler
		(function() {

			var $tabs = $('.bonus-tab');

			if (! $tabs) return;

			var $btns = $tabs.find('.toggle-button');

			$btns.on('click', toggleContent);

			function toggleContent() {

				var $target = $(this).parent().parent('.bonus-tab');

				$tabs.each(function(i, $elem) {
					if ($target !== $elem) $($elem).removeClass('is-open');
				});

				$target.toggleClass('is-open');

			}

		})();

		// modal window
		(function() {

	var overlay = $('#overlay'); 
    var open_modal = $('.open_modal'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal1_div, .modal2_div'); 

    open_modal.click( function(event) {

    	event.preventDefault(); 
    	var div = $(this).attr('href');
    	overlay.fadeIn(400, 
    		function(){ 
    			$(div)
    			.css('display', 'block') 
    			.animate({opacity: 1, top: '50%'}, 200); 
    		});
    });

    close.click( function(){ 
    	modal 
    	.animate({opacity: 0, top: '45%'}, 200, 
    		function(){ 
    			$(this).css('display', 'none');
    			overlay.fadeOut(400); 
    			}
    		);
    	});

	})();

});


})(jQuery, window);
