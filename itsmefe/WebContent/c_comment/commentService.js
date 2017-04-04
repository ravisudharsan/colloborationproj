
app.factory('commentService',function($http){
	console.log('starting commentService')
	var BASE_URL = "http://localhost:9080/itzmebe"
		
	var commentService = this;
	
	commentService.fetchAllComments = function(){
		console.log('entering getAllComments in service')
		return $http.get(BASE_URL + "/getAllComments").then(function(response){
			return response.data;
		},function(response){
			console.error('Error while getting comments')
			return response.data;
		});
	};
	
	/*commentService.fetchAllComments = function(blogId){
		console.log('entering getAllComments in service')
		return $http.get(BASE_URL + "/blogComment/" + blogId).then(function(response){
			return response.data;
		},function(response){
			console.error('Error while getting comments')
			return response.data;
		});
	};*/
	
	commentService.createComment = function(comment) {
		console.log('entering createComment')
		return $http.post(BASE_URL + "/comment/", comment).then(
				function(response) {
					return response.data
				}, function(response) {
					console.error('Error while Creating Blogs')
					return response.data
				});
	};
	return commentService;
})