import './ConfirmPopUp.css'

function ConfirmPopUp({children,actionBtn, box}) {
    
    return (
            <div className={`ConfirmPopUp ${box.removeBox ? 'show':'noShow'}`} onClick={()=> box.setRemoveBox(false)}>
                <div className='confirmMsg' onClick={(e)=>e.stopPropagation()}>
                    {children}
                    <button className='deleteBtn' onClick={actionBtn}>Continuar</button>
                    <button className='returnBtn'onClick={()=> box.setRemoveBox(false)}>Regresar</button>
                </div>
            </div>
    );
}

export default ConfirmPopUp