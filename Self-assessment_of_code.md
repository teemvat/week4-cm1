## Self assessment of code

### <ins>Contact list manager (Eetu)</ins>

#### ContactListManager.css:

##### Pros:
- uses suitable colors and shapes
- uses classes for more efficient coding (less rewriting)
- has comments that tell about different sections
- interactive (e.g hovers and selections)

##### Cons:
- classes could use a common/shared naming conventions.
- doesn't use variables for colors (not so scalable).

#### ContactListManager.jsx:

##### Pros:
- uses state management
- good readability (has correct HTML element usages)
- uses labels 
- uses classes 
- reusability
- ensures that all fields are filled.
- seperate CSS file that's imported
- uses map() for rendering. 

##### Cons:
- could have more comments
- could use common/shared naming conventions

--- 


### <ins>Singup Page (Login/singup)(Ville)</ins>
#### SingupPageStyle.js:

##### Pros:
- One component handles both login and singup by recognizing if user exists or not or is user logged in or not.
- Modal- style- not page. Looks great. Doesn change page where you are so easier to continue using site.
- has comments that tell about different sections
- interactive (e.g hovers and selections)
- checks if password is weak by using regex and checks if email has @ or not.
- changes  login to user name in nav bar after logged in
- can logout by pressing user name from navbar
  ##### Cons:
- maybe code could have been done more clearer and easier? 
- using f5 drops login

--- 

### <ins>Book Collection Manager (Teemu)</ins>

### Pros:

- State Management: The code has the useState hook to manage state of the fields and the books.

- Tailwind styles I used Tailwind for the styles, as I' planning to use it on the project as well. 

- Readability: I think the code is easy to read and understand.

### Areas for Improvement:

- There is no input validation for the text fields. I could've added a function to prevent empty fields.

- The code doesn't have any error handling for the state variables or input errors