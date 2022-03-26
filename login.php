
<?php
session_start();

include 'db_config.php';

if(isset($_POST['submit'])){
  $user_name = $_POST['username'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM users_tbl WHERE username='$user_name' AND password='$password'";

  $res = mysqli_query($conn,$sql);
  if(mysqli_num_rows($res) > 0){
    
    $_SESSION['user'] = $res[0];
    header("location: dashboard.php");
  }else{

    // echo "<script>Alert('Wrong Details')</scipt>";
    echo "Wrong";
  }
}

?>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign In - Library Manager</title>

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
        <form action="<?php echo $_SERVER['PHP_SELF']?>" method="POST">
          <h1>Sign In</h1>
          <span>Welcome....</span>
          <div class="input-ctr">
            <label for="">Username</label>
            <input type="text" name="username" />
          </div>
          <div class="input-ctr">
            <label for="">Password</label>
            <input type="password" name="password" />
          </div>
          <div class="input-ctr">
            <button type="submit" name="submit">Sign In</button>
          </div>
          <span
            >Dont Have an account?
            <a href="./register.php"> Register Here</a></span
          >
        </form>
      </div>
    </div>
  </body>
</html>
