Rails.application.routes.draw do
  
  resources :reviews
  resources :films
  resources :users

  get "/films/:id/reviews", to: "reviews#film_reviews"
  post "/films/:id/reviews", to: "reviews#post_film_reviews"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
