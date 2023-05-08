import Parte from "./Parte"

export default function Content(props){
    return (
        <div>
            <Parte partsName={props.course.parts[0].name} partsExercises={props.course.parts[0].exercises}/>
            <Parte partsName={props.course.parts[1].name} partsExercises={props.course.parts[1].exercises}/>
            <Parte partsName={props.course.parts[2].name} partsExercises={props.course.parts[2].exercises}/>

        </div>
        )
}