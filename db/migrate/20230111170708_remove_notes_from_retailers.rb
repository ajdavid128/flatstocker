class RemoveNotesFromRetailers < ActiveRecord::Migration[6.1]
  def change
    remove_column :retailers, :notes, :string
  end
end
