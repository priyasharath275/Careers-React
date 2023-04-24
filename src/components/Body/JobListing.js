import { useForm } from "react-hook-form";
const JobListing = () => {
    const {register, formState:{errors} ,handleSubmit} = useForm();

    const onSubmit =(data) =>{
         console.log(data)
    }
    return (
       <>
    
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h2 className='text-center' >Job Listing</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" placeholder="Job title" {...register("jobTitle",{required:true})} name="jobTitle" className="form-control"/>
                                <span className="text-danger">
                                    {errors.jobTitle?.type==="required" && "Job Title is required"}
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" name="jobFunction"  placeholder="Job Function" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" name="jobType" placeholder="Job type" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="number" name="experience" placeholder="Experience" {...register("jobTitle",{required:true,pattern:/[^0-9]*/g, '',})} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="number" name="salary"  placeholder="Salary" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="date" name="jobExpiry" placeholder="Job Expiry By" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" name="skills" placeholder="Skills" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                              <select name="locationId" required className="form-control">
                                <option value="" disabled selected hidden>Choose Location</option>
                                <option value="1">Bangalore</option>
                                <option value="2">Chennai</option>
                                <option value="3">Noida</option>
                                <option value="4">Hyderabad</option>
                              </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label"></label>
                               <button type="submit" className="btn btn-success btn-lg">Submit</button>
                            </div>
                        </div>
                        </div>
                    </form>

               
                </div>
            </div>
        </div>
       </> 
    )
}

export  default JobListing;