import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto flex flex-col gap-4">
      <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="border p-2 rounded" />
      <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="border p-2 rounded" />
      <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Message" className="border p-2 rounded" rows={4} />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send</button>
      {sent && <div className="text-green-600 font-semibold">Message sent!</div>}
    </form>
  );
};

export default ContactForm;
