import Post from './posts.js.erb'
import Utility from './utility'
import Routes from './routes.js'

let Favorite = {}

Favorite.create = function(post_id) {
  Post.notice_update("inc");

  $.ajax({
    type: "POST",
    url: Routes.favorites_path({format: "js"}),
    data: {
      post_id: post_id
    },
    complete: function() {
      Post.notice_update("dec");
    },
    error: function(data, status, xhr) {
      Utility.notice("Error: " + data.reason);
    }
  });
}

Favorite.destroy = function(post_id) {
  Post.notice_update("inc");

  $.ajax({
    type: "DELETE",
    url: Routes.favorite_path(post_id, {format: "js"}),
    complete: function() {
      Post.notice_update("dec");
    }
  });
}

export default Favorite

