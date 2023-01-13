class AddEmailToRetailers < ActiveRecord::Migration[6.1]
  def change
    add_column :retailers, :email, :string
  end
end
