import {usePresentationActions} from "../../../state/hooks/UsePresentationActions";
import {useTypedSelector} from "../../../state/hooks/UseTypedSelector";

function InsertContextMenu() {
    const {addSlide} = usePresentationActions();

    const presentation = useTypedSelector(state => state)

    return (
        <div>
            <button onClick={() => {
                addSlide(presentation?.selectedSlideId);
            }}>Слайд
            </button>
            <button>Изображение</button>
            <button>Текстовое поле</button>
            <button>Фигура</button>
        </div>
    )
}

export {
    InsertContextMenu
}