import '../Styles/OverlayBlock.css';

function OverlayBlock(props) {
  return (
    <section id='block-container'>
        <div id='block-image-container'>
            <img src={props.picture} alt={props.alt} />
        </div>
        <div id='block-content'>
            {props.content}
        </div>
    </section>
  )
}

export default OverlayBlock