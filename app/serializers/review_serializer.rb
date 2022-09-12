class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_body, :created_at
  has_one :film
  has_one :user
end
