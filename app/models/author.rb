class Author < ApplicationRecord
    validates :name, presence: true
    
    has_many :posts,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Post

    has_many_attached :photos
end
