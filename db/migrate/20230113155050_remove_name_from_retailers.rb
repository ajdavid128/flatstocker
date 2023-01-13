class RemoveNameFromRetailers < ActiveRecord::Migration[6.1]
  def change
    remove_column :retailers, :name, :string
  end
end
