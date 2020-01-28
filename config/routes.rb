Rails.application.routes.draw do
  devise_for :users
  root to: 'players#index'
  resources :teams , only: [:index, :show]
  resources :players, only: [:index, :show, :new, :create] do
    collection do
      get "search"
    end
  end
end
