import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service like EmailJS here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sidhukabir55@gmail.com?subject=Hello%20Kabir&body=Hi%20Kabir,%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%0A%0ABest%20regards';
  };

  const handleResumeDownload = () => {
    const resumeUrl = '../../assets/Kabir_Singh_Sidhu_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Kabir_Singh_Sidhu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-page-container">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h1 className="display-3 fw-bold mb-3 gradient-text">Get In Touch</h1>
            <p className="fs-5 text-light mb-0">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Contact Information */}
          <div className="col-lg-5 col-md-6 mb-5">
            <div className="contact-info-card p-4 rounded-3 h-100">
              <h3 className="fs-4 fw-semibold mb-4 gradient-text">
                <span className="me-2">📞</span>
                Contact Information
              </h3>
              
              {/* Email Section */}
              <div className="contact-item mb-4 p-3 rounded-3">
                <div className="d-flex align-items-center mb-3">
                  <span className="contact-icon me-3">📧</span>
                  <h5 className="mb-0 text-white">Email</h5>
                </div>
                <p className="text-light-emphasis mb-3">
                  Feel free to reach out to me directly via email
                </p>
                <button 
                  className="btn btn-email w-100 fw-semibold"
                  onClick={handleEmailClick}
                >
                  sidhukabir55@gmail.com
                </button>
              </div>

              {/* Resume Section */}
              <div className="contact-item mb-4 p-3 rounded-3">
                <div className="d-flex align-items-center mb-3">
                  <span className="contact-icon me-3">📄</span>
                  <h5 className="mb-0 text-white">Resume</h5>
                </div>
                <p className="text-light-emphasis mb-3">
                  Download my latest resume to learn more about my experience
                </p>
                <button 
                  className="btn btn-resume w-100 fw-semibold"
                  onClick={handleResumeDownload}
                >
                  <span className="me-2">⬇️</span>
                  Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="contact-item mb-4 p-3 rounded-3">
                <div className="d-flex align-items-center mb-3">
                  <span className="contact-icon me-3">🌐</span>
                  <h5 className="mb-0 text-white">Social Media</h5>
                </div>
                <p className="text-light-emphasis mb-3">
                  Connect with me on social platforms
                </p>
                <div className="social-links d-flex gap-3">
                  <a 
                    href="https://github.com/kab1rs1dhu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    title="GitHub"
                  >
                    <img src="../../assets/github.png" alt="GitHub" className="social-icon" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kab1rs1dhu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    title="LinkedIn"
                  >
                    <img src="../../assets/linkedin.png" alt="LinkedIn" className="social-icon" />
                  </a>
                  <a 
                    href="https://www.instagram.com/kxbirsidhu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    title="Instagram"
                  >
                    <img src="../../assets/instagram.png" alt="Instagram" className="social-icon" />
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className="quick-info">
                <h6 className="gradient-text mb-3">Quick Info</h6>
                <div className="info-item d-flex justify-content-between mb-2">
                  <span className="text-light-emphasis">📍 Location:</span>
                  <span className="text-white">Vancouver, BC</span>
                </div>
                <div className="info-item d-flex justify-content-between mb-2">
                  <span className="text-light-emphasis">🎓 University:</span>
                  <span className="text-white">Simon Fraser University</span>
                </div>
                <div className="info-item d-flex justify-content-between mb-2">
                  <span className="text-light-emphasis">💼 Status:</span>
                  <span className="text-white">Open to opportunities</span>
                </div>
                <div className="info-item d-flex justify-content-between">
                  <span className="text-light-emphasis">⚡ Response time:</span>
                  <span className="text-white">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-5 col-md-6">
            <div className="contact-form-card p-4 rounded-3 h-100">
              <h3 className="fs-4 fw-semibold mb-4 gradient-text">
                <span className="me-2">✉️</span>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">Name</label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">Email</label>
                  <input
                    type="email"
                    className="form-control contact-input"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-white">Subject</label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-white">Message</label>
                  <textarea
                    className="form-control contact-input"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project, opportunity, or just say hi!"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-send w-100 fw-semibold">
                  <span className="me-2">🚀</span>
                  Send Message
                </button>
              </form>

              <div className="form-note mt-3 p-3 rounded-3">
                <p className="small text-light-emphasis mb-0">
                  <span className="text-warning">💡</span>
                  <strong> Pro tip:</strong> Include details about your project timeline, budget (if applicable), 
                  and specific requirements to get a faster and more detailed response!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="additional-contact p-4 rounded-3">
              <h4 className="gradient-text mb-4 text-center">
                <span className="me-2">💬</span>
                Other Ways to Connect
              </h4>
              <div className="row g-3">
                <div className="col-md-4 text-center">
                  <div className="contact-option">
                    <span className="option-icon">📱</span>
                    <h6 className="text-white mt-2">Quick Chat</h6>
                    <p className="text-light-emphasis small">Schedule a brief call to discuss your project</p>
                    <button className="btn btn-outline-light btn-sm">Schedule Call</button>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="contact-option">
                    <span className="option-icon">💼</span>
                    <h6 className="text-white mt-2">Collaboration</h6>
                    <p className="text-light-emphasis small">Interested in working together on a project?</p>
                    <button className="btn btn-outline-light btn-sm">Let's Collaborate</button>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="contact-option">
                    <span className="option-icon">🎓</span>
                    <h6 className="text-white mt-2">Mentorship</h6>
                    <p className="text-light-emphasis small">Looking for guidance in your coding journey?</p>
                    <button className="btn btn-outline-light btn-sm">Ask for Help</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact