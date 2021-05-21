# Angular Live Coding Test

## Follow this steps

#### Application Setup (DO THIS FIRST)

- Fork this repository into your **GitHub** account (You can create a **GitHub** account if you don't have one)
- Clone the repository from **your repository**
- Checkout `main` branch
- Install dependencies
- To start development use `npm start`

#### First Test - Form Validation

- Make sure that you are in `main` branch
- Create a new branch and name it `1-form-validation`
- Navigate to `/form-validation` route on your local application
- There's an input field for Email there but it's missing validation
- Add `required` and `email` validation using built-in Angular Form Validators
- Add error message using `mat-error` under the `input` field
- Disable submit `button` when the form is not valid
- Upon valid submission, display the email in a dialog using `mat-dialog`
- Commit your codes after done

#### Second Test - Table

- Make sure that you are in `main` branch
- Create a new branch and name it `2-table`
- Navigate to `/table` route on your local application
- There's a table filled with local data
- Use `https://swapi.dev/api/films/` to get data about the films using a `service`
- Create `model` for the response of this API
- Fill in the tables using data from the API
- Implement loading using `mat-spinner` while the API is still processing
- Add a search bar on top of the table for searching
  - Search will run on `keyup` event
  - Search will run only when the user stop typing (debounce for 200ms)
  - If user search for the same term as the previous search, no need to re-filter since the result would be the same
- Implement sorting and pagination for the table
- Commit your codes after done

#### Third Test - Product Details

- Make sure that you are in `main` branch
- Create a new branch and name it `3-product-details`
- Navigate to `/products` route on your local application
- You will see the list of films populated using local data
- Change the implementation to use a service and get data from `https://swapi.dev/api/films/`
- When click on the item from the left card, the information should be displayed on the right card. Information will change when we select different item
- Add a `button` with text `view` in the right card
- Create a new route for `/products/{id}`
- When the `button` is clicked, it should navigate to the new route and display the information about the product (film) in the new page
- Commit your codes after done

## Bonus points

- If you are following a clean code principle
- If you are following general convention in coding with `typescript`
- If you leverage heavily on `rxjs` to do all logics

## Finally

- Push all the codes into the your remote repository
- Make sure the repository is public
