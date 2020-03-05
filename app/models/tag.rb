class Tag < ApplicationRecord
    validates :tag, presence: true

    scope :roots, -> { where(parent_id: nil) }

    belongs_to :superior,
        optional: true,
        class_name: :Tag,
        foreign_key: :parent_id

    has_many :subs,
        class_name: :Tag,
        foreign_key: :parent_id

    has_many :posttotags,
        primary_key: :id,
        foreign_key: :tag_id,
        class_name: :PostToTag

    has_many :posts,
        through: :posttotags,
        source: :post
end
