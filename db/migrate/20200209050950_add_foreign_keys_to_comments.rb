class AddForeignKeysToComments < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :comments, :users
    add_foreign_key :comments, :posts
  end
end
