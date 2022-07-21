
function List(props) {
    return(
        <ol>
            { props.daftarCatatan.map( (item, index) => <li key={index}> {item} </li> ) }
        </ol>
    );
}

export default List;