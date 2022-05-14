import './RenderData.css'

function RenderData(props) {
    const date = new Date();

    function itemDeleteHandler() {}

    return <div className="data">
        <div className="currentDate">
            {date.getDate()}/
            {date.getMonth()+1}/
            {date.getFullYear()}
        </div>
        <p className="item">{props.items}</p>
        <p onDeleteItem={itemDeleteHandler} className="deleteButton">❌</p>
    </div>
}

export default RenderData