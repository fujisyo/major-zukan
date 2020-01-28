class TweetsController < ApplicationController
  def index
  end
  def new
    @tweet = Tweet.new
  end
  def create
    @tweet = Tweet.create(tweet_params) 
  end
  private
  def tweet_params
    params.require(:tweet).permit(:name, :image, :text)
  end

end
