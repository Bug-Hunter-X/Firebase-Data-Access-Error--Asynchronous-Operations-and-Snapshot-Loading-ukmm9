The Firebase SDK might throw an error if you try to access a property of a document snapshot before the snapshot has fully loaded. This is often seen when using asynchronous operations and not properly handling promises or callbacks.

```javascript
// Incorrect - accessing data before it's loaded
db.collection('myCollection').doc('myDoc').get().then(doc => {
  console.log(doc.data().myField); // Error: may be undefined
});

// Correct - check for existence before accessing
db.collection('myCollection').doc('myDoc').get().then(doc => {
  if (doc.exists) {
    console.log(doc.data().myField);
  } else {
    console.log('Document does not exist!');
  }
});
```