import axios from "axios";

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=IbBtEtxyl3RW-u1NoP76NAmZJpIleTjL1bFuS_WKeuA';
    const response = await axios.get(url,{
        params:{
            query: term
        }
    })
    console.log(response)
    return response.data.results
}

export default searchImages