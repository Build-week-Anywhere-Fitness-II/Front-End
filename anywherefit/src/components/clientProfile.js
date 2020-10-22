import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardTitle } from 'reactstrap';
import { Auth } from '../utils/axiosAuth';

const ClientProfile = () => {
    const {id} = useParams();
    const [data, setData] = React.useState([])
    React.useEffect(() => {
Auth()
.get(`api/classes/client/${id}`)
.then((res) => {
console.log(res.data);
setData(res.data);
})
    },[])
return (
<div>
    <h1>Your Classes</h1>
    <div>
        {data.map((e)=> (
    <Card key={e.id}>
        <CardTitle>{e.class_name}</CardTitle>
    </Card>
        ))}
    </div>
</div>
)
}

export default ClientProfile;