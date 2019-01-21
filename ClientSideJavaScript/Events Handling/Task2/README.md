"You have such template:
<!DOCTYPE html>
<html>
<head>
    <meta charset=""utf-8"">
    <title>Event target task</title>
    <style>
        div {
            background-color: red;
            height: 100px;
            width: 25%;
            float: left;
        }
    </style>
</head>
<body>
    <script>
        for (var i = 1; i <= 16; i++) {
            var myDiv = document.createElement('div');
            document.body.appendChild(myDiv);
        }
        var divs = document.querySelectorAll('div');

        // write your code here
    </script>
</body>
</html>

Task:
1. Write JS code by using Events handling that by clicking on any 
of the added 16 divs each DIV will change its background color randomly

2. How this template and JS code can be modified to use one Event handler on 
one element for implementing such functionality? Make appropraite modifications"
