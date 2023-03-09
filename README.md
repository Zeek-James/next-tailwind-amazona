# Nextjs Tailwind ECommerce Website Like Amazon

Description

## Lessons

1. Introduction

2. Install Tools

3. Create Next App

4. Publish to Githubs

5. Create Website Layout

   1. create layout component
   2. add header
   3. add main section
   4. add folder
   5. add tailwind classes

6. List Products

   1. add data.js
   2. add images
   3. render products

7. Create Product Details

   1. create product page
   2. create 3 columns
   3. show image in first column
   4. show product info in second column
   5. show add to cart action on third column
   6. add styles

8. Handle Add To Cart

   1. define react context
   2. define cart items state
   3. create add to cart action
   4. add reducer
   5. create store provider
   6. handle add to cart button

9. Create Cart Page

   1. create cart.js
   2. use context to get cart items
   3. list items in cart items
   4. redirect to cart screen after add to cart

10. Handle Changing Cart Items

    1. add select box for quantity
    2. handle select box change

11. Save Cart Items

    1. install js-cookie package
    2. save and retreive cart items in cookies

12. Create Login Form

    1. install react hook form
    2. create input boxes
    3. add login button

13. Connect To MongoDB

    1. install mongoose
    2. install mongodb or use mongodb atlas
    3. save connection url in .env file
    4. create db utils file
    5. create sample users
    6. install bcryptjs

14. Create Login API

    1. install next-auth
    2. create nextauth.js
    3. implement signin
    4. use signin in login form
    5. create error.js in utils
    6. install react-toastify

15. Add User Menu

    1. check user authentication
    2. install headlessui
    3. show user menu

16. Create Shipping Screen

    1. display address fields
    2. save address in context

17. Create Payment Method Screen

    1. display payment methods
    2. save payment method in context

18. Seed Sample Products

    1. insert sample products to mongoDB
    2. load products from db in home and product screen
    3. check product count in stock in add to cart

19. Load Products From MongoDB

    1. load products in home page from mongoDB
    2. load products in product page from mongoDB
    3. use product api to check count in stock in add to cart
    4. install axios

20. Create Place Order Screen

    1. display shipping address
    2. display payment method
    3. display order items
    4. implement create order

21. Create Order Screen\*

    1. implement backend api for order details
    2. load order data from backend
    3. display order details

22. Create Register Screen\*

    1. add signup api
    2. create register page
    3. call api on form submit

23. Pay Order By PayPal\*

    1. add paypal button
    2. handle payment
    3. create backend api
    4. update order state

24. Create Order History Screen\*

    1. create my order api
    2. create order history component
    3. fetch orders and display them
