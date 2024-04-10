import { useParams } from 'react-router-dom'

export default function ParamUrl(){
    const { message } = useParams()



    return <div class="container">
    <h1>Url recuperation</h1>
    <span>Message : {message}</span>
</div>
}
