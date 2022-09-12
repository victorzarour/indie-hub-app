class FilmsController < ApplicationController

    def index
        render json: Film.all
    end

    def show
        film = Film.find(params[:id])
        render json: film
    end

    def create
        film = Film.create(film_params)
        render json: film, status: :created
    end

    private

    def film_params
        params.permit(:title, :year, :runtime, :rotten_tomatoes_score, :director, :starring, :synopsis, :critics_consensus, :image_url, :trailer)
    end


end
