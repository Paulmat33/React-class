import React, {useEffect, useState, useRef} from 'react'
import './Wale.css'
import Card from '../../components/Card/Card'

const Wale = () => {
    const [data, setData] = useState([])
    const url ='https://pixabay.com/api/videos/?key=44013539-b83118e9bfda0ac4f6e855e9d&q=yellow+flowers&pretty=true'
    useEffect(() => {
        const getData = async () => {
            const fetchData = await fetch(url)
            const response = await fetchData.json()
            setData(response.hits)
            console.log(response.hits);
        }
        getData()
    }, [])

    console.log(data);
  return (
    <div>
        {
            data.map((element, i) =>{
                return <Card key={i} element={element}/>
            })
        }
    </div>
  )
}

export default Wale