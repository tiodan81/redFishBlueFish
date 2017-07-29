# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :redFishBlueFish,
  ecto_repos: [RedFishBlueFish.Repo]

# Configures the endpoint
config :redFishBlueFish, RedFishBlueFishWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Z0okeqwOM6kYShbNgMhO/n/hlkDul56lZ9DNpF3TJH+Ec7q8VXtIbn5U6DBllJ9g",
  render_errors: [view: RedFishBlueFishWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: RedFishBlueFish.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
