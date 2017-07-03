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

			$(document).find('.field-with-headline').each(function( index ) {
				var title = $(this).find('.hgroup-title').html();
				li += '<li class="headline-jump-item" data-count="' + index + '">' + title + '</li>';
			});

			if( li != '' ) {
				var sidebar = $('.sidebar-content');
				var html = '';
				html += '<h2 class="hgroup hgroup-single-line hgroup-compressed cf">';
				html += '<span class="hgroup-title"><div class="headline-root">Headlines</div></span>';
				html += '</h2>';
				html += '<ul class="nav nav-list sidebar-list headline-jump">' + li + '</ul>';
				
				sidebar.append(html);

				var jump_items = sidebar.find('.headline-jump-item');
				var jump_root = sidebar.find('.headline-root');

				jump_items.on('click', function() {
					var count = $(this).attr('data-count');
					var headlines = $(document).find('.field-with-headline');
					var offset = headlines[count].offsetTop;

					$(document).find('.mainbar').scrollTop(offset);
				});

				jump_root.on('click', function() {
					$(document).find('.mainbar').scrollTop(0);
				});
			}

		});
	};
})(jQuery);