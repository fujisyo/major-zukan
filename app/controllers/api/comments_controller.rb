class Api::CommentsController < ApplicationController
  def index
    tweet = Tweet.find(params[:tweet_id])
    last_comment_id = params[:id].to_i
    @comments = tweet.comments.includes(:user).where("id > ?", last_comment_id)
  end
end
