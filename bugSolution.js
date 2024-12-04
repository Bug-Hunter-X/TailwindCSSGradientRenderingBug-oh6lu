```javascript
/* bugSolution.js */
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <p>This is some text.</p>
</div>

/*Improved approach with fallback */
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <p>This is some text.</p>
</div>
<style>
  .bg-gradient-to-r {
    background-image: linear-gradient(to right, blue 0%, purple 100%); /*Fallback linear gradient*/ 
  }
</style>
```