class CommentsController < ApplicationController

  def create
    @comment = Comment.create(comment_params)
    respond_to do |format|
      format.html {redirect_to root_path, notice: "コメントを送信しました"} # コメントと結びつくツイートの詳細画面に遷移する
      format.json 
    end
  end
    

  private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, tweet_id: params[:tweet_id])
  end
end
