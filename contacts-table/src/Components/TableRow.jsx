import { useContext} from "react"
import ContactContext from "./Context"
export default function TableRow(props)
{  let contextData = useContext(ContactContext)


    return (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td class="del-td">
            <button className="del-btn" 
            onClick={()=>  contextData.dispatch(["DEL",{id:props.id}])}>🗑  Remove User</button>
        </td>
    </tr>
    )
}