import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, Send, Phone, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShineBorder } from './ui/shine-border';

function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const contactMethods = [
    { name: 'email', value: 'dianefuentes2002@gmail.com', color: 'text-blue-400', href: 'mailto:dianefuentes2002@gmail.com', icon: <Mail className="w-5 h-5 mr-2" /> },
    { name: 'phone', value: '+63 9398283199', color: 'text-green-400', href: 'tel:+639398283199', icon: <Phone className="w-5 h-5 mr-2" /> },
    { name: 'location', value: 'Philippines, Cebu City', color: 'text-teal-400', icon: <MapPin className="w-5 h-5 mr-2" /> },
    { name: 'github', value: 'github.com/dianesophia', color: 'text-gray-300', href: 'https://github.com/dianesophia', icon: <Github className="w-5 h-5 mr-2" /> },
    { name: 'linkedin', value: 'linkedin.com/in/diane-sophia-fuentes-2913b6232', color: 'text-cyan-400', href: 'https://linkedin.com/in/diane-sophia-fuentes-2913b6232', icon: <Linkedin className="w-5 h-5 mr-2" /> },
    { name: 'status', value: 'available-for-hire', color: 'text-orange-400' },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 px-4 dark:bg-[#22272e]"
    >
      <div className="max-w-7xl w-full">
        <Card
          className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
          style={{
            backgroundColor: isDark ? '#22272e' : 'white',
            borderColor: isDark ? '#374151' : '#e5e7eb',
            borderWidth: '1px',
            color: isDark ? '#e2e8f0' : '#1a202c',
          }}
        >
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col items-start text-left mb-8">
              <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">
                // contact.json
              </p>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Get In Touch
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="dark:bg-gray-900/50 border border-gray-500 rounded-2xl p-6 font-mono text-sm shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="text-gray-400 mb-4">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-400">contact</span> = {'{'}
                  </div>
                  {contactMethods.map((method, index) => (
                    <div key={method.name} className="pl-4 mb-2">
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
                        <span className={`${method.color} hover:text-green-300 transition-colors`}>
                          "{method.value}"
                        </span>
                      )}
                      {index < contactMethods.length - 1 ? ',' : ''}
                    </div>
                  ))}
                  <div className="text-gray-400 mt-4">{'};'}</div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                    Let's Connect
                  </h3>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="border-gray-700/50 dark:bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <a href="https://github.com/dianesophia" target="_blank" rel="noopener noreferrer">
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
                      <a href="https://linkedin.com/in/diane-sophia-fuentes-2913b6232" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2 text-cyan-400" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="border border-gray-500/50 dark:bg-gray-900/30 transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <CardContent className="p-6">
                  <h3 className="font-mono font-semibold text-xl text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                    Send a Message
                  </h3>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="font-mono text-sm text-gray-500 dark:text-gray-400">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          className="mt-1 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-mono text-sm text-gray-500 dark:text-gray-400">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="mt-1 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="font-mono text-sm text-gray-500 dark:text-gray-400">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="mt-1 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="font-mono text-sm text-gray-500 dark:text-gray-400">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        className="mt-1 min-h-[120px] bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        placeholder="Tell me about your project or just say hi!"
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
