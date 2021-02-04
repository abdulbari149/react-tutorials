import React from 'react'
import TextChildren from './TextChildren'

function Text() {
    const paragraph = "lorem ipsum abcneoia eiO acneuiabcuneal"
    const para2 = "lrreiacnua cacenaucab"
    return (
        <div>
            <TextChildren para={paragraph} para2={para2} />
        </div>
    )
}

export default Text
