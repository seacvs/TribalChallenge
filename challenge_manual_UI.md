# Section1 -UI Manual Testing

>### Based on the following screen, create all the test cases you will run to test if the Sign in page is working correctly.

Test cases:

1. Verify if an empty email, but valid password is displaying error below email input.
2. Verify if an invalid email, but valid password is displaying error below email input.
3. Verify if an empty password, but valid email is displaying error below password input.
4. Verify if an invalid password, but valid email is displaying error below password input.

5. Verify if the email can be created with 99 characters length.
6. Verify if the email can be created with 100 characters length.
7. Verify if the email can be created with 101 characters length, expected to fail.
8. Verify if the password can be created with 49 characters length.
9. Verify if the password can be created with 50 characters length.
10. Verify if the password can be created with 51 characters length, expected to fail.

11. Validate the "Forgot Password" button is redirecting to the recover password page.
12. Validate the "Forgot Password" button is redirecting to the recover password page and asks for an email address.
13. Validate the "Forgot Password" button is redirecting to the recover password page and after entering a valid email address, it sends an email to recover the password.

14. Enter an valid email and password, it should redirect the user to the dashboard page.
15. Verify that the show/hide password button is displaying the password correctly
16. Verify that the show/hide password button is hiding the password correctly
17. Verify that the help button works
18. Verify that the Sign in button won't work if email and password are empty.
19. Verify that all the inputs are displayed
20. Verify that all the inputs can be selected