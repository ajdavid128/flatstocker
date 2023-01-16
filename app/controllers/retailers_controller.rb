class RetailersController < ApplicationController

    def index
        # "alpha_order" is a Custom Class Method for organizing Retailers in alphabetical order
        retailers = Retailer.alpha_order
        render json: retailers, status: :ok
    end

    
    
end
