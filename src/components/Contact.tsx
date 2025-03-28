import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_94aaq0h', 'template_70e92af', e.target as HTMLFormElement, 'hdRGilHqSmlzUa-_k')
      .then((result) => {
        console.log(result.text);
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000); // Show the thank you message for 3 seconds
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#38bdf8]">CONTACT ME</h2>
        <p className="text-center text-gray-400 italic mb-16">
          "Feel free to contact me for any project or collaboration with me"
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="rounded-lg overflow-hidden h-[400px] bg-white/5 p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.14199917082!2d73.72287827306778!3d18.524564857810876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709697436095!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 rounded-lg p-8">
            {formSubmitted ? (
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p>Your message has been sent successfully. I will get back to you soon.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}