class RemoveCategoryIdFromItems < ActiveRecord::Migration[6.1]
  def change
    remove_column :items, :category_id, :bigint
  end
end
