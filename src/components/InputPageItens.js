import React from 'react'

const InputPageItens = ({ itensPerPage, setItensPerPage }) => {
    return (
        <>
            {/* <input type="number" value={itensPerPage} onChange={(e) => setItensPerPage(e.target.value)} /> */}
            <div className="input-group mt-3 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Itens Per Page: </span>
                </div>

                <input
                    type="number"
                    className="form-control"
                    value={itensPerPage} 
                    min="5"
                    onChange={(e) => setItensPerPage(e.target.value)}
                />
            </div>
        </>
    )
}

export default InputPageItens