import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <section className="bg-secondary p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-bold text-primary">
            Privacy Policy
          </h2>
        </section>

        {/* Privacy Policy Content */}
        <section className="prose prose-lg max-w-4xl mx-auto text-foreground">
          <h3 className="text-2xl font-bold mb-4">Effective Date: [Insert Date]</h3>
          <h3 className="text-2xl font-bold mb-4">Last Updated: [Insert Date]</h3>

          <p className="mb-6">
            Welcome to DAM (Digital Asset Management), a cloud-based platform designed to help you securely store, manage, and organize your digital assets. At this time, DAM supports the storage of <strong>images only</strong>, and each user is limited to uploading <strong>10 images</strong>. Your privacy and the security of your data are of utmost importance to us. This Privacy Policy outlines how we collect, use, protect, and share your information when you use our services available at{" "}
            <a target="_blank" href="https://dam-ruby.vercel.app" className="text-primary hover:underline">
              https://dam-ruby.vercel.app
            </a>
            .
          </p>

          <p className="mb-6">
            By using DAM, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please do not use our services.
          </p>

          <h4 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h4>
          <p className="mb-4">
            We collect the following types of information to provide and improve our services:
          </p>

          <h5 className="text-lg font-semibold mt-6 mb-2">1.1 Personal Information</h5>
          <p className="mb-4">
            When you sign in to DAM using <strong>Google Sign-In</strong>, we collect:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Your name and email address associated with your Google account.</li>
            <li>Your Google profile picture (if applicable).</li>
          </ul>
          <p className="mb-6">
            We do not collect or store your Google account credentials (e.g., password).
          </p>

          <h5 className="text-lg font-semibold mt-6 mb-2">1.2 Digital Assets</h5>
          <p className="mb-4">
            You may upload, store, and manage <strong>images</strong> on our platform. Each user is currently limited to uploading <strong>10 images</strong>. These images are stored securely in the cloud and are accessible only to you unless you choose to share them.
          </p>
          <p className="mb-6">
            In the future, we plan to expand our services to support additional document types and increase the upload limit. Any changes to the types of assets supported or upload limits will be communicated to you in advance.
          </p>

          <h5 className="text-lg font-semibold mt-6 mb-2">1.3 Usage Data</h5>
          <p className="mb-6">
            At this time, we do not collect detailed usage data (e.g., IP addresses, device information, or browsing behavior). However, we may introduce usage data collection in the future to improve our services. If this changes, we will update this Privacy Policy and notify you.
          </p>

          <h4 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h4>
          <p className="mb-6">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>To provide, maintain, and improve our services.</li>
            <li>To authenticate your account using Google Sign-In and ensure the security of your data.</li>
            <li>To communicate with you about updates, support, or promotional offers (if you opt-in).</li>
            <li>To comply with legal obligations and enforce our terms of service.</li>
          </ul>

          <h4 className="text-xl font-bold mt-8 mb-4">3. Data Security</h4>
          <p className="mb-6">
            We prioritize the security of your data and employ industry-standard measures to protect it, including:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Encryption of data in transit and at rest.</li>
            <li>Regular security audits and vulnerability assessments.</li>
            <li>Access controls to ensure only authorized personnel can access your data.</li>
          </ul>
          <p className="mb-6">
            Your images are stored securely in the cloud, and we do not access, view, or interfere with them unless required by law or with your explicit consent.
          </p>

          <h4 className="text-xl font-bold mt-8 mb-4">4. Data Sharing and Disclosure</h4>
          <p className="mb-6">
            We do not sell, trade, or rent your personal information or digital assets to third parties. However, we may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>
              <strong>With Your Consent:</strong> If you choose to share your images with third parties, we will facilitate this as per your instructions.
            </li>
            <li>
              <strong>Service Providers:</strong> We may engage trusted third-party vendors to assist with platform operations (e.g., cloud storage, authentication via Google Sign-In). These providers are contractually obligated to protect your data.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or government request.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
            </li>
          </ul>

          <h4 className="text-xl font-bold mt-8 mb-4">5. Your Rights and Choices</h4>
          <p className="mb-6">
            You have the following rights regarding your data:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>
              <strong>Access and Correction:</strong> You can access and update your personal information through your Google account settings.
            </li>
            <li>
              <strong>Data Deletion:</strong> You may request the deletion of your account and associated data, subject to legal and contractual obligations.
            </li>
            <li>
              <strong>Opt-Out:</strong> You can opt-out of promotional communications by following the unsubscribe link in our emails.
            </li>
          </ul>

          <h4 className="text-xl font-bold mt-8 mb-4">6. International Data Transfers</h4>
          <p className="mb-6">
            Your information may be transferred to and processed in countries outside your jurisdiction, where data protection laws may differ. We ensure that such transfers comply with applicable laws and that your data remains protected.
          </p>

          <h4 className="text-xl font-bold mt-8 mb-4">7. Changes to This Privacy Policy</h4>
          <p className="mb-6">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting a notice on our website or sending you an email. Your continued use of DAM after such changes constitutes your acceptance of the updated policy.
          </p>

          <h4 className="text-xl font-bold mt-8 mb-4">8. Future Updates and Scaling</h4>
          <p className="mb-6">
            As we scale our platform, we plan to:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Expand support for additional document types beyond images.</li>
            <li>Increase the upload limit for users.</li>
            <li>Introduce usage data collection to improve our services (if applicable).</li>
            <li>Update this Privacy Policy to reflect any changes in data collection, usage, or sharing practices.</li>
          </ul>
          <p className="mb-6">
            We will notify you of any material changes to our services or policies.
          </p>

          <h4 className="text-xl font-bold mt-8 mb-4">9. Contact Us</h4>
          <p className="mb-6">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:
          </p>
          <p className="mb-2">
            <strong>Email:</strong> support@dam-ruby.vercel.app
          </p>
          <p className="mb-6">
            <strong>Address:</strong> Nagpur, Maharashtra, India, PinCode - 441110
          </p>

          <p className="mb-6">
            Thank you for trusting DAM with your digital assets. We are committed to safeguarding your privacy and providing you with a secure and reliable platform.
          </p>

          <p className="text-sm text-muted-foreground">
            <em>
              This Privacy Policy is provided for informational purposes and does not constitute legal advice. You may consult a legal professional to ensure compliance with applicable laws.
            </em>
          </p>
        </section>
      </div>
    </div>
  );
}