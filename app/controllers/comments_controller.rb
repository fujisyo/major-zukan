class CommentsController < ApplicationController
  def create
    Comment.create(comment_params)
    redirect_to tweet_comments_path(comment.tweet.id) # コメントと結びつくツイートの詳細画面に遷移する
  end

  private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, tweet_id: params[:tweet_id])
  end
end
