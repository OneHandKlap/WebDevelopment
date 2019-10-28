#!/usr/bin/perl
use CGI ':standard';
$firstname = param ('first');
$lastname = param ('last');
$gender = param ('gender');
$house = param ('house');
if ($gender eq "male"){
    $title = "king";
}
else{
    $title = "queen";
}
if ($house eq "stark"){
    $motto = "Winter is coming";
    $image = "https://awoiaf.westeros.org/images/thumb/7/7e/House_Stark.svg/1090px-House_Stark.svg.png";
}
elsif ($house eq "arryn"){
    $motto = "As High as Honour!";
    $image = "https://awoiaf.westeros.org/images/thumb/b/b4/House_Arryn.svg/500px-House_Arryn.svg.png";
}
elsif ($house eq "lannister"){
    $motto = "Hear Me Roar!";
    $image = "https://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/500px-House_Lannister.svg.png";
}
elsif ($house eq "baratheon"){
    $motto = "Ours is the Fury!";
    $image = "https://awoiaf.westeros.org/images/thumb/2/2d/House_Baratheon.svg/500px-House_Baratheon.svg.png";
}
elsif ($house eq "tully"){
    $motto = "Family, Duty, Honor";
    $image = "https://awoiaf.westeros.org/images/thumb/6/61/House_Tully.svg/500px-House_Tully.svg.png";
}
elsif ($house eq "tyrell"){
    $motto = "Growing Strong";
    $image = "https://awoiaf.westeros.org/images/thumb/3/31/House_Tyrell.svg/500px-House_Tyrell.svg.png";
}
elsif ($house eq "martell"){
    $motto = "Unbowed, Unbent, Unbroken";
    $image = "https://awoiaf.westeros.org/images/thumb/6/60/House_Martell.svg/500px-House_Martell.svg.png";
}
else{
    $motto = "We Do Not Sow";
    $image = "https://awoiaf.westeros.org/images/thumb/5/5b/House_Greyjoy.svg/500px-House_Greyjoy.svg.png";
}

print "Content-type: text/html\n\n";
print qq(<!DOCTYPE html>);
print qq(<head>);
print qq(<meta charset = "utf-8">);
print qq(<link href="https://fonts.googleapis.com/css?family=Staatliches&display=swap" rel="stylesheet">);
print qq(</head>);
print qq(<body>);
print qq(<p style = "text-align: center; font-family:'Staatliches', cursive;">Good Day Mr.$firstname $lastname, $title of the Andals and the First Men, the rightful ruler of Westeros</p>);
print qq(<p style = "text-align: center; font-family:'Staatliches', cursive;"> $motto </p>);
print qq(<img class = "sigil" src = $image;>);
print qq(</body>);
print qq(</html>);