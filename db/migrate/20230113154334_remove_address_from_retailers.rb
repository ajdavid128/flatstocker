class RemoveAddressFromRetailers < ActiveRecord::Migration[6.1]
  def change
    remove_column :retailers, :address, :string
  end
end
