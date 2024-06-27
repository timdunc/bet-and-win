const API_URL = "https://bet-and-win.onrender.com";



  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/api/auth/login`, {
        phonenumber: phoneNumber,
        pin: password,
      })
      .then((response) => {
        setLoggedInUser(response.data);

        localStorage.setItem(
          "user",
          JSON.stringify({ phonenumber: response.data.phonenumber })
        );
        Cookies.set("userCookie", { phonenumber: response.data.phonenumber });

        console.log(response.data);
        setOpen(false);
        // Login was successful, you can redirect the user or show a success message
      })
      .catch((error) => {
        console.log(error);
        // Handle login error
      });
  };