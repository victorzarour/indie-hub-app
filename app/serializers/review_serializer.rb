class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_body
  has_one :film
  has_one :user
end
