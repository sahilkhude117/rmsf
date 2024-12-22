import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const policies = [
    { name: 'Terms and Conditions', href: '/policies/terms&conditions',badge:'new' },
    { name: 'Privacy Policy', href: '/policies/privacy_policy', badge: 'new' },
    { name: 'Refund Policy', href: '/policies/refund_policy', badge: 'new' },
  ];

  const contactInfo = [
    { text: 'S.No.377/1B/02, Flat No. S-1 Near LIC Office, Gadhinglaj, District- Kolhapur 416502 Maharashtra', href: 'https://maps.app.goo.gl/jWvXUBcK7XazLspt6' },
    { text: 'rmsfoundationindia@gmail.com', href: 'mailto:rmsfoundationindia@gmail.com' },
    { text: '+91 91096 02146', href: 'tel:+91 91096 02146' },
  ];

  const socialLinks = [
    { id: 'Instagram', href: '/#', icon: <Instagram  /> },
    { id: 'Facebook', href: '/#', icon: <Facebook   /> },
    { id: 'YouTube', href: '/#', icon: <Youtube  /> },
    { id: 'LinkedIn', href: '/#', icon: <Linkedin  /> },
    { id: 'Twitter', href: '/#', icon: <Twitter  /> },
  ];

  return (
    <footer id='about' className="bg-gray-300">
      <div className="max-w-screen-lg px-3 sm:px-6 mx-auto text-gray-800 sm:grid md:grid-cols-3 sm:grid-cols-2">
        <div className="pt-10 mr-0">
          <h3 className="font-bold text-xl text-indigo-600">Ramanlal Maniyar Smruti Foundation</h3>
        </div>

        <div className="p-5 mt-5">
          <h4 className="text-sm uppercase text-indigo-600 font-bold">Support</h4>
          {policies.map((item) => (
            <Link key={item.name} href={item.href} className="my-3 block hover:underline">
              {item.name} {item.badge && <span className="text-teal-600 text-xs p-1">{item.badge}</span>}
            </Link>
          ))}
        </div>

        <div className="p-5 mt-5">
          <h4 className="text-sm uppercase text-indigo-600 font-bold ">Contact Us</h4>
          {contactInfo.map((item) => (
            <Link key={item.text} href={item.href} className="my-3 block ml-auto hover:underline">
              {item.text}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-300 pt-2 border-t">
        <div className="max-w-screen-lg mx-auto px-3 py-5 text-center flex flex-col items-center">
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link key={link.id} href={link.href} className="w-6">
                {link.icon}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-800 mt-4">&copy; 2024 rmsfoundationindia.org All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
