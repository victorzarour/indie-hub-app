class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    def update
        user_review = Review.find(params[:id])
        user_review.update(review_params)
        render json: review
    end

    def film_reviews
        film_reviews = Film.find(params[:id]).reviews
        render json: film_reviews
    end

    def post_film_reviews
        user = User.find_by(name: params[:name])
        review = Review.create(review_body: params[:review_body], film_id: params[:id], user_id: user.id)
        render json: review
    end

    private

    def review_params
        params.permit(:review_body, :film_id, :user_id)
    end

end
