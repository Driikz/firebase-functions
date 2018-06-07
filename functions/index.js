const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addMessage = functions.https.onRequest((req, res) => {
  const original = req.query.text;
  return admin.firestore().collection('messages').add({original: original}).then((writeResult) => res.json({result: `Message with ID: ${writeResult.id} added.`}));
});

// exports.makeUppercase = functions.firestore.document('/messages/{documentId}').onCreate((snap, context) => {
//   const original = snap.data().original;
//   console.log('Uppercasing', context.params.documentId, original);
//   const uppercase = original.toUpperCase();
//   return snap.ref.set({
//     uppercase
//   }, {merge: true});
// });
