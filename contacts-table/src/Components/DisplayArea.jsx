import TableRow from "./TableRow";
import { useContext} from "react"
import ContactContext from "./Context"

export default function DisplayArea(props)
{let contextData = useContext(ContactContext)

    return (
        <div className="display-container">
            {contextData.contactState.arr.length===0 && <p>No Contacts to show</p>}
            {contextData.contactState.arr.length!==0 &&
        <table className="roundedTable">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th className="delete-btn">Delete?</th>
            </tr>
            
            {
               contextData.contactState.arr.map(elem=><TableRow id={elem.id} name={elem.name} email={elem.email}/>)
            }
        </table>
}
        </div>
    )
}