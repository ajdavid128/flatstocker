class AddRetailerNameToRetailers < ActiveRecord::Migration[6.1]
  def change
    add_column :retailers, :retailer_name, :string
  end
end
