
export default function ImageCard({item, onClick}) {

    return (
        <>
        <div>
            <img
                onClick={() => onClick(item.urls.regular)}
                src={item.urls.small} alt={item.alt_description}
            />
		</div>
        </>
    )
}