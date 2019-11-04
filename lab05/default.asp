<!DOCTYPE html>
<html lang="en">
<%
color = Request.QueryString("Color")
font = Request.QueryString("Font")
lastVisited = Request.Cookies("date") & " " & Request.Cookies("time")
Response.Cookies("date") = date()
Response.Cookies("time") = time()
%>

    <head>
        <link href="https://fonts.googleapis.com/css?family=McLaren|Montserrat|Open+Sans&display=swap" rel="stylesheet">
        <style>
            h2 {
                font-family: <%=font%>;
                text-align: center;
            }
        </style>
    </head>

    <body bgcolor=<%=color%> >
        <h1 style="text-align: center; font-family: <%=font%>;">Welcome to part 2 of CPS530 Lab 5
        </h1>
        <div style="text-align: center;">
            <form action="http://paboud.somee.com/default.asp">
                Choose your background: <select name="Color">
            <option value='Tomato'>Tomato</option>
            <option value='DodgerBlue'>DodgerBlue</option>
            <option value='Violet'>Violet</option>
    </select> Choose your font: <select name="Font">
            <option value='Mclaren'>Mclaren</option>
            <option value='Open Sans'>Open Sans</option>
            <option value='Montserrat'>Montserrat</option>
    </select>
                <button type="submit">Submit</button>
            </form>
        </div>
        <%
        If lastVisited = "" then 
        Response.write("<h2> You have not visited this site before </h2>")
        Else
        Response.write("<h2> You last visited the site on: " & lastVisited)
        Response.write("</h2>")
        End If
        %>

    </body>

</html>