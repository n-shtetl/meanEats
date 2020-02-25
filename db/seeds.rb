# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.destroy_all
User.destroy_all
Post.destroy_all
Step.destroy_all
# Tag.destroy_all
# PostToTag.destroy_all]
Author.destroy_all

puts "destroyed"

sho = Author.create(id: 1, name: "Sho Spaeth")
shoPhoto = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/Authors/sho1.jpg')
sho.photos.attach(io: shoPhoto, filename: 'shoPhoto')

kenji = Author.create(id: 2, name: "J. Kenji Lopez Alt", title: "Chief Culinary Advisor", bio: "J. Kenji López-Alt is a stay-at-home dad who moonlights as the Chief Culinary Consultant of Serious Eats and the Chef/Partner of Wursthall, a German-inspired California beer hall near his home in San Mateo. His first book, The Food Lab: Better Home Cooking Through Science (based on his Serious Eats column of the same name) is a New York Times best-seller, recipient of a James Beard Award, and was named Cookbook of the Year in 2015 by the International Association of Culinary Professionals. Kenji's next project is a children’s book called Every Night is Pizza Night, to be released in 2020, followed by another big cookbook in 2021.")
kenjiPhoto = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/Authors/kenji-portrait.jpg')
kenji.photos.attach(io: kenjiPhoto, filename: 'kenjiPhoto')

mirandaKaplan = Author.create(id: 3, name: "Miranda Kaplan", title: "Senior Editor", bio: "Miranda Kaplan is a senior editor at Serious Eats, a full-time word enthusiast, a lazy cook, and a hard-working eater. Before Serious Eats, she was a freelance copy editor for Bon Appétit, Vanity Fair, GQ, Condé Nast Traveler, Time Out New York, and many other publications. She lives in Atlanta, where she is always looking for a new dive bar.")
mirandaPhoto = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/Authors/miranda_kaplan.jpg')
mirandaKaplan.photos.attach(io: mirandaPhoto, filename: 'mirandaPhoto')

puts "authors created"

video1 = open('/Users/maxwellphillips/Desktop/a:A/Notes/aws/fuschia.mp4')
video2 = open('/Users/maxwellphillips/Desktop/a:A/Notes/aws/lomosaltado.mp4')
video3 = open('/Users/maxwellphillips/Desktop/a:A/Notes/aws/emulsion.mp4')

puts "videos opened"

user1 = User.create([{username: 'demoUser', email: 'gmail', password: 'password'}])

puts "start post seeding"

i = 1
featured1 = Post.create(id: i, title: "Not the Best Chicken Adobo (but Still Pretty Good)",
author_id: 1,
kicker: "A savory, vinegary chicken stew from the Philippines.",
body: "There are two truths about chicken adobo: Every Filipino family has its own recipe (and that recipe is definitely the best), and every chicken adobo tastes better the day after it's been cooked.\nAs a corollary to the first truth, I would add: Some non-Filipino families have their own recipes, too, although they're admittedly on much shakier ground with respect to claiming theirs as the best.\nCase in point: this recipe for chicken adobo, which is essentially the one my family has been cooking for about 35 years, ever since my parents cribbed it from my nanny, Erlinda, when we lived in the Philippines in the mid-1980s. It is, like all adobo recipes, salty and vinegary in almost equal measure, since the primary ingredients in most adobo recipes are soy sauce and vinegar. It's also incredibly easy to make, and, as such, has been in my regular weekly meal rotation for as long as I can remember.\nAdobo is uniquely Filipino, despite the fact that the word is Spanish and refers to dishes with some surface similarities in Mexico and Spain. But when used to refer to Filipino cuisine, it denotes both a cooking method—basically, a very acidic braise—and the class of dishes produced by that method.\nAs journalist and food historian Raymond Sokolov notes in his book Why We Eat What We Eat: How Columbus Changed the Way the World Eats, trying to demystify why Filipino dishes with clearly Spanish names somehow stand apart from other Spanish-inflected cuisines: \"For Filipino tamales, paella, and adobo, the cloak of names covers an indigenous reality.\" Essentially, Spanish colonizers arrived in the Philippines and described local dishes using their own language, so an acidic stewed dish came to be called \"adobo,\" despite the fact that the ingredients and the method were used long before the residents of the archipelago had ever even encountered Spanish people or culture.\nThat my American-Japanese household ate this regularly should come as no surprise to any Filipino, or, for that matter, any expatriate who's lived in the Philippines. As Amy Besa and Romy Dorotan write in Memories of Philippine Kitchens: Stories and Recipes From Far and Near, popular Filipino dishes, like adobo, lumpia (often cursorily described as Filipino spring rolls), and pancit (a noodle dish—also a cursory description that does not do it justice), represent the cuisine \"at its most accessible to the non-Filipino palate.\"\nSimilarly, Nicole Ponseca writes of adobo in I Am a Filipino: And This Is How We Cook, \"Who can resist the addictively sour, salty, garlicky classic adobo, which seemed to be the friendly bridge for many to connect with Filipinos?\" When my family moved to the Philippines in 1984, chicken adobo was an easy sell for my (white) American father, who, like all (white) American expats, preferred local dishes when they were made with chicken. For my Japanese mother, it was appealing because, well, soy sauce. Reductive-but-totally-accurate stereotypes aside, the dish was a hit, and it's been in the Spaeth household repertoire ever since.\nMy parents' recipe stayed pretty much the same over the years, and it was as simple as can be: Water, soy sauce, and vinegar were combined in a pot, along with some brown sugar, an enormous amount of garlic, whole black peppercorns, and several dried, dusty shards of bay leaf. Chicken legs, thighs, and wings were added to the pot, and the whole thing was simmered for about 45 minutes.\nAfter that, everything got refrigerated for dinner the next day, when the reheated adobo would be served with a big pile of super-garlicky and slightly oily fried rice—the greasiness of the rice tempers both the salinity and the acidity of the adobo sauce.\nSince leaving my parents' home, I've tinkered with their adobo recipe in small ways, and settled on a ratio of soy sauce to vinegar to water that my wife, my child, and I all prefer. I also ditched the brown sugar ages ago, because what I like best about adobo is its bracing, in-your-face quality, and I add more whole peppercorns, because I really enjoy chewing on them after they've been softened by the braise. Finally, I use fresh bay leaves instead of the dried stuff, and I always, always let it sit at least overnight in the fridge.\nGiven that the recipe I'll share with you has gone through decades of small changes, and has been passed down, now, through two generations (from Erlinda to my parents, and from my parents to me), I believe this recipe is, at the very least, authentic in spirit, if not authentic in fact, seeing as it's been devised by non-Filipino hands. I can say without reservation that it is a fine recipe for chicken adobo, although certainly not the best.\nTesting Browning\nThis site being what it is, I couldn't just write up the way I make chicken adobo. For one thing, I generally eyeball quantities and use my taste to guide me; for another, I make it differently almost every time, because adobo gives you options.\nSome days, I'd decide to make adobo because I was butchering a chicken for its breasts—making chicken piccata, say—and I had no plans for the legs. In that case, I'd split the legs into drums and thighs and dump them, along with the wings, in a pot with all the adobo elements, then simmer everything until the chicken was cooked. This makes a fine adobo, which I will eat happily every time, but even the most novice cook would be able to point out areas for improvement.\nOn other days, I'd take my time with the adobo, salting the chicken in advance, browning it thoroughly, and blooming the sliced garlic, whole peppercorns, and bay leaves in the rendered chicken fat. Then I'd use the braising liquid to deglaze the fond on the bottom of the pot, add back the browned chicken, and, again, simmer it until the chicken was done.\nAnd then there were days when, if the urge struck me, I'd take the chicken out of the braising liquid (doesn't matter which version, the browned or the un-browned); dry it off; and slide it under a broiler until the skin was a little charred and the meat was warmed through. I'd eat the chicken just like that, or serve it with garlic fried rice and a pool of the braising liquid as a sauce.\nI ended up testing all of these methods side by side. I made batches of chicken adobo in which the chicken pieces were never browned at any point. I made batches in which the garlic and spices were never bloomed in oil, and batches in which they were. I made batches in which the chicken was browned twice, both in the pot and under the broiler at the end. Based on all this, I can say with some confidence that chicken adobo any which way is delicious, and the method you choose has as much to do with personal preference as it does with how much time you have on your hands.\nI do want to take a moment to highlight what I think is the best part of chicken adobo, no matter how it's been cooked: the skin. Even if the chicken is un-browned when it goes in the pot, once it comes out, the skin is my favorite part. But I understand that many people in the US find the prospect of eating floppy braised chicken skin particularly unappealing.\nIf you, like me, actually like to eat chicken skin that's easier to slurp than to chew, I can wholeheartedly recommend going with the no-browning route. If you find that unappetizing, you'll have better success if you brown the chicken skin thoroughly first. Given that the vast majority of our readers will likely prefer it that way, I included a browning step in the attached recipe.\nIf you, like me, actually like to eat chicken skin that's easier to slurp than to chew, I can wholeheartedly recommend going with the no-browning route. If you find that unappetizing, you'll have better success if you brown the chicken skin thoroughly first. Given that the vast majority of our readers will likely prefer it that way, I included a browning step in the attached recipe.\nChicken wings adobo are almost an entirely different beast from the thighs and drums because of the way that the vinegary braising liquid transforms the collagen-rich cartilage and skin into a semisolid state. The wings, particularly the flats, are very fragile, and you have to be careful as you turn them while broiling, but the result is fall-apart-tender meat encased in semi-crispy, semisoft skin, punctuated by pops of extremely soft cartilage between your teeth.\nTesting Vinegars\nAs Besa and Dorotan note in Memories of Philippine Kitchens, \"Vinegar defines adobo.\" I believe my parents actually used Heinz distilled white vinegar for their adobo for many, many years, which means, I think, that their adobo was subpar by definition. Up until last year, I used distilled cane vinegar produced by the brand Datu Puti, which is owned by Philippine food company NutriAsia, but I stopped after reading news reports about the company's shoddy labor practices, which inspired a sustained strike by some of the company's workers in 2018. Since NutriAsia also owns the other major brand of distilled cane vinegar in the Philippines, Silver Swan, I decided to start using rice vinegar instead.\nIn developing this recipe, I tested it using a variety of vinegars: Heinz distilled white vinegar, Japanese rice vinegar (Mizkan), Bragg apple cider vinegar, and both Datu Puti and Silver Swan, tasting all of them side by side. Surprisingly, the only one I found a little odd was the batch made with apple cider vinegar; the rest tasted fine to me, although I preferred the Datu Puti and rice vinegar batches.\nBesa and Dorotan observe that they know of people who use balsamic vinegar in their adobo, and others who use coconut vinegar, and still others who use fruit vinegars of a wide variety. All of which is to say, most any vinegar will do, but for the purposes of our recipe I chose rice vinegar, since it is widely available and its production is associated with no (known) labor issues.\nDoes Adobo Really Get Better Overnight?\n
The claim that adobo gets better after resting overnight is one that seems to fly in the face of previous tests we've done on stews. But I did my best to test the claim, comparing a freshly made batch of adobo against one that had sat overnight in the refrigerator, and I can say without reservation that the batch that sat in the fridge overnight was better. How do we reconcile that with the tests Kenji did in 2016?\nThe most relevant bit of Kenji's test was how the overnight resting affected chili:\nThe only case in which there was a noticeable difference was with the chili, where the older batches were distinctly more rounded and mellow in flavor. This isn't a good thing in chili, where I expect brightness and heat to stand up to the roasted flavor of the dried chilies and the richness of the thick stew.\nWhere Kenji saw a flaw in the acidity and brightness of the chili becoming subdued overnight, I see a boon to an extremely acidic dish like adobo. \"Bright\" can easily veer into \"harsh\" territory when vinegar is used in excess, but when the adobo sauce is cooked, cooled, and reheated, its acidity becomes more rounded and mellow in a good way, allowing the other flavors in the sauce to come through despite the vinegar's heavy presence.\nServing Chicken Adobo\nServing chicken adobo with rice is a given, since you need something relatively bland to offset the braise's aggressive seasoning. But the absolute best way to serve chicken adobo is with greasy and very garlicky fried rice. The oiliness of the rice is important, since it helps to provide a little balance to each bite of chicken and sauce.\nOf course, garlic fried rice is an exceedingly simple preparation, consisting of only three ingredients—garlic, rice, and oil. There's really only one way to mess it up, and that's by burning the garlic.\nYou can certainly produce great garlic fried rice by tossing oil in a wok, adding a bunch of sliced garlic and letting it cook for a second, then adding cooked rice and tossing it all together. But if you really want to guard against turning your adobo side dish into an acrid mess, you can infuse the cooking oil with garlic first, strain out the perfectly cooked garlic shards, then fry the rice in garlic-infused oil.\nOnce the rice is completely broken up and warmed through, you can add the cooked garlic bits back to the wok, then serve the rice with a couple pieces of the chicken adobo, and plenty of sauce alongside to spoon over the top.\n")
file1 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/chicken-adobo-how-to.jpg')
featured1.photos.attach(io: file1, filename: 'img1')
featured1.video.attach(io: video1, filename: 'video1')
j=1
step1featured1 = Step.create(id: j, title: nil, body: "There are two truths about chicken adobo: Every Filipino family has its own recipe (and that recipe is definitely the best), and every chicken adobo tastes better the day after it's been cooked.\nAs a corollary to the first truth, I would add: Some non-Filipino families have their own recipes, too, although they're admittedly on much shakier ground with respect to claiming theirs as the best.\nCase in point: this recipe for chicken adobo, which is essentially the one my family has been cooking for about 35 years, ever since my parents cribbed it from my nanny, Erlinda, when we lived in the Philippines in the mid-1980s. It is, like all adobo recipes, salty and vinegary in almost equal measure, since the primary ingredients in most adobo recipes are soy sauce and vinegar. It's also incredibly easy to make, and, as such, has been in my regular weekly meal rotation for as long as I can remember.\nAdobo is uniquely Filipino, despite the fact that the word is Spanish and refers to dishes with some surface similarities in Mexico and Spain. But when used to refer to Filipino cuisine, it denotes both a cooking method—basically, a very acidic braise—and the class of dishes produced by that method.\nAs journalist and food historian Raymond Sokolov notes in his book Why We Eat What We Eat: How Columbus Changed the Way the World Eats, trying to demystify why Filipino dishes with clearly Spanish names somehow stand apart from other Spanish-inflected cuisines: \"For Filipino tamales, paella, and adobo, the cloak of names covers an indigenous reality.\" Essentially, Spanish colonizers arrived in the Philippines and described local dishes using their own language, so an acidic stewed dish came to be called \"adobo,\" despite the fact that the ingredients and the method were used long before the residents of the archipelago had ever even encountered Spanish people or culture.\n", post_id: i)
j += 1
step2featured1 = Step.create(id: j, title: nil, body: "That my American-Japanese household ate this regularly should come as no surprise to any Filipino, or, for that matter, any expatriate who's lived in the Philippines. As Amy Besa and Romy Dorotan write in Memories of Philippine Kitchens: Stories and Recipes From Far and Near, popular Filipino dishes, like adobo, lumpia (often cursorily described as Filipino spring rolls), and pancit (a noodle dish—also a cursory description that does not do it justice), represent the cuisine \"at its most accessible to the non-Filipino palate.\"\nSimilarly, Nicole Ponseca writes of adobo in I Am a Filipino: And This Is How We Cook, \"Who can resist the addictively sour, salty, garlicky classic adobo, which seemed to be the friendly bridge for many to connect with Filipinos?\" When my family moved to the Philippines in 1984, chicken adobo was an easy sell for my (white) American father, who, like all (white) American expats, preferred local dishes when they were made with chicken. For my Japanese mother, it was appealing because, well, soy sauce. Reductive-but-totally-accurate stereotypes aside, the dish was a hit, and it's been in the Spaeth household repertoire ever since.\nMy parents' recipe stayed pretty much the same over the years, and it was as simple as can be: Water, soy sauce, and vinegar were combined in a pot, along with some brown sugar, an enormous amount of garlic, whole black peppercorns, and several dried, dusty shards of bay leaf. Chicken legs, thighs, and wings were added to the pot, and the whole thing was simmered for about 45 minutes.\nAfter that, everything got refrigerated for dinner the next day, when the reheated adobo would be served with a big pile of super-garlicky and slightly oily fried rice—the greasiness of the rice tempers both the salinity and the acidity of the adobo sauce.\nSince leaving my parents' home, I've tinkered with their adobo recipe in small ways, and settled on a ratio of soy sauce to vinegar to water that my wife, my child, and I all prefer. I also ditched the brown sugar ages ago, because what I like best about adobo is its bracing, in-your-face quality, and I add more whole peppercorns, because I really enjoy chewing on them after they've been softened by the braise. Finally, I use fresh bay leaves instead of the dried stuff, and I always, always let it sit at least overnight in the fridge.\nGiven that the recipe I'll share with you has gone through decades of small changes, and has been passed down, now, through two generations (from Erlinda to my parents, and from my parents to me), I believe this recipe is, at the very least, authentic in spirit, if not authentic in fact, seeing as it's been devised by non-Filipino hands. I can say without reservation that it is a fine recipe for chicken adobo, although certainly not the best.\n", post_id: i)
step2featured1file = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/Chicken+Adobo/step1.jpg')
step2featured1.photos.attach(io: step2featured1file, filename: 'step2')
j += 1
step3featured1 = Step.create(id: j, title: "Testing Browning", body: "This site being what it is, I couldn't just write up the way I make chicken adobo. For one thing, I generally eyeball quantities and use my taste to guide me; for another, I make it differently almost every time, because adobo gives you options.\nSome days, I'd decide to make adobo because I was butchering a chicken for its breasts—making chicken piccata, say—and I had no plans for the legs. In that case, I'd split the legs into drums and thighs and dump them, along with the wings, in a pot with all the adobo elements, then simmer everything until the chicken was cooked. This makes a fine adobo, which I will eat happily every time, but even the most novice cook would be able to point out areas for improvement.\nOn other days, I'd take my time with the adobo, salting the chicken in advance, browning it thoroughly, and blooming the sliced garlic, whole peppercorns, and bay leaves in the rendered chicken fat. Then I'd use the braising liquid to deglaze the fond on the bottom of the pot, add back the browned chicken, and, again, simmer it until the chicken was done.\nAnd then there were days when, if the urge struck me, I'd take the chicken out of the braising liquid (doesn't matter which version, the browned or the un-browned); dry it off; and slide it under a broiler until the skin was a little charred and the meat was warmed through. I'd eat the chicken just like that, or serve it with garlic fried rice and a pool of the braising liquid as a sauce.\nI ended up testing all of these methods side by side. I made batches of chicken adobo in which the chicken pieces were never browned at any point. I made batches in which the garlic and spices were never bloomed in oil, and batches in which they were. I made batches in which the chicken was browned twice, both in the pot and under the broiler at the end. Based on all this, I can say with some confidence that chicken adobo any which way is delicious, and the method you choose has as much to do with personal preference as it does with how much time you have on your hands.\nI do want to take a moment to highlight what I think is the best part of chicken adobo, no matter how it's been cooked: the skin. Even if the chicken is un-browned when it goes in the pot, once it comes out, the skin is my favorite part. But I understand that many people in the US find the prospect of eating floppy braised chicken skin particularly unappealing.\nf you, like me, actually like to eat chicken skin that's easier to slurp than to chew, I can wholeheartedly recommend going with the no-browning route. If you find that unappetizing, you'll have better success if you brown the chicken skin thoroughly first. Given that the vast majority of our readers will likely prefer it that way, I included a browning step in the attached recipe.\n", post_id: i)
step3featured1file = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/Chicken+Adobo/step2.jpg')
step3featured1.photos.attach(io: step3featured1file, filename: 'step3')
j += 1
step4featured1 = Step.create(id: j, title: nil, body: "Even though I do like floppy chicken skin, I have one caveat: Chicken wings cooked using this method, despite being predominantly skin, are made 100% better by a broiling step at the end, which I don't find to be necessarily true of other parts of the chicken.\nChicken wings adobo are almost an entirely different beast from the thighs and drums because of the way that the vinegary braising liquid transforms the collagen-rich cartilage and skin into a semisolid state. The wings, particularly the flats, are very fragile, and you have to be careful as you turn them while broiling, but the result is fall-apart-tender meat encased in semi-crispy, semisoft skin, punctuated by pops of extremely soft cartilage between your teeth.\n", post_id: i)
step4featured1file = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/Chicken+Adobo/step3.jpg')
step4featured1.photos.attach(io: step4featured1file, filename: 'step4')
j += 1
step5featured1 = Step.create(id: j, title: "Testing Vinegars", body: "As Besa and Dorotan note in Memories of Philippine Kitchens, \"Vinegar defines adobo.\" I believe my parents actually used Heinz distilled white vinegar for their adobo for many, many years, which means, I think, that their adobo was subpar by definition. Up until last year, I used distilled cane vinegar produced by the brand Datu Puti, which is owned by Philippine food company NutriAsia, but I stopped after reading news reports about the company's shoddy labor practices, which inspired a sustained strike by some of the company's workers in 2018. Since NutriAsia also owns the other major brand of distilled cane vinegar in the Philippines, Silver Swan, I decided to start using rice vinegar instead.\nIn developing this recipe, I tested it using a variety of vinegars: Heinz distilled white vinegar, Japanese rice vinegar (Mizkan), Bragg apple cider vinegar, and both Datu Puti and Silver Swan, tasting all of them side by side. Surprisingly, the only one I found a little odd was the batch made with apple cider vinegar; the rest tasted fine to me, although I preferred the Datu Puti and rice vinegar batches.\nBesa and Dorotan observe that they know of people who use balsamic vinegar in their adobo, and others who use coconut vinegar, and still others who use fruit vinegars of a wide variety. All of which is to say, most any vinegar will do, but for the purposes of our recipe I chose rice vinegar, since it is widely available and its production is associated with no (known) labor issues.\n", post_id: i)
step5featured1file = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/Chicken+Adobo/step4.jpg')
step5featured1.photos.attach(io: step5featured1file, filename: 'step5')
j += 1
step6featured1 = Step.create(id: j, title: "Does Adobo Really Get Better Overnight?", body: "The claim that adobo gets better after resting overnight is one that seems to fly in the face of previous tests we've done on stews. But I did my best to test the claim, comparing a freshly made batch of adobo against one that had sat overnight in the refrigerator, and I can say without reservation that the batch that sat in the fridge overnight was better. How do we reconcile that with the tests Kenji did in 2016?\nThe most relevant bit of Kenji's test was how the overnight resting affected chili:\n\tThe only case in which there was a noticeable difference was with the chili, where\n\tthe older batches were distinctly more rounded and mellow in flavor. This isn't a\n\tgood thing in chili, where I expect brightness and heat to stand up to the roasted\n\tflavor of the dried chilies and the richness of the thick stew.\nWhere Kenji saw a flaw in the acidity and brightness of the chili becoming subdued overnight, I see a boon to an extremely acidic dish like adobo. \"Bright\" can easily veer into \"harsh\" territory when vinegar is used in excess, but when the adobo sauce is cooked, cooled, and reheated, its acidity becomes more rounded and mellow in a good way, allowing the other flavors in the sauce to come through despite the vinegar's heavy presence.\n", post_id: i)
j += 1
step7featured1 = Step.create(id: j, title: "Serving Chicken Adobo", body: "Serving chicken adobo with rice is a given, since you need something relatively bland to offset the braise's aggressive seasoning. But the absolute best way to serve chicken adobo is with greasy and very garlicky fried rice. The oiliness of the rice is important, since it helps to provide a little balance to each bite of chicken and sauce.\nOf course, garlic fried rice is an exceedingly simple preparation, consisting of only three ingredients—garlic, rice, and oil. There's really only one way to mess it up, and that's by burning the garlic.\nYou can certainly produce great garlic fried rice by tossing oil in a wok, adding a bunch of sliced garlic and letting it cook for a second, then adding cooked rice and tossing it all together. But if you really want to guard against turning your adobo side dish into an acrid mess, you can infuse the cooking oil with garlic first, strain out the perfectly cooked garlic shards, then fry the rice in garlic-infused oil.\n", post_id: i)
step7featured1file = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/Chicken+Adobo/step5.jpg')
step7featured1.photos.attach(io: step7featured1file, filename: 'step7')
j += 1
i += 1

puts "featured 1 done"

featured2 = Post.create(id: i, title: "The Best Crispy Roast Potatoes Ever Recipe",
author_id: 2,
kicker: "These are the crispiest, most flavorful roast potatoes you'll ever make.",
body: "These roast potatoes maximize the crisp-to-creamy contrast in each chunk of potato. We've tested and retested every variable, from cut size to potato type to boiling and roasting methods. The result is this recipe, which we firmly and un-humbly believe will deliver the greatest roast potatoes you've ever tasted: incredibly crisp and crunchy on the outside, with centers that are creamy and packed with potato flavor. We dare you to make them and not love them. We double-dare you.",
ingredients: "Kosher salt\n1/2 teaspoon (4g) baking soda\n4 pounds (about 2kg) russet or Yukon Gold potatoes, peeled and cut into quarters, sixths, or eighths, depending on size (see note)\n5 tablespoons (75ml) extra-virgin olive oil, duck fat, goose fat, or beef fat\nSmall handful picked rosemary leaves, finely chopped\n3 medium cloves garlic, minced\nFreshly ground black pepper\nSmall handful fresh parsley leaves, minced\n",
directions: "Adjust oven rack to center position and preheat oven to 450°F/230°C (or 400°F/200°C if using convection). Heat 2 quarts (2L) water in a large pot over high heat until boiling. Add 2 tablespoons kosher salt (about 1 ounce; 25g), baking soda, and potatoes and stir. Return to a boil, reduce to a simmer, and cook until a knife meets little resistance when inserted into a potato chunk, about 10 minutes after returning to a boil.\nMeanwhile, combine olive oil, duck fat, or beef fat with rosemary, garlic, and a few grinds of black pepper in a small saucepan and heat over medium heat. Cook, stirring and shaking pan constantly, until garlic just begins to turn golden, about 3 minutes. Immediately strain oil through a fine-mesh strainer set in a large bowl. Set garlic/rosemary mixture aside and reserve separately.\nWhen potatoes are cooked, drain carefully and let them rest in the pot for about 30 seconds to allow excess moisture to evaporate. Transfer to bowl with infused oil, season to taste with a little more salt and pepper, and toss to coat, shaking bowl roughly, until a thick layer of mashed potato–like paste has built up on the potato chunks.\nTransfer potatoes to a large rimmed baking sheet and separate them, spreading them out evenly. Transfer to oven and roast, without moving, for 20 minutes. Using a thin, flexible metal spatula to release any stuck potatoes, shake pan and turn potatoes. Continue roasting until potatoes are deep brown and crisp all over, turning and shaking them a few times during cooking, 30 to 40 minutes longer.\nTransfer potatoes to a large bowl and add garlic/rosemary mixture and minced parsley. Toss to coat and season with more salt and pepper to taste. Serve immediately.")
file2 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/crispyroastpotatoes.jpg')
featured2.photos.attach(io: file2, filename: 'img82')
featured2.video.attach(io: video2, filename: 'video2')
i += 1

puts "featured 2 done"
puts j

featured3 = Post.create(id: i, title: "Get to Know Culantro, the Herb That's More Cilantro-y Than Cilantro",
author_id: 3,
kicker: "Like cilantro, but turned up to 11",
body: "body")
file3 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/culantro-how-to.jpg')
featured3.photos.attach(io: file3, filename: 'img3')
step1featured3 = Step.create(id: j, title: nil, body: "Culantro is one of those herbs I'd always paused and wondered over in stores, but never taken the time to really investigate, much less buy and use. While it's widely employed in Caribbean, Latin American, and Southeast Asian cooking, it's not something I tend to find in my East Atlanta Kroger—it's more the province of a Buford Highway Farmers Market—and it's certainly not as ubiquitous here as the very similarly named, but not at all similar-looking, cilantro.\nThe plant, Eryngium foetidum, which also answers to fitweed, ngò gai, and a handful of other names (in addition to sometimes being referred to as, yes, \"cilantro\"), is native to Mexico, Central and South America, and the Caribbean, but is grown in tropical zones worldwide. It produces long, pretty, true-green, sawtooth-edged leaves that smell very strongly of, well, cilantro. It's like a concentrated dose of cilantro aroma and flavor, intense enough to waft up from a grocery bag or smack you in the face as you move it from the refrigerator shelf to the counter. (Apparently whoever gave it its Latin name didn't care for this quality, since foetidum means \"stink\"; I can attest that if you like the smell of cilantro, you should find nothing objectionable about its cousin.)\nAs such, according to culinary experts I sought out to fill in the gaps of my ignorance, it can be used in many of the same contexts you'd find cilantro, with a couple of important distinctions. First, because culantro is more potent, you'll need to use less of it. Second, it's suitable for long-cooked dishes in which cilantro would impart bitterness or lose its more delicate flavor.\nEnrique Awe, chef at the Running W Steakhouse & Restaurant in San Ignacio, Belize, uses culantro in beef and chicken soups, rice and beans, and stewed beans. \"It offers a very nice, herby, citrusy taste,\" he says. \"Also, the flavor blends very well with coconut milk.\" He recommends tearing or cutting the leaves before adding them to stews to release better flavor.\nIllyanna Maisonet, who writes the Cocina Boricua column for the San Francisco Chronicle (making her the first Puerto Rican food columnist in the country), notes that culantro is an essential ingredient in Puerto Rican recaíto, a kind of sofrito that includes no tomato and forms the base for many Puerto Rican dishes. Whole leaves of culantro, also called recao in Puerto Rico, can be added directly to your blender for recaíto, or they can be cut into chiffonade and added to salads or used as a garnish, Maisonet says.", post_id: i)
j += 1
step2featured3 = Step.create(id: j, title: nil, body: "After picking up a package of culantro at the Lake City International Farmers Market (if you haven't figured this out by now, \"farmers market\" often means something quite different in Atlanta), I experimented by making a mini batch of Kenji's basic guacamole, substituting culantro for cilantro. I started with about half of the volume of cilantro called for in the recipe, but ended up adding a little more than that after tasting for seasoning.\nSneaking a few bites of the raw herb, I found it had a slight sharpness, almost pepperiness, that cilantro doesn't. And, real talk from a far-from-pro cook: I liked that the broad, flattish, relatively sturdy leaves are easier to cut than cilantro's thin, frilly ones, and don't require stripping. (Not to mention the fact that I had to chop a smaller amount overall.)\nCulantro is still rare in the dominant supermarket chains of the continental US; your best bets for finding it are Asian and Latin American markets. (\"Check that one local Asian market that is known to carry everything,\" Maisonet advises.) After purchasing, wrap the leaves loosely in a damp paper towel, place them in an unsealed plastic bag, and use within about a week.\nOne last note: Attempting to confirm or deny this is beyond the scope of this article (a.k.a. the time I have to get it in on deadline), but a few murmurs on the internet report that culantro doesn't taste soapy to some people, as cilantro does. The two plants belong to the same family, but are not related beyond that, so it seems plausible that culantro wouldn't necessarily trigger the same perception of soapiness. If you're a cilantro-hater who's tested out culantro as a substitute, do your fellow cilantro-haters a solid and let us all know if it worked out for you, or if you're back to swapping in parsley.", post_id: i)
step2featured3file = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/culantro/culantro-shutterstock_1462009340.jpg')
step2featured3.photos.attach(io: step2featured3file, filename: 'step2featured3file')
i += 1

howTo1 = Post.create(id: i, title: "Icing on the Cake: A Guide to Basic Frosting Types",
author_id: 1,
kicker: "All the basic cake frostings and when to use them.",
body: "body")
file15 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto1.jpg')
howTo1.photos.attach(io: file15, filename: 'img15')
i += 1

howTo2 = Post.create(id: i, title: "Everything You Need To Know About Oat Milk",
author_id: 2,
kicker: "How oat milk is made, how to cook with it, and everything else you need to know.",
body: "body")
file16 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto2.jpg')
howTo2.photos.attach(io: file16, filename: 'img16')
i += 1

howTo3 = Post.create(id: i, title: "Break Out Your Nonstick Skillet for the Best Crispy Duck Leg Confit",
author_id: 3,
kicker: "Weeknight dinners just got a whole lot classier",
body: "body")
file17 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto3.jpg')
howTo3.photos.attach(io: file17, filename: 'img17')
i += 1

howTo4 = Post.create(id: i, title: "How To Make Classic Duck Confit (and Give It a Koji Twist)",
author_id: 3,
kicker: "Old-school duck confit done right.",
body: "body")
file18 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto4.jpg')
howTo4.photos.attach(io: file18, filename: 'img18')
i += 1

howTo5 = Post.create(id: i, title: "Yes, Dry-Aging Duck At Home Is Worth the Wait",
author_id: 2,
kicker: "Ducks dry together.",
body: "body")
file19 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto5.jpg')
howTo5.photos.attach(io: file19, filename: 'img19')
i += 1

howTo6 = Post.create(id: i, title: "This Rich Duck Stock Makes the Case for Buying Whole Ducks",
author_id: 1,
kicker: "When life gives you duck bones, make stock",
body: "body")
file20 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto6.jpg')
howTo6.photos.attach(io: file20, filename: 'img20')
i += 1

howTo7 = Post.create(id: i, title: "Griddle Your Angel Food Cake to Give It New Wings",
author_id: 1,
kicker: "Meet griddled angle food cake, your new best friend.",
body: "body")
file21 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto7.jpg')
howTo7.photos.attach(io: file21, filename: 'img21')
i += 1

howTo8 = Post.create(id: i, title: "How to Render Duck Fat and Make Crispy Quacklings in One Shot",
author_id: 2,
kicker: "The simple way is the best way when it comes to rendering fat",
body: "body")
file22 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto8.jpg')
howTo8.photos.attach(io: file22, filename: 'img22')
i += 1

howTo9 = Post.create(id: i, title: "This Mochi Soup Is How Japan Welcomes the New Year",
author_id: 3,
kicker: "Full of delightful goodies like chewy mochi, chicken, and a variety of vegetables, ozoni is a deeply flavorful broth-based soup that's warm and comforting.",
body: "body")
file23 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto9.jpg')
howTo9.photos.attach(io: file23, filename: 'img23')
i += 1

howTo10 = Post.create(id: i, title: "A No-Fuss Chocolate Yule Log That’s Easy to Roll",
author_id: 3,
kicker: "The secret to this flavorful chocolate roulade is a combination of bread flour and the best quality unsweetened chocolate you can find.",
body: "body")
file24 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto10.jpg')
howTo10.photos.attach(io: file24, filename: 'img24')
i += 1

howTo11 = Post.create(id: i, title: "The Secret to Restaurant-Quality Braised Short Ribs Is in the Sauce",
author_id: 2,
kicker: "Meltingly tender meat glazed in a perfectly balanced, glossy sauce that tastes deeply of wine and beef.",
body: "body")
file25 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto11.jpg')
howTo11.photos.attach(io: file25, filename: 'img25')
i += 1

howTo12 = Post.create(id: i, title: "Real Talk: DIY Vanilla Extract Is a Waste of Time and Money",
author_id: 1,
kicker: "However charming the idea, homemade vanilla extract isn't an extract at all.",
body: "body")
file25 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto12.jpg')
howTo12.photos.attach(io: file25, filename: 'img25')
i += 1

howTo13 = Post.create(id: i, title: "Koji Prime Rib Breaks the Mold of Holiday Roasts",
author_id: 1,
kicker: "Make prime rib exciting again with the addition of funky, savory shio koji.",
body: "body")
file26 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto13.jpg')
howTo13.photos.attach(io: file26, filename: 'img26')
i += 1

howTo14 = Post.create(id: i, title: "Top Your Yule Log With These Super-Realistic Meringue Mushrooms",
author_id: 1,
kicker: "These meringue mushrooms taste as good as they look!",
body: "body")
file27 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto14.jpg')
howTo14.photos.attach(io: file27, filename: 'img27')
i += 1

howTo15 = Post.create(id: i, title: "Shio Koji: A Fermented Moldy-Rice Marinade That Makes Food Taste Great",
author_id: 1,
kicker: "The same ingredient that gives us miso, soy sauce, and sake is also the key to this versatile marinade.",
body: "body")
file28 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto15.jpg')
howTo15.photos.attach(io: file28, filename: 'img28')
i += 1

howTo16 = Post.create(id: i, title: "We Ate Super-Expensive Wagyu Steaks So You Don’t Have To",
author_id: 1,
kicker: "Here's what you need to know about how to cook wagyu beef at home.",
body: "body")
file29 = open('https://meaneats-seeds.s3-us-west-1.amazonaws.com/howto16.jpg')
howTo16.photos.attach(io: file29, filename: 'img29')
i += 1

culture1 = Post.create(id: i, title: "Authenticity? These Filipino Chefs Aren’t Concerned",
author_id: 1,
kicker: "To make Filipino food thousands of miles from the archipelago, these chefs have adapted the cuisine.",
body: "body")
file30 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture1.jpg")
culture1.photos.attach(io: file30, filename: 'img30')
i += 1

culture2 = Post.create(id: i, title: "An Introduction to Korean Barbecue",
author_id: 1,
kicker: "From meats to banchan to drink, here's a guide to the components of a Korean-barbecue feast.",
body: "body")
file31 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture2.jpg")
culture2.photos.attach(io: file31, filename: 'img31')
i += 1

culture3 = Post.create(id: i, title: "Merry Black Day: Canoodling on Korea’s Anti-Valentine’s Holiday",
author_id: 1,
kicker: "In romance-obsessed South Korea, Black Day gives singles a chance to commiserate.",
body: "body")
file32 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture3.jpg")
culture3.photos.attach(io: file32, filename: 'img32')
i += 1

culture4 = Post.create(id: i, title: "From Trash to Treasure: The History of Barbecued Ribs",
author_id: 1,
kicker: "Far from being a delicacy that traces its roots to the antebellum South, barbecue ribs are a 20th century innovation.",
body: "body")
file33 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture4.jpg")
culture4.photos.attach(io: file33, filename: 'img33')
i += 1

culture5 = Post.create(id: i, title: "The Drink of the Gods: An Introduction to Pulque",
author_id: 1,
kicker: "The history of pulque is closely intertwined with the history of Mexico.",
body: "body")
file34 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture5.jpg")
culture5.photos.attach(io: file34, filename: 'img34')
i += 1

culture6 = Post.create(id: i, title: "Pickle Science: How to Master the Preserving Power of Acids",
author_id: 1,
kicker: "Everything you need to know about how to make lacto-fermented and vinegar-pickled cucumbers.",
body: "body")
file35 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture6.jpg")
culture6.photos.attach(io: file35, filename: 'img35')
i += 1

culture7 = Post.create(id: i, title: "Tomatoes, Acid, and Heat: The Science of Canning",
author_id: 1,
kicker: "Step-by-step instructions on how to make your own canned tomatoes.",
body: "body")
file36 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture7.jpg")
culture7.photos.attach(io: file36, filename: 'img36')
i += 1

culture8 = Post.create(id: i, title: "The Truth About MSG",
author_id: 1,
kicker: "What is MSG? Will it really give you a headache? Should you be cooking with it?",
body: "body")
file37 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture8.jpg")
culture8.photos.attach(io: file37, filename: 'img37')
i += 1

culture9 = Post.create(id: i, title: "The Hows and Whys of Blooming Coffee",
author_id: 1,
kicker: "To bloom, or not to bloom, that is the question.",
body: "body")
file38 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture9.jpg")
culture9.photos.attach(io: file38, filename: 'img38')
i += 1

culture10 = Post.create(id: i, title: "Sweet, Memory: On the Subtle Magic of the Cookie Jar",
author_id: 1,
kicker: "The cookie-jar mentality will never die",
body: "body")
file39 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture10.jpg")
culture10.photos.attach(io: file39, filename: 'img39')
i += 1

culture11 = Post.create(id: i, title: "The Calm Before the Swarm: A Day in the Life of an Urban Beekeeper",
author_id: 1,
kicker: "Urban beekeeping comes with unexpected responsibilities.",
body: "body")
file40 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture11.jpg")
culture11.photos.attach(io: file40, filename: 'img40')
i += 1

culture12 = Post.create(id: i, title: "The Comfort Food Diaries: My Coke Habit",
author_id: 1,
kicker: "Drinking coke formed the most potent sense memory of my childhood.",
body: "body")
file41 = open("https://meaneats-seeds.s3-us-west-1.amazonaws.com/culture12.jpg")
culture12.photos.attach(io: file41, filename: 'img41')
i += 1

