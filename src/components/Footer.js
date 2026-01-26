import './footer.css';
const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className="footer">
        <img src="/images/Logo Black.png" alt="Logo" className='footer-logo' />
        <div className='footer-text'>
            <div className="footer-description">
              <h4>Tel: 043 580 762</h4>
              <h4>© {year} Reis Cakaj. All rights reserved.</h4>
            </div>
      </div>
    </footer>
  )
}

export default Footer