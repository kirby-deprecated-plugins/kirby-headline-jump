(function($) {
	$.fn.headlinejump = function() {
		return this.each(function() {
			var field = $(this);
			var fieldname = 'headlinejump';

			if(field.data( fieldname )) {
				return true;
			} else {
				field.data( fieldname, true );
			}

			var li = '';
			var headlines = document.querySelectorAll('.field-with-headline');

			for( var i = 0; i < headlines.length; ++i ) {
				var title = headlines[i].querySelector('.hgroup-title').innerHTML;
				li += '<li class="headline-jump-item" data-count="' + i + '">' + title + '</li>';
			}

			if( li != '' ) {
				var sidebar = document.querySelector('.sidebar-content');
				var html = '<h2 class="hgroup hgroup-single-line hgroup-compressed cf">';
				html += '<span class="hgroup-title"><div class="headline-root">Headlines</div></span>';
				html += '</h2>';
				html += '<ul class="nav nav-list sidebar-list headline-jump">' + li + '</ul>';
				
				sidebar.innerHTML = sidebar.innerHTML + html;

				var jump_items = sidebar.querySelectorAll('.headline-jump-item');
				var jump_root = sidebar.querySelector('.headline-root');
				var i = 0;

				for( i = 0; i < jump_items.length; ++i ) {
					jump_items[i].addEventListener("click", function( event ) {
						var count = this.getAttribute('data-count');
						var headlines = document.querySelectorAll('.field-with-headline');
						var offset = headlines[count].offsetTop;

						document.querySelector('.mainbar').scrollTop = offset;
					}, false);
				}

				jump_root.addEventListener("click", function( event ) {
					document.querySelector('.mainbar').scrollTop = 0;
				}, false);
			}

		});
	};
})(jQuery);