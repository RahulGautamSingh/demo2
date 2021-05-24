import InputArea from "./InputArea";
import DisplayArea from "./DisplayArea";
import { ContactContextProvider } from "./Context";

export default function App(props)
{
    return (
        <ContactContextProvider>
      <div className="container">
          <h1>React Hooks Context Demo</h1>
        <h3>Contacts</h3>
        <InputArea/>
        <DisplayArea />

      </div>
      </ContactContextProvider>
    )
}