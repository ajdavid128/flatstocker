class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :image_url, :current_stock, :minimum_stock, :notes, :category, :item_url, :brand, :color, :unit_type, :unit_amount, :updated_date

  has_one :retailer
  has_one :user

  def updated_date
    self.object.updated_at.to_date.to_formatted_s(:long_ordinal)
  end

end
