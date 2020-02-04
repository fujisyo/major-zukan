class Tweet < ApplicationRecord
  mount_uploader :image, ImagesUploader
  validates :text,:name, presence: true
  belongs_to :user
  has_many :comments,dependent: :destroy  # commentsテーブルとのアソシエーション
end
