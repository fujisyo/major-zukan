class Player < ApplicationRecord
  # belongs_to :nasyonal
  # belongs_to :amerikan
  mount_uploader :image, ImagesUploader
  validates :name, presence: true
end
