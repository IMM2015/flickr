// Data structure within infinite size (Array)
var album = [
	{ 'src':'3.jpg', 'cap':'Beach phone' },
	{ 'src':'1.jpg', 'cap':'Another camera' },
	{ 'src':'2.jpg', 'cap':'Disco thing' },
	{ 'src':'3.jpg', 'cap':'Beach phone' },
	{ 'src':'1.jpg', 'cap':'Another camera' },
	{ 'src':'2.jpg', 'cap':'Disco thing' }
];
// The above is STATIC

// For each of the album nodes
$.each(album, function(index, photo) {
	// index = node/photo number, starting at 0, increasing by 1 EACH time
	// photo = is the photo {object} itself
	$('<img>')
		.attr('src', 'images/' + photo.src)
		.attr('alt', photo.cap)
		.appendTo('.gallery');

});







//
