import ImageCard from "../ImageCard/ImageCard"
import style from "../ImageGallery/ImageGallery.module.css"

export default function ImageGallery({items, openModal}) {

    return (
		<ul className={style.listBlock}>
			{items.map((item) => (
				<li key={item.id}>
				<ImageCard item={item} onClick={openModal} /> 
			</li>
			))}
			
		</ul>
    )
}

