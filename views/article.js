var html = require('choo/html')

module.exports = view

function view (route, content) {
  return function (state, emit) {
    return html`
      <body>
        <h1>${route}</h2>
        ${content}
      </body>
    `
  }
}