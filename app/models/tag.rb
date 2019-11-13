class Tag < ApplicationRecord
    validates :tag, presence: true

    has_many :posttotags,
        primary_key: :id,
        foreign_key: :tag_id,
        class_name: :PostToTag

    has_many :posts,
        through: :posttotags,
        source: :post
end
