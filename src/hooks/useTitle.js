import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -E-learning-centre`;
    }, [title])
};

export default useTitle;