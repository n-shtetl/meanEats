class AddColumnsToAuthor < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :title, :string
    add_column :authors, :bio, :text
  end
end
