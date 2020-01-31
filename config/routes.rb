Rails.application.routes.draw do
  devise_for :users
  root to: 'tweets#index'
  resources :tweets do
    resources :comments, only: :create
    namespace :api do
      resources :comments, only: :index, defaults: { format: 'json' }
    end
  end
  resources :teams , only: [:index, :show]
  resources :players, only: [:index, :show, :new, :create] do
    collection do
      get "search"
    end
  end
end
