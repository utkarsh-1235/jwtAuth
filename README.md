<-----JWT Auth----->
Client --->
Backend ---> config --> db.js --> database connection.
             Controller --> authController.js --> user signup, signin, forgot password, reset password, getuser, logout, connected to authRoute.js.
             middleware --> middleware.js --> It verifies token generated and store it in cookies when user got signin.
             Model --> userSchema.js --> It consists the schema based on that information is stored in database.
             Route --> authRoute.js --> It handles get and post request.
             app.js--> Server that consists middleware, routers, database connection.
             index.js --> It listen the request on defined port.
             
             
             
            
 
 
