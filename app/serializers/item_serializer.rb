class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :image_url, :current_stock, :minimum_stock, :notes
  has_one :Category
  has_one :Retailer
  has_one :User
end
