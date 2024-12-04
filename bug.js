```javascript
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <p>This is some text.</p>
</div>
```
This code uses Tailwind's gradient utility classes.  However, if the browser or CSS engine doesn't fully support the `background-image` property in combination with `linear-gradient`, or if there are conflicting styles, the gradient might not render correctly, or even disappear.