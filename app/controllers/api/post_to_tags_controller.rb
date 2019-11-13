class Api::PostToTagsController < ApplicationController
    def index
        @posttotags = PostToTag.all
        render '/api/postToTags/index'
    end

    def show
        @posttotag = PostToTag.find_by(id: params[:id])
        if @posttotag
            render '/api/postToTags/show'
        else
            render json: ["PostToTag doesn't exist"], status: 404
        end
    end

    def create
        debugger
        @posttotag = PostToTag.new(post_to_tag_params)
        if @posttotag.save
            render '/api/postToTags/show'
        else
            render json: ["Invalid PostToTag"], status: 422
        end
    end

    def destroy
        @posttotag = PostToTag.find_by(id: params[:id])
        @posttotag.destroy
    end

    def post_to_tag_params
        params.require(:posttotag).permit(:tag_id, :post_id)
    end
end