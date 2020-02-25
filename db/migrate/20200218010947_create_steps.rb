class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
