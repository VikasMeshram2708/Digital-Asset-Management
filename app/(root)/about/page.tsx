import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <section className="bg-secondary p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-bold text-primary">
            About Us
          </h2>
        </section>

        {/* About Us Content */}
        <section className="prose prose-lg max-w-4xl mx-auto text-foreground">
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <p className="mb-6">
            Welcome to <strong>DAM (Digital Asset Management)</strong>, a cutting-edge platform designed to help individuals and businesses securely store, manage, and organize their digital assets. Our mission is to provide a simple, reliable, and secure solution for managing your digital files, starting with images and expanding to other document types in the future.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Our Vision</h3>
          <p className="mb-6">
            At DAM, we believe that managing digital assets should be effortless and secure. Our vision is to create a platform that empowers users to store and access their files with ease, while ensuring their data remains private and protected. We are committed to continuous improvement and innovation to meet the evolving needs of our users.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What We Offer</h3>
          <p className="mb-6">
            Currently, DAM supports the storage of <strong>images</strong>, with each user limited to uploading <strong>10 images</strong>. Our platform is designed with simplicity and security in mind, offering features such as:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Secure cloud storage for your digital assets.</li>
            <li>Easy access to your files from anywhere, at any time.</li>
            <li>Google Sign-In for seamless and secure authentication.</li>
            <li>A user-friendly interface designed for simplicity and efficiency.</li>
          </ul>
          <p className="mb-6">
            In the future, we plan to expand our services to support additional document types and increase upload limits, ensuring DAM grows with your needs.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Our Commitment to Security</h3>
          <p className="mb-6">
            Your data’s security is our top priority. We employ industry-standard measures to protect your files, including:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Encryption of data in transit and at rest.</li>
            <li>Regular security audits and vulnerability assessments.</li>
            <li>Access controls to ensure only authorized users can access your data.</li>
          </ul>
          <p className="mb-6">
            We do not access, view, or interfere with your files unless required by law or with your explicit consent.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Our Team</h3>
          <p className="mb-6">
            DAM is built by a passionate team of developers, designers, and security experts who are dedicated to creating a platform that meets the highest standards of usability and security. We are constantly working to improve DAM and add new features to enhance your experience.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Join Us on Our Journey</h3>
          <p className="mb-6">
            We are excited to have you as part of the DAM community. As we continue to grow and evolve, we invite you to share your feedback and suggestions with us. Together, we can build a platform that truly meets your needs.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Contact Us</h3>
          <p className="mb-6">
            If you have any questions, feedback, or concerns, please feel free to reach out to us. We’d love to hear from you!
          </p>
          <p className="mb-2">
            <strong>Email:</strong> support@dam-ruby.vercel.app
          </p>
          <p className="mb-6">
            <strong>Address:</strong> Nagpur, Maharashtra, India, PinCode - 441110
          </p>

          <p className="mb-6">
            Thank you for choosing DAM. We look forward to helping you manage your digital assets with ease and confidence.
          </p>
        </section>
      </div>
    </div>
  );
}