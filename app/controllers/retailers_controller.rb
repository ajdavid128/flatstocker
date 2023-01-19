class RetailersController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized, only: [:create, :index]

    def index
        # "alpha_order" is a Custom Class Method for organizing Retailers in alphabetical order
        retailers = Retailer.alpha_order
        render json: retailers, status: :ok
    end

    def create
        retailer = Retailer.create!(retailer_params)
        render json: retailer, status: :created
    end

    private

    def retailer_params
        params.permit(:retailer_name, :website_url, :phone, :email)
    end
    
end
