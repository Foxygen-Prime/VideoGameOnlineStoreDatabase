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
