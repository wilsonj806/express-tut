// This file is for grouping together similar routes

const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const members = require('../../Members');

/* Here we're creating a route for requests
  tl;dr routes let the user access different parts of a web app, from other pages in the app to api access
*/

/* As we are using Express router here, we access a different part of the express object */

// GET all members
router.get('/', (req, res) => {
  // Note that we don't need to use JSON.stringify() here
  res.json(members);
});

// GET single member

router.get('/:id', (req, res) => {
  /* the `:id` is a query param
  req.params accesses the URL params so here if there's an :id param, we can do that
  Also doing error handling if the member isn't found */
  const found = members.some((member) => member.id === parseInt(req.params.id));

  found === true ? res.json(members.filter(member => member.id === parseInt(req.params.id))) :
  res.status(400).json({ msg: `Member with id of: ${req.params.id} not found` });

})

// POST new member/ create member

router.post('/', (req, res) => {
  const newMember = {
    // if we have a database, that'd generate our ids for us but we're ussing uuid here to generate them
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: `Please include a name and email`});
  }
  members.push(newMember);
  /* we can send back anything as a response but we're just going to return the entire members array here
    normally we'd probably save this to the Members.js file or send a command to the database */

  res.json(members);
  // if we just call req.body it spits an error out, so we'll need a body parser
  // res.send(req.body);
})

// PUT member/ update member

router.put('/:id', (req, res) => {
  // this basically ends up looking the same as the GET single member with mild differences
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updatedMember = req.body;
    const { name: upName, email: upEmail } = updatedMember;

    /* checking each member to see if it's part of the request object
      THIS WILL BE DIFFERENT IF YOU'RE USING A DATABASE */
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = upName ? upName : member.name;
        member.email = upEmail ? upEmail : member.email;

        res.json({ msg: 'Member updated', member});
      }
    });
  } else {
    res.status(400).json({ msg: `Member with id of: ${req.params.id} not found` });
  }
})

// DELETE member

router.delete('/:id', (req, res) => {
  /* the `:id` is a query param
  req.params accesses the URL params so here if there's an :id param, we can do that
  Also doing error handling if the member isn't found */
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json({msg: 'Member deleted',
      members: members.filter(member => member.id !== parseInt(req.params.id))});
  } else {
    res.status(400).json({ msg: `Member with id of: ${req.params.id} not found` });
  }

})

module.exports = router;