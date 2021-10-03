
import ListDetails from './List-Details'

function List(props){
    const empData=[
        {"eid":101,"ename":"A","salary":45678,"city":"noida"},
        {"eid":102,"ename":"B","salary":55678,"city":"mumbai"},
        {"eid":103,"ename":"C","salary":65678,"city":"pune"},
        {"eid":104,"ename":"D","salary":75678,"city":"delhi"},
        {"eid":105,"ename":"E","salary":85678,"city":"gurugram"},
        {"eid":106,"ename":"F","salary":95678,"city":"gurugram"},
        {"eid":107,"ename":"G","salary":45678,"city":"noida"},
        {"eid":108,"ename":"H","salary":55678,"city":"mumbai"},
        {"eid":109,"ename":"I","salary":65678,"city":"pune"},
        {"eid":110,"ename":"J","salary":75678,"city":"delhi"},
        {"eid":111,"ename":"K","salary":85678,"city":"gurugram"},
        {"eid":112,"ename":"L","salary":95678,"city":"gurugram"},
        {"eid":113,"ename":"M","salary":45678,"city":"noida"},
        {"eid":114,"ename":"N","salary":55678,"city":"mumbai"},
        {"eid":115,"ename":"O","salary":65678,"city":"pune"},
        {"eid":116,"ename":"P","salary":75678,"city":"delhi"},
        {"eid":117,"ename":"Q","salary":85678,"city":"gurugram"},
        {"eid":118,"ename":"R","salary":95678,"city":"gurugram"},
        {"eid":119,"ename":"S","salary":45678,"city":"noida"},
        {"eid":120,"ename":"T","salary":55678,"city":"mumbai"}

    ];
    return(
        <div>
            <ListDetails empdata={empData}/>
        </div>
    )
}


export default List
