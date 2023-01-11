class CreateRetailers < ActiveRecord::Migration[6.1]
  def change
    create_table :retailers do |t|
      t.string :name
      t.string :address
      t.string :image_url
      t.string :website
      t.string :phone
      t.string :notes

      t.timestamps
    end
  end
end
