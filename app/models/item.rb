class Item < ApplicationRecord
  belongs_to :retailer
  belongs_to :user

end
