class RetailersController < ApplicationController

    def index
        retailers = Retailer.all.order(:retailer_name)
        render json: retailers, status: :ok
    end
    
end
