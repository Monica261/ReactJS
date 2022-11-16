import './footer.css'

export function Footer(){
    return(
        <div className='footer'>
            <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Desenvolvido por Mônica Torres</p>
        </div>       
    )
}