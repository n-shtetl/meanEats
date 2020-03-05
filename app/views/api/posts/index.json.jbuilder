@posts.each do |post| 
    json.set! post.id do
        json.extract! post, :id, :title, :body, :author_id, :kicker, :created_at, :rated, :active_time, :total_time, :special_equipment, :notes, :recipe_body, :why_it_works, :yield  
        post.photos.each do |photo|
            json.photoUrl url_for(photo)
        end
        if post.video.attached?
            json.set! :video_url, url_for(post.video)
        end
    end
end