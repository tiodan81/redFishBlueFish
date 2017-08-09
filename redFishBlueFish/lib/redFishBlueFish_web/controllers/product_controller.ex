defmodule RedFishBlueFishWeb.ProductController do
  use RedFishBlueFishWeb, :controller
  alias RedFishBlueFish.Repo
  alias RedFishBlueFish.Product

  def index(conn, _params) do
    products = Repo.all(Product)
    |> Enum.map(fn(p) -> %{id: p.id, name: p.name, price: p. price} end)

    json conn, products
  end
end
