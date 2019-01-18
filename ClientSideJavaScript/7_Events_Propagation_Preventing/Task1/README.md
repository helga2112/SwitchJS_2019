"Imagine a table containing 100 stars.
We have two pictures named star_off.gif and star_on.gif.
This is the HTML for the table to the left:
<table id=""star_table"">
  <tr>
    <td><img src=""star_off.gif""><td>
    <td><img src=""star_off.gif""><td>
    <td><img src=""star_off.gif""><td>
    ...
  <tr>
  </tr>
    <td><img src=""star_off.gif""><td>
    <td><img src=""star_off.gif""><td>
    <td><img src=""star_off.gif""><td>
    ...
  <tr>
  ...
</table>
Write code to be able to mouse over the table and have the stars 
turn 'on' wherever the mouse goes using the 'mouseover' event.
But instead of creating 100 event handlers, 
just create one handler on the table that uses the event's target
property to change the src property of the correct star."
