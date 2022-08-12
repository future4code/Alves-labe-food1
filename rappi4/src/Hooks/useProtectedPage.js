import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {goToDefault} from '../Routes/Coordinator'

export function useProtectedPage() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === null) {
          goToDefault(navigate)

        }
    }, [navigate])
} 