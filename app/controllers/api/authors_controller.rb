class Api::AuthorsController < ApplicationController
    def index
        @authors = Author.all
        render '/api/authors/index'
    end
end