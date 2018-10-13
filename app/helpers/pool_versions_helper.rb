module PoolVersionsHelper
  def pool_version_diff(pool_version, previous = nil, options = {})
    html = ""

    diff = pool_version.build_diff(previous)

    html << diff[:added_post_ids].map do |post_id|
      '<ins>' + link_to(post_id.to_s, post_path(post_id.to_s)) + '</ins>'
    end.join(" ")

    html << " "

    html << diff[:removed_post_ids].map do |post_id|
      '<ins>' + link_to(post_id.to_s, post_path(post_id.to_s)) + '</ins>'
    end.join(" ")

    return html.html_safe
  end
end
