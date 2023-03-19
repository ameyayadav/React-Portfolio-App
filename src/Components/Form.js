import React from "react";

function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    return(
        <div className="mt-5 text-white-col">
        <h1 className="text-center-area">Contact Me</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Enter Your Name" />
            <input type='text' placeholder="Enter Your Email Address" />
            <textarea type='text' placeholder="Enter Your Message..." col='25' rows='15'></textarea> 
            <button>Submit</button>
        </form>
        </div>
    )
}

export default Form;