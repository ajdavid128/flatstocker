class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :business_name, :password_digest
end
