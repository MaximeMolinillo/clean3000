import React from 'react'

// const Client = ({name, date, observations, technicien}) => {
//     return (
//   <div className='App-client'>
//         <span>{name}</span>
//         <span>{date}</span>
//         <span>{observations}</span>
//         <span>{technicien}</span>
//   </div>

//     )
// }

const nvclient = ({ items }) => {
    const clientItems = items.map(item => {
        return (

            <div>
                <div>{item.attributes.name}</div>
                <div>{item.attributes.date}</div>
                <div>{item.attributes.observations}</div>
                <div>{item.attributes.technicien}</div>
            </div>
        )
    });
    return (
        <div>
            {clientItems}
        </div>
    )


}




export default nvclient
