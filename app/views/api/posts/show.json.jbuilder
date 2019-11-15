json.extract! @post, :id, :title, :body, :author_id, :kicker, :created_at, :ingredients, :directions
@post.photos.each do |photo|
    json.photoUrl url_for(photo)
end