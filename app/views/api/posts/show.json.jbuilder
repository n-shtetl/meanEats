json.extract! @post, :id, :title, :body, :author_id, :kicker
@post.photos.each do |photo|
    json.photoUrl url_for(photo)
end