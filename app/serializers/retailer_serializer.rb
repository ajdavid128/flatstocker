class RetailerSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image_url, :website, :phone, :notes
end
