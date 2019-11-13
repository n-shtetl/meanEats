class Api::TagsController < ApplicationController 

    def create
        @tag = Tag.new(tag_params)
        if @tag.save
            render '/api/tags/show'
        else
            render json: ['Invalid Tag'], status: 422
        end
    end

    def destroy
        @tag = Tag.find_by(id: params[:id])
        @tag.destroy
    end

    def index
        @tags = Tag.all
        render '/api/tags/index'
    end

    def show
        @tag = Tag.find_by(id: params[:id])
        if @tag
            render '/api/tags/show'
        else
            render json: ["Tag doesn't exist"], status: 404
        end
    end

    def tag_params 
        params.require(:tag).permit(:tag)
    end

end