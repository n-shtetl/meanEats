class Api::StepsController < ApplicationController

    def show
        @steps = Step.where(post_id: params[:id])
        if @steps
            render 'api/steps/show'
        else
            render json: ["Step doesn't exist"], status: 404
        end
    end

    def step_params
        params.require(:step).permit(:title, :body, :post_id)
    end
end