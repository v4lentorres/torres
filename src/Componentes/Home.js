import GridLayout from "./GridLayout";
import { useAuth } from "../context/authContext";

export function Home() {

    const { user } = useAuth()
    console.log(user);

    return <div>  
        <GridLayout>
        </GridLayout>
    </div>
}