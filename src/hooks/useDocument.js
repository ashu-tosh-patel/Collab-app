import { useState } from "react";
import { useEffect } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {

    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    //realtime data for document
    useEffect(() => {

        const ref = projectFirestore.collection(collection).doc(id)

        const unsubscribe = ref.onSnapshot((snapshot) => {
            setDocument({ ...snapshot.data(), id: snapshot.id })
            setError(null)
        }, (err) => {
            console.log(err.message)
            setError('failed to get document')
        })

        return () => unsubscribe()

    }, [collection, id])

    return { document, error }
}
