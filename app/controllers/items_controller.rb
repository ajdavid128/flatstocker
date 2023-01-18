class ItemsController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized, only: [:create, :index, :destroy]

    def index
        # items = Item.where(:user_id == params[:user_id])
        user = find_user
        items = user.items
        render json: items, status: :ok
    end

    def create
        params[:user_id] = session[:user_id]
        item = Item.create!(
            item_params, 
            user_id: params[:user_id]
            )
        render json: item, status: :created
    end

    private

    def find_user
        User.find(session[:user_id])
    end

    def item_params
        params.permit(:item_name, :image_url, :current_stock, :minimum_stock, :notes, :category, :item_url, :brand, :color, :unit_type, :retailer_id, :user_id)
    end
    
end
