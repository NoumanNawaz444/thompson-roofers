"use client";

import MainContact from "@/components/MainContact";
import Head from "next/head";

export default function page() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact | Thomson Roofers</title>
        <meta
          name="description"
          content="Contact Thomson Roofers for reliable roofing services across Manchester. Get in touch today via phone, email, or our quick contact form."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thomsonroofers.com/contact" />
      </Head>

      {/* Contact Page Content */}
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <section className="bg-yellow-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg">
              Need roofing solutions? Reach out to Thomson Roofers — we're here to help!
            </p>
          </div>
        </section>

                    <MainContact />


        {/* Google Map */}
        <section className="px-4 pb-16">
          <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-md border">
            <iframe
              title="Thomson Roofers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.563694694301!2d-2.2451146841522343!3d53.48075947999495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bafe1f1b1823d%3A0xefd1ec09b8d4557d!2sManchester!5e0!3m2!1sen!2suk!4v1685460977983!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </>
  );
}
