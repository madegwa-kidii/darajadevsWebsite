
import { Menu, } from 'lucide-react';
import {useAuth} from "../../hooks/authContext.tsx";

export default function Header() {
    const { user } = useAuth();
    return (
        <div>
            <div>
                <Menu mode="inline"></Menu>

            </div>
            <div>

            </div>
            <div>
                <p>{user?.name}</p>

            </div>

        </div>
    )
}