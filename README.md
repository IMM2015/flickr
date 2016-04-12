# Flickr Readr

Load a feed of public Flickr images (formatted using JSON) that are tagged with a certain term.

###Flickr URL:
`http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?`

###Parameters:
`tags: [your term], tagmode: "any", format: "json"`

###Return Image URL
The return JSON will have an Array of "items". Access the image's URL using the following path, where 'x' is the item number
`items[x].media.m`

---

###Build your own JSON search:
(http://www.flickr.com/services/api/explore/flickr.photos.search)

###More info about the Flickr web service:
(http://www.flickr.com/services/api/misc.urls.html)