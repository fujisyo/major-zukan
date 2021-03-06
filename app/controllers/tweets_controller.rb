class TweetsController < ApplicationController

  before_action :set_tweet, only: [:edit, :show, :destroy]
  before_action :move_to_index, except: [:index,:show]
  before_action :move_to_user, only: [:edit]
  def index
    @tweets = Tweet.all.includes(:user).limit(6).order('created_at DESC')
  end
  def new
    @tweet = Tweet.new
  end
  def create
    @tweet = Tweet.create(tweet_params) 
    if @tweet.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    tweet = Tweet.find(params[:id])
    tweet.update(tweet_params)
    if tweet.save
      redirect_to root_path
    else 
      render edit
    end
  end

  def show
    @comment = Comment.new
    @comments = @tweet.comments.includes(:user)
  end

  def destroy
    @tweet.destroy
    redirect_to root_path
  end


  private

  def tweet_params
    params.require(:tweet).permit(:name, :image, :text).merge(user_id: current_user.id)
  end

  def set_tweet
    @tweet = Tweet.find(params[:id])
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end

  def move_to_user
    unless user_signed_in? && current_user.id == @tweet.user_id
      redirect_to(root_path) 
    end
  end 
end
