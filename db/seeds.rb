# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create([{username: 'demoUser', email: 'gmail', password: 'password'}])

img_files = ['https://meaneats-seeds.s3-us-west-1.amazonaws.com/apple-cider-doughnut.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/baking-steel-hack-how-to.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/barbacoa-culture.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/burns-night-culture.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/chicken-adobo-how-to.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/chinchacriya-culture.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/crispy-potato-cups-how-to.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/crispy-roast-potatoes.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/culantro-how-to.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/diwali-treats-culture.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/halal-chicken-rice.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/jajangmyeon-culture.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/kimchi-rice-how-to.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/korean-bbq-culture.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/korean-meal-culture.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/leftover-mashed-potato-egg-jar-how-to.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/paratha-culture.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/poptarts-toaster.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/pork-shoulder.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/salumi-how-to.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/sausage-sage-stuffing.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/slow-roasted-bolognese.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/spatchcocked-turkey.jpg',
             'https://meaneats-seeds.s3-us-west-1.amazonaws.com/stop-using-nonstick-cookware-how-to.jpg']

author1 = Author.create(name: 'author')
post1 = Post.create(title: 'Apple Cider Doughnut Cake Recipe',
author_id: 1,
kicker: 'An apple cider doughnut-inspired bundt cake to usher in fall',
body: "Tiny and chubby apple cider doughnuts herald the fall season at the farmers' markets. This cake version is the 2.0 version.",
directions: "1. For the Cake: Adjust oven rack to middle position and preheat oven to 350°F. Grease Bundt pan with 1 tablespoon butter.\n2. In medium saucepan, bring chopped apple and cider to boil over medium-high heat. Reduce heat to medium and simmer until most of the cider has been absorbed and apples are easily smashed with a fork, 10 to 12 minutes. Remove pan from heat, cool 5 minutes, then pulse in food processor until pureed. Measure out 1 cup apple mixture and stir in milk; set aside.\n3. In medium bowl, whisk together flour, baking powder, baking soda, salt, nutmeg, and mace; set aside.\n4. In large bowl, beat remaining 8 tablespoons butter, sugar, and brown sugar on medium speed until light and fluffy, about 3 minutes. Add eggs, one at a time, beating well after each addition. Add oil and beat until incorporated, about 1 minute.\n5. Decrease mixer speed to low and add flour mixture in three batches, alternating with apple mixture, scraping down sides and bottom of bowl with rubber spatula as needed. Increase speed to medium and beat mixture just until combined, about 20 seconds. Add vanilla and beat once more, just to combine, about 10 seconds.\n6. Scrape batter into prepared pan. Bake until cake tester inserted in cake comes out clean, rotating cake halfway through baking, 35 to 45 minutes. Transfer cake to cooling rack set inside baking sheet and cool in pan 10 minutes, then invert directly onto cooling rack.\n7. For the Cinnamon Sugar Coating: Combine sugar, cinnamon, nutmeg, and salt in small bowl. Sprinkle warm cake with cinnamon sugar, using fingers to rub it onto sides.\n8. Cool cake completely, about 1 hour.",
ingredients: "For the Cake:\n9 tablespoons (4 1/2 ounces) unsalted butter, at room temperature\n1 large Granny Smith apple (about 8 ounces), peeled, cored, and roughly chopped\n1 1/2 cups apple cider\n1/2 cup milk, at room temperature\n2 1/2 cups (about 12 1/2 ounces) all-purpose flour\n1 1/2 teaspoons baking powder\n1/2 teaspoon baking soda\n1 teaspoon salt\n1/4 teaspoon ground nutmeg\n1/4 teaspoon ground mace\n3/4 cup (about 5 1/4 ounces) sugar\n1/2 cup (about 3 1/2 ounces) packed light brown sugar\n3 large eggs, at room temperature\n1/4 cup vegetable oil\n1 teaspoon pure vanilla extract\nFor the Cinnamon Sugar Coating\n6 tablespoons granulated sugar\n1 teaspoon ground cinnamon\n1/8 teaspoon ground nutmeg\n1/8 teaspoon salt\n")
file1 = open(img_files.shift)
post1.photos.attach(io: file1, filename: 'img1')




