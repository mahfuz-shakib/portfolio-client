import React, { useEffect, useState } from "react";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { toast } from "react-toastify";

const Admin = () => {
  const data = usePortfolioData();
  const [form, setForm] = useState({ name: "", email: "", location: "", resumeUrl: "", profileImage: "" });

  useEffect(() => {
    if (data?.userInfo) {
      const { name, email, location, resumeUrl, profileImage } = data.userInfo;
      setForm({ name: name || "", email: email || "", location: location || "", resumeUrl: resumeUrl || "", profileImage: profileImage || "" });
    }
  }, [data?.userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/user/user_001`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload.error || "Update failed");

      // update context locally so UI reflects immediately
      data?.setUserInfo && data.setUserInfo((prev) => ({ ...prev, ...form }));
      toast.success("Profile updated");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to update");
    }
  };

  if (!data?.userInfo) return null;

  return (
    <section className="py-16 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Admin Panel — Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input name="location" value={form.location} onChange={handleChange} className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Resume URL</label>
          <input name="resumeUrl" value={form.resumeUrl} onChange={handleChange} className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Profile Image URL</label>
          <input name="profileImage" value={form.profileImage} onChange={handleChange} className="input input-bordered w-full" />
        </div>
        <div className="pt-2">
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </section>
  );
};

export default Admin;



