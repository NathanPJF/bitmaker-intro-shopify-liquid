# Outline

## Building with Shopify, intro to Liquid and Theming

1. What is Shopify?
  * Purpose, mission
  * What do merchants look like? Small to enterprise.
  * What is the technology? Many channels and integrations (apps)

2. Focus of presentation
  * Theme development in Shopify
  * Design and best practice for commerce sites
  * An introduction to Liquid  
  * Demonstrations, code samples
  * Workflow, GitHub, Tools
  * Where do I go from here?

3. Design for ecommerce
  * How does designing a storefront defer from other websites?
  
4. Design Patterns that make big impacts on conversions

X. Where to go next?

## What is Shopify?

Take screenshots from shopify.com - showing POS, showing storefronts 

Who uses it? Small mom and pop shops. Enterprise. Kayne West.

## Design for ecommerce

### Transactional vs Static

Static could also be considered "informational".  Does your website exist to provide 
information, or is the website supposed to make some actually interact with it?

Marketers will say *every* website/webpage should be driving people towards an action.  
They aren't wrong.  Getting people to sign-up for an email list, call a phone number, 
even share content are all actions.  But we're talking about **transactions**.

You want people to explore, understand the product, be engaged - either by having fun and enjoying 
the site or be very invested in the product's story, and finally... give you some money!

> Ideas for images:
> Show a slide with a big word in the middle with pictures around it.

> - Explore: collection page, related products
> - Understand: Product details tabs, video of demo, customization options
> - Engage: Music video, customization, Instagram feed, cool picture, banner about serious story 
> - Purchase: Add to cart button, Side cart, Thank you page, shipping notification, New Order email 
> to customer

### Pages and elements to consider 

1. Navigation

People need to browse your site and you want to make it easy.
Do you have a mega navigation like Walmart and Best Buy?  (show screenshots)  And 
can you do this better?  Make it less confusing, show products better? (Show Venture)

Do you have a very simple site?  If so, do you have a navigation with just a couple 
links in it?  Or do you do something more creative (show showcase navigation - big pop-up)

> Note about navigation:

> Show a picture of a site with a random icon in the top corner. Wtf is that?
> Then show a picture of a hamburger icon in the same place.
> The point: not everyone is coming to the table with the same background.  Not 
> everyone knows what a hamburger menu is/represents.  It's honestly getting a bit dated.
> Show screenshot with the hamburger icon and the word "menu" beside it.

> Icon usability by Nielson Norman Group: https://www.nngroup.com/articles/icon-usability/
> "A user’s understanding of an icon is based on previous experience. Due to the absence of a standard usage for most icons, text labels are necessary to communicate the meaning and reduce ambiguity."

> Picture of a contact card: http://icons.iconarchive.com/icons/icons8/ios7/128/Messaging-Contact-Card-icon.png
> What does this mean?  Contact? Account signup? Portoflio? ... 
> To understand this, you may have to know what a roll-a-dex.

2. Collection page

Go with a standard grid layout?  Or something more custom (Brooklyn's collage)?

What should you be communicating in this grid? 
* Prices - of course
* Product name - no brainer
* Product options like different colors?
* Product availability?
* How much do you want to communicate?

Thinking of flow:
* Go from collection page, to product page, to checkout.
* Why not have a quickview / buy modal on the collection page instead?

3. Other common pages:

* Home page 
* Product pages 
* Cart page - if you want a dedicated page 
* Checkout page(s) 
* About the company / the product story
* Contact page
* Blog pages


### Pages to consider you may have forgotten

1. Account pages 
- People will be placing orders and want to check back on the status of that order 
- See what you ordered in the past and reorder
- Editing their shipping info that's on file (think: Amazon)


2. Search pages
  - This is so often an after thought, but it's actually very important
  - People sometimes don't want to go through the nav, or guess how the merchant 
  labeled it.  They just want a quick search.
  - What will your search show? Excerpt of description? Price? 
  - What's the scope? Search everything on your site? Or maybe just the products 
  to reduce noise?

3. 404 page 
  - what do you do when someone enters in the wrong URL?
  - Immediate redirect? Guess what they wanted to see? Offer suggestions? 
  - Examples: http://theme-docs.myshopify.com/pages/404


  
## Design Patterns that make big impacts on conversions


## Introduction to Liquid

* Objects
* Filters

### Communicating with the database

- How to get info on the product? What's a variant?
- What about collections?

### Folder structure

Shopify has a "flat" folder structure.  It's simple which is a pro and a con.  
If you're coming from a background where you have experience with WordPress, or other CMS, 
you may be used to having more control over the folder structure.  Well, you're not 
out of luck, but I'll talk more about that later. (Dev tools, Grunt and Gulp, ThemeKit)


#### Snippets

Including small bits of code.  You can use and repurpose.

Show how to use "with" and a chain of variables.

### Assets

If you append `.liquid` to css, scss, and js assets, you can use liquid.

You won't have access to objets though.  Why?  Because it doesn't really make sense.  If I'm 
on the homepage and you have a liquid object that says `product.title` in the css - that 
doesn't mean anything in this context.

What you _do_ have access to are filters and theme tags - so you can assign variables with 
liquid if you'd like.  But what I feel is more important, is that you have access to 
**theme settings**.

### Config 

Set theme settings.

## Demonstrations, code samples

### Ajax

* How to use ajax api
* Ajax wrapper we provide, alternatives, build your own

* I don't want to use forms.  Those are for old people! Sure, use ajax, but - 
you want to have a form fallback for times when they have JS turned off, or a third-party 
overwrites your jQuery object.

### Theme settings

* You are building sites for a _client_.  Make it easy for them to use... and very hard 
for them to **break**.
* Don't hardcode, make theme settings.

Show how to make theme settings:
- Change a hard coded collection on the homepage to use a collection 
from theme settings.
- Make a top bar for the website that will take HTML.
  - How can this be improved? Maybe have a section just for text and a section just for a button?
- Create a slider on a About us page.
  - Don't have a bunch of if-statements and hardcoded text - show example of a slide show with 
  four if statements.
  - Have a for-loop that loops through a finite amount of iterations and capture and assign variables.

### Translations

Is the color you see the same color I see? Kenau Reeves meme.

The answer: No.

The end user may see the word "Color", but the word I see is : `{{ translations.en.color_label}}`.

Make it easy for you merchant to change "Save" to "You save:".

## Where to go next?

- Partners program
  - Playground
  - Make money 
    - referrals 
    - rev sharing
  
- Resources
  - Shopify's manual
  - The forum 
  - Cheat sheet
  - Podcasts: Unofficial Shopify Podcast
  - Vimeo, YouTube
