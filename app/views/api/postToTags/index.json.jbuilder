@posttotags.each do |posttotag|
    json.set! posttotag.id do
        json.extract! posttotag, :id, :post_id, :tag_id
    end
end