import { connectDatabase, insertDocument } from '../../helpers/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' });
      return;
    }
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connect to db failed' });
      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Insertion failed' });
      return;
    }

    res.status(201).json({ message: 'Success! Signed up successfully' });
  }
}

export default handler;
