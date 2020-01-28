class TeamsController < ApplicationController
# require 'json'
# require 'net/https'
# require "uri"



# data={
#   "keyid": "55318324522d470f802f1102b9a7d90c",
# }

# query=data.to_query
# uri = URI("https://api.sportsdata.io/v3/mlb/scores/json/AllTeams/?"+query)
# http = Net::HTTP.new(uri.host, uri.port)
# http.use_ssl = true
# req = Net::HTTP::Get.new(uri)
# res = http.request(req)
# # result = JSON.parse(responder) 
  def index
  end
  def search
    @keyword = params[:keyword]
    # orderメソッドへ代入する値を条件分岐
    # params[:sort].nil? ? sort  = "created_at DESC" : sort = params[:sort]をリファクタリング
    sort = params[:sort] || "created_at DESC"
    # 入力された値をLIKE句により各カラムと一致したものを抽出する。
    @products = Product.where('name LIKE(?) OR description LIKE(?)', "%#{@keyword}%", "%#{@keyword}%").order(sort)
    @count = @products.count
    # 検索結果が"0"だった場合、全ての商品を表示させる
    if @count == 0
      @products = Product.order(sort)
    end
  end
end



