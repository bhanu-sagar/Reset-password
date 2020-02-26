Clone the Git Repository in your project file path and do npm install
Run your Project with command react-native run-android/ios
Now, you can able to see Reset Password Screen

Make an API call to http://myneighby.herokuapp.com/api/v2/forgot-password by clicking a Forgot Password Button.
While it's loading, load a spinner/loader
Return the AJAX response/message (JSON object) into a paragraph below
Check Below Available Scenarios to get more clarity

Scenarios:

1) Press Reset button without Providing Email
2) Give any other email like (1234@gmail.com) and hit Reset Button
3) give (amin@gmail.com) and hit Reset button
4) If you give any unwanted url check error response
5) If network issue check error response
