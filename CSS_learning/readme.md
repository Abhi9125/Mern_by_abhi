<!-- NOTES

1. css - styling

2. making css file - open VS code -> tap ☰ -> file -> new file -> type style.css -> click on create file

3. understanding linking - a process of linking html file with css using <link rel="stylesheet" href="style.css">.

4. css boilerplate -

\*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

html,body{
width: 100%;
height: 100%;
}

5. understanding css writing way - target any tag, class or id.

p { .a { #a {

} } }

6. understanding css height and width -

index.html style.css

                                            #main {
                                                 width: 50%;

<div id="main"> </div>                           height: 50%;
                                                 background-color: black;
                                             }

7. understanding units, px and % -

% - in case of screen portions (like 50%, which is equal to the half)
px - like a dot, and fixed value (like 20 px)

8. understanding margins, padding -

margins - the space outside an element or between two elements
padding - the space or imaginary border inside an element

- 9. understanding background image and things related to it -

background-image: url(image_address);
background-size: cover;
background-position: top or center or bottom or in pixels;

10. understanding position absolute and relative, stick, fixed -

please refer video

Html
 <body>
    <div id="car1">Car1</div>
    <div id="car2">Car2</div>
    <div id="car3">Car3</div>
  </body>

CSS------------
#car1 {
width: 110px;
height: 100px;
background-color:aqua;
}

#car2 {
/_ absolute position _/
position: absolute;
/_ move any where _/
top : 500px;
left: 400px;
width: 100px;
height: 90px;
background-color:cadetblue;
}

#car3 {
width: 90px;
height: 80px;
background-color:chartreuse;
}

#div2{
/_ position: fixed;
bottom: 0px;
right: 0px; _/

    position: sticky;
    top: 0px;
    width: 50px;
    height: 40px;
    background-color: green;

}

11. understanding flexbox -

please refer video -->

<!-- 12 -- Fonts -->
