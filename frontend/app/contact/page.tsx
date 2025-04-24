'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    alert('Form submitted! (This is a demo, no data is actually sent)');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-8 p-6 border border-gray-100 dark:border-gray-700 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="border-l-4 border-blue-600 dark:border-blue-500 pl-3 py-1">
                Kontakt
              </span>
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
              Fragen zu unseren Projekten? Wir stehen Ihnen gerne zur Verfügung.
            </p>
          </div>
          
          <div className="flex items-center">
            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 rounded-full text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Institut für Fahrzeugkonzepte
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Card */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 transition-colors">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center">
                <EnvelopeIcon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Ansprechpartner</h2>
                <p className="text-gray-600 dark:text-gray-300">Wir freuen uns auf Ihre Anfrage</p>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
              <div className="flex mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image 
                      src="/images/samuelpfp.jpg" 
                      alt="Samuel Hasselwander"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Samuel Hasselwander</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Wissenschaftlicher Mitarbeiter</p>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <EnvelopeIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:samuel.hasselwander@dlr.de" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      samuel.hasselwander@dlr.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <PhoneIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Telefon</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">+49 (0) 711 6862 8469</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Standort</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Stuttgart, Baden-Württemberg</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <LinkIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Institut für Fahrzeugkonzepte</p>
                    <a 
                      href="https://www.dlr.de/de/fk" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      www.dlr.de/de/fk
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DLR Info Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mt-6 transition-colors">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-600 dark:bg-blue-700 rounded-lg text-white font-bold text-xl">
                DLR
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-3">Deutsches Zentrum für Luft- und Raumfahrt e.V.</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">
              Das Institut für Fahrzeugkonzepte des Deutschen Zentrums für Luft- und Raumfahrt erforscht innovative Fahrzeugtechnologien für die Mobilität der Zukunft.
            </p>
            <div className="flex justify-center">
              <Link 
                href="https://www.dlr.de/de/fk"
                target="_blank"
                className="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center"
              >
                Mehr erfahren
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="md:col-span-2 space-y-6">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 transition-colors">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Kontaktieren Sie uns</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors py-2 px-3"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors py-2 px-3"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors py-2 px-3"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors"
                >
                  Absenden
                </button>
              </div>
            </form>
          </div>
          
          {/* Info Infobox */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-1">Weitere Informationen</h3>
                <p className="text-blue-700 dark:text-blue-200">
                  Weiterführende Informationen finden Sie auf unserer 
                  <a 
                    href="https://www.dlr.de/de/fk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium ml-1 underline"
                  >
                    Institutswebseite
                  </a>.
                </p>
              </div>
            </div>
          </div>
          
          {/* Location Map Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Standort</h2>
            </div>
            <div className="h-64 bg-gray-100 dark:bg-gray-700 relative">
              {/* In a real application, you would integrate a map here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-300">Institut für Fahrzeugkonzepte</p>
                  <p className="text-gray-600 dark:text-gray-300">Deutsches Zentrum für Luft- und Raumfahrt e.V.</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Pfaffenwaldring 38-40, 70569 Stuttgart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 px-5 py-3 text-sm text-gray-600 dark:text-gray-300 transition-colors">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 px-2 py-0.5 rounded-md mr-2">Institut für Fahrzeugkonzepte</span>
            <span className="opacity-90">Deutsches Zentrum für Luft- und Raumfahrt e.V.</span>
          </div>
          <div className="text-gray-500 dark:text-gray-400 flex items-center">
            <svg className="w-4 h-4 mr-1 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
            © DLR e.V. 2023
          </div>
        </div>
      </footer>
    </main>
  );
}