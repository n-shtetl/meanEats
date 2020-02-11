
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  Rails.application.routes.draw do
    root to: 'static_pages#root'

    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :index]
      resource :session, only: [:create, :destroy]
      resources :posts, only: [:create, :index, :show]
      resources :tags, only: [:create, :destroy, :index, :show]
      resources :post_to_tags, only: [:index, :show, :create, :destroy]
      resources :comments, only: [:index, :create]
    end

  end
