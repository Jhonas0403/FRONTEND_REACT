import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'
import Modal from './Modal';
import './styles/Characters.css'



const Characters = ({ characters = [] }) => {

    return (
        <div className='color-container'>
            {
                characters.map((item, index) => (
                    <CopyToClipboard text={[item.name, item.color, item.pantone_value, item.year]}>
                        <div className='color-character' key={index} style={{
                            background: item.color
                        }} onClick={() => [toast('Elementos Copiados', { position: "bottom-left" })]} data-bs-toggle="modal" data-bs-target={`#id${item.id}`}>
                            <p className='color-name'>{item.name}</p>
                            <p className='color-code'>{item.color}</p>
                            <p className='color-pantone'>{item.pantone_value}</p>
                            <p className='color-year'>{item.year}</p>
                            <Modal id={`id${item.id}`} titulo={item.name} year={item.year} pantone={item.pantone_value} bgC={item.color} />
                        </div>
                    </CopyToClipboard>

                ))
            }
            <Toaster />
        </div>

    )
}

export default Characters