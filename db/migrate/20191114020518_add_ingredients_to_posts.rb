class AddIngredientsToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :ingredients, :text
  end
end
