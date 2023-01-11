class User < ApplicationRecord
    has_many :items
    has_many :retailers, through: :items
    # has_many :categories, through: :items

    has_secure_password

    validates :username, uniqueness: true, presence: true
    validates :name, presence: true
    validates :email, uniqueness: true, presence: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
end
