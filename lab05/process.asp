<!DOCTYPE html>
<html lang="en">

<head>

</head>

<body>
    <%
    background = Request.QueryString("background")
    font = Request.QueryString("font") 
    %>
        <h1>Welcome to part 2 of CPS530 Lab 5
        </h1>
        <form action="process.asp" method="post">
            Choose your background: <select name='background'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
    </select> Choose your font: <select name='font'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
    </select>
            <input type="submit">
        </form>

</body>

</html>