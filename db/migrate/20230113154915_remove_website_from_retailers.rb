class RemoveWebsiteFromRetailers < ActiveRecord::Migration[6.1]
  def change
    remove_column :retailers, :website, :string
  end
end
