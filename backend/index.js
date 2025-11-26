import api from "../lib/mockApi";

useEffect(() => {
    api.get('/')  // sax
        .then(res => setItems(res.data))
        .catch(err => console.error('Failed to fetch items:', err))
}, [])
