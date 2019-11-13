class PostToTag < ApplicationRecord
    validates :tag_id, :post_id, presence: true

    belongs_to :post,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Post

    belongs_to :tag,
        primary_key: :id,
        foreign_key: :tag_id,
        class_name: :Tag
end
