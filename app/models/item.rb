class Item < ApplicationRecord
  # belongs_to :Category
  belongs_to :Retailer
  belongs_to :User
end
