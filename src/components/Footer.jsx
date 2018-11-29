import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer">
          <footer>
            <p>
              Made with <i className="fas fa-heart" /> in St Petersburg, FL.
            </p>
            <p>
              2018 Benjamin Kent Jehl,{' '}
              <a
                href="http://benjaminkent.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                benjaminkent.io
              </a>
            </p>
          </footer>
        </section>
      </>
    )
  }
}

export default Footer
