Step-by-step development

Created Readme.txt

- Installed NPM (NPM init --yes)
- Installed express
- Installed mustache
- Installed mustache-express
- Installed mongoose-bluebird(npm install mongoose@4.10.8 bluebird --save)

-Created views directory
  -Created a landing page (index.mustache)
  -Created Models directory
    -Created a landing page (schema.js)
      -Created module.exports
      -Created a custom schema

-Created app.js
  -Required:
  -express
  -mustache
  -express-mustache
  -body-parser
  -express-validator

  1. Starts server, listens on port 3000 for connections.
  2. Confirmed.
  3. Added git
  4. Git ignores node
  5. Submitted initial commit to GitHub
  6. fixed missing packages
  7. Created a hardcoded list to test posting
  8. Added app.get to have page render on local directory load
  9. Added app.post to test hardcoding render
  10.In app.get, added a res.render condition with a token object (called tempObject) that uses the hardCodedArray is a value.
  11. On the index mustache page, created divisions
  12. Added a mustache opening and closing reference tag for the array hardCodedArray
  13. Inside my hardCodedArray mustache tags, added a tag specifically for {{name}}
  14. Information successfully rendering to index
  15. created a form with a post action to the index
  16. Added an input with a temporary name inside the form
  17. Added a button input below my form
