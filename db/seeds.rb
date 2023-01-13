puts "DESTROYING ALL THE ITEMS AND RETAILERS"

Item.destroy_all
Retailer.destroy_all

puts "DONE DESTROYING THE WORLD... I mean items and retailers..."
puts "Seeding you some Retailers, boi..."

r1 = Retailer.create(retailer_name: "Blick", phone: "1(800)828-4548", email: "orders@dickblick.com", website_url: "https://www.dickblick.com/")

r2 = Retailer.create(retailer_name: "Amazon", phone: "", email: "", website_url: "https://www.amazon.com/")

r3 = Retailer.create(retailer_name: "ScreenPrinting", phone: "1(360)576-7188", email: "", website_url: "https://www.screenprinting.com/")

r4 = Retailer.create(retailer_name: "Nazdar", phone: "(888)578-5713", email: "Orders@Nazdar.com", website_url: "https://sourceone.nazdar.com/")

r5 = Retailer.create(retailer_name: "Total Ink Solutions", phone: "(877)937-6400", email: "ink@totalinksolutions.com", website_url: "https://www.totalinksolutions.com/")

r6 = Retailer.create(retailer_name: "Garston Sign Supply", phone: "(860)289-3040", email: "", website_url: "https://garston.com/")

r7 = Retailer.create(retailer_name: "Victory Factory", phone: "1(800)255-5335", email: "", website_url: "https://victoryfactory.com/aluminum.htm")

r8 = Retailer.create(retailer_name: "J&J Supply", phone: "(509)466-5964", email: "", website_url: "https://www.jandjsupply.com/")

r9 = Retailer.create(retailer_name: "McLogan Supply Co.", phone: "(502)890-2665", email: "info@mclogan.com", website_url: "https://mclogan.com/")

r10 = Retailer.create(retailer_name: "United States Plastic Corp.", phone: "(800)769-1157", email: "usp@usplastic.com", website_url: "https://www.usplastic.com/")

r11 = Retailer.create(retailer_name: "Douthitt Corporation", phone: "1(800)368-8448", email: "em@douthittcorp.com", website_url: "http://www.douthittcorp.com/")

r12 = Retailer.create(retailer_name: "WB Mason", phone: "1(888)926-2766", email: "customersupport@wbmason.com", website_url: "https://www.wbmason.com/")

r13 = Retailer.create(retailer_name: "French Paper Co.", phone: "1(800)253-5952", email: "FrenchAssetOrders@frenchpaper.com", website_url: "https://www.frenchpaper.com/")

r14 = Retailer.create(retailer_name: "Screen Printers Warehouse", phone: "(765)592-4692", email: "sales@screenprinterswarehouse.com", website_url: "https://screenprinterswarehouse.com/")

r15 = Retailer.create(retailer_name: "M&R", phone: "(630)858-6101", email: "info@mrprint.com", website_url: "https://www.mrprint.com/")

r16 = Retailer.create(retailer_name: "Uline", phone: "1(800)295-5510", email: "customer.service@uline.com", website_url: "https://www.uline.com/")

r17 = Retailer.create(retailer_name: "Action Engineering", phone: "1(770)717-1000", email: "Inquiries@ActionEngineering.com", website_url: "https://actionengineering.com/")

puts "Done with that Retailer nonsense."
puts "About to seed some Items..."

Item.create(item_name: "Acrylic Screen Printing Ink", brand: "Speedball", color: "Black", category: "Ink", unit_type: "gallon (gal)", image_url: "https://images.ctfassets.net/f1fikihmjtrp/5XS7e1URCKitGm73cVxOSF/482b2d827d518e39548410443b946b9e/43229-2029-M-4ww.jpg?q=80&w=250", current_stock: 2, minimum_stock: 1, notes: "", item_url: "https://www.dickblick.com/products/speedball-permanent-acrylic-screen-printing-ink/", retailer_id: , user_id: )

Item.create(item_name: "", brand: "", color: "", category: "", unit_type: "", image_url: "", current_stock: , minimum_stock: , notes: "", item_url: "", retailer_id: , user_id: )

Item.create(item_name: "", brand: "", color: "", category: "", unit_type: "", image_url: "", current_stock: , minimum_stock: , notes: "", item_url: "", retailer_id: , user_id: )




puts"Done seeding Items and now your database is ready BAEBEEEE!"