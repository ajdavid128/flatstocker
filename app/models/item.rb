class Item < ApplicationRecord
  belongs_to :Retailer
  belongs_to :User
end
