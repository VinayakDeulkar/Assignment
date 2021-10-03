const ListDetails=(props)=>{
    return(
        <div >
            <div className="row mr-3 ml-3">
                <div className="col-lg-12 text-center h2">Employee List</div>
                <div className="col-lg-3"></div>
                
            <table className="col-lg-6 border text-center">
                <thead className="border">
                    <tr>
                        <td className="border">Employee ID</td>
                        <td className="border">Employee Name</td>
                        <td className="border">Employee Salary</td>
                        <td className="border"> City</td>
                    </tr>
                </thead>
                <tbody>
                    {props.empdata.map((emp)=>
                        <tr key={emp.eid}>
                            <td className="border">{emp.eid}</td>
                            <td className="border">{emp.ename}</td>
                            <td className="border">{emp.salary}</td>
                            <td className="border">{emp.city}</td>
                        </tr>)}
                </tbody>
            </table>
            
        </div>
        </div>
    )
}
export default ListDetails
