import Parte from "./Parte"

export default function Content(props){
    return (
        <div>
            <Parte partX={props.part1} exerciseX={props.exercises1}/>
            <Parte partX={props.part2} exerciseX={props.exercises2}/>
            <Parte partX={props.part3} exerciseX={props.exercises3}/>

        </div>
        )
}