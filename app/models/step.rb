class Step < ApplicationRecord

    belongs_to :post,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Post

    
    has_many_attached :photos
end
