class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :business_name, :password_digest, :unique_retailers

  # has_many :retailers

  def unique_retailers
    self.object.retailers.uniq
  end
end
