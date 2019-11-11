class Post < ApplicationRecord
    validates :title, :body, :author_id, presence: true

    belongs_to :author,
        primary_key: :id, 
        foreign_key: :author_id,
        class_name: :Author

    has_many_attached :photos
end
