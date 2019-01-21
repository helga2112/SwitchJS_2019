
"Write a function addCalendar(element, year, month).
The function should create a calendar for the given year/month and put it inside element.
The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on till Sunday.
Month arguments: 1 – means first month of the year, 12 – means last month of the year.
<!DOCTYPE HTML>
<html>
<head>
  <style>
    table {
      border-collapse: collapse;
    }
    td,
    th {
      border: 1px solid black;
      padding: 3px;
      text-align: center;
    }
    th {
      font-weight: bold;
      background-color: #E6E6E6;
    }
  </style>
</head>

<body>
  <div id=""calendar""></div>
  <script>
    function addCalendar(element, year, month) {
      // ...your code here
    }
    add(calendar, 2019, 1);
  </script>
</body>
</html>
"
