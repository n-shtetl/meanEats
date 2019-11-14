class AddKickerToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :kicker, :string
  end
end
