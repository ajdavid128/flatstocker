class UsersController < ApplicationController

    #wrap_parameters format: []
    # ^information: https://api.rubyonrails.org/v6.0.2.2/classes/ActionController/ParamsWrapper.html

    skip_before_action :authorized, only: [:create, :index]

    def index
        render json: User.all, status: :ok
    end

    #SHOW /me 
    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    def update
        user = User.find(params[:id])
        user.update!(update_email)
        render json: user, status: :accepted
    end

    #CREATE /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def destroy
        User.find(params[:id]).destroy
        head :no_content
        #render unauthorized?
    end

    private

    def user_params
        params.permit(:name, :email, :username, :business_name, :password, :password_confirmation)
    end

    def update_email
        params.permit(:id, :email)
    end

end
