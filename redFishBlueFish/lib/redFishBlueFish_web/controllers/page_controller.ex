defmodule RedFishBlueFishWeb.PageController do
  use RedFishBlueFishWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
