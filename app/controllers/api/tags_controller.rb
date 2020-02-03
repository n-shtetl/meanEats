class Api::TagsController < ApplicationController 

    def tree_data 
        output = []
        Tag.roots.each do |tag|
            output << data(tag)
        end
        output.to_json
    end

    def data(tag)
        subs = []
        unless tag.subs.blank?
            tag.subs.each do |sub|
                subs << data(sub)
            end
        end
        {tag_name: tag.tag, subs: subs}
    end

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
        @tags = Tag.find_by(tag: "Root")
        @tags = data(@tags)
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