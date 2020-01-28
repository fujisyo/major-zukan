class Tweet < ApplicationRecord
  mount_uploader :image, ImagesUploader
  validates :text,:name, presence: true
end
