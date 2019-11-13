class Api::SessionsController < ApplicationController 

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      # redirect_to root_url
      render '/api/users/show'
    else
      render json: ['Invalid credentials'], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
        logout
        render "api/users/show"
    else
        render json: ["Nobody signed in"], status: 404
  end

end

  def user_params 
    params.require(:user).permit(:username, :password)
  end
end