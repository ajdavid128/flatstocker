class AddWebsiteUrlToRetailers < ActiveRecord::Migration[6.1]
  def change
    add_column :retailers, :website_url, :string
  end
end
