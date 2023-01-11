class RetailersController < ApplicationController

    def index
        render json: Retailer.all, status: :ok
    end
    
end
