function signout(){firebase.auth().currentUser&&(firebase.auth().signOut(),document.getElementById("inout").textContent="Log In")}function initApp(){firebase.auth().onAuthStateChanged(function(a){if(a){var c=(a.displayName,a.email);a.emailVerified,a.photoURL,a.isAnonymous,a.uid,a.providerData;document.getElementById("status").textContent="Hi, "+c,document.getElementsByTagName("a")[2].removeAttribute("href"),document.getElementById("inout").textContent="Sign out"}else document.getElementById("status").textContent="Sign Up",document.getElementById("inout").textContent="Log In"}),document.getElementById("inout").addEventListener("click",signout,!1)}function refresh(a){for(var b="",c=0;c<a.length;c++)b+='<a href = "'+a[c].profile+'" onClick = "champInfoSend('+a+","+c+')"><figure style = "margin-left: 6%; display:inline-block;"><img src='+a[c].image+' alt="champion" ><figcaption>'+a[c].name+"</figcaption></figure></a>";document.getElementById("cham").innerHTML=b}function champInfoSend(a,b){document.cookie="champName="+a[b].name+"; image="+a[b].image}var config={apiKey:"AIzaSyAIWLbugKRBWSFmyEzgD_HPYdSFOEhztyk",authDomain:"leaguedex.firebaseapp.com",databaseURL:"https://leaguedex.firebaseio.com",storageBucket:"leaguedex.appspot.com",messagingSenderId:"47559996849"};firebase.initializeApp(config);var cham=firebase.database().ref("Champions"),onValue=function(a){var b=a.val(),c=[];for(var d in b)b.hasOwnProperty(d)&&c.push({image:b[d].image,profile:b[d].profile,name:b[d].name});refresh(c)};window.onload=function(){initApp(),cham.once("value").then(onValue)};