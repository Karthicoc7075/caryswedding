import React, { useEffect, useState } from "react";
import {XIcon,InfoIcon} from 'lucide-react'
import Image from "next/image";
import Loader from "./loader";
export default function AdminDashboard() {
  const [works, setWorks] = useState([]);
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState({
    addLoading: false,
    editLoading: false,
    deleteLoading: false,
  });
  const [editingWorkId, setEditingWorkId] = useState(null);
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", status: "active", images: [] });
  const [deleteImages, setDeleteImages] = useState([]);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setWorks(data.works || []);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    }
    fetchWorks();
  }, []);

  async function addWork(e) {

    e.preventDefault();
    if (!form.title.trim()) return;
    
    setLoader((prev) => ({ ...prev, addLoading: true }));
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("status", form.status);
    images.forEach((img) => {
      formData.append("images", img);
    });



    console.log("Submitting form data:", formData);
try {
  setLoader((prev) => ({ ...prev, addLoading: true }));
  
  const response = await fetch('/api/data', {
    method: 'POST',
    body: formData,
  });
  
  if (!response.ok) {
    throw new Error('Failed to add work');
  }
  
  const data = await response.json();
  
  console.log("Work added:", data.work);
  setWorks((s) => [...s, data.work]);
  setLoader((prev) => ({ ...prev, addLoading: false }));
  setShowForm(false);
  formReset();
  
} catch(error) {
  console.error("Error adding work:", error);
  setLoader((prev) => ({ ...prev, addLoading: false }));
}




    setForm({ title: "", description : "", status: "active" });
    setShowForm(false);
  }


  function editModelShow(id) {
    setShowForm(true);
    setEditingWorkId(id);

    const workToEdit = works.find((work) => work.id === id);

    if (workToEdit) {
      setForm({
        title: workToEdit.title,
        description: workToEdit.description,
        status: workToEdit.status,
        images: workToEdit.images || [],
      });
      setImages(workToEdit.images || []);
    }

    
   
}


  async function deleteWork(id) {
    if (confirm("Are you sure you want to delete this work?")) {
         setLoader((prev) => ({ ...prev, deleteLoading: true }));

      const response =await fetch(`/api/data?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        
      });

   
      if (!response.ok) {
        console.error("Failed to delete work");
        setLoader((prev) => ({ ...prev, deleteLoading: false }));
        return;
      }

      const data = await response.json();
      console.log("Work deleted:", data);
      setWorks((s) => s.filter((work) => work.id !== id));
      setLoader((prev) => ({ ...prev, deleteLoading: false }));   
      
      
    }



  }


 const updateWork = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    
    setLoader((prev) => ({ ...prev, editLoading: true }));
    const formData = new FormData();
    formData.append("id", editingWorkId);
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("status", form.status);
    images.forEach((img) => {
      formData.append("images", img);
    });
    deleteImages.forEach((img) => {
      formData.append("deleteImages", img);
    });
    console.log("Submitting update form data:", formData);

    try{
      const  response = await fetch('/api/data', {
        method: 'PUT',
        body: formData,
      });
      const res = await response.json();
      if (!response.ok) {
        throw new Error('Failed to update work');
      }
      const data = await res;
      console.log("Work updated:", data.work);
      setWorks((s) => s.map((work) => work.id === data.work.id ? data.work : work));
      setLoader((prev) => ({ ...prev, editLoading: false }));
      setShowForm(false);
      formReset();
    }
    catch(error){
      console.error("Error updating work:", error);
      setLoader((prev) => ({ ...prev, editLoading: false }));
    }
  }


  function formReset() {
    setForm({ title: "", description: "", status: "active", images: [] });
    setImages([]);
    setEditingWorkId(null);
    setDeleteImages([]);
  }
  return (
    <section className="flex justify-center p-6  min-h-[320px]">
      <div className="w-full max-w-4xl ">
        <header className="flex flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">Dashboard</h1>
          </div>
    
          <div className="flex items-center">
        
         
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
            >
              <span className="sr-only">Add</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Add New Work</span>
            </button>
          </div>
        </header>


        <div className="mb-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            {
              works.length === 0 ? (
                <p className="text-center text-gray-500 py-10">No works found.</p>
              ) : (
            works.map((work) => (
  <div 
    key={work.id} 
    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
  >

    <div className="relative w-full h-56 overflow-hidden">
      <img
        src={work.images[0]}
        alt={work.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
      />
      <span 
        className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold capitalize ${
          work.status === 'active' 
            ? 'bg-green-500 text-white' 
            : 'bg-gray-500 text-white'
        }`}
      >
        {work.status}
      </span>
    </div>

    <div className="p-5">
      <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
        {work.title}
      </h2>
      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
        {work.description}
      </p>

        <h5 className="text-gray-400 text-sm font-semibold mb-4 " >{work.images.length} Photos</h5>
      <div className="flex gap-3">
        <button 
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm"
          onClick={() => editModelShow(work.id)}
        >
          Edit
        </button>
        <button 
          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm"
          onClick={() => deleteWork(work.id)}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
))
              )
            }
          </div>
          </div>


    
        {showForm && (
          <div className="fixed inset-0 z-40  flex items-end md:items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/30" onClick={() => { setShowForm(false); formReset(); }} />

            <div className="relative w-full max-w-lg bg-white h-max-[80dvh] border-2 border-red rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{editingWorkId ? 'Edit Work' : 'Add New Work'}</h3>
                <button onClick={() => { setShowForm(false); formReset(); }} className="text-gray-500 hover:text-gray-700">
                  <XIcon size={24} />
                </button>
              </div>

              <form onSubmit={editingWorkId ? updateWork : addWork} className="flex flex-col gap-3">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Title</span>
                  <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="mt-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="e.g. Marriage " />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Description</span>
                  <input value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className="mt-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="e.g. Wedding at the beach" />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700">Images</span>
                  <div className="w-full h-44 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg relative">
<input
  type="file"
  accept="image/*"
  multiple
  onChange={(e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages((prev) => [...prev, ...selectedFiles]);
  }
  }
  className="w-full h-full opacity-0 absolute cursor-pointer"
/>

                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <Image src="/icons/picture.png" alt="Upload Icon" width={48} height={48} />
                      <p className="text-gray-500 mt-2">Click to upload images</p>
                    </div>
                  </div>
                 <div>
                  <InfoIcon size={16} className="inline-block mr-1 text-gray-400" />
                   <span className="text-xs text-gray-500">You can upload multiple images</span>
                 </div>
                </label>

               {
                  images.length > 0 && (
                    <div className="flex  gap-2 mt-2 overflow-x-auto">
                      {images.map((img, idx) => (
                        <div key={idx} className="w-20 h-20 relative border rounded-lg overflow-hidden">
                          <img
                            src={typeof img === 'string' ? img : URL.createObjectURL(img)}
                            alt={`Preview ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() =>{ setImages((imgs) => imgs.filter((_, i) => i !== idx)),
                            setDeleteImages((dels) => [...dels, img])
                            }}
                            className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 hover:bg-black"
                          >
                            <XIcon size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) 
               }

               <select className="mt-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" label="Status" value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}>
                  <option value="inactive"> InActive</option>
                  <option value="active">Active</option>
                </select>

                {loader.addLoading || loader.editLoading ? ( 
               <div className="flex items-center justify-center mt-4">
                    <div className="flex items-center gap-2">
                        <Loader />
                      <span className="text-gray-500">{loader.addLoading ? 'Uploading...' : 'Updating...'}</span>
                    </div>
               </div>):(
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button type="button" onClick={() => { setShowForm(false); formReset(); }} className="px-4 py-2 rounded-md">Cancel</button>
                  <button type="submit" className="px-4 py-2 rounded-md bg-blue-500 text-white">{editingWorkId ? 'Update Work' : 'Upload Work'}</button>
                </div>
               )}
              </form>
            </div>
          </div>
        )}

             {
            loader.deleteLoading && (
             <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000050] h-[100%] flex justify-center " >
               <div className="flex flex-col justify-center items-center gap-4">
                <div  className="p-4 bg-white rounded-2xl ">
                    <Loader  />
                    </div>
                <span className="text-white text-xl  text-center">Deleting</span>
              </div>
             </div>
            )
         }
      </div>
    </section>
  );
}
