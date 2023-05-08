export default function Total (props){
    return (
        <div>
            <h3>
                Total : {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
            </h3>
        </div>
    )
}