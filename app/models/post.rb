class Post < ApplicationRecord
    validates :title, :body, :author_id, presence: true

    belongs_to :author,
        primary_key: :id, 
        foreign_key: :author_id,
        class_name: :Author

    has_many_attached :photos

    has_one_attached :video

    has_many :posttotags,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :PostToTag

    has_many :tags,
        through: :posttotags,
        source: :tag

    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment
end
