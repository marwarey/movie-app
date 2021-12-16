import Cardd from "./Cardd"


function List(props){
    return (

<div className='list_movies'>

{props.moviedata.map((el) =>  <Cardd el={el}   ></Cardd>)}



</div>



    )
}
export default List