import { useEffect } from "react"

const useTitle = (title) => {

    useEffect(() => {

        document.title = `${title} - Law Firm In Bangladesh || Mahin Khan`

    }, [title])
}

export default useTitle;
