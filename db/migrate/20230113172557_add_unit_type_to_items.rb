class AddUnitTypeToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :unit_type, :string
  end
end
