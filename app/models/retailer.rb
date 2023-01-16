class Retailer < ApplicationRecord
    has_many :items
    has_many :users, through: :items
    # has_many :categories, through: :items

    def self.alpha_order
        self.all.order(:retailer_name)
    end

end
