defmodule RedFishBlueFishWeb.Router do
  use RedFishBlueFishWeb, :router

  pipeline :browser do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", RedFishBlueFishWeb do
    pipe_through :browser # Use the default browser stack
    get "/products", ProductController, :index
    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", RedFishBlueFishWeb do
  #   pipe_through :api
  # end
end
