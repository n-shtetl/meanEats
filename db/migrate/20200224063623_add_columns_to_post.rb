class AddColumnsToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :recipe_body, :text
    add_column :posts, :why_it_works, :text
    add_column :posts, :yield, :string
    add_column :posts, :active_time, :string 
    add_column :posts, :total_time, :string
    add_column :posts, :rated, :integer
    add_column :posts, :special_equipment, :text
    add_column :posts, :notes, :text
  end
end
