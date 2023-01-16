class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :image_url, :current_stock, :minimum_stock, :notes, :category, :item_url, :brand, :color, :unit_type, :unit_amount

  # has_one :Category
  has_one :Retailer
  has_one :User
end
