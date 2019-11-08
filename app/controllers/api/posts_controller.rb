class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        if @post.save
            render 'api/posts/show'
        else
            render plain: 'Try again'
        end
    end

    def show 
        @post = Post.find_by(id: params[:id])
        if @post 
            render 'api/posts/show'
        else
            render json: ["Post doesn't exist"], status: 404
        end
    end

    def index
        @posts = Post.all
        render 'api/posts/index'
    end

    def post_params
        params.require(:post).permit(:title, :body, :author_id)
    end
end