class Api::UsersController < ApplicationController
    # sign up
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/api/users/show'
    else 
      render json: @user.errors.full_messages, status: 422
      # redirect_to root_url
    end
  end

  def index 
    @users = User.all
    render 'api/users/index'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end