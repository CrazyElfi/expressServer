function pageNotFoundHandler (req, res) {
  res.status(404)
  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.protocol + '://' + req.get('host') + req.originalUrl })
    return
  }
  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' })
    return
  }

  // default to plain-text. send()
  res.type('txt').send('Not found')
}
module.exports = pageNotFoundHandler
