
var searchInput = $("#searchInput"),
		getTweetsButton = $("#button"),
		feedDiv = $("#feed"),
		searchTerm = "",
		returnedTweets = "";

searchInput.focus(function (){
	searchInput.val('');
});



	
getTweetsButton.on("click", function(event){
	searchTerm = searchInput.val(); 
  $.ajax({
	  url: 'http://search.twitter.com/search.json?q=' + searchTerm,          
	  dataType: 'jsonp',      
		success: function(data) {
			$.each(data.results, function(i, element){
    		returnedTweets = "<p><a href='http://twitter.com/" + element.from_user + "target='_blank'><img src=" + element.profile_image_url + " alt='picture of'" + element.from_user + "></a> &quot;" + element.text + "&quot; - <a href='http://twitter.com/" + element.from_user + "target='_blank'>@" + element.from_user + "</a><span class='date'> [" + element.created_at + "]</span></p>";        		
    		feedDiv.prepend(returnedTweets); //how do I remove existing feed on click of newTweets button?//
			});
		}
	});
});









/*

$(document).ready(function() {
  console.log('doc ready!');
  $('#search').click(function(){
    var search_term = {
      q: 'bowery'
    };
    search(search_term);
  });
});

	function search(search_term) {
	  $.ajax({
		  url: 'http://search.twitter.com/search.json?' + $.param(search_term),          
		  dataType: 'jsonp',      
			success: function(data) {
			  console.dir(data);
			}
		});
	}
	for (item in data['results']) {
              $('#tweets').append(
                '<li>' + data['results'][item]['text'] + '</li>');
  }

/* RESOURCES

Twitter API: https://dev.twitter.com/

jQuery AJAX reference: http://api.jquery.com/category/ajax/

*/