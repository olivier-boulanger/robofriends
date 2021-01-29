import React from 'react'

const Card = ({name, email, id }) => {
    // const {name, email, id } = props
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200*200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

// class Card extends Component() {
//     render() {
//         return (
//             <div>
//                 <img alt="photo" src="" />
//                 <h2>Jane Doe</h2>
//                 <p>janedoe@gmail.com</p>
//             </div>
//         )
//     }
// }

export default Card
