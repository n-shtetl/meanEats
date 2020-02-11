class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render '/api/comments/index'
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            @comments = Comment.all
            render '/api/comments/index'
        end
    end


    def comment_params
        params.require(:comment).permit(:body, :post_id, :user_id)
    end
end