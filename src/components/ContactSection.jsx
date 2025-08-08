import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { useTheme } from '@/context/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ShineBorder } from './ui/shine-border';
import { Pointer } from './ui/pointer';
import { Github, Linkedin, Mail, Send, Phone, MapPin } from 'lucide-react';

function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qjv7hun', 'template_vh01sms', form.current, {
        publicKey: 'a5qj9L1MHqBixsbuL',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Message Sent!',
            text: "Thank you for reaching out. I'll get back to you soon.",
            icon: 'success',
            background: isDark ? '#1f2937' : '#f9fafb',
            color: isDark ? '#f3f4f6' : '#111827',
            confirmButtonColor: '#a855f7',
            confirmButtonText: 'Awesome!',
            customClass: {
              popup: 'rounded-2xl shadow-xl',
              title: 'text-2xl font-bold',
              htmlContainer: 'text-sm font-mono',
              confirmButton: 'px-6 py-2 text-sm font-semibold rounded-lg',
            },
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            title: 'Error',
            text: 'Message failed to send. Please try again later.',
            icon: 'error',
          });
        }
      );
  };

  const contactMethods = [
    {
      name: 'email',
      value: 'dianefuentes2002@gmail.com',
      color: 'text-blue-400',
      href: 'mailto:dianefuentes2002@gmail.com',
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: 'phone',
      value: '+63 9398283199',
      color: 'text-green-400',
      href: 'tel:+639398283199',
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: 'location',
      value: 'Philippines, Cebu City',
      color: 'text-teal-400',
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: 'github',
      value: 'github.com/dianesophia',
      color: 'text-gray-300',
      href: 'https://github.com/dianesophia',
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: 'linkedin',
      value: 'linkedin.com/in/diane-sophia-fuentes-2913b6232',
      color: 'text-cyan-400',
      href: 'https://linkedin.com/in/diane-sophia-fuentes-2913b6232',
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: 'status',
      value: 'available-for-hire',
      color: 'text-cyan-400',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 md:px-8"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 lg:max-w-7xl">
      <Card
  className="relative w-full max-w-full rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden sm:pr-40"
  style={{
    backgroundColor: isDark ? '#22272e' : 'white',
    borderColor: isDark ? '#374151' : '#e5e7eb',
    borderWidth: '1px',
  }}
>

          <Pointer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" className="fill-purple-500" />
              <circle cx="12" cy="12" r="5" className="fill-white" />
            </svg>
          </Pointer>
          <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="flex flex-col items-start text-left mb-8">
              <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-2 tracking-wider">
                // contact.json
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Get In Touch
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side */}
              <div className="space-y-8">
                <div className="dark:bg-gray-900/50 border border-gray-500 rounded-2xl p-6 font-mono text-sm shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-gray-400 mb-4">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-400">contact</span> = {'{'}
                  </div>
                  <div className="pl-6 space-y-2">
                    {contactMethods.map((method, index) => (
                      <div key={method.name} className="flex items-center flex-wrap">
                        {method.icon && <span className="mr-2">{method.icon}</span>}
                        <span className="text-orange-400">{method.name}</span>: {' '}
                        {method.href ? (
                          <a
                            href={method.href}
                            className={`${method.color} hover:text-green-300 transition-colors`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            "{method.value}"
                          </a>
                        ) : (
                          <span
                            className={`${method.color} hover:text-green-300 transition-colors`}
                          >
                            "{method.value}"
                          </span>
                        )}
                        {index < contactMethods.length - 1 ? ',' : ''}
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-400 mt-4">{'};'}</div>
                </div>

                {/* Socials */}
                <div className="space-y-4">
                  <h3 className="font-mono font-semibold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                    Let's Connect
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="border-gray-700/50 dark:bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <a
                        href="https://github.com/dianesophia"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5 mr-2 text-gray-300" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="border-gray-700/50 dark:bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <a
                        href="https://linkedin.com/in/diane-sophia-fuentes-2913b6232"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 mr-2 text-cyan-400" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <Card className="border border-gray-500/50 dark:bg-gray-900/30 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
                <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="font-mono font-semibold text-lg md:text-xl text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                    Send a Message
                  </h3>
                  <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="font-mono text-sm text-gray-500 dark:text-gray-400">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-mono text-sm text-gray-500 dark:text-gray-400">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="font-mono text-sm text-gray-500 dark:text-gray-400">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell me about your project or just say hi!"
                        className="mt-1 min-h-[120px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition-opacity font-mono"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default ContactSection;
