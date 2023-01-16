class ItemsController < ApplicationController

    skip_before_action :authorized, only: [:create, :index, :destroy]

    def index
        user = find_user
        items = user.items
        render json: items, status: :ok
    end

    private

    def find_user
        User.find(session[:user_id])
    end
    
end
