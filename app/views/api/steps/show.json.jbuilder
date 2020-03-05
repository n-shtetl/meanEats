@steps.each do |step| 
    json.set! step.id do
        json.extract! step, :id, :title, :body, :post_id   
        step.photos.each do |photo|
            json.photoUrl url_for(photo)
        end
    end
end