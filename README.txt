Step-by-step development

Created Readme.txt

- Installed NPM (NPM init --yes)
- Installed express
- Installed mustache
- Installed mustache-express
- Installed mongodb
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
  16. Added an input with a temporary name inside the form (userInput)
  17. Added a button input below my form
  18. added app.post function
  19. commented out hardCodedArray- removed link to this in app.get function and mustache index body
  20.practiced adding a single entry- name is only required field. Thank you Eli. "you are NOT welcome" - Eli.
  21.Added "videoGameLibrary" mongoose connection method to create a standby name for database
  22.Created a practice const var: "
  const exampleGameEntry =
  new videoGameData ({name : 'Shadow of the Colossus', platform :['pc', 'ps4']});
  "declaring a new instance (entry to the database consistent with schema in schema.js) with a console.log
  23. Confirmed log
  24. launched mongo in node
  25.  show dbs
  26. Confirmed existence of library defined in mongoose connection method
  27. Added function at the very bottom of app.js to exit mongo and close out (process.on('SIGINT'))
  28. Add A Styles directory
  29. Added a styles.css sheet
  30. Created classes for divs around form- did minor stylizing



  show collections
use the name
db."name of collection".find()
