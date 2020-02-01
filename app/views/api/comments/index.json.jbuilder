json.array! @comments do |comment|
  json.text comment.text
  json.user_id comment.user_id
  json.user_name comment.user.nickname
  json.created_at comment.created_at.strftime("%Y%m%d %H%M")
  json.id comment.id
end