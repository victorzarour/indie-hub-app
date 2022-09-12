class FilmSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :runtime, :rotten_tomatoes_score, :director, :starring, :synopsis, :critics_consensus, :image_url, :trailer, :genre, :banner
end
