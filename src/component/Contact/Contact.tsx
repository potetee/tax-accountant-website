import React,{useState} from "react";

interface FormData {
    name:string;
    email:string;
    message:string;
}

const Contact:React.FC =()=>{
    const [formData,setFormData] = useState<FormData>({name:'',email:'',message:''});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formData);
    }

    return(
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;