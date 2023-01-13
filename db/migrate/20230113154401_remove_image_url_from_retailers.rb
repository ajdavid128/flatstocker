class RemoveImageUrlFromRetailers < ActiveRecord::Migration[6.1]
  def change
    remove_column :retailers, :image_url, :string
  end
end
