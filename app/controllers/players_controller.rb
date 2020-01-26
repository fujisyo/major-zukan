class PlayersController < ApplicationController
  def index
    @player = Player.where.not(name: "")
    @player = Player.where.not(image: "")
    #  = Player.find(params[:id])
  end
  def new
    @player = Player.new
    
  end

  def create
    # binding.pry
    @player = Player.new(player_params)
    if @player.save
      redirect_to root_path
    else
      render new
    end
  end

  def show
    @player = Player.find(params[:id])
  end
  def search
    @keyword = params[:keyword]
    # orderメソッドへ代入する値を条件分岐
    # params[:sort].nil? ? sort  = "created_at DESC" : sort = params[:sort]をリファクタリング
    sort = params[:sort] || "created_at DESC"
    # 入力された値をLIKE句により各カラムと一致したものを抽出する。
    @players = Player.where('name LIKE(?) OR description LIKE(?)', "%#{@keyword}%", "%#{@keyword}%").order(sort)
    @count = @players.count
    # 検索結果が"0"だった場合、全ての商品を表示させる
    if @count == 0
      @players = Player.order(sort)
    end

  end
  private

  def player_params
    params.require(:player).permit(:name,:image,:age,:position,:from)
  end
 
end