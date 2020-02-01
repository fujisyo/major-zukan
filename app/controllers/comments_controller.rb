class CommentsController < ApplicationController

  def index
    tweet = Tweet.find(params[:tweet_id])
    last_comment_id = params[:id].to_i
    @comments = tweet.comments.includes(:user).where("id > ?", last_comment_id)
  end
  def create
    @comment = Comment.create(comment_params)
    respond_to do |format|
      format.html {redirect_to root_path} # コメントと結びつくツイートの詳細画面に遷移する
      format.json 
    end
  end
    

  private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, tweet_id: params[:tweet_id])
  end
end
