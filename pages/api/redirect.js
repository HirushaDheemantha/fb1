export default function handler(req, res) {
    res.writeHead(302, { Location: 'https://yourwordpresssite.com' });
    res.end();
}
