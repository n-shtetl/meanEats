class AddDirectionsToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :directions, :text
  end
end
