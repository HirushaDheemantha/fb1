// pages/api/fetch-image.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Fetch the image data from WordPress REST API
    const response = await axios.get('https://yourwordpresssite.com/wp-json/wp/v2/media/{MEDIA_ID}');
    
    // Extract the image URL from the response
    const imageUrl = response.data.source_url;

    // Fetch the actual image
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    
    // Set the correct content type (assuming it's a JPEG image)
    res.setHeader('Content-Type', 'image/jpeg');
    
    // Send the image data to the client
    res.send(imageResponse.data);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Error fetching image');
  }
}
