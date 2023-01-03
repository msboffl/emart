function connectedToDB(err) {
  if (err) {
    console.log('Something Error On DB', err);
  } else {
    console.log('Connected to DB...');
  }
}

export default connectedToDB;
