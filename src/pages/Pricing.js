import React from 'react';
import Table from '../components/Table';

const tableData = {
  headers: [
    { title: "Free", price: "0", billing: "Billed Never" },
    { title: "Basic", price: "30", billing: "Billed annually or $20 monthly" },
    { title: "Pro", price: "30", billing: "Billed annually or $30 monthly" },
    { title: "Unlimited", price: "30", billing: "Billed annually or $50 monthly" },
    { title: "The Suit", price: "", billing: "Billed annually or $60 monthly" },
  ],
  features: [
    {
      category: "CLIENT GALLERY",
      items: [
        {
          name: "Photo Storage",
          values: [
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "", description: "1,000+ photos" },
          ],
        },
        {
          name: "Photo Storage",
          values: [
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "", description: "1,000+ photos" },
          ],
        },
        {
          name: "Photo Storage",
          values: [
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "3GB", description: "1,000+ photos" },
            { amount: "", description: "1,000+ photos" },
          ],
        },
        {
          name: "Video Storage",
          values: [
            { amount: "5GB", description: "For videos" },
            { amount: "10GB", description: "For videos" },
            { amount: "50GB", description: "For videos" },
            { amount: "100GB", description: "For videos" },
            { amount: "", description: "For videos" },
          ],
        },
      ],
    },
    {
      category: "SUPPORT",
      items: [
        {
          name: "Email Support",
          values: [
            { amount: "Limited", description: "Standard response time" },
            { amount: "24/7", description: "Standard response time" },
            { amount: "24/7", description: "Priority response" },
            { amount: "24/7", description: "Priority response" },
            { amount: "", description: "" },
          ],
        },
        {
          name: "Phone Support",
          values: [
            { amount: "No", description: "Not available" },
            { amount: "No", description: "Not available" },
            { amount: "Yes", description: "Available during office hours" },
            { amount: "Yes", description: "Available 24/7" },
            { amount: "", description: "" },
          ],
        },
      ],
    },
    {
      category: "USER MANAGEMENT",
      items: [
        {
          name: "User Accounts",
          values: [
            { amount: "1", description: "1 user account" },
            { amount: "5", description: "5 user accounts" },
            { amount: "10", description: "10 user accounts" },
            { amount: "Unlimited", description: "Unlimited user accounts" },
            { amount: "", description: "" },
          ],
        },
        {
          name: "Admin Controls",
          values: [
            { amount: "Basic", description: "Limited admin controls" },
            { amount: "Advanced", description: "Advanced admin controls" },
            { amount: "Advanced", description: "Full admin controls" },
            { amount: "Full", description: "Full admin controls" },
            { amount: "", description: "" },
          ],
        },
      ],
    },
    {
      category: "ACCESS & PERMISSIONS",
      items: [
        {
          name: "Access to Reports",
          values: [
            { amount: "No", description: "No access" },
            { amount: "Yes", description: "Limited reports" },
            { amount: "Yes", description: "Full access" },
            { amount: "Yes", description: "Full access" },
            { amount: "Yes", description: "Full access with advanced features" },
          ],
        },
        {
          name: "Custom Permissions",
          values: [
            { amount: "No", description: "No custom permissions" },
            { amount: "No", description: "No custom permissions" },
            { amount: "Yes", description: "Basic custom permissions" },
            { amount: "Yes", description: "Advanced custom permissions" },
            { amount: "Yes", description: "Unlimited custom permissions" },
          ],
        },
      ],
    },
  ],
};

const PricingPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Pricing Plans</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Choose the perfect plan for your needs. Upgrade or downgrade at any time.
      </p>
      <Table data={tableData} />
    </div>
  );
};

export default PricingPage;

