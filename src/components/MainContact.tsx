import React from 'react'

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Contact from "@/components/Contact";

function MainContact() {
    return (
        <div className='bg-white' id='contact'>
            <section className="max-w-6xl mx-auto px-4 sm:py-16 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8 sm:px-0 px-5">
                    <div className="flex items-start gap-4">
                        <Phone className="text-yellow-900 w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-900">Phone</h3>
                            <p className="text-gray-700">+44 1234 567890</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Mail className="text-yellow-900 w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-900">Email</h3>
                            <p className="text-gray-700">contact@thomsonroofers.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <MapPin className="text-yellow-900 w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-900">Address</h3>
                            <p className="text-gray-700">
                                123 High Street, Manchester, UK
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Clock className="text-yellow-900 w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-900">Business Hours</h3>
                            <p className="text-gray-700">Mon - Sat: 8am - 6pm</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white  rounded-xl shadow-md  p-0">
                    {/* <h2 className="text-2xl font-semibold text-yellow-900 mb-6">Send Us a Message</h2> */}
                    <Contact />
                </div>
            </section>
        </div>
    )
}

export default MainContact