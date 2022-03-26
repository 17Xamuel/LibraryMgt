<?php

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Register - Library Manager</title>

    <!-- style -->
    <link rel="stylesheet" href="./styles/main.css" />
    <link rel="stylesheet" href="./styles/login.css" />
    <!-- style -->
  </head>
  <body>
    <div class="login-ctr">
      <div>
        <img src="./images/login.jpg" alt="" />
      </div>
      <div>
        <form action="">
          <h1>Register</h1>
          <span>for an account....</span>
          <div class="input-ctr">
            <label for="">Username</label>
            <input type="text" name="username" />
          </div>
          <div class="input-ctr">
            <label for="">Password</label>
            <input type="password" name="password" />
          </div>
          <div class="input-ctr">
            <label for="">Repeat Password</label>
            <input type="password" name="repeat_password" />
          </div>
          <div class="input-ctr">
            <button type="submit" name="submit">Sign Up</button>
          </div>
          <span>Have an account Already? <a href="./login.php"> Login</a></span>
        </form>
      </div>
    </div>
  </body>
</html>
