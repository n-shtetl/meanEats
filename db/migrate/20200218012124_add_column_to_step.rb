class AddColumnToStep < ActiveRecord::Migration[5.2]
  def change
    add_column :steps, :post_id, :integer
    add_index :steps, :post_id
  end
end
