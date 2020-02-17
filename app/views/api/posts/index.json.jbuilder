@posts.each do |post| 
    json.set! post.id do
        json.extract! post, :id, :title, :body, :author_id, :kicker, :created_at    
        post.photos.each do |photo|
            json.photoUrl url_for(photo)
        end
        if post.video.attached?
            json.set! :video_url, url_for(post.video)
        end
    end
end