# Firebase Asynchronous Data Access Bug

This repository demonstrates a common error when working with Firebase's asynchronous data fetching.  The issue arises when attempting to access properties of a document snapshot before the data has fully loaded. This can result in unexpected errors and application crashes.

## Problem
The core problem is directly accessing data from a Firebase snapshot before the `get()` promise resolves.  This often occurs within asynchronous operations where the code executes faster than the data retrieval.

## Solution
The provided solution addresses this by explicitly checking the existence of the document and its data fields before attempting access.

## How to Reproduce
1. Clone this repository.
2. Install Firebase (`npm install firebase`).
3. Configure your Firebase project and credentials (replace placeholders).
4. Run `bug.js` to observe the error.
5. Run `bugSolution.js` to see the corrected version.

## Technologies Used
* JavaScript
* Firebase

## License
MIT