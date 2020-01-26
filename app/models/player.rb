class Player < ApplicationRecord
  # belongs_to :nasyonal
  # belongs_to :amerikan
  mount_uploader :image, ImagesUploader
  validates :name,:image, presence: true
end
