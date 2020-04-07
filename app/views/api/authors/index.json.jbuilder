@authors.each do |author|
    json.set! author.id do
        json.extract! author, :id, :name, :title, :bio   
        author.photos.each do |photo|
            json.photoUrl url_for(photo)
        end
    end
end
