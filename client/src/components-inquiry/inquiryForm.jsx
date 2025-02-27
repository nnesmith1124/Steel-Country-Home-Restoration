import "./inquiryForm.css";

function form(){

    const[value , setValue] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    description:'',
    status: ''
    });

    const handleChange = (e) => {

    }
    
    return(
        <div clasname = "form">
            <h1>Inquiry Form</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your full name."name = "name" 
                onChange={(e) => handleChange(e)}/>

                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter email address."name = "email"
                onChange={(e) => handleChange(e)}/>

                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder="Enter phone number." name = "phone"
                onChange={(e) => handleChange(e)}/>

                <label htmlFor="address">Address</label>
                <input type="text" placeholder="Enter address to be serviced." name = "address"
                onChange={(e) => handleChange(e)}/>

                <label htmlFor="service">Service</label>
                <select name ="service" id = "services" onChange={(e) => handleChange(e)}> 
                    <option value="gutters">Gutters</option>
                    <option value="painting">Painting</option>
                    <option value="roofing">Roofing</option>
                    <option value="siding">Siding</option>

                </select>

                <label htmlFor="description ">Description </label>
                <textarea name = "description" id="description" cols="30" rows="10" 
                onChange={(e) => handleChange(e)}placeholder="any detiails you want to add"></textarea>
 
             <button type = "submit">Submit Request</button> 
            </form>
        </div>
    );

}