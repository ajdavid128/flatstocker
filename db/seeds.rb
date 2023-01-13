puts "DESTROYING ALL THE ITEMS AND RETAILERS"

Item.destroy_all
Retailer.destroy_all

puts "DONE DESTROYING THE WORLD... I mean items and retailers..."
puts "Seeding you some Retailers, boi..."

r1 = Retailer.create(retailer_name: "")

puts "Done with that Retailer rnonsense."
puts "About to seed some Items..."

Item.create(item_name: "", image_url: "", current_stock: "", minimum_stock: "", notes: "", category: "", retailer_id: , user_id: )

puts"Done seeding Items and now your database is ready BAEBEEEE!"