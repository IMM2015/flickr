


var searchphotos = function(term) {
	// Clear the gallery
	$('.gallery').empty();


	// The below is a DYNAMIC search

	// 1. Where to load the data
	var flickr = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

	// 2. Parameters for the image
	var params = {tags: term, tagmode: "any", format: "json"};

	// 3. Load and handle the data
	$.getJSON(flickr, params, function(result) {

		// For each of the items nodes...
		$.each(result.items, function(index, photo) {
			// index = node/photo number, starting at 0, increasing by 1 EACH time
			// photo = is the photo {object} itself
			$('<img>')
				.attr('src', photo.media.m)
				.attr('alt', photo.title)
				.appendTo('.gallery');
		});

	});
};

// When I click the SEARCH button
$('.go').on('click', function() {

	// Store the term
	var term = $('.term').val();

	// Run a search
	searchphotos(term);

});











//
