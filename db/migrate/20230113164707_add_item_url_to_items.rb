class AddItemUrlToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :item_url, :string
  end
end
